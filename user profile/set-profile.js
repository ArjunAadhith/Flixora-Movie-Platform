document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const profileName = params.get("profile") || "Default Profile";

    const profileHeader = document.getElementById("profileName");
    if (profileHeader) {
        profileHeader.textContent = profileName;
    }
});



function scrollLeftBtn() {
    const profileList = document.getElementById("profileList");
    if (profileList) {
        profileList.scrollBy({ left: -200, behavior: "smooth" });
    } else {
        console.error("Element with ID 'profileList' not found.");
    }
}

function scrollRightBtn() {
    const profileList = document.getElementById("profileList");
    if (profileList) {
        profileList.scrollBy({ left: 200, behavior: "smooth" });
    } else {
        console.error("Element with ID 'profileList' not found.");
    }
}


function selectProfile(element) {
    document.querySelectorAll('.profile-icon').forEach(icon => {
        icon.classList.remove('selected');
        icon.querySelector('.check-mark').style.display = 'none';
    });

    element.classList.add('selected');
    element.querySelector('.check-mark').style.display = 'flex';

    const container = document.getElementById('profileList');
    if (container) {
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        const offset = (elementRect.left + elementRect.width / 2) - 
                       (containerRect.left + containerRect.width / 2);

        container.scrollBy({ left: offset, behavior: 'smooth' });
    } else {
        console.error("Element with ID 'profileList' not found.");
    }
}
