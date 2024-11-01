const phrases = ["Student", "Web Developer"];
let index = 0;

function type() {
    const typewriter = document.querySelector('.typewriter');
    typewriter.textContent = phrases[index];
    
    // Simulate typing effect
    setTimeout(() => {
        typewriter.style.width = '0';
        index = (index + 1) % phrases.length; // Cycle through phrases
        setTimeout(type, 1000); // Pause before next phrase
        setTimeout(() => {
            typewriter.style.width = '100%'; // Start typing again
        }, 100);
    }, 3000); // Display each phrase for 3 seconds
}

type(); // Start typing effect
