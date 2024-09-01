
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



