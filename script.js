const questions = [
  {
    id: 1,
    section: 'Ciências da Natureza',
    difficulty: 'Fácil',
    title: 'Volume e porções',
    passage: 'Em um laboratório escolar, uma cozinheira prepara uma receita-base de massa que gera 50 docinhos maciços, todos com formato esférico e diâmetro de 2 cm. Para um pedido especial, ela precisa produzir 150 docinhos com diâmetro de 4 cm.',
    stem: 'Quantas porções da receita-base de massa ela deve preparar para atender esse pedido?',
    options: ['2', '3', '6', '12', '24'],
    correct: 4,
    explanation: 'O volume de uma esfera cresce com o cubo do diâmetro. Se o diâmetro dobra de 2 cm para 4 cm, o volume fica 8 vezes maior. Para fabricar 150 docinhos maiores, são necessárias 150 × 8 = 1200 unidades equivalentes de massa, o que corresponde a 24 porções, pois 50 × 24 = 1200.'
  },
  {
    id: 2,
    section: 'Matemática',
    difficulty: 'Fácil',
    title: 'Escrita numérica',
    passage: 'Ao ouvir a notícia de que um filme arrecadou R$ 1,35 bilhão em bilheteria no primeiro mês, um estudante escreveu o número correspondente com todos os algarismos.',
    stem: 'Qual é a forma correta desse número?',
    options: ['135 000,00', '1 350 000,00', '13 500 000,00', '135 000 000,00', '1 350 000 000,00'],
    correct: 4,
    explanation: 'R$ 1,35 bilhão equivale a 1.350.000.000 reais, ou seja, 1 bilhão e 350 milhões.'
  },
  {
    id: 3,
    section: 'Humanas',
    difficulty: 'Médio',
    title: 'Crisis humanitária',
    passage: 'Em Beirute, quando questionado sobre a localização dos refugiados sírios, a resposta foi: “em todos os lugares e em lugar nenhum”. O cenário mostra famílias em abrigos improvisados e tendas da ACNUR, evidenciando uma situação de grande vulnerabilidade.',
    stem: 'Esse cenário aponta para uma crise humanitária explicada principalmente pelo processo de:',
    options: [
      'migração massiva causada por catástrofe natural',
      'hibridização cultural entre grupos socialmente homogêneos',
      'desmobilização voluntária de militantes extremistas',
      'peregrinações religiosas orientadas por líderes fundamentalistas',
      'desterritorialização forçada de populações afetadas por conflitos armados'
    ],
    correct: 4,
    explanation: 'A presença de refugiados forçados a deixar seu território por conta de conflitos armados caracteriza a desterritorialização forçada.'
  },
  {
    id: 4,
    section: 'Humanas',
    difficulty: 'Médio',
    title: 'Transição demográfica',
    passage: 'Os países industrializados passaram a valorizar a transmissão das vantagens econômicas e sociais adquiridas, o que levou a uma ação voluntária de limitação do número de nascimentos.',
    stem: 'Esse fenômeno contribuiu para o processo europeu de:',
    options: [
      'estabilização da pirâmide etária',
      'conclusão da transição demográfica',
      'contenção da entrada de imigrantes',
      'elevação do crescimento vegetativo',
      'formação de espaços superpovoados'
    ],
    correct: 1,
    explanation: 'A redução da fecundidade em países industrializados marcou a conclusão da transição demográfica.'
  },
  {
    id: 5,
    section: 'Humanas',
    difficulty: 'Médio',
    title: 'Soma bem e política',
    passage: 'Aristóteles relaciona o fim último da vida humana ao bem, e afirma que a política é uma ciência que orienta a organização da cidade e a formação das demais atividades humanas.',
    stem: 'Para Aristóteles, a relação entre o sumo bem e a organização da pólis pressupõe que:',
    options: [
      'o bem dos indivíduos consiste em cada um perseguir seus interesses',
      'o sumo bem é dado pela fé de que os deuses são os portadores da verdade',
      'a política é a ciência que precede todas as demais na organização da cidade',
      'a educação visa formar a consciência de cada pessoa para agir corretamente',
      'a democracia protege as atividades políticas necessárias para o bem comum'
    ],
    correct: 2,
    explanation: 'Aristóteles entende que a política é superior às outras artes porque organiza a vida comum e orienta a busca do bem da cidade.'
  },
  {
    id: 6,
    section: 'Humanas',
    difficulty: 'Médio',
    title: 'Punição divina',
    passage: 'Agostinho de Hipona sustenta que a vontade livre foi dada ao homem para que ele pudesse agir corretamente, e que, ao usá-la para pecar, recaem sobre ele as punições divinas.',
    stem: 'Nesse texto, a punição divina tem como fundamento o(a):',
    options: [
      'desvio da postura celibatária',
      'insuficiência da autonomia moral',
      'afastamento das ações de desapego',
      'distanciamento das práticas de sacrifício',
      'violação dos preceitos do Velho Testamento'
    ],
    correct: 1,
    explanation: 'A ideia central é que a vontade livre foi concedida para o bem, e o uso incorreto dela é uma transgressão moral que merece punição.'
  },
  {
    id: 7,
    section: 'Humanas',
    difficulty: 'Médio',
    title: 'Princípio originário',
    passage: 'Anaxímenes defendia que o ar seria o elemento originário de tudo que existe, enquanto Basílio Magno destacava um princípio primeiro para a origem do mundo.',
    stem: 'As teses de Anaxímenes e de Basílio têm em comum o fato de:',
    options: [
      'serem baseadas nas ciências da natureza',
      'refutarem as teorias de filósofos da religião',
      'terem origem nos mitos das civilizações antigas',
      'postularem um princípio originário para o mundo',
      'defenderem que Deus é o princípio de todas as coisas'
    ],
    correct: 3,
    explanation: 'Ambos buscaram explicar a origem do mundo a partir de um princípio primeiro, ainda que com fundamentos diferentes.'
  },
  {
    id: 8,
    section: 'História',
    difficulty: 'Fácil',
    title: 'Revolução Industrial',
    passage: 'A Revolução Industrial alterou profundamente o modo de produzir e viver na Europa.',
    stem: 'Uma das principais mudanças provocadas por esse processo foi:',
    options: [
      'a diminuição da produção de mercadorias',
      'o fortalecimento do trabalho artesanal como principal forma de produção',
      'o crescimento das cidades e da classe operária',
      'o fim das desigualdades sociais',
      'a redução do comércio internacional'
    ],
    correct: 2,
    explanation: 'A industrialização concentrou a produção fabril e fez crescer as cidades e a classe operária.'
  },
  {
    id: 9,
    section: 'Ciências da Natureza',
    difficulty: 'Fácil',
    title: 'Fotossíntese',
    passage: 'As plantas capturam luz solar e transformam substâncias simples em compostos orgânicos.',
    stem: 'A fotossíntese é essencial para a manutenção da vida na Terra porque:',
    options: [
      'consome oxigênio da atmosfera',
      'produz gás carbônico para os animais',
      'transforma energia luminosa em energia química',
      'elimina a necessidade de alimentação dos seres vivos',
      'impede a respiração celular'
    ],
    correct: 2,
    explanation: 'A fotossíntese armazena energia da luz em moléculas orgânicas, tornando-se a base da cadeia alimentar.'
  },
  {
    id: 10,
    section: 'Matemática',
    difficulty: 'Fácil',
    title: 'Velocidade média',
    passage: 'Um carro percorre 180 km em 3 horas, mantendo velocidade constante.',
    stem: 'Qual é a sua velocidade média?',
    options: ['30 km/h', '45 km/h', '50 km/h', '60 km/h', '90 km/h'],
    correct: 3,
    explanation: 'Velocidade média = distância ÷ tempo = 180 ÷ 3 = 60 km/h.'
  },
  {
    id: 11,
    section: 'Ciências da Natureza',
    difficulty: 'Médio',
    title: 'Água como solvente',
    passage: 'A água é amplamente presente em processos biológicos e industriais por sua capacidade de interagir com várias substâncias.',
    stem: 'A água é considerada um solvente universal porque:',
    options: [
      'dissolve qualquer substância existente',
      'possui moléculas apolares',
      'apresenta elevada capacidade de dissolver substâncias polares e iônicas',
      'não participa de reações químicas',
      'tem densidade inferior à do gelo'
    ],
    correct: 2,
    explanation: 'A água dissolve bem substâncias polares e iônicas graças à sua polaridade.'
  },
  {
    id: 12,
    section: 'Geografia',
    difficulty: 'Fácil',
    title: 'Globalização',
    passage: 'A globalização intensificou a circulação de produtos, capitais, ideias e pessoas entre diferentes regiões do mundo.',
    stem: 'Esse processo caracteriza-se principalmente por:',
    options: [
      'isolamento econômico entre países',
      'redução dos fluxos de informação',
      'integração econômica, cultural e tecnológica em escala mundial',
      'fim das diferenças culturais',
      'diminuição do comércio internacional'
    ],
    correct: 2,
    explanation: 'A globalização é marcada pela maior integração econômica, cultural e tecnológica entre países.'
  },
  {
    id: 13,
    section: 'Física',
    difficulty: 'Fácil',
    title: 'Lançamento vertical',
    passage: 'Um objeto é lançado verticalmente para cima e sobe até parar momentaneamente.',
    stem: 'No ponto mais alto da trajetória, o objeto apresenta:',
    options: [
      'velocidade e aceleração nulas',
      'velocidade nula e aceleração igual à gravidade',
      'velocidade máxima',
      'aceleração nula',
      'velocidade e aceleração máximas'
    ],
    correct: 1,
    explanation: 'No ápice, a velocidade instantânea é zero, mas a aceleração gravitacional continua atuando.'
  },
  {
    id: 14,
    section: 'Direito e cidadania',
    difficulty: 'Fácil',
    title: 'Cidadania',
    passage: 'A Constituição Federal de 1988 estabelece princípios fundamentais para a vida política e social do país.',
    stem: 'Segundo a Constituição, a cidadania está relacionada à:',
    options: [
      'participação dos indivíduos na vida política e social',
      'exclusão dos direitos políticos',
      'restrição da liberdade de expressão',
      'supressão dos direitos sociais',
      'eliminação do voto'
    ],
    correct: 0,
    explanation: 'A cidadania envolve direitos e deveres, incluindo participação política e social.'
  },
  {
    id: 15,
    section: 'Matemática',
    difficulty: 'Médio',
    title: 'Juros compostos',
    passage: 'Uma aplicação de R$ 1.000 rende juros compostos de 10% ao ano.',
    stem: 'Após 2 anos, o montante será:',
    options: ['R$ 1.100', 'R$ 1.200', 'R$ 1.210', 'R$ 1.220', 'R$ 1.250'],
    correct: 2,
    explanation: 'Montante = 1000 × 1,10² = 1210 reais.'
  }
];

const state = {
  currentIndex: 0,
  answers: new Array(questions.length).fill(null),
  reviewMarked: new Set(),
  startTime: null,
  endTime: null,
  theme: localStorage.getItem('simulado-theme') || 'light',
  spacing: Number(localStorage.getItem('simulado-spacing')) || 1.7
};

const elements = {
  landing: document.getElementById('landing-view'),
  how: document.getElementById('how-view'),
  quiz: document.getElementById('quiz-view'),
  results: document.getElementById('results-view'),
  startBtn: document.getElementById('start-btn'),
  howBtn: document.getElementById('how-btn'),
  backBtn: document.getElementById('back-btn'),
  restartBtn: document.getElementById('restart-btn'),
  themeToggle: document.getElementById('theme-toggle'),
  spacingRange: document.getElementById('spacing-range'),
  spacingValue: document.getElementById('spacing-value'),
  questionCard: document.getElementById('question-card'),
  progressBar: document.getElementById('progress-bar'),
  statusText: document.getElementById('status-text'),
  timerValue: document.getElementById('timer-value'),
  currentQuestionLabel: document.getElementById('current-question-label'),
  nextBtn: document.getElementById('next-btn'),
  reviewBtn: document.getElementById('review-btn'),
  answerFeedback: document.getElementById('answer-feedback'),
  resultScore: document.getElementById('result-score'),
  resultAccuracy: document.getElementById('result-accuracy'),
  resultTime: document.getElementById('result-time'),
  analysisList: document.getElementById('analysis-list'),
  studyList: document.getElementById('study-list'),
  strongList: document.getElementById('strong-list'),
  reviewList: document.getElementById('review-list'),
  note: document.getElementById('note')
};

function init() {
  applyTheme(state.theme);
  applySpacing(state.spacing);
  bindEvents();
  renderQuestion();
}

function bindEvents() {
  elements.startBtn.addEventListener('click', startSimulado);
  elements.howBtn.addEventListener('click', showHow);
  elements.backBtn.addEventListener('click', showHome);
  elements.restartBtn.addEventListener('click', restartSimulado);
  elements.themeToggle.addEventListener('click', toggleTheme);
  elements.spacingRange.addEventListener('input', (event) => {
    state.spacing = Number(event.target.value);
    applySpacing(state.spacing);
    localStorage.setItem('simulado-spacing', state.spacing);
  });
  elements.nextBtn.addEventListener('click', goNext);
  elements.reviewBtn.addEventListener('click', toggleReview);
}

function startSimulado() {
  state.startTime = Date.now();
  elements.landing.classList.add('hidden');
  elements.how.classList.add('hidden');
  elements.results.classList.add('hidden');
  elements.quiz.classList.remove('hidden');
  renderQuestion();
  startTimer();
}

function showHow() {
  elements.landing.classList.add('hidden');
  elements.quiz.classList.add('hidden');
  elements.results.classList.add('hidden');
  elements.how.classList.remove('hidden');
}

function showHome() {
  elements.how.classList.add('hidden');
  elements.quiz.classList.add('hidden');
  elements.results.classList.add('hidden');
  elements.landing.classList.remove('hidden');
}

function restartSimulado() {
  state.currentIndex = 0;
  state.answers = new Array(questions.length).fill(null);
  state.reviewMarked = new Set();
  state.startTime = Date.now();
  state.endTime = null;
  elements.results.classList.add('hidden');
  elements.quiz.classList.remove('hidden');
  renderQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(window.simuladoTimer);
  const tick = () => {
    const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const seconds = String(elapsed % 60).padStart(2, '0');
    elements.timerValue.textContent = `${minutes}:${seconds}`;
  };
  tick();
  window.simuladoTimer = setInterval(tick, 1000);
}

function renderQuestion() {
  const question = questions[state.currentIndex];
  elements.questionCard.innerHTML = '';
  const fragment = document.createElement('div');
  fragment.innerHTML = `
    <div class="reading-toolbar">
      <div class="toolbar-group">
        <button class="icon-btn" id="jump-options">Ir para alternativas</button>
        <button class="icon-btn" id="toggle-review">${state.reviewMarked.has(question.id) ? 'Remover revisão' : 'Marcar para revisar'}</button>
      </div>
      <div class="toolbar-group">
        <label for="spacing-range">Espaçamento</label>
        <input class="toolbar-range" id="spacing-range" type="range" min="1.3" max="2.2" step="0.1" value="${state.spacing}">
        <span class="toolbar-value">${state.spacing.toFixed(1)}x</span>
      </div>
    </div>
    <div class="question-meta">
      <span class="question-section">${question.section}</span>
      <span class="question-difficulty">${question.difficulty}</span>
    </div>
    <h3>${question.title}</h3>
    <div class="question-passage">${question.passage}</div>
    <div class="question-stem">${question.stem}</div>
    <div class="options-grid"></div>
    <div class="question-footer">
      <span class="status-pill">Questão ${state.currentIndex + 1} de ${questions.length}</span>
      <div class="toolbar-group">
        <button class="btn btn-secondary small" id="prev-btn">Anterior</button>
        <button class="btn btn-primary small" id="confirm-btn">Confirmar</button>
      </div>
    </div>
    <div class="feedback hidden" id="answer-feedback"></div>
  `;
  elements.questionCard.appendChild(fragment);

  const optionsContainer = elements.questionCard.querySelector('.options-grid');
  question.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
    btn.addEventListener('click', () => selectAnswer(index));
    optionsContainer.appendChild(btn);
  });

  const selected = state.answers[state.currentIndex];
  if (selected !== null) {
    const chosenBtn = optionsContainer.children[selected];
    chosenBtn.classList.add('selected');
  }

  document.getElementById('prev-btn').addEventListener('click', goPrevious);
  document.getElementById('confirm-btn').addEventListener('click', confirmAnswer);
  document.getElementById('jump-options').addEventListener('click', () => {
    document.querySelector('.options-grid').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  document.getElementById('toggle-review').addEventListener('click', () => {
    toggleReviewQuestion(question.id);
  });

  updateProgress();
  updateStatus();
}

function selectAnswer(index) {
  state.answers[state.currentIndex] = index;
  renderQuestion();
}

function confirmAnswer() {
  const question = questions[state.currentIndex];
  const answer = state.answers[state.currentIndex];
  if (answer === null) {
    elements.answerFeedback.textContent = 'Escolha uma alternativa antes de confirmar.';
    elements.answerFeedback.className = 'feedback wrong';
    elements.answerFeedback.classList.remove('hidden');
    return;
  }
  const isCorrect = answer === question.correct;
  elements.answerFeedback.textContent = isCorrect
    ? 'Correto! Você acertou esta questão.'
    : `Incorreto. A resposta certa era ${String.fromCharCode(65 + question.correct)}.`;
  elements.answerFeedback.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
  elements.answerFeedback.classList.remove('hidden');
  document.querySelectorAll('.option-btn').forEach((btn, index) => {
    if (index === question.correct) btn.classList.add('correct');
    if (index === answer && index !== question.correct) btn.classList.add('wrong');
  });
}

function goNext() {
  if (state.currentIndex < questions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
  } else {
    finishSimulado();
  }
}

function goPrevious() {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
}

function toggleReview() {
  const question = questions[state.currentIndex];
  toggleReviewQuestion(question.id);
  renderQuestion();
}

function toggleReviewQuestion(id) {
  if (state.reviewMarked.has(id)) {
    state.reviewMarked.delete(id);
  } else {
    state.reviewMarked.add(id);
  }
}

function updateProgress() {
  const answered = state.answers.filter((answer) => answer !== null).length;
  const percent = (answered / questions.length) * 100;
  elements.progressBar.style.width = `${percent}%`;
  elements.statusText.textContent = `Respondidas: ${answered}/${questions.length}`;
  elements.currentQuestionLabel.textContent = `Questão ${state.currentIndex + 1}`;
}

function updateStatus() {
  const current = questions[state.currentIndex];
  const selected = state.answers[state.currentIndex];
  elements.note.textContent = selected === null
    ? 'Você ainda não marcou resposta para esta questão.'
    : 'Resposta marcada. Use confirmar para validar.';
  elements.reviewBtn.textContent = state.reviewMarked.has(current.id) ? 'Remover revisão' : 'Revisar depois';
}

function finishSimulado() {
  state.endTime = Date.now();
  clearInterval(window.simuladoTimer);
  const answered = state.answers.filter((answer) => answer !== null).length;
  const correct = state.answers.reduce((sum, answer, index) => {
    return sum + (answer === questions[index].correct ? 1 : 0);
  }, 0);
  const accuracy = Math.round((correct / questions.length) * 100);
  const elapsedSeconds = Math.floor((state.endTime - state.startTime) / 1000);
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;

  elements.resultScore.textContent = `${correct}/${questions.length}`;
  elements.resultAccuracy.textContent = `${accuracy}%`;
  elements.resultTime.textContent = `${minutes} min ${seconds} s`;

  const strongTopics = [];
  const studyTopics = [];
  questions.forEach((question, index) => {
    if (state.answers[index] === question.correct) {
      strongTopics.push(question.section);
    } else {
      studyTopics.push(question.title);
    }
  });

  const uniqueStrong = [...new Set(strongTopics)].slice(0, 3);
  const uniqueStudy = [...new Set(studyTopics)].slice(0, 5);

  elements.analysisList.innerHTML = '';
  uniqueStrong.forEach((topic) => {
    const li = document.createElement('li');
    li.textContent = topic;
    elements.analysisList.appendChild(li);
  });

  elements.studyList.innerHTML = '';
  uniqueStudy.forEach((topic) => {
    const li = document.createElement('li');
    li.textContent = topic;
    elements.studyList.appendChild(li);
  });

  elements.strongList.innerHTML = '';
  if (uniqueStrong.length) {
    uniqueStrong.forEach((topic) => {
      const li = document.createElement('li');
      li.textContent = topic;
      elements.strongList.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'Ainda é cedo para definir um padrão de desempenho; revise com calma.';
    elements.strongList.appendChild(li);
  }

  elements.reviewList.innerHTML = '';
  if (state.reviewMarked.size) {
    [...state.reviewMarked].forEach((id) => {
      const question = questions.find((item) => item.id === id);
      const li = document.createElement('li');
      li.textContent = question.title;
      elements.reviewList.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'Nenhuma questão foi marcada para revisar.';
    elements.reviewList.appendChild(li);
  }

  elements.quiz.classList.add('hidden');
  elements.results.classList.remove('hidden');
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme(state.theme);
  localStorage.setItem('simulado-theme', state.theme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  elements.themeToggle.textContent = theme === 'light' ? '🌙 Modo escuro' : '☀️ Modo claro';
}

function applySpacing(spacing) {
  document.documentElement.style.setProperty('--text-spacing', `${spacing}`);
  elements.spacingRange.value = spacing;
  elements.spacingValue.textContent = `${spacing.toFixed(1)}x`;
}

init();
