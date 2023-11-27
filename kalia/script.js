const readmodebtn = document.getElementById('read-mode');

let mode = 'off'
readmodebtn.addEventListener('click', () => {
    if(mode == 'off') {
        mode = 'on';
    document.querySelector('.back').style.backgroundColor = 'var(--beige)';
    } else if (mode == 'on') {
        mode = 'off';
    document.querySelector('.back').style.backgroundColor = 'white';
    }
})


const dragAnswers = ['drag7', 'drag3', 'drag5', 'drag1', 'drag4', 'drag2', 'drag6'];
const  dragaims = document.querySelectorAll('.drop');
const dragtext = document.querySelectorAll(".vocab span");
const dragfield = document.querySelector(".vocab");
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
    if (ev.target.parentElement.className === 'vocab') { 
        elem = ev.target.id;
        ev.target.style.color = 'var(--red)';
    }
}))
dragfield.addEventListener('click', e => {
    console.log(1);
    if (typeof elem == 'string' && e.target.nodeName == 'TH') {
        console.log(e.target);
        e.target.appendChild(document.getElementById(elem));
        document.getElementById(elem).style.color = 'var(--text)';
        elem = 0;
    } 
})

dragaims.forEach(dragaims => dragaims.addEventListener('click', e => {
    if (typeof elem == 'string'){
 e.target.appendChild(document.getElementById(elem));
 document.getElementById(elem).style.color = 'var(--text)';
 elem = 0;
    }
 if (elem == 0 && e.target.parentElement.className == 'drop')   {
    elem = e.target.id;
    numelem = elem.slice(4, 5) - 1;
    e.target.style.color = 'var(--red)';
 }
 
}))

//fill the gaps
const checkbtn = document.getElementById('check');
const input = document.querySelectorAll('input');

const answers = ['terrified', 'immediately',  'elder', 'finally', 'it turned out', 'exhausted', 'make sure', 'get rid of'];

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

//cross out the words
const words = document.querySelectorAll('#vocab span')
words.forEach(words => words.addEventListener('click', ev => {
    if ( ev.target.style.textDecoration == 'line-through') {
        ev.target.style.textDecoration = 'none';
    } else ev.target.style.textDecoration = 'line-through';

}))