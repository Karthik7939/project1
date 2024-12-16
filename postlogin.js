const container = document.querySelector('.image-container');
const leftContent = document.querySelector('.image-content.left');
const rightContent = document.querySelector('.image-content.right');

container.addEventListener('mousemove', (event) => {
    const containerWidth = container.offsetWidth;
    const cursorX = event.clientX;
    const centerX = containerWidth / 2;

    if (cursorX < centerX) {
        // Move the left (daylight) image into view
        leftContent.style.transform = "translateX(0)";
        rightContent.style.transform = "translateX(100%)";
    } else {
        // Move the right (nighttime) image into view
        leftContent.style.transform = "translateX(-100%)";
        rightContent.style.transform = "translateX(0)";
    }
});
