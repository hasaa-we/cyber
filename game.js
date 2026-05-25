const state = {
  currentModule: null,
  currentLevel: null,
  currentQuestions: [],
  currentQuestionIndex: 0,
  totalScore: 0,
  levelScore: 0,
  lives: 3,
  answerLocked: false,
};

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.toggle('active', screen.id === screenId);
  });
}

function updateScores() {
  const scoreText = `Total: ${state.totalScore} pts`;
  const scoreHeaders = [
    document.getElementById('header-score'),
    document.getElementById('header-score-2'),
  ];
  scoreHeaders.forEach((el) => {
    if (el) el.textContent = scoreText;
  });
}

function updateLives() {
  const livesHtml = '❤️'.repeat(state.lives);
  const livesDisplays = [
    document.getElementById('concept-lives'),
    document.getElementById('q-lives'),
  ];
  livesDisplays.forEach((el) => {
    if (el) el.textContent = livesHtml;
  });
}

function shuffleArray(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shuffleQuestion(question) {
  const originalOrder = question.opts.map((_, index) => index);
  const shuffledOrder = shuffleArray(originalOrder);
  const shuffledOpts = shuffledOrder.map((index) => question.opts[index]);

  const remappedWrongReasons = {};
  Object.entries(question.wrongReasons || {}).forEach(([key, reason]) => {
    const originalIndex = Number(key);
    const newIndex = shuffledOrder.indexOf(originalIndex);
    if (newIndex !== -1) {
      remappedWrongReasons[newIndex] = reason;
    }
  });

  return {
    ...question,
    opts: shuffledOpts,
    correct: shuffledOrder.indexOf(question.correct),
    wrongReasons: remappedWrongReasons,
  };
}

function initModules() {
  const modulesGrid = document.getElementById('modules-grid');
  if (!modulesGrid) return;

  modulesGrid.innerHTML = MODULES.map((module) => {
    return `
      <button class="module-card" onclick="selectModule(${module.id})">
        <div class="module-icon">${module.icon}</div>
        <div class="module-info">
          <h3>${module.title}</h3>
          <p>${module.desc}</p>
        </div>
      </button>
    `;
  }).join('');
}

function selectModule(moduleId) {
  const selected = MODULES.find((module) => module.id === moduleId);
  if (!selected) return;

  state.currentModule = selected;
  state.currentLevel = null;

  const moduleHero = document.getElementById('module-hero');
  const levelSelectTitle = document.getElementById('level-select-title');
  if (moduleHero) {
    moduleHero.innerHTML = `
      <div class="module-hero-card" style="border-color: ${selected.color};">
        <div class="module-hero-icon">${selected.icon}</div>
        <div>
          <h2>${selected.title}</h2>
          <p>${selected.desc}</p>
        </div>
      </div>
    `;
  }
  if (levelSelectTitle) {
    levelSelectTitle.textContent = `${selected.icon} ${selected.title}`;
  }

  populateLevels(selected.levels);
  updateScores();
  showScreen('level-select');
}

function populateLevels(levels) {
  const levelsGrid = document.getElementById('levels-grid');
  if (!levelsGrid) return;

  levelsGrid.innerHTML = levels.map((level) => {
    return `
      <button class="level-card" onclick="selectLevel('${level.id}')">
        <div class="level-badge">${level.id}</div>
        <div class="level-info">
          <h3>${level.title}</h3>
          <p class="level-card-slides">${level.slides ? `Slides ${level.slides}` : ''}</p>
        </div>
      </button>
    `;
  }).join('');
}

function selectLevel(levelId) {
  if (!state.currentModule) return;
  const selected = state.currentModule.levels.find((level) => level.id === levelId);
  if (!selected) return;

  state.currentLevel = selected;
  renderConcept(selected.concept);
  showScreen('concept-screen');
}

function renderConcept(concept) {
  const conceptTitle = document.getElementById('concept-title');
  const conceptBody = document.getElementById('concept-body');
  const conceptLevelTitle = document.getElementById('concept-level-title');

  if (conceptTitle) conceptTitle.textContent = concept.title;
  if (conceptLevelTitle) conceptLevelTitle.textContent = concept.title;
  if (!conceptBody) return;

  conceptBody.innerHTML = concept.body.map((item) => {
    switch (item.type) {
      case 'line':
        return `<p>${item.text}</p>`;
      case 'section':
        return `<h3>${item.text}</h3>`;
      case 'bullet':
        return `<li>${item.text}</li>`;
      case 'empty':
        return `<p>&nbsp;</p>`;
      default:
        return `<p>${item.text || ''}</p>`;
    }
  }).join('');

  const hasList = concept.body.some((item) => item.type === 'bullet');
  if (hasList) {
    conceptBody.innerHTML = `<ul>${conceptBody.innerHTML}</ul>`;
  }
}

function exitToLevels() {
  showScreen('level-select');
}

function confirmExit() {
  const modal = document.getElementById('exit-modal');
  if (modal) modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('exit-modal');
  if (modal) modal.style.display = 'none';
}

function startQuestions() {
  if (!state.currentLevel || !state.currentModule) return;

  state.currentQuestions = state.currentLevel.questions.map((question) => {
    const clonedQuestion = {
      ...question,
      opts: question.opts.slice(),
      wrongReasons: { ...(question.wrongReasons || {}) },
    };
    return shuffleQuestion(clonedQuestion);
  });
  state.currentQuestionIndex = 0;
  state.levelScore = 0;
  state.levelComplete = false;
  state.answerLocked = false;
  state.lives = 3;

  updateLives();
  renderQuestion();
  showScreen('question-screen');
}

function renderQuestion() {
  const question = state.currentQuestions[state.currentQuestionIndex];
  const hintBox = document.getElementById('hint-box');
  const feedbackBar = document.getElementById('feedback-bar');
  const wrongReason = document.getElementById('wrong-reason');
  const nextButton = document.getElementById('btn-next');
  const moduleBadge = document.getElementById('q-module-badge');
  const levelBadge = document.getElementById('q-level-badge');
  const progressBar = document.getElementById('q-progress-bar');
  const progressLabel = document.getElementById('q-progress-label');
  const optionsGrid = document.getElementById('options-grid');
  const questionText = document.getElementById('question-text');

  if (!question || !optionsGrid || !questionText || !moduleBadge || !levelBadge || !progressBar || !progressLabel) {
    return;
  }

  moduleBadge.textContent = `Module ${state.currentModule.num}`;
  levelBadge.textContent = state.currentLevel.id;
  questionText.textContent = question.q;

  optionsGrid.innerHTML = question.opts.map((option, index) => {
    return `<button class="option-button" onclick="selectOption(${index})">${option}</button>`;
  }).join('');

  progressLabel.textContent = `${state.currentQuestionIndex + 1}/${state.currentQuestions.length}`;
  progressBar.style.width = `${((state.currentQuestionIndex + 1) / state.currentQuestions.length) * 100}%`;

  if (hintBox) hintBox.style.display = 'none';
  if (feedbackBar) {
    feedbackBar.style.display = 'none';
    feedbackBar.textContent = '';
    feedbackBar.className = 'feedback-bar';
  }
  if (wrongReason) {
    wrongReason.style.display = 'none';
    wrongReason.textContent = '';
  }
  if (nextButton) {
    nextButton.style.display = 'none';
    nextButton.textContent = 'Next →';
  }

  state.answerLocked = false;
}

function showHint() {
  const question = state.currentQuestions?.[state.currentQuestionIndex];
  const hintBox = document.getElementById('hint-box');
  if (!question || !hintBox) return;

  hintBox.textContent = question.hint || 'No hint available for this question.';
  hintBox.style.display = 'block';
}

function selectOption(selectedIndex) {
  if (state.answerLocked || !state.currentQuestions) return;

  const question = state.currentQuestions[state.currentQuestionIndex];
  if (!question) return;

  const feedbackBar = document.getElementById('feedback-bar');
  const wrongReason = document.getElementById('wrong-reason');
  const nextButton = document.getElementById('btn-next');
  const optionsGrid = document.getElementById('options-grid');

  state.answerLocked = true;

  if (selectedIndex === question.correct) {
    state.levelScore += 10;
    state.totalScore += 10;
    updateScores();

    if (feedbackBar) {
      feedbackBar.textContent = 'Correct! +10 points';
      feedbackBar.classList.add('correct');
      feedbackBar.style.display = 'block';
    }
  } else {
    state.lives = Math.max(0, state.lives - 1);
    updateLives();

    if (feedbackBar) {
      feedbackBar.textContent = 'Incorrect';
      feedbackBar.classList.add('incorrect');
      feedbackBar.style.display = 'block';
    }

    if (wrongReason) {
      wrongReason.textContent = question.wrongReasons?.[selectedIndex] || 'Try the next question.';
      wrongReason.style.display = 'block';
    }
  }

  if (optionsGrid) {
    Array.from(optionsGrid.children).forEach((button, index) => {
      button.disabled = true;
      if (index === question.correct) {
        button.classList.add('correct-option');
      } else if (index === selectedIndex) {
        button.classList.add('wrong-option');
      }
    });
  }

  if (nextButton) {
    nextButton.style.display = 'inline-flex';
    nextButton.textContent = state.currentQuestionIndex + 1 >= state.currentQuestions.length || state.lives === 0 ? 'Finish' : 'Next →';
  }
}

function nextQuestion() {
  if (!state.currentQuestions) return;
  if (state.lives === 0 || state.currentQuestionIndex + 1 >= state.currentQuestions.length) {
    finishLevel();
    return;
  }

  state.currentQuestionIndex += 1;
  renderQuestion();
}

function finishLevel() {
  const completeTitle = document.getElementById('complete-title');
  const completeSubtitle = document.getElementById('complete-subtitle');
  const completeStats = document.getElementById('complete-stats');
  const nextLevelButton = document.getElementById('btn-next-level');

  const success = state.lives > 0;
  if (completeTitle) {
    completeTitle.textContent = success ? 'Level Complete!' : 'Level Failed';
  }
  if (completeSubtitle) {
    completeSubtitle.textContent = success
      ? `You finished ${state.currentLevel.title} with ${state.lives} lives remaining.`
      : `You ran out of lives on ${state.currentLevel.title}.`; 
  }
  if (completeStats) {
    completeStats.innerHTML = `
      <div><strong>Score</strong><span>${state.levelScore} pts</span></div>
      <div><strong>Remaining</strong><span>${state.lives} lives</span></div>
    `;
  }

  const currentLevelIndex = state.currentModule.levels.findIndex((level) => level.id === state.currentLevel.id);
  const nextLevel = state.currentModule.levels[currentLevelIndex + 1];
  if (nextLevelButton) {
    if (nextLevel) {
      nextLevelButton.style.display = 'inline-flex';
      nextLevelButton.onclick = () => selectLevel(nextLevel.id);
    } else {
      nextLevelButton.style.display = 'none';
    }
  }

  showScreen('level-complete');
}

function goNextLevel() {
  if (!state.currentModule || !state.currentLevel) return;

  const currentLevelIndex = state.currentModule.levels.findIndex((level) => level.id === state.currentLevel.id);
  const nextLevel = state.currentModule.levels[currentLevelIndex + 1];
  if (nextLevel) {
    selectLevel(nextLevel.id);
  } else {
    showScreen('level-select');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initModules();
  updateScores();
  updateLives();
});
