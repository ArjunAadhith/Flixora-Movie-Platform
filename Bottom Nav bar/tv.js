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


//banner

const banners = [
    {
        image: '../image/oHPoF0Gzu8xwK4CtdXDaWdcuZxZ.jpg',
        title: '../image/Mufasa_The_Lion_King_logo.png',
        description: 'Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.',
        year: '2025',
        rating: 'U/A 12+',
        duration: '2h 01m',
        languages: '4 languages',
        genres: ['Animal Adventure', 'Animation', 'Adventure','Fantasy']
    },
    {
        image: '../image/Captain-America-Brave-New-World.jpg',
        title: '../image/Marvels_Captain_America_Brave_New_World. png.webp',
        description: 'Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.',
        year: '2025',
        rating: 'U/A 15+',
        duration: '1h 58m',
        languages: '4 languages',
        genres: ['Action Epic', 'Adventure Epic', 'Sci-Fi Epic', 'Superhero']
    },
    {
        image: '../image/the-wild-robot.jpg',
        title: '../image/The_Wild_Robot_logo.png',
        description: 'After a shipwreck, Roz, an intelligent robot, adapts to an island by bonding with animals and caring for an orphaned gosling to survive.',
        year: '2024',
        rating: 'U/A 5+',
        duration: '1h 42m',
        languages: '2 languages',
        genres: ['Family', 'Adventure']
    },

    {
        image: '../image/1740067625098-i.avif',
        title: '../image/pak vs india.png',
        description: 'India put in a clinical performance to topple Bangladesh by six wickets and begin their ICC Champions Trophy 2025 campaign on a high.',
        year: 'ICC Champions Trophy 2025',        
        rating: '15m',
        duration: 'Cricket',
        languages: '4 languages',
        genres: ['Sport']
    },
    {
        image: '../image/Ghosted_Video_Poster_01.jpg',
        title: '../image/ghosted-logo-CD3186C735-seeklogo.com.png',
        description: 'Cole falls for the mysterious Sadie, only to learn she`s a secret agent. Before a second date, they`re thrust into a global mission to save the world.',
        year: '2023',
        rating: 'U/A 15+',
        duration: '1h 56m',
        languages: '2 languages',
        genres: ['Action', 'Comedy', 'Romance']
    },
    
    {
        image: '../image/sivakarthikeyan-amaran-115444924-16x9_0.avif',
        title: '../image/AAAABQA-_qOQT5dNgmRU9e27AxaD7WezjDpVf99nIB6KZYLQM5r_ckpiVkpJUtmC0ntim6WsAratBt_u7qQh4NGaOHpnV3NBiOr6IFvjlNd0ysxY.png',
        description: 'The life of Major Mukund Varadarajan and is set against the backdrop of the Qazipathri Operation in Shopian, Kashmir, which took place back in 2014.',
        year: '2024',
        rating: 'U/A 10+',
        duration: '2h 49m',
        languages: '5 languages',
        genres: ['Action Epic','Tragedy','Biography','Drama']
    },
    {
        image: '../image/Anime_OnePiece_Luffy_nami_Sanji_Usopp_Chopper_Robin_Brooke_Franky_Jinbe_EggheadArc.jpg',
        title: '../image/One-Piece-Logo.png',
        description: 'Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as the One Piece.',
        year: '2025',
        rating: 'U/A 18+',
        duration: 'Anime',
        languages: '2 languages',
        genres: ['Anime', 'Action', 'Adventure', 'Fantasy Epic']
    },
    {
        image: '../image/0d3e5a2a4177f9368c33b411cccb8951.png',
        title: '../image/Squid Game 2 Logo Vector.png',
        description: 'Hundreds of desperate players enter a deadly survival game based on children`s games, competing for a massive 45.6 billion-won prize.',
        year: '2021–2025',
        rating: 'U/A 16+',
        duration: 'TV-MA 1h',
        languages: '5 languages',
        genres: ['Conspiracy Thriller', 'Korean Drama', 'Thriller','Suspense Mystery']
    },
    {
        image: '../image/hear_me_1736331459_1024x682.webp',
        title: '../image/Screenshot_2025-02-24_221023-removebg-preview.png',
        description: 'A doctor sued for misdiagnosis seeks a firefighter as a character witness, leading to an unexpected romance.',
        year: '2012',
        rating: 'U/A 16+',
        duration: '2h 01m',
        languages: 'Korean',
        genres: ['Romance', 'Comedy']
    },
    {
        image: '../image/Kung-Fu-Panda-3.jpg',
        title: '../image/17ae7ccc123c45c14397e1db5ca990a0.jpg',
        description: 'Po becomes the Spiritual Leader and must train a new Dragon Warrior, while a wicked sorceress plots to revive Po’s past foes from the spirit realm.',
        year: '2024',
        rating: 'U/A 5+',
        duration: '1h 34m',
        languages: '3 languages',
        genres: ['Comedy', 'Adventure']
    }


];

let currentBanner = 0;
const banner = document.querySelector('.banner');
const movieTitle = document.querySelector('.movie-title');
const description = document.getElementById('description');
const year = document.getElementById('year');
const rating = document.getElementById('rating');
const duration = document.getElementById('duration');
const languages = document.getElementById('languages');
const genresContainer = document.getElementById('genres');
const thumbnailsContainer = document.querySelector('.thumbnails');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbnails = [];

// **Update Banner Function**
function updateBanner(index) {
  if (index < 0) index = banners.length - 1;
  if (index >= banners.length) index = 0;

  currentBanner = index;
  const newBanner = banners[index];
  banner.style.backgroundImage = `url(${newBanner.image})`;
  movieTitle.src = newBanner.title;
  description.textContent = newBanner.description;
  year.textContent = newBanner.year;
  rating.textContent = newBanner.rating;
  duration.textContent = newBanner.duration;
  languages.textContent = newBanner.languages;
  genresContainer.innerHTML = newBanner.genres.map(genre => `<span>${genre}</span>`).join(' ');

  document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });

  scrollThumbnailIntoView(index);
  updateThumbnailScroll();
}

// **Create Thumbnails**
banners.forEach((banner, index) => {
  const thumb = document.createElement('div');
  thumb.classList.add('thumbnail');
  thumb.style.backgroundImage = `url(${banner.image})`;
  thumb.addEventListener('click', () => {
    updateBanner(index);
  });
  thumbnailsContainer.appendChild(thumb);
  thumbnails.push(thumb);
});

// **Auto Scroll Banner**
function autoChangeBanner() {
  updateBanner(currentBanner + 1);
}
setInterval(autoChangeBanner, 5500);
updateBanner(currentBanner);

// **Thumbnail Scrolling**
function updateThumbnailScroll() {
  const maxScrollLeft = thumbnailsContainer.scrollWidth - thumbnailsContainer.clientWidth;
  prevBtn.style.display = thumbnailsContainer.scrollLeft > 0 ? "block" : "none";
  nextBtn.style.display = thumbnailsContainer.scrollLeft < maxScrollLeft ? "block" : "none";
}

// **Ensure the active thumbnail is visible**
function scrollThumbnailIntoView(index) {
  const activeThumb = thumbnails[index];
  if (!activeThumb) return;

  const containerRect = thumbnailsContainer.getBoundingClientRect();
  const thumbRect = activeThumb.getBoundingClientRect();

  if (thumbRect.left < containerRect.left) {
    thumbnailsContainer.scrollBy({ left: thumbRect.left - containerRect.left - 10, behavior: 'smooth' });
  } else if (thumbRect.right > containerRect.right) {
    thumbnailsContainer.scrollBy({ left: thumbRect.right - containerRect.right + 10, behavior: 'smooth' });
  }
}

// **Scroll Buttons**
prevBtn.addEventListener('click', () => {
  thumbnailsContainer.scrollBy({ left: -150, behavior: 'smooth' });
  setTimeout(updateThumbnailScroll, 500);
});

nextBtn.addEventListener('click', () => {
  thumbnailsContainer.scrollBy({ left: 150, behavior: 'smooth' });
  setTimeout(updateThumbnailScroll, 500);
});

// **Update visibility of arrows when scrolling**
thumbnailsContainer.addEventListener("scroll", updateThumbnailScroll);

// **Initialize on Load**
updateThumbnailScroll();




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
