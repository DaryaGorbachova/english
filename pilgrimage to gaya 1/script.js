const readmodebtn = document.getElementById('read-mode');
const text = document.querySelector('.back');
const blankInput = document.querySelectorAll('.blank');
const checkbtn = document.querySelectorAll('.check');
const supInput = document.querySelectorAll('.sup');
const aim = document.querySelectorAll('.aim');
const drags = document.querySelectorAll('.drag p');
const answersbtn = document.querySelector('.answers');
const green = document.querySelectorAll(".green");

const answers = [['glory', 'incarnations', 'human race', 'goes back', 'top of this hill', 'going to so much trouble', 'take his blessings', 'purpose', 'do away with', 'go into detail', 'following in the footsteps'],
['2', '1', '1', '1', '2']]
const input = [blankInput, supInput];

  let mode = 'off'
readmodebtn.addEventListener('click', () => {
    if(mode == 'off') {
        mode = 'on';
    text.style.backgroundColor = 'var(--beige)';
    } else if (mode == 'on') {
        mode = 'off';
    text.style.backgroundColor = 'white';

    }
})

function selfunc(x) {
    window.getSelection().selectAllChildren(x);
}

let c = 0;
let answer = '';

function dealWithInput(i) {
    answer = input[c][i].value;
    if (answer.slice(-1) === ' ') {
        answer = input[c][i].value.slice(0, answer.length - 1);
    } 
    answer = answer.toLowerCase();
}

function check1(i) {
    if (answer === answers[c][i]) {
        input[c][i].style.backgroundColor = 'var(--lightgreen)'
    } else input[c][i].style.backgroundColor = 'var(--lightred)'
}

function checkAll(c) {
    for(let i = 0; i < (blankInput.length + 1); i++) {
        dealWithInput(i);
        check1(i);
    }
}

answersbtn.addEventListener('click', () => {
    green.forEach(green => green.style.backgroundColor = 'var(--lightgreen)');
})