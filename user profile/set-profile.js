document.addEventListener("DOMContentLoaded", function () {
    const profileIcons = document.querySelectorAll(".profile-icon");

    profileIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            document.querySelector(".selected")?.classList.remove("selected");
            this.classList.add("selected");
        });
    });

    document.querySelector(".save-button").addEventListener("click", function () {
        alert("Profile saved successfully!");
        window.location.href = "profile.html";
    });
});
