const container = document.querySelector('.juxtapose-container');
const topImage = document.querySelector('.image-top');
const handle = document.querySelector('.slider-handle');

let isDragging = false;

handle.addEventListener('mousedown', () => isDragging = true);
document.addEventListener('mouseup', () => isDragging = false);

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const rect = container.getBoundingClientRect();
    let x = e.clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    topImage.style.width = x + 'px';
    handle.style.left = x + 'px';
});