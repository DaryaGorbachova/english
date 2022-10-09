const checkbtn = document.getElementById('check');
const input = document.querySelectorAll('input');

const answers = ['face-to-face', 'naughty',  'playing any more tricks', 'gave away in charity', 'got stuck', 'dazzling bright'];
const altanswers = ['face to face'];

let answer = '';

function dealWithInput(i) {
    answer = input[i].value;
    if (answer.slice(-1) === ' ') {
        answer = input[i].value.slice(0, answer.length - 1);
    } 
    answer = answer.toLowerCase();
}

function check1(i) {
    if (answer === answers[i] || answer === altanswers[i]) {
        input[i].style.backgroundColor = 'var(--lightgreen)'
    } else input[i].style.backgroundColor = 'var(--lightred)'
}

function checkAll() {
    console.log('ok')
    for(let i = 0; i < input.length; i++) {
        dealWithInput(i);
        check1(i);
    }
}
