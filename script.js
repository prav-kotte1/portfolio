document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.bubble-container');

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        // Random position within container
        const size = Math.random() * 100;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.top = `${Math.random() * container.offsetHeight}px`;
        bubble.style.left = `${Math.random() * container.offsetWidth}px`;

        // Random animation delay
        bubble.style.animationDelay = `${Math.random() * 2}s`;

        container.appendChild(bubble);

        // Remove bubble after animation completes
        bubble.addEventListener('animationend', function () {
            container.removeChild(bubble);
        });
    }

    // Create bubbles periodically
    setInterval(createBubble, 1000);
});
