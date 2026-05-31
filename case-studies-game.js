// Case Studies Game Logic
let currentCaseStudy = null;
let currentCaseQuestion = 0;
let caseStudyScores = {};

// Initialize case studies grid
function initCaseStudies() {
  const grid = document.getElementById('case-studies-grid');
  if (!grid) {
    console.error('case-studies-grid element not found');
    return;
  }
  
  if (!caseStudiesData || caseStudiesData.length === 0) {
    console.error('caseStudiesData not available', caseStudiesData);
    grid.innerHTML = '<p style="color: red; padding: 20px;">Error: Case studies data not loaded</p>';
    return;
  }
  
  grid.innerHTML = '';
  
  caseStudiesData.forEach(caseStudy => {
    const completed = caseStudyScores[caseStudy.id] ? 'completed' : '';
    const scoreText = caseStudyScores[caseStudy.id] ? `${caseStudyScores[caseStudy.id]}/100` : 'Not Started';
    
    const card = document.createElement('div');
    card.className = `case-study-card ${completed}`;
    card.onclick = () => openCaseStudy(caseStudy.id);
    
    const icons = ['🏛️', '🛒', '☁️', '🏭', '⚖️', '💊', '🏛️'];
    
    card.innerHTML = `
      <div class="case-study-card-num">Case ${caseStudy.id}</div>
      <div class="case-study-card-icon">${icons[caseStudy.id - 1]}</div>
      <h3 class="case-study-card-title">${caseStudy.title.split(':')[0]}</h3>
      <p class="case-study-card-subtitle">${caseStudy.subtitle}</p>
      <p class="case-study-card-desc">${caseStudy.title.split(':')[1] || 'Real-world breach analysis'}</p>
      <div style="font-size: 0.8rem; color: var(--accent3); font-weight: 600;">
        ${completed ? '✅ Completed - ' : ''}${scoreText}
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  updateCaseStudiesScore();
}

function updateCaseStudiesScore() {
  const completed = Object.keys(caseStudyScores).length;
  const total = caseStudiesData.length;
  const scoreBadge = document.getElementById('cs-score');
  if (scoreBadge) {
    scoreBadge.textContent = `${completed}/${total} Complete`;
  }
}

function openCaseStudy(caseId) {
  currentCaseStudy = caseStudiesData.find(c => c.id === caseId);
  currentCaseQuestion = 0;
  showCaseStudyDetail();
}

function showCaseStudyDetail() {
  showScreen('case-study-detail');
  
  const case_id = currentCaseStudy.id;
  const icons = ['🏛️', '🛒', '☁️', '🏭', '⚖️', '💊', '🏛️'];
  
  document.getElementById('cs-detail-title').textContent = `Case ${case_id}`;
  
  const hero = document.getElementById('case-study-hero');
  hero.innerHTML = `
    <div class="cs-hero-icon">${icons[case_id - 1]}</div>
    <h2 class="cs-hero-title">${currentCaseStudy.title}</h2>
    <p class="cs-hero-subtitle">${currentCaseStudy.subtitle}</p>
    <button class="btn-primary" onclick="startCaseStudyQuestions()" style="width: 100%; margin-top: 16px;">
      <span>Begin Analysis Questions</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </button>
  `;
  
  const content = document.getElementById('case-study-content');
  const scenario = currentCaseStudy.scenario;
  const incidents = currentCaseStudy.incidents;
  
  content.innerHTML = `
    <div class="cs-scenario-section">
      <h3 class="cs-section-title">📋 Scenario</h3>
      <p class="cs-scenario-text">${scenario}</p>
    </div>
    <div class="cs-incidents-section">
      <h3 class="cs-section-title">⚠️ Attack Timeline</h3>
      <ol class="cs-incidents-list">
        ${incidents.map(incident => `<li>${incident}</li>`).join('')}
      </ol>
    </div>
  `;
}

function startCaseStudyQuestions() {
  currentCaseQuestion = 0;
  showCaseStudyQuestion();
}

function showCaseStudyQuestion() {
  if (!currentCaseStudy) return;
  
  showScreen('case-study-question-screen');
  
  const questions = currentCaseStudy.questions;
  const q = questions[currentCaseQuestion];
  
  if (!q) {
    completeCaseStudy();
    return;
  }
  
  document.getElementById('cs-detail-title').textContent = `Case ${currentCaseStudy.id}`;
  document.getElementById('cs-q-progress-label').textContent = `${currentCaseQuestion + 1}/${questions.length}`;
  document.getElementById('cs-q-case-badge').textContent = `Case ${currentCaseStudy.id}`;
  document.getElementById('cs-q-num-badge').textContent = `Question ${currentCaseQuestion + 1}`;
  
  const progressFill = document.getElementById('cs-q-progress-bar');
  progressFill.style.width = ((currentCaseQuestion + 1) / questions.length) * 100 + '%';
  
  document.getElementById('cs-question-text').textContent = q.question;
  
  const optionsGrid = document.getElementById('cs-options-grid');
  optionsGrid.innerHTML = '';
  
  q.options.forEach((option, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.onclick = () => selectCaseStudyAnswer(idx, q.correct);
    optionsGrid.appendChild(btn);
  });
  
  document.getElementById('cs-btn-hint').style.display = 'block';
  document.getElementById('cs-btn-next').style.display = 'none';
  document.getElementById('cs-feedback-bar').style.display = 'none';
  document.getElementById('cs-wrong-reason').style.display = 'none';
}

function selectCaseStudyAnswer(selected, correct) {
  const q = currentCaseStudy.questions[currentCaseQuestion];
  const buttons = document.querySelectorAll('#cs-options-grid .option-btn');
  
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correct) {
      btn.classList.add('option-correct');
      btn.style.background = 'linear-gradient(135deg, rgba(34,197,94,0.3), rgba(34,197,94,0.1))';
      btn.style.borderColor = 'rgba(34,197,94,0.6)';
    } else if (idx === selected && idx !== correct) {
      btn.classList.add('option-wrong');
      btn.style.background = 'linear-gradient(135deg, rgba(239,68,68,0.3), rgba(239,68,68,0.1))';
      btn.style.borderColor = 'rgba(239,68,68,0.6)';
    }
  });
  
  const isCorrect = selected === correct;
  const feedback = document.getElementById('cs-feedback-bar');
  feedback.style.display = 'block';
  feedback.className = isCorrect ? 'feedback-correct' : 'feedback-wrong';
  feedback.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
  
  if (!isCorrect && q.wrongExplanations && q.wrongExplanations[selected]) {
    const reason = document.getElementById('cs-wrong-reason');
    reason.style.display = 'block';
    reason.innerHTML = `<strong>Why:</strong> ${q.wrongExplanations[selected]}`;
  }
  
  document.getElementById('cs-btn-hint').style.display = 'none';
  document.getElementById('cs-btn-next').style.display = 'block';
}

function showCaseStudyHint() {
  const q = currentCaseStudy.questions[currentCaseQuestion];
  alert(`💡 Hint: ${q.hint}`);
}

function nextCaseStudyQuestion() {
  currentCaseQuestion++;
  showCaseStudyQuestion();
}

function completeCaseStudy() {
  const caseId = currentCaseStudy.id;
  caseStudyScores[caseId] = 100;
  
  showScreen('case-study-complete');
  
  const icons = ['🏛️', '🛒', '☁️', '🏭', '⚖️', '💊', '🏛️'];
  document.getElementById('cs-complete-icon').textContent = '✅';
  document.getElementById('cs-complete-title').textContent = `Case Study ${caseId} Complete!`;
  document.getElementById('cs-complete-subtitle').textContent = `You've analyzed "${currentCaseStudy.title.split(':')[0]}"`;
  
  const stats = document.getElementById('cs-complete-stats');
  stats.innerHTML = `
    <div class="stat-item">
      <span class="stat-label">Questions</span>
      <span class="stat-value">${currentCaseStudy.questions.length} Analyzed</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Score</span>
      <span class="stat-value">100 pts</span>
    </div>
  `;
  
  updateCaseStudiesScore();
  
  const nextBtn = document.getElementById('btn-next-case');
  const nextCase = caseStudiesData.find(c => c.id === caseId + 1);
  if (nextCase) {
    nextBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'none';
  }
}

function goToNextCaseStudy() {
  const nextCase = caseStudiesData.find(c => c.id === currentCaseStudy.id + 1);
  if (nextCase) {
    openCaseStudy(nextCase.id);
  }
}

function backToCaseStudies() {
  showScreen('case-studies-screen');
  initCaseStudies();
}

function confirmExitCaseStudy() {
  const modal = document.getElementById('exit-modal');
  modal.style.display = 'flex';
  modal.innerHTML = `
    <div class="modal-card">
      <h3>Exit Case Study Analysis?</h3>
      <p>Your progress in this case study will be lost.</p>
      <div class="modal-buttons">
        <button class="btn-secondary" onclick="closeModal()">Continue</button>
        <button class="btn-danger" onclick="exitCaseStudy()">Exit</button>
      </div>
    </div>
  `;
}

function exitCaseStudy() {
  closeModal();
  backToCaseStudies();
}

// Override showScreen to handle case studies initialization
const originalShowScreen = window.showScreen;
window.showScreen = function(screenId) {
  originalShowScreen(screenId);
  
  if (screenId === 'case-studies-screen') {
    setTimeout(() => initCaseStudies(), 50);
  }
};

// Add case studies button to splash screen (called from game.js)
function addCaseStudiesButton() {
  const splashContent = document.querySelector('.splash-content');
  if (splashContent && !document.getElementById('btn-case-studies')) {
    const btn = document.createElement('button');
    btn.id = 'btn-case-studies';
    btn.className = 'btn-secondary';
    btn.style.marginTop = '12px';
    btn.onclick = () => showScreen('case-studies-screen');
    btn.innerHTML = `
      <span>📋 Case Studies</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    `;
    splashContent.appendChild(btn);
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
  if (typeof caseStudiesData !== 'undefined') {
    addCaseStudiesButton();
  }
});
