document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('harvo-video');
    let isBottomSectionPlayed = false;

    // Play the first part (0 to 4 seconds) when the page loads
    video.currentTime = 0;
    video.play();
    video.ontimeupdate = () => {
        if (video.currentTime >= 4 && !isBottomSectionPlayed) {
            video.pause();
        }
    };

    // Listen for scroll event
    window.addEventListener('scroll', function() {
        const bottomSection = document.querySelector('.features-section').offsetTop;
        const currentScroll = window.scrollY + window.innerHeight;

        // Check if user has scrolled to the second section
        if (currentScroll >= bottomSection && !isBottomSectionPlayed) {
            isBottomSectionPlayed = true; // Ensure it only triggers once
            video.currentTime = 4;        // Set the video to start at 4 seconds
            video.play();

            // Play video from 4 to 13 seconds, then stop it
            video.ontimeupdate = () => {
                if (video.currentTime >= 13) {
                    video.pause();
                }
            };
        }
    });
});
