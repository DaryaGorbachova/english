const readmodebtn = document.getElementById('read-mode');
const text = document.querySelector('.back');

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