// Function to set up video playback controls directly on .us-vid-cover elements
function undVideoFunctions() {
    // Select all video elements with the class 'us-vid-cover'
    const videoElements = document.querySelectorAll('.und-vid-cover');

    videoElements.forEach(video => {
        const hoverFunction = video.getAttribute('und-hover-function');
        const autoplaySetting = video.getAttribute('und-autoplay');

        // Handle autoplay attribute based on 'us-autoplay'
        if (autoplaySetting === 'true') {
            video.setAttribute('autoplay', 'true');
        } else if (autoplaySetting === 'false') {
            video.removeAttribute('autoplay');
        }

        // Ensure video is muted to comply with browser autoplay policies
        video.muted = true;

        // Set hover functionality based on 'us-hover-function'
        if (hoverFunction === 'replay') {
            video.addEventListener('mouseenter', () => {
                video.currentTime = 0; // Reset to the beginning on hover in
                video.play().catch(() => {}); // Suppress errors if playback fails
            });

            video.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0; // Reset to the beginning on hover out
            });
        } else if (hoverFunction === 'pause-play') {
            video.addEventListener('mouseenter', () => {
                video.play().catch(() => {}); // Suppress errors if playback fails
            });

            video.addEventListener('mouseleave', () => {
                video.pause();
            });
        }
    });
}

// Automatically set up all .us-vid-cover videos
document.addEventListener('DOMContentLoaded', undVideoFunctions);