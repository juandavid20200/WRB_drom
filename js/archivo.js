// script.js
const linea = document.querySelector('.linea');
const overlay = document.querySelector('.overlay');
const imagen2 = document.querySelector('.imagen-2');

let startX = 0;
let lineWidth = 0;

linea.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
    const deltaX = e.clientX - startX;
    lineWidth += deltaX;
    linea.style.left = `${lineWidth}px`;
    imagen2.style.clipPath = `inset(0 ${overlay.offsetWidth - lineWidth}px 0 0)`;
    startX = e.clientX;
}

function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}