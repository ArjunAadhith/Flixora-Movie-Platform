document.addEventListener("DOMContentLoaded", function () {
    // Function to enable hover-based visibility for scrolling buttons
    function setupScrolling(wrapperSelector) {
        document.querySelectorAll(wrapperSelector).forEach(wrapper => {
            const movieContainer = wrapper.querySelector(".movie-container");
            const scrollLeftBtn = wrapper.querySelector(".scroll-left");
            const scrollRightBtn = wrapper.querySelector(".scroll-right");

            if (!movieContainer || !scrollLeftBtn || !scrollRightBtn) return;

            // Initially hide buttons
            scrollLeftBtn.style.display = "none";
            scrollRightBtn.style.display = "none";

            // Show buttons when hovering over the row
            wrapper.addEventListener("mouseenter", () => {
                updateScrollButtons();
            });

            // Hide buttons when leaving the row
            wrapper.addEventListener("mouseleave", () => {
                scrollLeftBtn.style.display = "none";
                scrollRightBtn.style.display = "none";
            });

            // Button click scrolling
            scrollLeftBtn.addEventListener("click", () => {
                movieContainer.scrollBy({ left: -500, behavior: "smooth" });
            });

            scrollRightBtn.addEventListener("click", () => {
                movieContainer.scrollBy({ left: 500, behavior: "smooth" });
            });

            // Update button visibility based on scroll position
            function updateScrollButtons() {
                scrollLeftBtn.style.display = movieContainer.scrollLeft > 0 ? "block" : "none";
                scrollRightBtn.style.display =
                    movieContainer.scrollLeft + movieContainer.clientWidth < movieContainer.scrollWidth
                        ? "block" : "none";
            }

            // Listen for scroll updates
            movieContainer.addEventListener("scroll", updateScrollButtons);
            window.addEventListener("load", updateScrollButtons);
        });
    }

    // Apply scrolling to movie sections
    setupScrolling(".movie-wrapper"); // Recommended Movies
    setupScrolling(".new-movies-wrapper"); // New Movies
});
