document.addEventListener("DOMContentLoaded", function () {
    // Select all profile cards that should be clickable
    const profileCards = document.querySelectorAll(".profile-card:not(.add-profile)");

    profileCards.forEach(card => {
        card.addEventListener("click", function () {
            // Get the profile name from `data-profile` attribute
            const profileName = this.getAttribute("data-profile");
            
            if (profileName) {
                // Redirect to set-profile.html with profile name as query parameter
                window.location.href = `user-profile/set-profile.html?profile=${encodeURIComponent(profileName)}`;
            }
        });
    });
});
