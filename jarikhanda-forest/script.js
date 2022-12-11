const cards = document.querySelectorAll('.card')

const back = document.querySelector('.back');
const readmodebtn = document.getElementById('read-mode');

let mode = 'off'
readmodebtn.addEventListener('click', () => {
    if(mode == 'off') {
        mode = 'on';
    back.style.backgroundColor = 'var(--beige)';
    } else if (mode == 'on') {
        mode = 'off';
    back.style.backgroundColor = 'white';
    }
})

//words and defenitions

const words = {
    "monkey": 1,
    "tiger" : 2,
    "river" : 3,
    "parrot": 4,
    "snake" : 5,
    "elephant" : 6,
    "lion" : 7,
    "tree" : 8
};

for(let i = 0; i < cards.length; i++) {
    if (i < cards.length / 2) {
        cards[i].style.backgroundColor = 'pink';
    } else cards[i].style.backgroundColor = 'lightblue';
}

    let p = 0;
    let opened = [];    
    let correct;
//game itself
cards.forEach(cards => cards.addEventListener('click', (ev) => {

    if(ev.target.style.backgroundColor != 'var(--beige)'){
        ev.target.firstElementChild.style.display = 'block';
        p++;
      opened.push(ev.target);  
    } 
    
    if (p == 2) check();
    if (p > 2) {
        p = 0;
        if (correct == false) {
        opened.forEach(opened => opened.firstElementChild.style.display = 'none');  
        opened = []; 
        if(ev.target.style.backgroundColor != 'var(--beige)'){
            ev.target.firstElementChild.style.display = 'block';
            p++;
          opened.push(ev.target);  
        }  
    } 
    
}

        
}))
//check answers
function check() {
    let keyNum;
    for (m = 0; m < Object.keys(words).length; m++) {
        if(Object.keys(words)[m] == opened[0].firstElementChild.innerHTML) keyNum = m;
        else if (Object.keys(words)[m] == opened[1].firstElementChild.innerHTML) keyNum = m;
        
    }
    if (words[Object.keys(words)[keyNum]] == opened[1].id || words[Object.keys(words)[keyNum]] == opened[0].id) {
        opened[0].style.backgroundColor = 'var(--beige)';
        opened[1].style.backgroundColor = 'var(--beige)';
        correct = true;
        opened = [];
        p = 0;
    } else  correct = false;

}
//random words display
function randomKey () {
    let used = [];
    let ok = true;
    rep:
    for (let i = 0; i < cards.length / 2; i++) {
        ok = true;
        let num = Math.floor(Math.random() * cards.length / 2);
        
        for (let t = 0; t < used.length; t++) {
            if (num == used[t]) {
                ok = false;
                break
            }
        }  
        if (ok === true) {
        cards[i].firstElementChild.innerHTML = Object.keys(words)[num];
        cards[i].id = Object.keys(words)[num];
        used.push(num) 
        ok = true;
        } else {
            i--;
            continue rep;
    }}
}
//random defenitions display
function randomValue () {
    let used = [];
    let ok = true;
    rep:
    for (let i = cards.length / 2; i < cards.length; i++) {
        ok = true;
        let num = Math.floor(Math.random() * cards.length / 2);
        
        for (let t = 0; t < used.length; t++) {
            if (num == used[t]) {
                ok=false;
                break
            }
        }  
        if (ok === true) {
        cards[i].firstElementChild.style.backgroundImage = `url(pictures/${words[Object.keys(words)[num]]}.png)`;
        cards[i].id = num+1;
        used.push(num) 
        ok = true;
        } else {
            i--;
            continue rep;
    }}
}

randomKey();
randomValue();
// Object.keys(words)[num]; - random key
// words[Object.keys(words)[num]]; - random Value


// writing tasks
let answers = [['monkeys', 'tigers', 'birds', 'rivers', 
'enemies', 'parrots', 'snakes', 'elephants', 'lions', 'trees'], 
['sings', 'sing', 'travels', 'travel', 'sees', 'see',
'decides', 'stands up', 'sings', 'goes', 'decide', 'cooks', 
'leave', 'go', 'touches', 'begin', 'agrees']];

const plInput = document.querySelectorAll('.pl');
const presentInput = document.querySelectorAll('.present');
const input = [plInput, presentInput];

let num;
let answer = '';

function checkAll(c) {
    num = c;
    for(let i = 0; i < (input[c].length); i++) {
        dealWithInput(i);
        check1(i);
    }
}
function dealWithInput(i) {
    answer = input[num][i].value;
    if (answer.slice(-1) === ' ') {
        answer = input[num][i].value.slice(0, answer.length - 1);
    } 
    answer = answer.toLowerCase();
}

function check1(i) {
    if (answer === answers[num][i]) {
        input[num][i].style.backgroundColor = 'var(--lightgreen)'
    } else input[num][i].style.backgroundColor = 'var(--lightred)'
}