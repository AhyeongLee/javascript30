window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    key.classList.add('playing');

});

const keys = document.querySelector('.container');
keys.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'transform') return;

    e.target.classList.remove('playing');
});