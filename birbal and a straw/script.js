const readmodebtn = document.getElementById('read-mode');
const text = document.querySelector('.back');
const translbtn = document.getElementById('transl');
const answers = document.getElementById('answers');

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

translbtn.addEventListener('click', () => {
    answers.style.display = 'block';
})