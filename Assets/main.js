
document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('bg-vid');

    // Set the playback speed (0.5 is half the normal speed, 2 is twice the normal speed)
    video.playbackRate = 0.35;
});

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        // Hide the loader
        document.querySelector('.loader').classList.add('hidden');
        // Show the result page
        document.querySelector('.result').style.display = 'block';
    }, 4000); // 3000 milliseconds = 3 seconds
});


