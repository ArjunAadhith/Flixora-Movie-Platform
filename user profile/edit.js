function redirectToProfile(isNew = false, profileName = "") {
    let url = "set-profile.html";

    if (isNew) {
        url += "?new=true"; // If it's a new profile, set the new flag
    } else if (profileName) {
        url += `?profile=${encodeURIComponent(profileName)}`; // Pass the selected profile name
    }

    window.location.href = url;
}

// Add click event listeners to each profile
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".profile-card").forEach(card => {
        card.addEventListener("click", function () {
            const profileName = this.getAttribute("data-profile");

            if (this.classList.contains("add-profile")) {
                redirectToProfile(true); // Open empty input for new profile
            } else {
                redirectToProfile(false, profileName); // Pass the profile name
            }
        });
    });
});
