const back = document.querySelector('.back');
const readmodebtn = document.getElementById('read-mode');

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