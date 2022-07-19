const readmodebtn = document.getElementById('read-mode');
const back = document.querySelector('.back');
const cards = document.querySelectorAll('.card')
const cards1 = document.querySelectorAll('.card1');
const checkbtn = document.getElementById('check');
const congrats = document.getElementById('congrats');
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
    ev.target.style.backgroundImage = 'none';
   ev.target.style.backgroundColor = picked;
   if(ev.target.className == 'card') {
    ev.target.firstElementChild.style.backgroundColor = picked;
  if(picked == 'black' || picked == 'brown' ||picked == 'blue') ev.target.firstElementChild.style.color = 'var(--golddark)';
  else ev.target.firstElementChild.style.color = 'var(--text)';    
   }
    if (ev.target.parentElement.className == 'card') {
        ev.target.parentElement.style.backgroundColor = picked;
        ev.target.parentElement.style.backgroundImage = 'none';
   }
}))
//check answers
let correctNum = 0;
checkbtn.addEventListener('click', () => {
    correctNum = 0;
    for (let i = 0; i < cards.length; i++) {
        if(cards[i].style.backgroundColor != cards[i].firstElementChild.innerHTML) {
            cards[i].style.backgroundImage = 'url("red.jpg")';
        } else correctNum++;
    }
    if (correctNum == 10) congrats.style.display = 'block';
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