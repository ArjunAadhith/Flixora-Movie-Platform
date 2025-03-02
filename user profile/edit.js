document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".iconify").forEach(icon => {
        icon.addEventListener("click", function () {
            window.location.href = "user profile/set-profile.html"; // Updated correct path
        });
    });
});
