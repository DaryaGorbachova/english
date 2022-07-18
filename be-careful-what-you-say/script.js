const readmodebtn = document.getElementById('read-mode');
const back = document.querySelector('.back');
const text = document.getElementById('text');
const listbtn = document.getElementById('list');
const listarea = document.getElementById('words');
const cards = document.querySelectorAll('.card')


let list = []

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



function selfunc(x) {
    window.getSelection().selectAllChildren(x);
}


function highlight(x) {
    x = x || window.event;
        let i = '';    
        i = window.getSelection().toString();        
    if (x.keyCode == '76') {
            list.push(i.toLowerCase());
            console.log(list);
            alert('"'+i+'"' + ' added to the list!')
//            text.innerHTML = text.innerHTML
//                            .replace(i, "<span style='background-color: var(--highlighter)'>"+i+"</span>");
            
}
}


//document.addEventListener('select', highlight(window.getSelection))

//window.getSelection()


document.onkeydown = highlight;

function generateList() {
    listarea.innerHTML=list.join(',<br>');
}


//cards game
//color of cards
for(let i = 0; i < cards.length; i++) {
    if (i < cards.length / 2) {
        cards[i].style.backgroundColor = 'pink';
    } else cards[i].style.backgroundColor = 'lightblue';
}
//words and defenitions
const words = {
'Obedient': 'doing what you are told to do',
'Weary': "very tired",
"Sorrowfully": "in a very sad way",
"gather": "to come together",
"Diminish": "to make somebody / something seem less important than they really are",
'Cheer on': 'to give shouts in order to encourage somebody (often in a race, competition)',
'(Do smth) anew': 'do it again from the beginning or do it in a different way',
'Astonished': 'amazed',
'Succeed': 'to achieve something that you have been trying to do or get',
'Against all odds': 'despite success being very unlikely'
};
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
    
    if (p == 2) check(opened);
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
function check(o) {
    let keyNum;
    for (m = 0; m < Object.keys(words).length; m++) {
        if(Object.keys(words)[m] == opened[0].firstElementChild.innerHTML) keyNum = m;
        else if (Object.keys(words)[m] == opened[1].firstElementChild.innerHTML) keyNum = m;
        
    }
    if (words[Object.keys(words)[keyNum]] == opened[1].firstElementChild.innerHTML || words[Object.keys(words)[keyNum]] == opened[0].firstElementChild.innerHTML) {
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
        let num = Math.floor(Math.random() * 10);
        
        for (let t = 0; t < used.length; t++) {
            if (num == used[t]) {
                ok = false;
                break
            }
        }  
        if (ok === true) {
        cards[i].firstElementChild.innerHTML = Object.keys(words)[num];
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
        let num = Math.floor(Math.random() * 10);
        
        for (let t = 0; t < used.length; t++) {
            if (num == used[t]) {
                ok=false;
                break
            }
        }  
        if (ok === true) {
        cards[i].firstElementChild.innerHTML = words[Object.keys(words)[num]];
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