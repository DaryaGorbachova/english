const readmodebtn = document.getElementById('read-mode');
const back = document.querySelector('.back');
const cards = document.querySelectorAll('.card')
const cards1 = document.querySelectorAll('.card1');
const checkbtn = document.querySelectorAll('.check');
const congrats = document.getElementById('congrats');
const inputComplete = document.querySelectorAll('.complete input');
const inputQuiz = document.querySelectorAll('.quiz input')
const score = document.querySelectorAll('.score');
const learnbtn = document.getElementById('learn');
const info = document.querySelector('.info');
//cards game

//words and defenitions
const words = ['blue', 'red', 'orange', 'yellow', 'brown', 'green', 'purple', 'black', 'white', 'pink'];

    let p = 0;
    let opened = [];    
    let correct;
//game itself
let picked;
let active;

cards1.forEach(cards1 => cards1.addEventListener('click', (ev) => {
picked = ev.target.style.backgroundColor;

if (active) active.style.border = `none`;
active = ev.target;
active.style.border = `5px solid ${picked}`;
}))

cards.forEach(cards => cards.addEventListener('click', (ev) => {
    if(picked) {
   ev.target.style.backgroundColor = picked;
   if(ev.target.className == 'card') {
    ev.target.style.backgroundColor = picked;    
   }
    if (ev.target.parentElement.className == 'card') {
        ev.target.style.backgroundColor = 'var(--white)';
        ev.target.parentElement.style.backgroundColor = picked;
   }}
}))
//check answers
let correctNum = 0;
checkbtn[0].addEventListener('click', () => {
    correctNum = 0;
    for (let i = 0; i < cards.length; i++) {
        if(cards[i].style.backgroundColor != cards[i].firstElementChild.innerHTML) {
            cards[i].style.backgroundColor = 'var(--backgr-yellow)';
        } else correctNum++;
    }
    if (correctNum == 10) congrats.style.display = 'block';
    score[0].innerHTML = `${correctNum} out of ${cards.length}`
})
//random words display
function randomKey () {
    let used = [];
    let ok = true;
    rep:
    for (let i = 0; i < cards.length; i++) {
        ok = true;
        let num = Math.floor(Math.random() * 10);
        
        for (let t = 0; t < used.length; t++) {
            if (num == used[t]) {
                ok = false;
                break
            }
        }  
        if (ok === true) {
        cards[i].firstElementChild.innerHTML = words[num];
        used.push(num) 
        ok = true;
        } else {
            i--;
            continue rep;
    }}
}
//random defenitions display

for (let i = 0; i < cards1.length; i++) {
    cards1[i].style.backgroundColor = words[i];
}

randomKey();

// Object.keys(words)[num]; - random key
// words[Object.keys(words)[num]]; - random Value



//Quiz
const answers = [['yellow', 'blue', 'red', 'white'],['yellow', 'pink', 'purple', 'green', 'blue']]
let answer = [];
let input = [inputQuiz, inputComplete];


checkbtn[1].addEventListener('click', () => {
    dealWithInput(0);
    check(0);
learnbtn.style.display = 'block';
})

learnbtn.addEventListener('click', () => {
info.style.display = 'block';
})

//task 3


checkbtn[2].addEventListener('click', () => {
    dealWithInput(1);
  check(1)  
} )

function dealWithInput(task) {
    let inp = '';
    answer = [];
    for (let i = 0; i < input[task].length; i++) {
    inp = input[task][i].value;
    if (inp.slice(-1) === ' ') {
        inp = input[task][i].value.slice(0, inp.length - 1);
    } 
    answer.push(inp.toLowerCase());        
    }
}

function check(c) {
for (let i = 0; i < answers[c].length; i++) {
    if (answer[i] == answers[c][i]) {
        input[c][i].style.backgroundColor = 'var(--lightgreen)';
    } else input[c][i].style.backgroundColor = 'var(--lightred)'    
}
}