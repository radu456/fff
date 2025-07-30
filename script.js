// script.js - logica pentru povestea interactivă și exerciții

// Definim secțiunile poveștii și întrebările cu răspunsuri
const pages = [
  {
    type: 'text',
    content:
      'Într-o dimineață de vară, personajul tău s-a trezit într-o lume ciudată și colorată, numită Zumbalândia. Totul era făcut din jeleu: drumuri, case, chiar și pădurile! Numele tău este Zarina (sau alt nume, dacă vrei). Ai o misiune: să găsești Cheia Curajului care deschide poarta către adevărata ta putere interioară. Pe drum, întâlnești un dragon moale și pufos care îți pune o ghicitoare.'
  },
  {
    type: 'question',
    question: 'Cum se desparte corect în silabe cuvântul «dragon»?',
    options: ['dra-gon', 'drag-on', 'dr-a-gon'],
    correctIndex: 0
  },
  {
    type: 'text',
    content:
      'Dragonul pufos zâmbește larg și îți spune: „Bun! Poți merge mai departe!”. Ajungi într-un labirint de cuburi de gheață. Ca să treci, trebuie să alegi cubul corect.'
  },
  {
    type: 'question',
    question: 'Cum se desparte în silabe cuvântul «aventură»?',
    options: ['a-ven-tu-ră', 'a-vent-ură', 'av-en-tu-ră'],
    correctIndex: 0
  },
  {
    type: 'text',
    content:
      'Bravo! Ai trecut și ajungi într-un sat unde locuitorii sunt... pinguini vorbitori! Unul dintre ei îți cere să-l ajuți să își repare bicicleta zburătoare.'
  },
  {
    type: 'question',
    question: 'Cum se desparte corect în silabe cuvântul «bicicletă»?',
    options: ['bi-ci-cle-tă', 'bi-cic-le-tă', 'bic-i-cle-tă'],
    correctIndex: 0
  },
  {
    type: 'text',
    content:
      'Apoi întâlnești un robot poet care îți dă o strofă de completat: „Mergi cu încredere, zâmbește mereu, Căci cheia curajului e-n ...!”'
  },
  {
    type: 'question',
    question: 'Cum se desparte corect în silabe cuvântul «suflet»?',
    options: ['su-flet', 'suf-let', 'su-fl-et'],
    correctIndex: 0
  },
  {
    type: 'text',
    content:
      'Cu cheia în mână, Zarina deschide o ușă uriașă și pășește într-un tărâm unde superputerile apar când accepți cine ești cu adevărat.'
  },
  {
    type: 'question',
    question: 'Cum se desparte corect în silabe cuvântul «fericire»?',
    options: ['fe-ri-ci-re', 'fer-i-cire', 'fe-rici-re'],
    correctIndex: 0
  },
  {
    type: 'text',
    content:
      'Zarina a trecut peste un vulcan adormit care scotea aburi dulci.'
  },
  {
    type: 'question',
    question: 'Cum se desparte corect în silabe cuvântul «vulcan»?',
    options: ['vul-can', 'vu-lcan', 'vulc-an'],
    correctIndex: 0
  },
  {
    type: 'text',
    content: 'A ajuns într-un oraș cu numele Pufulețlandia.'
  },
  {
    type: 'question',
    question: 'Cum se desparte corect în silabe cuvântul «Pufulețlandia»?',
    options: ['Pu-fu-leț-lan-di-a', 'Pu-fu-let-lan-di-a', 'Puf-u-leț-lan-di-a'],
    correctIndex: 0
  },
  {
    type: 'text',
    content:
      'Zarina a fost condusă de un cameleon care își schimba culoarea.'
  },
  {
    type: 'question',
    question: 'Cum se desparte corect în silabe cuvântul «cameleon»?',
    options: ['ca-me-le-on', 'cam-e-le-on', 'ca-mele-on'],
    correctIndex: 0
  },
  {
    type: 'text',
    content: 'Zarina salvează lumea folosind înțelepciune.'
  },
  {
    type: 'question',
    question: 'Cum se desparte corect în silabe cuvântul «înțelepciune»?',
    options: ['în-țe-lep-ci-u-ne', 'în-țe-lep-ciune', 'în-țelep-ci-u-ne'],
    correctIndex: 0
  },
  {
    type: 'text',
    content:
      'Pe muntele Jeleu, Zarina a găsit o comoară ascunsă sub un copac cântător.'
  },
  {
    type: 'question',
    question: 'Cum se desparte corect în silabe cuvântul «comoară»?',
    options: ['co-mo-a-ră', 'co-mo-ară', 'com-o-a-ră'],
    correctIndex: 0
  },
  {
    type: 'end'
  }
];

let currentIndex = 0;
let score = 0;

// Obține referințe către elementele din DOM
const appContainer = document.getElementById('app');
const startBtn = document.getElementById('start-btn');

// Inițializează aplicația
startBtn.addEventListener('click', () => {
  // ascunde ecranul de start
  document.getElementById('start-screen').style.display = 'none';
  currentIndex = 0;
  score = 0;
  showPage();
});

// Afișează pagina curentă în funcție de tip
function showPage() {
  // Curăță conținutul
  appContainer.innerHTML = '';
  if (currentIndex >= pages.length) {
    showResults();
    return;
  }
  const page = pages[currentIndex];
  if (page.type === 'text') {
    const screen = document.createElement('div');
    screen.className = 'screen';
    const para = document.createElement('p');
    para.textContent = page.content;
    screen.appendChild(para);
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Următorul';
    nextBtn.className = 'btn-primar next-btn';
    nextBtn.addEventListener('click', () => {
      currentIndex++;
      showPage();
    });
    screen.appendChild(nextBtn);
    appContainer.appendChild(screen);
  } else if (page.type === 'question') {
    const screen = document.createElement('div');
    screen.className = 'screen';
    const questionEl = document.createElement('div');
    questionEl.className = 'question';
    questionEl.textContent = page.question;
    screen.appendChild(questionEl);
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options';
    page.options.forEach((opt, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        // previne multiple răspunsuri
        if (btn.classList.contains('answered')) return;
        // marchează răspunsul selectat
        if (index === page.correctIndex) {
          btn.classList.add('correct');
          score++;
        } else {
          btn.classList.add('incorrect');
          // marchează și răspunsul corect
          const correctBtn = optionsContainer.children[page.correctIndex];
          correctBtn.classList.add('correct');
        }
        // marchează toate butoanele ca answered pentru a preveni click repetat
        Array.from(optionsContainer.children).forEach((b) => b.classList.add('answered'));
        // Afișează butonul de următor
        nextBtn.style.display = 'inline-block';
      });
      optionsContainer.appendChild(btn);
    });
    screen.appendChild(optionsContainer);
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Următorul';
    nextBtn.className = 'btn-primar next-btn';
    nextBtn.style.display = 'none';
    nextBtn.addEventListener('click', () => {
      currentIndex++;
      showPage();
    });
    screen.appendChild(nextBtn);
    appContainer.appendChild(screen);
  } else if (page.type === 'end') {
    showResults();
  }
}

function showResults() {
  appContainer.innerHTML = '';
  const screen = document.createElement('div');
  screen.className = 'screen';
  const result = document.createElement('p');
  result.textContent = `Felicitări! Ai răspuns corect la ${score} din ${pages.filter(
    (p) => p.type === 'question'
  ).length} întrebări.`;
  screen.appendChild(result);
  appContainer.appendChild(screen);
}
