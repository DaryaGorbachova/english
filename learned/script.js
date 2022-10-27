const checkbtn = document.getElementById('check');
const input = document.querySelectorAll('input');

const dragAnswers = ['drag7', 'drag4', 'drag6', 'drag5', 'drag3', 'drag2', 'drag1'];
const  dragaims = document.querySelectorAll('.dragaim');
const dragtext = document.querySelectorAll(".drag span");
const dragfield = document.querySelectorAll(".drag");
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
let numelem;
dragtext.forEach(dragtext => dragtext.addEventListener('click', ev => {
    if (typeof elem == 'string') document.getElementById(elem).style.color = 'var(--text)';
    if (ev.target.parentElement.className === 'drag') { 
        elem = ev.target.id;
        ev.target.style.color = 'var(--red)';
    }
}))
dragfield.forEach(dragfield => dragfield.addEventListener('click', e => {
    console.log(1);
    if (typeof elem == 'string' && e.target.nodeName == 'TH') {
        console.log(e.target);
        e.target.appendChild(document.getElementById(elem));
        document.getElementById(elem).style.color = 'var(--text)';
        elem = 0;
    } 
}))

dragaims.forEach(dragaims => dragaims.addEventListener('click', e => {
    if (typeof elem == 'string'){
 e.target.appendChild(document.getElementById(elem));
 document.getElementById(elem).style.color = 'var(--text)';
 elem = 0;
    }
 if (elem == 0 && e.target.parentElement.className == 'dragaim')   {
    elem = e.target.id;
    numelem = elem.slice(4, 5) - 1;
    e.target.style.color = 'var(--red)';
 }
 
}))

const answers = ['self-controlled', 'envious',  'kindness', 'faithful', 'equality'];

let answer = '';

function dealWithInput(i) {
    answer = input[i].value;
    if (answer.slice(-1) === ' ') {
        answer = input[i].value.slice(0, answer.length - 1);
    } 
    answer = answer.toLowerCase();
}

function check1(i) {
    if (answer === answers[i]) {
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
