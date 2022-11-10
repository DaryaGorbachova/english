const formInput = document.querySelectorAll('.form');
const useInput = document.querySelectorAll('.use');
const aim = document.querySelectorAll('.aim');
const drags = document.querySelectorAll('.drag p');
const column = document.querySelectorAll('.column li');
const answers = [['enthusiastic', 'respectful', 'deepened', 'location', 'creation', 'glorious', 'purify', 'desire', 'desire', 'separation'],
['desire', 'entire', 'eagerly', 'deepened', 'nearby', 'realized', 'refrain']]
const input = [formInput, useInput];

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


column.forEach(column => column.addEventListener('click', ev => {
        if ( ev.target.style.textDecoration == 'line-through') {
            ev.target.style.textDecoration = 'none';
        } else ev.target.style.textDecoration = 'line-through';

}))

