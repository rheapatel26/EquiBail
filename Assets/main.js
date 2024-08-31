
        document.addEventListener('DOMContentLoaded', (event) => {
            const video = document.getElementById('bg-vid');

            // Set the playback speed (0.5 is half the normal speed, 2 is twice the normal speed)
            video.playbackRate = 0.35; 
        });

        // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const text = "This is Bail <br> Reckoner";
const typingSpeed = 100; // Speed in milliseconds per character
const pauseDuration = 5000; // Pause duration between loops in milliseconds
let index = 0;
let isTyping = true;

function typeWriter() {
    const element = document.getElementById('gen-info');
    if (index < text.length) {
        if (isTyping) {
            if (text.charAt(index) === '<') {
                // Handle HTML tags
                let tag = '';
                while (text.charAt(index) !== '>' && index < text.length) {
                    tag += text.charAt(index);
                    index++;
                }
                tag += '>';
                element.innerHTML += tag;
                index++;
            } else {
                element.innerHTML += text.charAt(index);
                index++;
            }
            setTimeout(typeWriter, typingSpeed);
        }
    } else {
        isTyping = false;
        setTimeout(() => {
            element.innerHTML = ''; // Clear text
            index = 0;
            isTyping = true;
            typeWriter(); // Restart typing
        }, pauseDuration);
    }
}

typeWriter();
