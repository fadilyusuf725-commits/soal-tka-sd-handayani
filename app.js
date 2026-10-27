(() => {
  const root = document.getElementById('app');
  const labels = {
    all: 'Semua soal',
    bahasa: 'Bahasa Indonesia',
    matematika: 'Matematika'
  };

  let mode = 'all';
  let session = null;

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  function availableQuestions() {
    return window.TKA_QUESTIONS.filter((question) => mode === 'all' || question.subject === mode);
  }

  function renderWelcome() {
    session = null;
    root.innerHTML = `
      <section class="panel welcome" aria-labelledby="welcome-title">
        <div class="welcome-top">
          <div>
            <p class="eyebrow">RUANG LATIHAN</p>
            <h2 id="welcome-title">Latihan yang membangun pemahaman.</h2>
            <p class="welcome-copy">Kerjakan soal satu per satu. Setiap jawaban akan langsung disertai pembahasan agar kamu tahu alasan di balik pilihan yang tepat.</p>
          </div>
          <aside class="welcome-seal">
            <strong>60 soal dari dua mata pelajaran</strong>
            <p>Bahasa Indonesia dan Matematika. Beberapa soal yang perlu konfirmasi tutor tidak dimasukkan ke nilai.</p>
          </aside>
        </div>
        <div class="welcome-divider"></div>
        <p class="mode-title">Pilih sesi latihan</p>
        <div class="mode-grid" role="group" aria-label="Pilih mata pelajaran">
          <button class="mode-card ${mode === 'all' ? 'selected' : ''}" type="button" data-mode="all" aria-pressed="${mode === 'all'}">
            <strong>Semua soal</strong><span>Bahasa Indonesia + Matematika · 60 soal</span>
          </button>
          <button class="mode-card ${mode === 'bahasa' ? 'selected' : ''}" type="button" data-mode="bahasa" aria-pressed="${mode === 'bahasa'}">
            <strong>Bahasa Indonesia</strong><span>30 soal latihan</span>
          </button>
          <button class="mode-card ${mode === 'matematika' ? 'selected' : ''}" type="button" data-mode="matematika" aria-pressed="${mode === 'matematika'}">
            <strong>Matematika</strong><span>30 soal latihan</span>
          </button>
        </div>
        <div class="welcome-actions">
          <p class="quiet-note">Nilai memakai jawaban pertama. Jawaban yang sudah dikirim tidak dapat diubah.</p>
          <button class="primary-button" type="button" data-action="start">Mulai latihan <span aria-hidden="true">→</span></button>
        </div>
      </section>`;
  }

  function startSession() {
    const questions = availableQuestions();
    session = { questions, index: 0, responses: Array(questions.length).fill(null) };
    renderQuestion();
  }

  function subjectTitle(subject) {
    return subject === 'bahasa' ? 'Bahasa Indonesia' : 'Matematika';
  }

  function renderChoiceControls(question) {
    const optionLabels = question.labels || Object.keys(question.why || {});
    const multiple = question.kind === 'multi';
    const instruction = multiple
      ? 'Pilih semua huruf jawaban yang benar pada pilihan di atas.'
      : 'Pilih satu huruf jawaban pada pilihan di atas.';
    return `
      <div class="answer-area">
        <p class="answer-instruction">${instruction}</p>
        <div class="letter-options" role="group" aria-label="Pilihan jawaban">
          ${optionLabels.map((label) => {
            const id = `choice-${label}`;
            return `<span class="letter-option"><input id="${id}" type="${multiple ? 'checkbox' : 'radio'}" name="answer-choice" value="${escapeHtml(label)}"><label for="${id}">${escapeHtml(label)}</label></span>`;
          }).join('')}
        </div>
      </div>`;
  }

  function renderTrueFalseControls(question) {
    return `
      <div class="answer-area">
        <p class="answer-instruction">Tentukan jawaban untuk setiap pernyataan.</p>
        <div class="statement-list">
          ${question.statements.map((statement) => {
            const statementName = `statement-${statement.label}`;
            return `
              <div class="statement-item">
                <div class="statement-copy"><span class="statement-letter">${escapeHtml(statement.label)}</span><span>${escapeHtml(statement.text)}</span></div>
                <div class="binary-options" role="group" aria-label="Pernyataan ${escapeHtml(statement.label)}">
                  ${question.labels.map((value, index) => {
                    const id = `${statementName}-${index}`;
                    return `<span class="binary-option"><input id="${id}" type="radio" name="${statementName}" value="${escapeHtml(value)}"><label for="${id}">${escapeHtml(value)}</label></span>`;
                  }).join('')}
                </div>
              </div>`;
          }).join('')}
        </div>
      </div>`;
  }

  function readResponse(question) {
    if (question.kind === 'tf') {
      const response = {};
      for (const statement of question.statements) {
        const selected = root.querySelector(`input[name="statement-${statement.label}"]:checked`);
        if (!selected) return null;
        response[statement.label] = selected.value;
      }
      return response;
    }
    const selected = [...root.querySelectorAll('input[name="answer-choice"]:checked')].map((input) => input.value);
    if (!selected.length) return null;
    return question.kind === 'multi' ? selected : selected[0];
  }

  function isResponseCorrect(question, response) {
    if (question.kind === 'tf') {
      return question.statements.every((statement) => response[statement.label] === statement.answer);
    }
    if (question.kind === 'multi') {
      const actual = [...response].sort();
      const expected = [...question.answer].sort();
      return actual.length === expected.length && actual.every((value, index) => value === expected[index]);
    }
    return response === question.answer;
  }

  function renderChoiceFeedback(question, response) {
    const selected = new Set(question.kind === 'multi' ? response : [response]);
    const correct = new Set(question.kind === 'multi' ? question.answer : [question.answer]);
    const labelsToShow = question.labels || Object.keys(question.why || {});
    return `<div class="explanation-list">${labelsToShow.map((label) => {
      const shouldSelect = correct.has(label);
      const didSelect = selected.has(label);
      let status = shouldSelect ? 'Tepat, pilihan ini termasuk kunci.' : 'Pilihan ini tidak tepat.';
      let style = shouldSelect ? 'is-key' : '';
      if (shouldSelect && !didSelect) { status = 'Belum dipilih; pilihan ini termasuk kunci.'; style = 'is-missed'; }
      if (!shouldSelect && didSelect) style = 'is-missed';
      return `<div class="explanation-item ${style}"><strong>${escapeHtml(label)} · ${status}</strong><p>${escapeHtml(question.why[label] || 'Tidak ada pembahasan untuk pilihan ini.')}</p></div>`;
    }).join('')}</div>`;
  }

  function renderTrueFalseFeedback(question, response) {
    return `<div class="statement-feedback">${question.statements.map((statement) => {
      const expected = statement.answer;
      const actual = response[statement.label];
      const known = expected !== null && expected !== undefined;
      const matched = known && actual === expected;
      const resultLabel = known ? `Kunci: ${expected}` : 'Kunci: perlu ditinjau tutor';
      const style = !known ? '' : matched ? 'is-key' : 'is-missed';
      return `<div class="explanation-item ${style}"><div><strong>${escapeHtml(statement.label)} · ${known ? (matched ? 'Jawaban tepat.' : 'Jawaban belum tepat.') : 'Belum dapat dipastikan.'}</strong><p>${escapeHtml(statement.text)} ${escapeHtml(statement.why)}</p></div><span class="answer-label">Jawabanmu: ${escapeHtml(actual)} · ${escapeHtml(resultLabel)}</span></div>`;
    }).join('')}</div>`;
  }

  function renderFeedback(question, response, correct) {
    const review = Boolean(question.review);
    const tone = review ? 'review' : correct ? 'correct' : 'incorrect';
    const symbol = review ? '!' : correct ? '✓' : '×';
    const title = review ? 'Soal perlu ditinjau tutor' : correct ? 'Jawaban tepat' : 'Jawaban belum tepat';
    const description = review
      ? `${question.review} Jawaban ini dikeluarkan dari perhitungan nilai.`
      : question.kind === 'tf'
        ? 'Periksa pembahasan setiap pernyataan untuk melihat mana yang sesuai dengan informasi soal.'
        : question.kind === 'multi'
          ? 'Pilihan jamak dinilai tepat jika semua jawaban benar dipilih dan tidak ada pilihan keliru yang dipilih.'
          : 'Bandingkan jawabanmu dengan kunci dan baca alasan untuk setiap pilihan.';
    let details = question.kind === 'tf'
      ? renderTrueFalseFeedback(question, response)
      : review
        ? ''
        : renderChoiceFeedback(question, response);
    if (question.insight) {
      details += `<div class="explanation-item"><strong>Pembahasan</strong><p>${escapeHtml(question.insight)}</p></div>`;
    }
    return `
      <section class="feedback" aria-label="Umpan balik jawaban">
        <div class="feedback-summary ${tone}" role="status">
          <span class="feedback-icon" aria-hidden="true">${symbol}</span>
          <div><strong>${title}</strong><p>${escapeHtml(description)}</p></div>
        </div>
        ${details ? `<div class="explanation-list">${details}</div>` : ''}
      </section>`;
  }

  function renderQuestion() {
    const question = session.questions[session.index];
    const source = window.TKA_SOURCE?.[question.subject]?.[String(question.number)] || '<p>Konten soal tidak ditemukan.</p>';
    const done = session.responses[session.index];
    const progress = Math.round((session.index / session.questions.length) * 100);
    root.innerHTML = `
      <section class="panel quiz-panel" aria-labelledby="question-heading">
        <div class="quiz-meta">
          <span class="subject-tag">${subjectTitle(question.subject)}</span>
          <span class="question-count">Soal ${question.number} · ${session.index + 1} dari ${session.questions.length}</span>
        </div>
        <div class="progress-track" role="progressbar" aria-label="Progres latihan" aria-valuemin="0" aria-valuemax="${session.questions.length}" aria-valuenow="${session.index}">
          <div class="progress-value" style="width:${progress}%"></div>
        </div>
        <div class="quiz-body">
          <p class="question-kicker" id="question-heading">Latihan ${subjectTitle(question.subject)}</p>
          <div class="question-source">${source}</div>
          <form id="answer-form" novalidate>
            ${question.kind === 'tf' ? renderTrueFalseControls(question) : renderChoiceControls(question)}
            <div class="submit-row" id="submit-row">
              <p class="submit-help" id="answer-help">Jawaban dikunci setelah diperiksa.</p>
              <button class="primary-button" type="submit">Periksa jawaban <span aria-hidden="true">→</span></button>
            </div>
          </form>
          <div id="feedback-slot"></div>
        </div>
        <div class="quiz-footer" id="quiz-footer" hidden>
          <button class="next-button" type="button" data-action="next">${session.index === session.questions.length - 1 ? 'Lihat hasil' : 'Soal berikutnya'} <span aria-hidden="true">→</span></button>
        </div>
      </section>`;
    if (done) showSubmittedQuestion(question, done);
  }

  function showSubmittedQuestion(question, result) {
    const form = root.querySelector('#answer-form');
    if (question.kind === 'tf') {
      for (const statement of question.statements) {
        const input = [...form.querySelectorAll(`input[name="statement-${statement.label}"]`)].find((item) => item.value === result.response[statement.label]);
        if (input) input.checked = true;
      }
    } else {
      const selected = new Set(question.kind === 'multi' ? result.response : [result.response]);
      for (const input of form.querySelectorAll('input[name="answer-choice"]')) input.checked = selected.has(input.value);
    }
    form.querySelectorAll('input').forEach((input) => { input.disabled = true; });
    form.querySelector('#submit-row').hidden = true;
    root.querySelector('#feedback-slot').innerHTML = renderFeedback(question, result.response, result.correct);
    root.querySelector('#quiz-footer').hidden = false;
  }

  function submitAnswer(event) {
    event.preventDefault();
    const question = session.questions[session.index];
    const response = readResponse(question);
    const help = root.querySelector('#answer-help');
    if (response === null) {
      help.textContent = question.kind === 'tf'
        ? 'Pilih Benar atau Salah pada semua pernyataan terlebih dahulu.'
        : 'Pilih jawaban terlebih dahulu.';
      help.classList.add('validation-message');
      return;
    }
    const result = {
      response,
      correct: question.review ? null : isResponseCorrect(question, response)
    };
    session.responses[session.index] = result;
    showSubmittedQuestion(question, result);
    const progress = Math.round(((session.index + 1) / session.questions.length) * 100);
    root.querySelector('.progress-value').style.width = `${progress}%`;
    root.querySelector('.progress-track').setAttribute('aria-valuenow', String(session.index + 1));
  }

  function scoreFor(subject) {
    const rows = session.questions.map((question, index) => ({ question, response: session.responses[index] }))
      .filter((row) => !subject || row.question.subject === subject);
    const valid = rows.filter((row) => !row.question.review);
    const correct = valid.filter((row) => row.response?.correct === true).length;
    const excluded = rows.filter((row) => row.question.review).length;
    return { correct, total: valid.length, excluded, percent: valid.length ? Math.round((correct / valid.length) * 100) : null };
  }

  function renderResults() {
    const overall = scoreFor(null);
    const subjects = [...new Set(session.questions.map((question) => question.subject))];
    root.innerHTML = `
      <section class="panel results" aria-labelledby="results-title">
        <div class="results-heading">
          <span class="results-mark" aria-hidden="true">✓</span>
          <div><p class="eyebrow">SESI LATIHAN SELESAI</p><h2 id="results-title">Hasil latihan</h2><p>Nilai dihitung dari jawaban pertama pada soal yang memiliki kunci terverifikasi.</p></div>
        </div>
        <div class="score-grid">
          <article class="score-card primary-score">
            <div><span class="score-label">Nilai keseluruhan</span><p class="score-detail">${overall.correct} benar dari ${overall.total} soal yang dinilai</p></div>
            <strong class="score-value">${overall.percent === null ? '—' : `${overall.percent}%`}</strong>
          </article>
          ${subjects.map((subject) => {
            const score = scoreFor(subject);
            return `<article class="score-card"><span class="score-label">${subjectTitle(subject)}</span><strong class="score-value">${score.percent === null ? '—' : `${score.percent}%`}</strong><p class="score-detail">${score.correct} benar dari ${score.total} soal yang dinilai${score.excluded ? ` · ${score.excluded} perlu ditinjau` : ''}</p></article>`;
          }).join('')}
        </div>
        ${overall.excluded ? `<p class="review-note"><strong>${overall.excluded} soal tidak masuk nilai.</strong> Kunci atau informasi sumbernya perlu ditinjau tutor. Skor menggunakan ${overall.total} soal terverifikasi.</p>` : ''}
        <div class="results-actions"><button class="secondary-button" type="button" data-action="home">Kembali ke pilihan latihan</button><button class="primary-button" type="button" data-action="restart">Ulangi sesi <span aria-hidden="true">↻</span></button></div>
      </section>`;
  }

  root.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.dataset.mode) {
      mode = button.dataset.mode;
      renderWelcome();
      return;
    }
    const action = button.dataset.action;
    if (action === 'start') startSession();
    if (action === 'next') {
      session.index += 1;
      if (session.index >= session.questions.length) renderResults();
      else renderQuestion();
    }
    if (action === 'home') renderWelcome();
    if (action === 'restart') startSession();
  });

  root.addEventListener('submit', (event) => {
    if (event.target.id === 'answer-form') submitAnswer(event);
  });

  renderWelcome();
})();
