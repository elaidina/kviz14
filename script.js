const quizData = [
    {
        question: "1.    pondělí, úterý,______",
        a: "sobota",
        b: "středa",
        
        correct: "b",
    },
    {
      question: "2.    červen, červenec,_____",
      a: "duben",
      b: "srpen",
      
      correct: "b",
  },
  {
    question: "3.    2,4,6,___",
    a: "9",
    b: "8",
    
    correct: "b",
},
{
  question: "4.   3,6,9,___",
  a: "12",
  b: "10",
  
  correct: "a",
},{
  question: "5.    february, march, _____",
  a: "may",
  b: "april",
  
  correct: "b",
},
{
question: "6.  jablko, banán, _____  ",
a: "mrkev",
b: "hruška",

correct: "b",
},{
  question: "7. kovář, pravák, ____",
  a: "malina",
  b: "křemeňák",
  
  correct: "b",
},
{
question: "8.    5,10,15,20,____",
a: "25",
b: "30",

correct: "a",
},{
  question: "9.    22,44,66,_____",
  a: "22",
  b: "88",
  
  correct: "b",
},
{
question: "10.    Tomáš, Radek, Marko, ____",
a: "Timo",
b: "Anička",

correct: "a",
},{
  question: "11.   slon, medvěd, veverka, ___",
  a: "žirafa",
  b: "máslo",
  
  correct: "a",
},
{
question: "12.    Merkur, Venuše, _____",
a: "Země",
b: "Slunko",

correct: "a",
},{
  question: "13.    červená, růžová, ____",
  a: "oranžová",
  b: "sladká",
  
  correct: "a",
},
{
question: "14.    plíce, mozek, ____",
a: "srdce",
b: "mobil",

correct: "a",
},{
  question: "15.    A, B, C, ____ ",
  a: "D",
  b: "X",
  
  correct: "a",
},
{
question: "16.    základní škola, střední, škola, ____",
a: "vysoká škola",
b: "školka",

correct: "a",
},{
  question: "17.    klavír, gitara, ____",
  a: "housle",
  b: "pastelka",
  
  correct: "a",
},
{
question: "18.    pikachu, vaporeon, ____",
a: "elf",
b: "bulbasaur",

correct: "b",
},{
  question: "19.    september, október, _____",
  a: "november",
  b: "december",
  
  correct: "a",
},
{
question: "20.    jaro, léto, _____",
a: "podzim",
b: "jeseň",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })