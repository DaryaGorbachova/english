let answers = ['apple', 'banana', 'kiwi', 'lemon', 
'orange', 'carrot', 'cucumber', 'potato', 'tomato', 'peach'];

const input = document.querySelectorAll('.pics input');
const correctOutput = document.getElementById('correct');
let num;
let answer = '';
let correct = 0;
function dealWithInput(i) {
    answer = input[i].value;
    if (answer.slice(-1) === ' ') {
        answer = input[i].value.slice(0, answer.length - 1);
    } 
    answer = answer.toLowerCase();
}

function check1(i) {
    if (answer === pics[i].id) {
        input[i].style.backgroundColor = 'var(--lightgreen)';
        pics[i].style.backgroundColor = 'var(--lightgreen)';
        correct++;
    } else input[i].style.backgroundColor = 'var(--lightred)'
}

function checkAll() {
    correct = 0;
    console.log('ok')
    for(let i = 0; i < input.length; i++) {
        dealWithInput(i);
        check1(i);
    }
correctOutput.innerHTML = `Correct: ${correct}/${pics.length}`;
}

const pics = document.querySelectorAll('.pics span');
const vegs = document.querySelectorAll('.vegs span');

function randomPics(div) {
    let used = [];
    let ok = true;
    rep:
    for(let i = 0; i < div.length; i++) {
        ok = true;
        let num = Math.floor(Math.random() * div.length);

        for (let t = 0; t < used.length; t++) {
            if (num == used[t]) {
                ok = false;
                break
            }
        };  
        if (ok === true) {
            div[i].style.backgroundImage = `url(fruits/${answers[Object.keys(answers)[num]]}.png)`;
            div[i].id = answers[Object.keys(answers)[num]];
            used.push(num);
            ok = true;
        } else {
            i--;
            continue rep
        }
    }

}
randomPics(pics);

function randomNames(div) {
    let used = [];
    let ok = true;
    rep:
    for(let i = 0; i < div.length; i++) {
        ok = true;
        let num = Math.floor(Math.random() * div.length);

        for (let t = 0; t < used.length; t++) {
            if (num == used[t]) {
                ok = false;
                break
            }
        };  
        if (ok === true) {
            div[i].innerHTML = answers[Object.keys(answers)[num]];
            used.push(num);
            ok = true;
        } else {
            i--;
            continue rep
        }
    }

}

randomNames(vegs)

vegs.forEach(vegs => vegs.addEventListener('click', ev => {
    if(ev.target.id != 'true') {
ev.target.style.backgroundColor = 'var(--gold)';
ev.target.style.boxShadow = '0px 0px 15px var(--text)';
ev.target.id = 'true';
    } else {
        ev.target.style.backgroundColor = '';
        ev.target.style.boxShadow = '';       
        ev.target.id = ''
    }
}))

const correctVeg = document.getElementById('correctVeg'); 
const vegAnswers = ['carrot', 'cucumber', 'potato', 'tomato']
const btnansw = document.getElementById('btnansw');


function checkVegs() {
correct = 0;   
btnansw.style.display = 'block';
for (let i = 0; i < vegs.length; i++) {
    if (vegs[i].id == 'true') {
    for (let t = 0; t < vegAnswers.length; t++) {
            if (vegs[i].innerHTML == vegAnswers[t]) {
                vegs[i].style.backgroundColor = 'var(--lightgreen)';
                correct++;
                break

            } else {
                vegs[i].style.backgroundColor = 'var(--lightred)';
            }
    }}
}
if (correct < vegAnswers.length) correctVeg.innerHTML = `Maybe there is something else? There must be ${vegAnswers.length} answers.`;
}

function showAnswers () {
    for (let i = 0; i < vegs.length; i++){
        for (let t = 0; t < vegAnswers.length; t++) {
        if (vegs[i].innerHTML == vegAnswers[t]) {
            vegs[i].style.backgroundColor = 'var(--lightgreen)';
            break
        } else vegs[i].style.backgroundColor = 'var(--lightred)';
        }

    }
}

//question prompts
const prompt = document.querySelectorAll('.prompt');

function showPrompt () {
    for (let i = 0; i < prompt.length; i++) {
        prompt[i].style.display = 'block';
        console.log[i]
    }
}