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


document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const profileName = params.get("profile");
    const isNew = params.get("new");

    const profileInput = document.getElementById("profileName");

    if (profileInput) {
        if (isNew) {
            profileInput.value = ""; // Empty input for new profile
        } else if (profileName) {
            profileInput.value = profileName; // Set input field to the selected profile name
        }
    }

    // Highlight the selected profile avatar
    document.querySelectorAll(".profile-card").forEach(card => {
        if (card.getAttribute("data-profile") === profileName) {
            card.classList.add("selected"); // Add selected class to the matched profile
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const profileName = params.get("profile");
    const isNew = params.get("new");

    const profileInput = document.getElementById("profileName");
    const avatars = document.querySelectorAll(".profile-icon");

    if (profileInput) {
        if (isNew) {
            profileInput.value = ""; // Empty input for new profile
        } else if (profileName) {
            profileInput.value = profileName; // Set input field to the selected profile name
        }
    }

    let selectedAvatar = null;

    // Remove selection from all avatars first
    avatars.forEach(icon => {
        icon.classList.remove("selected");
        const checkMark = icon.querySelector('.check-mark');
        if (checkMark) checkMark.style.display = 'none';

        if (icon.getAttribute("data-profile") === profileName) {
            selectedAvatar = icon;
        }
    });

    // Highlight the selected profile avatar
    if (selectedAvatar) {
        selectedAvatar.classList.add("selected");
        const checkMark = selectedAvatar.querySelector('.check-mark');
        if (checkMark) checkMark.style.display = 'flex';
    } else if (avatars.length > 0) {
        // Default to the first avatar if no match is found
        avatars[0].classList.add("selected");
        const checkMark = avatars[0].querySelector('.check-mark');
        if (checkMark) checkMark.style.display = 'flex';
    }
});
