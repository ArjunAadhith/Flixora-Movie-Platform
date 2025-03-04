document.addEventListener("DOMContentLoaded", function () {
    // Handle Back Button Click
    const backButton = document.querySelector(".back-button");
    if (backButton) {
        backButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "../index.html";
        });
    }

    // Profile Selection
    const profiles = document.querySelectorAll(".profile-card");
    const headerProfile = document.getElementById("headerProfile");
    const navbarProfile = document.getElementById("navbarProfile"); // Select navbar profile image
    const activeProfile = localStorage.getItem("activeProfile");
    const activeProfileImage = localStorage.getItem("activeProfileImage"); // Get stored profile image

    // Load saved profile selection on page load
    if (activeProfile && activeProfileImage) {
        profiles.forEach(profile => {
            if (profile.dataset.profile === activeProfile) {
                profile.classList.add("selected");
            }
        });

        updateProfileImage(activeProfileImage);
    }

    // Handle profile selection
    profiles.forEach(profile => {
        profile.addEventListener("click", function () {
            profiles.forEach(p => p.classList.remove("selected"));
            this.classList.add("selected");

            // Get selected profile data
            const selectedProfile = this.dataset.profile;
            const selectedProfileImg = this.querySelector("img").src;

            // Save selection in localStorage
            localStorage.setItem("activeProfile", selectedProfile);
            localStorage.setItem("activeProfileImage", selectedProfileImg);

            // Update profile images
            updateProfileImage(selectedProfileImg);
        });
    });

    // Function to update profile image in both navbar & profile section
    function updateProfileImage(imgSrc) {
        if (headerProfile) headerProfile.src = imgSrc;
        if (navbarProfile) navbarProfile.src = imgSrc;
    }
});


//help & settings

function redirectToHelpSettings() {
    window.location.href = "help settings.html"; // Redirect to help settings page
}


// Redirect to Edit Profile Page
function redirectToEditProfile() {
    window.location.href = "edit.html";
}

function redirectToProfile(isNew = false, profileName = "") {
    let url = "set-profile.html";

    if (isNew) {
        url += "?new=true"; // If it's a new profile, set the new flag
    } else if (profileName) {
        url += `?profile=${encodeURIComponent(profileName)}`; // Pass the selected profile name
    }

    window.location.href = url;
}
