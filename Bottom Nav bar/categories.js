document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".search-container");
    const searchBox = document.querySelector("#search-box");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh
        const query = searchBox.value.trim();
        
        if (query !== "") {
            console.log("Searching for:", query);
            // Perform search logic (e.g., redirect, filter, or fetch data)
        }
    });
});

//bottom nav bar 

document.addEventListener("DOMContentLoaded", function () {
    // Get the current page's filename (e.g., "movie.html")
    let currentPage = window.location.pathname.split("/").pop();

    // Map pages to their respective icon IDs
    let pageMap = {
        "index.html": "home",
        "tv.html": "tv",
        "movie.html": "movie",
        "anime.html": "anime",
        "sport.html": "sport",
        "categories.html": "categories"
    };

    // Check if currentPage exists in pageMap
    if (pageMap[currentPage]) {
        document.getElementById(pageMap[currentPage]).classList.add("active");
    }
});

//profile

document.addEventListener("DOMContentLoaded", function () {
    const navbarProfile = document.getElementById("navbarProfile");
    const activeProfileImage = localStorage.getItem("activeProfileImage");

    if (activeProfileImage && navbarProfile) {
        navbarProfile.src = activeProfileImage;
    }
});


//new movies

const moviesContainer = document.querySelector('.movies-container');
const scrollLeftBtn = document.getElementById('scrollingLeft');
const scrollRightBtn = document.getElementById('scrollingRight');

// Scroll left
scrollLeftBtn.addEventListener('click', () => {
    moviesContainer.scrollBy({ left: -500, behavior: 'smooth' });
});

// Scroll right
scrollRightBtn.addEventListener('click', () => {
    moviesContainer.scrollBy({ left: 500, behavior: 'smooth' });
});

// Show/hide buttons based on scroll position
function updateScrollButtons() {
    scrollLeftBtn.style.display = moviesContainer.scrollLeft > 0 ? 'block' : 'none';
    scrollRightBtn.style.display = moviesContainer.scrollLeft + moviesContainer.clientWidth < moviesContainer.scrollWidth ? 'block' : 'none';
}

moviesContainer.addEventListener('scroll', updateScrollButtons);
window.addEventListener('load', updateScrollButtons);














//recommended movies

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".movie-wrapper").forEach(wrapper => {
        const movieContainer = wrapper.querySelector(".movie-container");
        const scrollLeftBtn = wrapper.querySelector(".scroll-left");
        const scrollRightBtn = wrapper.querySelector(".scroll-right");

        let isDown = false;
        let startX;
        let scrollLeft;

        // Mouse Drag Scrolling
        movieContainer.addEventListener("mousedown", (e) => {
            isDown = true;
            startX = e.pageX - movieContainer.offsetLeft;
            scrollLeft = movieContainer.scrollLeft;
            movieContainer.style.cursor = "grabbing";
        });

        movieContainer.addEventListener("mouseleave", () => {
            isDown = false;
            movieContainer.style.cursor = "grab";
        });

        movieContainer.addEventListener("mouseup", () => {
            isDown = false;
            movieContainer.style.cursor = "grab";
        });

        movieContainer.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - movieContainer.offsetLeft;
            const walk = (x - startX) * 2;
            movieContainer.scrollLeft = scrollLeft - walk;
        });

        // Enable Touchpad Scrolling
        movieContainer.addEventListener("wheel", (e) => {
            movieContainer.scrollLeft += e.deltaY; 
        });

        // Touch Scrolling (Mobile)
        let touchStartX = 0;
        let touchScrollLeft = 0;

        movieContainer.addEventListener("touchstart", (e) => {
            touchStartX = e.touches[0].pageX - movieContainer.offsetLeft;
            touchScrollLeft = movieContainer.scrollLeft;
        });

        movieContainer.addEventListener("touchmove", (e) => {
            e.preventDefault();
            const touchX = e.touches[0].pageX - movieContainer.offsetLeft;
            const walk = (touchX - touchStartX) * 2;
            movieContainer.scrollLeft = touchScrollLeft - walk;
        });

        // Button Controls (Arrow Scroll)
        scrollLeftBtn.addEventListener("click", () => {
            movieContainer.scrollBy({ left: -500, behavior: "smooth" });
        });

        scrollRightBtn.addEventListener("click", () => {
            movieContainer.scrollBy({ left: 500, behavior: "smooth" });
        });

        // Keyboard Arrow Key Scrolling
        document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") {
                movieContainer.scrollBy({ left: -300, behavior: "smooth" });
            } else if (e.key === "ArrowRight") {
                movieContainer.scrollBy({ left: 300, behavior: "smooth" });
            }
        });
    });
});
