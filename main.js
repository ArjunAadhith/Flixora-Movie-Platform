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
    "categories.html": "categories",
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
    image: "./image/oHPoF0Gzu8xwK4CtdXDaWdcuZxZ.jpg",
    title: "./image/Mufasa_The_Lion_King_logo.png",
    description:
      "Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.",
    year: "2025",
    rating: "U/A 12+",
    duration: "2h 01m",
    languages: "4 languages",
    genres: ["Animal Adventure", "Animation", "Adventure", "Fantasy"],
  },
  {
    image:
      "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/5195/1739947245195-i",
    title: "./image/game of thrones logo.png",
    description:
      "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    year: "2011–2019",
    rating: "U/A 22+",
    duration: "1h 01m",
    languages: "8 languages",
    genres: ["Drama", "Epic", "Adventure", "Fantasy", "Tragedy", "Action"],
  },
  {
    image: "./image/Captain-America-Brave-New-World.jpg",
    title: "./image/Marvels_Captain_America_Brave_New_World. png.webp",
    description:
      "Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.",
    year: "2025",
    rating: "U/A 15+",
    duration: "1h 58m",
    languages: "4 languages",
    genres: ["Action Epic", "Adventure Epic", "Sci-Fi Epic", "Superhero"],
  },
  {
    image: "./image/the-wild-robot.jpg",
    title: "./image/The_Wild_Robot_logo.png",
    description:
      "After a shipwreck, Roz, an intelligent robot, adapts to an island by bonding with animals and caring for an orphaned gosling to survive.",
    year: "2024",
    rating: "U/A 5+",
    duration: "1h 42m",
    languages: "2 languages",
    genres: ["Family", "Adventure"],
  },

  {
    image: "./image/1740067625098-i.avif",
    title: "./image/pak vs india.png",
    description:
      "India put in a clinical performance to topple Bangladesh by six wickets and begin their ICC Champions Trophy 2025 campaign on a high.",
    year: "ICC Champions Trophy 2025",
    rating: "15m",
    duration: "Cricket",
    languages: "4 languages",
    genres: ["Sport"],
  },
  {
    image: "./image/Ghosted_Video_Poster_01.jpg",
    title: "./image/ghosted-logo-CD3186C735-seeklogo.com.png",
    description:
      "Cole falls for the mysterious Sadie, only to learn she`s a secret agent. Before a second date, they`re thrust into a global mission to save the world.",
    year: "2023",
    rating: "U/A 15+",
    duration: "1h 56m",
    languages: "2 languages",
    genres: ["Action", "Comedy", "Romance"],
  },

  {
    image: "./image/sivakarthikeyan-amaran-115444924-16x9_0.avif",
    title:
      "./image/AAAABQA-_qOQT5dNgmRU9e27AxaD7WezjDpVf99nIB6KZYLQM5r_ckpiVkpJUtmC0ntim6WsAratBt_u7qQh4NGaOHpnV3NBiOr6IFvjlNd0ysxY.png",
    description:
      "The life of Major Mukund Varadarajan and is set against the backdrop of the Qazipathri Operation in Shopian, Kashmir, which took place back in 2014.",
    year: "2024",
    rating: "U/A 10+",
    duration: "2h 49m",
    languages: "5 languages",
    genres: ["Action Epic", "Tragedy", "Biography", "Drama"],
  },
  {
    image:
      "./image/Anime_OnePiece_Luffy_nami_Sanji_Usopp_Chopper_Robin_Brooke_Franky_Jinbe_EggheadArc.jpg",
    title: "./image/One-Piece-Logo.png",
    description:
      "Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as the One Piece.",
    year: "2025",
    rating: "U/A 18+",
    duration: "Anime",
    languages: "2 languages",
    genres: ["Anime", "Action", "Adventure", "Fantasy Epic"],
  },
  {
    image: "./image/0d3e5a2a4177f9368c33b411cccb8951.png",
    title: "./image/Squid Game 2 Logo Vector.png",
    description:
      "Hundreds of desperate players enter a deadly survival game based on children`s games, competing for a massive 45.6 billion-won prize.",
    year: "2021–2025",
    rating: "U/A 16+",
    duration: "TV-MA 1h",
    languages: "5 languages",
    genres: [
      "Conspiracy Thriller",
      "Korean Drama",
      "Thriller",
      "Suspense Mystery",
    ],
  },
  {
    image: "./image/hear_me_1736331459_1024x682.webp",
    title: "./image/Screenshot_2025-02-24_221023-removebg-preview.png",
    description:
      "A doctor sued for misdiagnosis seeks a firefighter as a character witness, leading to an unexpected romance.",
    year: "2012",
    rating: "U/A 16+",
    duration: "2h 01m",
    languages: "Korean",
    genres: ["Romance", "Comedy"],
  },
  {
    image: "./image/Kung-Fu-Panda-3.jpg",
    title: "./image/17ae7ccc123c45c14397e1db5ca990a0.jpg",
    description:
      "Po becomes the Spiritual Leader and must train a new Dragon Warrior, while a wicked sorceress plots to revive Po’s past foes from the spirit realm.",
    year: "2024",
    rating: "U/A 5+",
    duration: "1h 34m",
    languages: "3 languages",
    genres: ["Comedy", "Adventure"],
  },
];

let currentBanner = 0;
const banner = document.querySelector(".banner");
const movieTitle = document.querySelector(".movie-title");
const description = document.getElementById("description");
const year = document.getElementById("year");
const rating = document.getElementById("rating");
const duration = document.getElementById("duration");
const languages = document.getElementById("languages");
const genresContainer = document.getElementById("genres");
const thumbnailsContainer = document.querySelector(".thumbnails");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
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
  genresContainer.innerHTML = newBanner.genres
    .map((genre) => `<span>${genre}</span>`)
    .join(" ");

  document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });

  scrollThumbnailIntoView(index);
  updateThumbnailScroll();
}

// **Create Thumbnails**
banners.forEach((banner, index) => {
  const thumb = document.createElement("div");
  thumb.classList.add("thumbnail");
  thumb.style.backgroundImage = `url(${banner.image})`;
  thumb.addEventListener("click", () => {
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
  const maxScrollLeft =
    thumbnailsContainer.scrollWidth - thumbnailsContainer.clientWidth;
  prevBtn.style.display = thumbnailsContainer.scrollLeft > 0 ? "block" : "none";
  nextBtn.style.display =
    thumbnailsContainer.scrollLeft < maxScrollLeft ? "block" : "none";
}

// **Ensure the active thumbnail is visible**
function scrollThumbnailIntoView(index) {
  const activeThumb = thumbnails[index];
  if (!activeThumb) return;

  const containerRect = thumbnailsContainer.getBoundingClientRect();
  const thumbRect = activeThumb.getBoundingClientRect();

  if (thumbRect.left < containerRect.left) {
    thumbnailsContainer.scrollBy({
      left: thumbRect.left - containerRect.left - 10,
      behavior: "smooth",
    });
  } else if (thumbRect.right > containerRect.right) {
    thumbnailsContainer.scrollBy({
      left: thumbRect.right - containerRect.right + 10,
      behavior: "smooth",
    });
  }
}

// **Scroll Buttons**
prevBtn.addEventListener("click", () => {
  thumbnailsContainer.scrollBy({ left: -150, behavior: "smooth" });
  setTimeout(updateThumbnailScroll, 500);
});

nextBtn.addEventListener("click", () => {
  thumbnailsContainer.scrollBy({ left: 150, behavior: "smooth" });
  setTimeout(updateThumbnailScroll, 500);
});

// **Update visibility of arrows when scrolling**
thumbnailsContainer.addEventListener("scroll", updateThumbnailScroll);

// **Initialize on Load**
updateThumbnailScroll();

//new movies

const moviesContainer = document.querySelector(".movies-container");
const scrollLeftBtn = document.getElementById("scrollingLeft");
const scrollRightBtn = document.getElementById("scrollingRight");

// Scroll left
scrollLeftBtn.addEventListener("click", () => {
  moviesContainer.scrollBy({ left: -500, behavior: "smooth" });
});

// Scroll right
scrollRightBtn.addEventListener("click", () => {
  moviesContainer.scrollBy({ left: 500, behavior: "smooth" });
});

// Show/hide buttons based on scroll position
function updateScrollButtons() {
  scrollLeftBtn.style.display =
    moviesContainer.scrollLeft > 0 ? "block" : "none";
  scrollRightBtn.style.display =
    moviesContainer.scrollLeft + moviesContainer.clientWidth <
    moviesContainer.scrollWidth
      ? "block"
      : "none";
}

moviesContainer.addEventListener("scroll", updateScrollButtons);
window.addEventListener("load", updateScrollButtons);





//recommended movies

const galleryData = [
  {
    id: 1,
    image:
      "./image/recommended movies/cars 3.png",
    bannerImage:
      "https://www.thespectrum.com/gcdn/-mm-/003af9fd467f6716a075c6d74a716fc2dbf29e3e/c=467-0-3417-1667/local/-/media/2017/10/06/USATODAY/USATODAY/636428976137494619-XXX-IMG-LIGHTNING-CARS-3-1-1-OFIPLGL6.JPG?width=1733&height=980&fit=crop&format=pjpg&auto=webp", 
    title: "Cars 3",
    year: "2017",
    rating: "U",
    season: "Family/Sport",
    language: "2 languages",
    description:
      "Lightning McQueen sets out to prove to a new generation of racers that he's still the best race car in the world.",
  },
  {
    id: 2,
    image:
      "https://i.ytimg.com/vi/s5RDMG_tUao/maxresdefault.jpg",
    bannerImage:
      "https://i.ytimg.com/vi/s5RDMG_tUao/maxresdefault.jpg",
    title: "Vj Siddhu Home Tour",
    year: "2024",
    rating: "U/A 12+",
    season: "Vlog",
    language: "Tamil",
    description:
      "Explore VJ Siddhu's stunning home tour, showcasing elegant interiors, modern design & cozy vibes!",
  },
  {
    id: 3,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
    bannerImage:
      "https://www.koimoi.com/wp-content/new-galleries/2025/01/interstellar-re-release-box-office-advance-booking-1-lakh-tickets-already-booked-but-theres-one-sad-update-for-fans.jpg",
    title: "Interstellar",
    year: "2014",
    rating: "PG-13",
    season: "Sci-fi/Adventure",
    language: "6 languages",
    description:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  },{
    id: 4,
    image:
      "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_.jpg",
    bannerImage:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/06/17-most-heartbreaking-deaths-in-death-note-1.jpg",
    title: "Death Note",
    year: "2006-2007",
    rating: "TV-14",
    season: "Anime",
    language: "2 languages",
    description:
      "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
  },
  {
    id: 5,
    image:
      "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      " https://m.media-amazon.com/images/M/MV5BOTcxNzNmMzItYTk0ZC00YmM4LThhYTQtOTFhYzE4YjNkODhmXkEyXkFqcGdeQWpnYW1i._V1_.jpg",
    title: "Deadpool & Wolverine",
    year: "2024",
    rating: "U/A 15+",
    season: "Action/Comedy",
    language: "4 languages",
    description:
      "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.",
  },
  {
    id: 6,
    image:
      " https://images.justwatch.com/poster/301444667/s332/season-3",
    bannerImage:
      " https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/An-image-of-all-the-House-of-the-Dragon-characters-standing-in-a-line.jpg",
    title: "House of the Dragon",
    year: "2022",
    rating: "U/A 21+",
    season: "2S",
    language: "7 languages",
    description:
      "An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.",
  },
  {
    id: 7,
    image:
      "https://bingeddata.s3.amazonaws.com/uploads/2024/02/lucky-baskhar-2024-telugu-movie-streaming-watch-online.jpg ",
    bannerImage:
      "https://www.koimoi.com/wp-content/new-galleries/2024/08/lucky-bhaskar-faces-another-delay-dulquer-salmaans-1980s-financial-drama-postponed-indefinitely.jpg",
    title: "Lucky Baskhar",
    year: "2024",
    rating: "A",
    season: "Crime",
    language: "4 languages",
    description:
      "A cash-strapped cashier working at a bank embarks on a risky investment scheme and soon gets drawn into the murky world of money laundering.",
  },
  {
    id: 8,
    image:
      "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/330/2024/11/12162931/cdqLnri3NEGcmfnqwk2TSIYtddg-683x1024.jpg",
    bannerImage:
      "./image/recommended movies/red one.png",
    title: "Red One",
    year: "2024",
    rating: "PG-13",
    season: "Adventure",
    language: "4 languages",
    description:
      "After Santa Claus is kidnapped, the North Pole's Head of Security must team up with a notorious hacker in a globe-trotting, action-packed mission to save Christmas.",
  },
  {
    id: 9,
    image:
      "https://m.media-amazon.com/images/M/MV5BZTc3MmQ1YjctYWM4YS00YzFmLTg2YjQtNjEzODQ5ZWVjZjVmXkEyXkFqcGc@._V1_.jpg",
    bannerImage:
      " https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUDWIoTxfNDZGp8HWeoMtsZpArcuY7Guc_6G4XwCbteGL_QGL_W878z0jiyVrbCmosnC0iHtiOCkIhiAclfEYZlaQIyvTAomDnAP.jpg?r=489",
    title: "Hidden Love",
    year: "2023",
    rating: "TV-Y7",
    season: "Romance/Drama",
    language: "2 languages",
    description:
      "Sang Zhi falls in love with Duan Jia Xu, the boy who often comes to her house to play with her brother. Years after she joins the university in the city he now lives, and during their day-to-day interactions, they slowly fall in love.",
  },
  {
    id: 10,
    image:
      " https://m.media-amazon.com/images/S/pv-target-images/95e90345c39c56004a13170186b1e0abe16cb6d5f2010101a0c982ba727162dc.jpg",
    bannerImage:
      " https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/yash_kgf_chapter_2_box_office_0_1200x768-sixteen_nine.jpeg?size=948:533",
    title: "K.G.F: Chapter 2",
    year: "2022",
    rating: "A",
    season: "Gangster",
    language: "6 languages",
    description:
      "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes, while the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy.",
  },
  {
    id: 11,
    image:
      " https://images-cdn.ubuy.co.in/633ff1157e3fbc25557517c8-one-piece-poster-japanese-anime-posters.jpg",
    bannerImage:
      " https://animotaku.fr/wp-content/uploads/2024/10/anime-one-piece-pause-avril-2025.jpg",
    title: "One Piece",
    year: "1999-2025",
    rating: "A",
    season: "TV Series",
    language: "2 languages",
    description:
      "Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as the One Piece.",
  },
  {
    id: 12,
    image:
      "./image/recommended movies/ditto.png",
    bannerImage:
      "https://a.ltrbxd.com/resized/sm/upload/eq/qm/7c/tt/ditto-1200-1200-675-675-crop-000000.jpg?v=a5b2dd782b ",
    title: "Ditto",
    year: "2022",
    rating: "U/A 13+",
    season: "Romance/Sci-Fi",
    language: "2 languages",
    description:
      "Yong hears a stranger's voice from the future, connecting them to each other and sharing their love stories.",
  },
 
  {
    id: 13,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS1jwd022MMhO3Y19HPCvzHqFSCSHtXz67gVoHfRdbX-uZIvJzK",
    bannerImage:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/pixar-up.jpg",
    title: "Carl's Date",
    year: "2023",
    rating: "G",
    season: "Family/Comedy",
    language: "3 languages",
    description:
      "A reluctant Carl Fredricksen agrees to go on a date, but admits he has no idea how dating works these days. Like the friend he is, Dug tries to calm Carl down and offers tips on how to make friends.",
  },

  {
    id: 14,
    image:
      " https://mvlteenvoice.com/wp-content/uploads/2023/12/when.png",
    bannerImage:
      " https://dramapanda.com/wp-content/uploads/2023/07/when-i-fly-towards-you-640x427.jpeg",
    title: "When I Fly Towards You",
    year: "2023",
    rating: "TV-PG",
    season: "Comedy/Romance",
    language: "2 languages",
    description:
      "Set off by a sweet chance encounter, 16-year-old Su Zaizai finds herself helplessly drawn to Zhang Lurang - her smart, charming yet distant schoolmate.",
  },

  {
    id: 15,
    image:
      " https://preview.redd.it/titanic-1997-v0-es9pbmd98s6b1.jpg?width=1080&crop=smart&auto=webp&s=556b1932bfdafecc17f545a6e11b7bc9c332b073",
    bannerImage:
      " https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/01/titanic_cropped.jpg",
    title: "Titanic",
    year: "1997",
    rating: "PG-13",
    season: "Romance/Drama",
    language: "4 languages",
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
  },
  
  {
    id: 16,
    image:
      " https://lumiere-a.akamaihd.net/v1/images/p_frozen2_19644_4c4b423d.jpeg?region=0%2C0%2C540%2C810",
    bannerImage:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/09/Frozen-2-international-poster-with-characters.jpg",
    title: "Frozen 2",
    year: "2019 ",
    rating: "U",
    season: "Family/Fantasy",
    language: "8 languages",
    description:
      "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom.",
  },

];


// Function to create gallery items
function createGallery() {
  const galleryRow = document.getElementById("galleryRow");

  galleryData.forEach((item) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.dataset.id = item.id;

    galleryItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="gallery-poster">
        <div class="item-info">
            <div class="item-title">${item.title}</div>
            <div class="item-details">${item.year} • ${item.rating} • ${item.season} • ${item.language}</div>
            <div class="item-description">${item.description}</div>
            <div class="button-container">
                <a href="#" class="watch-button">Watch Now</a>
                <a href="#" class="watch-list">
                    <span class="iconify" data-icon="uil:plus" width="25" height="25"></span>
                </a>
            </div>
        </div>`;

    galleryRow.appendChild(galleryItem);

    // Add event listener to watch button
    const watchButton = galleryItem.querySelector(".watch-button");
    watchButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      showExpandedCard(item);
    });
  });
}

// Function to show expanded card with the correct image (poster or banner)
function showExpandedCard(item) {
  const expandedCard = document.getElementById("expandedCard");
  const expandedContent = document.getElementById("expandedContent");

  expandedContent.innerHTML = `
        <img src="${item.bannerImage}" class="expanded-image" alt="${item.title}">
        <div class="expanded-info">
            <div class="item-title">${item.title}</div>
            <div class="item-details">${item.year} • ${item.rating} • ${item.season} • ${item.language}</div>
            <p style="margin-top: 15px; line-height: 1.5;">${item.description}</p>
            <div class="button-container">
                <a href="#" class="watch-button">Watch Now</a>
                <a href="#" class="watch-list">
                    <span class="iconify" data-icon="uil:plus" width="20" height="20"></span>
                </a>
            </div>
        </div>`;

  expandedCard.style.display = "flex";

  // Add event listener to watch-list button in expanded card (optional)
  const expandedWatchListButton = expandedContent.querySelector(".watch-list");
  expandedWatchListButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToWatchlist(item);
  });
}

// Function to handle adding to watchlist (optional)
function addToWatchlist(item) {
  console.log(`Added to watchlist: ${item.title}`);
}

// Function to close expanded card
function closeExpandedCard() {
  const expandedCard = document.getElementById("expandedCard");
  expandedCard.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  createGallery();

  // Add close button event listener
  document
    .getElementById("closeButton")
    .addEventListener("click", closeExpandedCard);

  // Close expanded card when clicking outside the content
  document.getElementById("expandedCard").addEventListener("click", (e) => {
    if (e.target === document.getElementById("expandedCard")) {
      closeExpandedCard();
    }
  });
});


// Scrolling Functionality

document.querySelectorAll(".movie-wrapper").forEach((wrapper) => {
  const movieContainer = wrapper.querySelector(".movie-container");
  const scrollLeftBtn = wrapper.querySelector(".scroll-left");
  const scrollRightBtn = wrapper.querySelector(".scroll-right");

  if (!movieContainer || !scrollLeftBtn || !scrollRightBtn) return;

  let isDragging = false;
  let startX;
  let initialScrollLeft;

  // Mouse Drag Scrolling
  movieContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - movieContainer.offsetLeft;
    initialScrollLeft = movieContainer.scrollLeft;
    movieContainer.style.cursor = "grabbing";
  });

  movieContainer.addEventListener("mouseleave", () => {
    isDragging = false;
    movieContainer.style.cursor = "grab";
  });

  movieContainer.addEventListener("mouseup", () => {
    isDragging = false;
    movieContainer.style.cursor = "grab";
  });

  movieContainer.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - movieContainer.offsetLeft;
    const moveDistance = (x - startX) * 2;
    movieContainer.scrollLeft = initialScrollLeft - moveDistance;
  });

  // Enable Touchpad Scrolling
  movieContainer.addEventListener("wheel", (e) => {
    movieContainer.scrollLeft += e.deltaY;
  });

  // Touch Scrolling (Mobile)
  let touchStartX = 0;
  let touchInitialScrollLeft = 0;

  movieContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].pageX - movieContainer.offsetLeft;
    touchInitialScrollLeft = movieContainer.scrollLeft;
  });

  movieContainer.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const touchX = e.touches[0].pageX - movieContainer.offsetLeft;
    const moveDistance = (touchX - touchStartX) * 2;
    movieContainer.scrollLeft = touchInitialScrollLeft - moveDistance;
  });

  // Button Controls (Arrow Scroll)
  scrollLeftBtn.addEventListener("click", () => {
    movieContainer.scrollBy({ left: -500, behavior: "smooth" });
  });

  scrollRightBtn.addEventListener("click", () => {
    movieContainer.scrollBy({ left: 500, behavior: "smooth" });
  });
});

// Global Controls
const globalMovieContainer = document.getElementById("gallery");
const globalScrollLeftBtn = document.getElementById("scrollLeft");
const globalScrollRightBtn = document.getElementById("scrollRight");

if (globalMovieContainer && globalScrollLeftBtn && globalScrollRightBtn) {
  globalScrollLeftBtn.addEventListener("click", () => {
    globalMovieContainer.scrollBy({ left: -500, behavior: "smooth" });
  });

  globalScrollRightBtn.addEventListener("click", () => {
    globalMovieContainer.scrollBy({ left: 500, behavior: "smooth" });
  });

  // Keyboard Arrow Key Scrolling
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      globalMovieContainer.scrollBy({ left: -300, behavior: "smooth" });
    } else if (e.key === "ArrowRight") {
      globalMovieContainer.scrollBy({ left: 300, behavior: "smooth" });
    }
  });
}
