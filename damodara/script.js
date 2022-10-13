const checkbtn = document.getElementById('check');
const input = document.querySelectorAll('input');

const dragAnswers = ['drag2', 'drag5', 'drag1', 'drag3', 'drag4'];
const  dragaims = document.querySelectorAll('.dragaim span');
const dragtext = document.querySelectorAll(".drag p");
const dragfield = document.querySelector(".drag");
const submitbtn = document.querySelector('.submit')
const outputCorAns = document.querySelectorAll('.outputCorAns');
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

function checkPrelistening () {
    correct1 = 0;
    for (let i = 0; i < dragaims.length; i++){
        if (dragaims[i].children[0].id === dragAnswers[i]) {
            correct1++;
            dragaims[i].style.backgroundColor = 'var(--lightgreen)';
        } else dragaims[i].style.backgroundColor = 'var(--lightred)';
}
outputCorAns[0].style.display = 'block';
outputCorAns[0].innerHTML = `${correct1}/${dragAnswers.length}`;
}

submitbtn.addEventListener('click', () => {
    for (let i = 0; i < dragaims.length; i++){
    if (dragaims[i].children.length < 1) {
        alert('Finish the task first!');
        return false;
    }

}
    checkPrelistening();
})

let elem;

dragtext.forEach(dragtext => dragtext.addEventListener('click', ev => {
    if (typeof elem == 'string') document.getElementById(elem).style.color = 'var(--text)';
    if (ev.target.parentElement.className === 'drag') { 
        elem = ev.target.id;
        ev.target.style.color = 'var(--golddark)';
    }
}))

dragaims.forEach(dragaims => dragaims.addEventListener('click', e => {
    if (typeof elem == 'string'){
 e.target.appendChild(document.getElementById(elem));
 document.getElementById(elem).style.color = 'var(--text)';
    }
 if (elem == 0 && e.target.parentElement.className == 'dragaim')   dragfield.appendChild(e.target.children[0]);
 else if (elem == 0 && e.target.nodeName == 'P')   dragfield.appendChild(e.target);
 elem = 0;
}))

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
