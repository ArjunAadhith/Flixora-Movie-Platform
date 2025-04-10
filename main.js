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
      " https://i.cbc.ca/1.6690550.1671412533!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/titanic.jpg",
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
      "https://images.moviesanywhere.com/62b4c7ed71a8431a4bbee9a38aebb2df/b3f61187-1c5a-4404-8cc2-37acd4a6648f.jpg?w=2560&r=16x9",
    title: "Frozen 2",
    year: "2019 ",
    rating: "U",
    season: "Family/Fantasy",
    language: "8 languages",
    description:
      "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom.",
  },

];


// All Time Favourites
const favoritesData = [
  {
    id: 0,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/c2fe66281e0053e0c70730e4ec656a75a26149f3d7934bb57d969f19fbb717d1.jpg",
    bannerImage:
      "https://www.highonfilms.com/wp-content/uploads/2023/09/Jailer-2023-Movie-Ending-Explained.jpg",
    title: "Jailer",
    year: "2023",
    rating: "U/A",
    season: "Action/Comedy",
    language: "4 languages",
    description:
      "A retired jailer goes on a manhunt to find his son's killers. But the road leads him to a familiar, albeit a bit darker place. Can he emerge from this complex situation successfully?",
  },
  {
    id: 1,
    image:
      "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg",
    bannerImage:
      "https://cdn.theatlantic.com/thumbor/4xedENNyVDQrfV_-6NrWA2wnfJo=/0x0:1600x900/1600x900/media/img/mt/2018/07/TDK/original.jpg",
    title: "The Dark Knight",
    year: "2008",
    rating: "PG-13",
    season: "Action/Thriller",
    language: "5 languages",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  {
    id: 1,
    image:
      "https://d229kpbsb5jevy.cloudfront.net/firstshows/content/portrait/movie/images/pzpldf.jpeg",
    bannerImage:
      "https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Farticle%2F-2024-12-13T11%253A00%253A29.254Z-Miss%2520You_L1.jpg&w=3840&q=75",
    title: "Miss You",
    year: "2024",
    rating: "U/A",
    season: "Romance",
    language: "2 languages",
    description:
      "A young man finds himself unexpectedly falling for a woman he initially despised. Their emotional journey explores the depth behind her refusal and the rollercoaster of feelings that unfolds.",
  },
  {
    id: 2,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/4707d08c54f84daa325b75fce6b9fdce120f04fac4ee48630ca833587a82465b.jpg",
    bannerImage:
      "https://www.hollywoodreporter.com/wp-content/uploads/2017/12/the_two_towers_-_h_-_2002.jpg",
    title: "The Lord of the Rings: The Two Towers",
    year: "2002 ",
    rating: "U",
    season: "Family/Adventure",
    language: "6 languages",
    description:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
  },
  {
    id: 3,
    image:
      "https://images.justwatch.com/poster/177638617/s718/the-shawshank-redemption.jpg",
    bannerImage:
      "https://i.redd.it/behind-the-scenes-of-the-shawshank-redemption-released-30-v0-fg7ql0tdtsqd1.jpg?width=800&format=pjpg&auto=webp&s=272093b155791c402a5be5e34c0a562b07f1d3c7",
    title: "Shawshank Redemption",
    year: "1994",
    rating: "R",
    season: "Drama",
    language: "4 languages",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    id: 4,
    image:
      "https://www.pakistantoday.com.pk/wp-content/uploads/2024/12/sonic-3-696x1068.jpg",
    bannerImage:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/08/sonic-3-knuckles-tails.jpg",
    title: "Sonic the Hedgehog 3",
    year: "2024",
    rating: "U/A",
    season: "Action/Comedy",
    language: "3 languages",
    description:
      "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched, Team Sonic must seek out an unlikely alliance.",
  },
  {
    id: 5,
    image:
      "https://image.tmdb.org/t/p/original/nGUUQAsnW5bmSjBNao8vXlK0QMK.jpg",
    bannerImage:
      "https://www.filmlinc.org/wp-content/uploads/2024/08/Anora-2-1600x900-c-default.jpg",
    title: "Anoray",
    year: "2024",
    rating: "PG",
    season: "Comedy/Romance",
    language: "3 languages",
    description:
      "A young escort from Brooklyn meets and impulsively marries the son of a Russian oligarch. Once the news reaches Russia, her fairy tale is threatened as his parents set out for New York to get the marriage annulled.",
  },
  {
    id: 6,
    image:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/swargam-et00415538-1728484866.jpg",
    bannerImage:
      "https://d2sal5lpzsf102.cloudfront.net/78575/public/public/system/studio_banner/78575/original/Swargam-Banner_1740672448.jpg",
    title: "Swargam",
    year: "2024",
    rating: "PG",
    season: "Thriller",
    language: "2 languages",
    description:
      "In the bustling city, two families live parallel lives, separated by wealth and social status. As the two families navigate their lives, they face challenges and triumphs.",
  },
  {
    id: 7,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/738856e184115fe60a90e0b777465e393f7da36914acf90255a577430f5fcf71.jpg",
    bannerImage:
      "https://images.cinemaplus.com/ticketing/heroart/4bb24353771706df4f7ffe800aa230f9.jpg",
    title: "My Penguin Friend",
    year: "2024",
    rating: "A",
    season: "Adventure/Family",
    language: "3 languages",
    description:
      "Inspired by a true story; an enchanting adventure about a lost penguin rescued from an oil spill, who transforms the life of a heartbroken fisherman.",
  },
  {
    id: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/2d/Flow_movie_poster.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/S/pv-target-images/42dbfcf2215f0e3ecddbb5e46e10acdc50d79552d337ac07c93c6e9c66123a2d._SX1080_FMjpg_.jpg",
    title: "Flow",
    year: "2024",
    rating: "PG",
    season: "Adventure/Fantasy",
    language: "2 languages",
    description:
      "https://m.media-amazon.com/images/S/pv-target-images/42dbfcf2215f0e3ecddbb5e46e10acdc50d79552d337ac07c93c6e9c66123a2d._SX1080_FMjpg_.jpg",
  },
  {
    id: 9,
    image:
      "https://images.moviesanywhere.com/5ebc4925e2c157b83fcdb8041f4413e9/0cf0984d-322c-4cfa-a394-fe4dc8ecc371.jpg",
    bannerImage:
      "https://attractionsmagazine.com/wp-content/uploads/2024/12/Mufasa-poster-03-courtesy-of-Disney-1.jpg",
    title: "Mufasa: The Lion King",
    year: "2024",
    rating: "U",
    season: "Adventure/Musical",
    language: "4 languages",
    description:
      "A cub lost and alone meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey.",
  }
];


// Additional data arrays for each genre
const trendingData = [
  {
    id: 1,
    image:
      "https://www.kiwikinos.ch/db_data/mov/4190/artw_01.jpg",
    bannerImage:
      "https://wallpapers.com/images/featured/spider-man-no-way-home-pictures-l3ztimmzaeeqfgir.jpg",
    title: "Spider-Man: No Way Home",
    year: "2021",
    rating: "U/A",
    season: "Action/Sci-fi",
    language: "5 languages",
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
  },
  {
    id: 2,
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_20cs_avatarwayofwater_mayupdate_1710_260aa445.jpeg",
    bannerImage:
      "https://images.augustman.com/wp-content/uploads/sites/6/2023/03/10114512/avatar-2.jpeg",
    title: "Avatar: The Way of Water",
    year: "2022",
    rating: "U/A",
    season: "Action/Sci-fi",
    language: "6 languages",
    description:
      "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
  },
  {
    id:3,
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d23f41184733377.65571621a3846.jpg",
    bannerImage:
      "https://www.telugubulletin.com/wp-content/uploads/2023/02/LEO.jpg",
    title: "Leo",
    year: "2023",
    rating: "U/A",
    season: "Action/Thriller",
    language: "4 languages",
    description:
      "Parthiban is a mild-mannered cafe owner who fends off a gang of murderous thugs and gains attention from a drug cartel claiming he was once a part of them.",
  },
  {
    id:4,
    image:
      "https://edgroom-blogs.s3.ap-south-1.amazonaws.com/202310081804529081219_image.jpg",
    bannerImage:
      "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/5333/1375333-i-e44f367bc7fa",
    title: "M.S. Dhoni: The Untold Story",
    year: "2016 ",
    rating: "U",
    season: "Sport/Drama",
    language: "3 languages",
    description:
      "The untold story of Mahendra Singh Dhoni's journey from ticket collector to trophy collector - the world-cup-winning captain of the Indian Cricket Team.",
  },
  {
    id:5,
    image:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/game-changer-et00311772-1731311322.jpg",
    bannerImage:
      "https://img.theweek.in/content/dam/week/week/news/entertainment/images/2024/12/30/Ram-Charan-Game-Changer.jpg",
    title: "Game Changer",
    year: "2025",
    rating: "U/A",
    season: "Action/Thriller",
    language: "5 languages",
    description:
      "An honest IAS officer's fight against a corrupt political system through fair and transparent elections.",
  },
  {
    id: 6,
    image:
      "https://m.media-amazon.com/images/M/MV5BOTcyYjczMjUtNjdjZS00ZjAwLTkzMzEtYjhkNDhiZmE1M2RlXkEyXkFqcGc@._V1_.jpg",
    bannerImage:
      "https://static.toiimg.com/thumb/msid-106183470,width-1280,height-720,resizemode-4/106183470.jpg",
    title: "Little Hearts",
    year: "2024",
    rating: "U/A",
    season: "Romance/Drama",
    language: "Malayalam",
    description:
      "The story follows father Baby and son Sibi navigating three intertwined romantic storylines set against Kattappana's scenic backdrop, blending humor with relatable love tales for a multigenerational audience.",
  },
  {
    id:7,
    image:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/nadikar-et00392130-1714663962.jpg",
    bannerImage:
      "https://images.indianexpress.com/2024/05/Nadikar-movie-review.jpg",
    title: "Nadikar",
    year: "2024",
    rating: "U/A",
    season: "Comedy",
    language: "Malayalam",
    description:
      "It follows the life of superstar David padikkal. David is a good actor but there comes a point in his life when he is forced to look inward to locate his real character and go beyond the facade of the star.",
  },
  {
    id:8,
    image:
      "https://a.ltrbxd.com/resized/film-poster/1/0/0/7/9/0/0/1007900-apocalypse-z-the-beginning-of-the-end-0-230-0-345-crop.jpg?v=94e5e477b7",
    bannerImage:
      "https://m.media-amazon.com/images/S/pv-target-images/9569aebe2d384efd1514c295a56e6002112622b8fbc20beccd1a8f319d298de9._SX1080_FMjpg_.jpg",
    title: "Apocalypse Z: The Beginning of the End",
    year: "2024",
    rating: "U/A",
    season: "Action/Horror",
    language: "English",
    description:
      "Manel is sheltering from a rabies-like disease which sweeps the planet, until he is forced to leave and meet unlikely but essential traveling companions.",
  },
  {
    id:9,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqxN_rXyicI6JFjnOm1lVeoYG0w99CF5uW0NHjpvMaDgil6kVQxZ76qTQXu0V10D_WwBhGPg",
    bannerImage:
      "https://www.sciencefriday.com/wp-content/uploads/2024/06/inside-out-2-promo.jpeg",
    title: "Inside Out 2",
    year: "2024",
    rating: "U/A",
    season: "Family/Comedy",
    language: "3 languages",
    description:
      "A sequel that features Riley entering puberty and experiencing brand new, more complex emotions as a result. As Riley tries to adapt to her teenage years, her old emotions try to adapt to the possibility of being replaced.",
  },
  {
    id:10,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/821d889bc57746a738aebf496d79ad41a260ab2450a7aea4f39d2ce863099249.jpg",
    bannerImage:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/03/godzilla-x-kong_-the-new-empire-2024-poster.jpg",
    title: "Godzilla x Kong: The New Empire",
    year: "2024",
    rating: "PG-13",
    season: "Action/Sci-fi",
    language: "7 languages",
    description:
      "Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Island's mysteries.",
  },
  {
    id:11,
    image:
      "https://lionsgate.brightspotcdn.com/de/a6/312c558543a2bdab386cfe38e3d0/the-killers-game-movies-he-poster-01.jpg",
    bannerImage:
      "https://i.ytimg.com/vi/eyJBleZ6hJM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA-4liSjmj_DsYfJddRn-4zcl3R4w",
    title: "The Killer's Game",
    year: "2024",
    rating: "R",
    season: "Action/Thriller",
    language: "English",
    description:
      "When a hitman is diagnosed with a terminal illness, he decides to take a hit out on himself. But when the very hitmen he hired also target his ex-girlfriend, he must fend off an army of assassin colleagues.",
  },
  {
    id:12,
    image:
      "https://m.media-amazon.com/images/M/MV5BNjc5MmMwN2MtODllZi00MWYwLWFmYWItMjViOTFmYWM3ZmUwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://th-i.thgim.com/public/entertainment/movies/4vtyyq/article69275909.ece/alternates/FREE_1200/_A0A5483.JPG",
    title: "Aghathiyaa",
    year: "2025",
    rating: "U/A",
    season: "Horror/Fantasy",
    language: "Tamil",
    description:
      "A group of entrepreneurs discover the dark history of a mansion when they attempt to turn a profit by converting it into a haunted house.",
  },
  {
    id:13,
    image:
      "https://m.media-amazon.com/images/M/MV5BYTA5NzVjYTktOTJjOC00NWFiLWI2ZGEtZmFmNzU1MzNiYmEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202501/yash-082148120-16x9_0.jpg?VersionId=Q28Knbr5lYAIsF6Heo_IP5C_Xd_ORyMA&size=690:388",
    title: "Toxic: A Fairy Tale for Grown-Ups",
    year: "2025",
    rating: "U/A",
    season: "Action/Thriller",
    language: "4 languages",
    description:
      "Set in old Goa, a drug cartel controls paradise behind its sunlit beaches and rich culture in this gripping tale of power and deception.",
  },
  {
    id:14,
    image:
      "https://in.bmscdn.com/events/moviecard/ET00434570.jpg",
    bannerImage:
      "https://images.ottplay.com/images/mithya-1738834840.jpg?impolicy=ottplay-202501_high&width=600",
    title: "Mithya",
    year: "2023",
    rating: "U/A",
    season: "Drama",
    language: "kannada",
    description:
      "It is a poignant journey of eleven-year-old Mithun, as he navigates a challenging path of self-discovery and resilience after a devastating loss shatters his world.",
  },
];


const newReleasesData = [
     {
    id:0,
    image:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hi-nanna-et00364503-1701678655.jpg",
    bannerImage:
      "https://www.koimoi.com/wp-content/new-galleries/2024/02/hi-nanna-movie-review-a-family-drama-weaving-love-and-its-resilience-02.jpg",
    title: "Hi Nanna",
    year: "2023",
    rating: "U",
    season: "Romance/Drama",
    language: "4 languages",
    description:
      "A single father begins to narrate the story of the missing mother to his child and nothing remains the same.",
  },
    {
    id:1,
    image:
      "https://musicart.xboxlive.com/7/ccb86600-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    bannerImage:
      "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/halle-bailey-in-the-little-mermaid.jpg",
    title: "The Little Mermaid",
    year: "2023",
    rating: "PG",
    season: "Fantasy/Family",
    language: "3 languages",
    description:
      "A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs so she can discover the world above water and impress a prince.",
  },
  {
    id:2,
    image:
      "https://m.media-amazon.com/images/M/MV5BOTQ1YTA5ZDQtYzk4Yi00OGE2LTlkNmYtOGJmYjgwNjFkNjZhXkEyXkFqcGc@._V1_.jpg",
    bannerImage:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00351087-sxntkbzwee-landscape.jpg",
    title: "Let's Get Married",
    year: "2023",
    rating: "U",
    season: "Comedy/Romance",
    language: "Tamil",
    description:
      "An intertwined couple who share both a workplace and a romantic bond that has flourished for a span exceeding two years.",
  },
  {
    id:3,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/7a8023893eb8675819c3725e0169dafd940913bdedbc61d0f81cbb2997ccfe9a.jpg",
    bannerImage:
      "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2017/10/06/Pictures/_4772dcce-aa5c-11e7-92d8-206e76e802d4.jpg",
    title: "Solo",
    year: "2017",
    rating: "U",
    season: " Action/Romance",
    language: "4 languages",
    description:
      "An anthology, telling the story of four different people, each story revolving around four different elements: Earth, Fire, Wind and Water.",
  },
  {
    id:4,
    image:
      "https://wallpapercave.com/wp/wp12359471.jpg",
    bannerImage:
      "https://chennaionline.com/wp-content/uploads/2023/02/Dada-Movie-Stills-69-1024x683.jpg",
    title: "Dada",
    year: "2023",
    rating: "U",
    season: "Romance/Drama",
    language: "4 languages",
    description:
      "A couple in love, accidentally become teenage parents. Unpleasant situations make them fall apart. Manikandan, left alone with his son, struggles as a single teenage father. Fate owns him, bringing Sindhu back into his life.",
  },
  {
    id:5,
    image:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/premalu-tamil-et00391009-1710506570.jpg",
    bannerImage:
      "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1032/1712839861032-i",
    title: "Premalu",
    year: "2024",
    rating: "U/A",
    season: "Comedy/Romance",
    language: "4 languages",
    description:
      "Sachin's quest for love takes unexpected turns, creating a laughter-filled love triangle.",
  },
  {
    id:6,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/0243e31e3fea5624f9c8532e468d5eb45173e593054886d31162eb20580c3b78.jpg",
    bannerImage:
      "https://images.kinorium.com/movie/shot/776446/h280_1166621.jpg",
    title: "La La Land",
    year: "2016",
    rating: "A",
    season: "Musical/Romance",
    language: "2 languages",
    description:
      "When Sebastian, a pianist, and Mia, an actress, follow their passion and achieve success in their respective fields, they find themselves torn between their love for each other and their careers.",
  },
  {
    id:7,
    image:
      "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F0%2Fgracenote%2F03311b74478783940314f25436c0fced.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/S/pv-target-images/cb22300f03e3eebf8fb4dde0d58fdc520f62576448f3e499e0b1bc068b5a8170._SX1080_FMjpg_.jpg",
    title: "My Fault",
    year: "2023",
    rating: "U/A",
    season: "Romance/Drama",
    language: " 6 languages",
    description:
      "Noah has to leave her town, boyfriend and friends behind and move into the mansion of her mother's new rich husband. There she meets Nick, her new stepbrother. They fall madly in love in secret.",
  },
  {
    id:8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBH9DB6_Sc7ED_ksqUuCAKkS6C4tmwiLsPtbfUTjaV3zEMI-_z-2uZJ2Xb_nCLrh6CkjX",
    bannerImage:
      "https://static.toiimg.com/photo/73579998.cms",
    title: "Oh My Kadavule",
    year: "2020",
    rating: "U/A",
    season: "Romance/Fantasy",
    language: "4 languages",
    description:
      "When you think marrying your best friend means a 'happily ever-after', but it turns out to be just the reverse.",
  },
    {
    id:9,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15309263_p_v8_ac.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/S/pv-target-images/5a672cf082ce060dee0ce7043b988f1b2e74c93bbad8b5eb86b82dc000463239.jpg",
    title: "Be with You",
    year: "2018",
    rating: "U/A",
    season: "Romance/Fantasy",
    language: "2 languages",
    description:
      "Woo Jin raises his son Ji Ho alone after his wife Soo A's passing. A year later, on a rainy day, she returns—but with no memory of her past.",
  },
    {
    id:10,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSFd5UzKx8uiOcZeZqFEpl49YCriiw-t1CKbXJVQiJwyuUVzpGcJXRrNZPbWrNc_0nyo2bZ",
    bannerImage:
      "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-ssv3aviprl5kttspne19rbjvp6-20190421211953.Medi.jpeg",
    title: "De De Pyaar De",
    year: "2019",
    rating: "U/A",
    season: "Romance/Comedy",
    language: "3 languages",
    description:
      "A 50-year-old single father faces disapproval from his family and his ex-wife when he falls in love with a 26-year-old woman.",
  },
    {
    id: 11,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRVzF07dXDb9M3T3npxI_TzAZNvPRduzRL4lxaefSXAa4pP-k9haymypZELTSTeybWZVV6V1Q",
    bannerImage:
      "https://i0.wp.com/thehollywoodhandle.co/wp-content/uploads/2024/02/float-movies-he-gallery-07.jpg?fit=900%2C572&ssl=1",
    title: "Float",
    year: "2023",
    rating: "U/A",
    season: "Romance/Drama",
    language: "2 languages",
    description:
      "After she nearly drowns, a young woman unexpectedly falls for the small-town lifeguard who rescued her. Based on the novel by Kate Marchant.",
  },
     {
    id: 11.5,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQpUS7DkFMk-pCHwJvL2qzFhIPUv-IZgLU87GnEzXNYQCx3e1NfstGZVsKqtvVTjMKHUJSJ",
    bannerImage:
      "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1t2tftx_e1382d20.jpeg?region=0%2C0%2C1580%2C880",
    title: "Tangled",
    year: "2010",
    rating: "U",
    season: "Family/Musical",
    language: "4 languages",
    description:
      "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.",
  },
    {
    id:12,
    image:
      "https://cdn.moviefone.com/image-assets/1097000/jNyLZjIgaYVkBli2JihHwABlAPY.jpg?d=360x540&q=60",
    bannerImage:
      "https://image.tmdb.org/t/p/w780/tsu10dpA3kskGNL9EVcKl2DUh4q.jpg",
    title: "Lubber Pandhu",
    year: "2024",
    rating: "U",
    season: "Sport/Romance",
    language: "4 languages",
    description:
      "Set in a rural backdrop, gully cricket stars Gethu and Anbu's rivalry intensifies when Anbu falls for Gethu's daughter, testing their skills and emotions.",
  },
    {
    id:13,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJVvLYOeK82BVLasc9jnS9LhNQdwgmeNPy4NQb_SphLpELsES5ja-cqZnXB9t7AqaM0Wl",
    bannerImage:
      "https://images.justwatch.com/backdrop/312128699/s640/anyone-but-you",
    title: "Anyone but You",
    year: "2023",
    rating: "U/A",
    season: "Comedy/Romance",
    language: "6 languages",
    description:
      "After an amazing first date, Bea and Ben's fiery attraction turns ice-cold--until they find themselves unexpectedly reunited at a wedding in Australia.",
  },
    {
    id:14,
    image:
      "https://musicart.xboxlive.com/7/afb05000-0000-0000-0000-000000000002/504/image.jpg",
    bannerImage:
      "https://www.cnet.com/a/img/resize/7e2cb88fc37e390f99bdc23b537774f15f8d30cf/hub/2018/03/09/3f6bc33b-43bf-467f-88fe-435bf59cd380/shape-of-water-mr-x-vfx-26a-211-050-plate.jpg?auto=webp&fit=crop&height=675&precrop=2048,1041,x0,y111&width=1200",
    title: "The Shape of Water",
    year: "2017",
    rating: "U/A",
    season: "Fantasy/Romance",
    language: "4 languages",
    description:
      "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
  },
     {
    id: 15,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZO6IQrtLJ-LF8n2BeXwUv8gI_xGZAe2ZqerEFjKAW0y9h3tZKOTqm2KT5_ExpYg55bZPvmA",
    bannerImage:
      "https://th-i.thgim.com/public/incoming/7y97v1/article67259201.ece/alternates/FREE_1200/Kushi%20new.jpg",
    title: "Kushi",
    year: "2023",
    rating: "U/A",
    season: "Romance/Drama",
    language: "4 languages",
    description:
      "Raised in an atheist household, a young man falls in love with the daughter of his father's arch-rival, a devout Hindu leader.",
  },
     {
    id:16,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhAog2VgZibzpqa0MDJlKlAJ18zkEw_wMsTtIMfXxfWy7IraW6Q98OEtyr0Z1uGhbDiteo",
    bannerImage:
      "https://www.rollingstone.com/wp-content/uploads/2024/10/WLIT_05307.jpg?w=1581&h=1054&crop=1",
    title: "We Live in Time",
    year: "2024",
    rating: "U/A",
    season: "Romance/Comedy",
    language: "2 languages",
    description:
      "After an unusual encounter, a talented chef and a recently divorcée fall in love and build the home and family they've always dreamed of, until a painful truth puts their love story to the test.",
  },
    {
    id:17,
    image:
      "https://play-lh.googleusercontent.com/proxy/cf2kdLQjX1RxBqKXLmI2c7vFptkoGHj6yfOEyvC8OqLpkvZsy1k89vkA-pXVZpSaXab1xxVEb9rtZNhBJz1M7MXgvk0bhTieVq0IHuzpX55utMqZJgjVfMkkJJ665WPl1ZcznYb74LzwuvNgH9o-cwg9niOt_f-yqiOnHA",
    bannerImage:
      "https://filmysasi.com/wp-content/uploads/2022/01/Hridayam-768x469.jpg",
    title: "Hridayam",
    year: "2022",
    rating: "U/A",
    season: "Romance/Drama",
    language: "3 languages",
    description:
      "The emotional journey of Arun, his carefree bachelor days in engineering college, and how he matures through various phases of life.",
  },
      {
    id: 18,
    image:
      "https://m.media-amazon.com/images/I/41n9cJrBmCL._SL500_._SL200_.jpg",
    bannerImage:
      "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQqNac6HfOIxvSGGRilsbXy0U2QkEY-FJ1C5uI_O28Q0AhI_d0g3vJh80-ahCr-YGVB4ILNZeJn9E-uitOSJ9JpuGrhAJEUzcJLf.jpg?r=b26",
    title: "After We Fell",
    year: "2021",
    rating: "U/A",
    season: "Romance/Drama",
    language: "2 languages",
    description:
      "As Tessa faces a life-changing decision, shocking family revelations shake her and Hardin’s future, making their hard-won love harder to secure.",
  }
];

const actionData = [
    {
    id:1,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17982732_p_v8_aa.jpg",
    bannerImage:
      "https://www.ritzmagazine.in/wp-content/uploads/2020/10/Suriyas-Soorarai-Pottru-To-Release-On-November-12.jpg",
    title: "Soorarai Pottru",
    year: "2020",
    rating: "U",
    season: "Action/Drama",
    language: "4 languages",
    description:
      "A determined villager challenges the aviation industry's elite by pursuing his vision of affordable air travel for all, despite numerous obstacles and setbacks.",
  },
  {
    id: 2,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26360920_p_v13_af.jpg",
    bannerImage:
      "https://www.hollywoodreporter.com/wp-content/uploads/2024/02/LAND-OF-BAD_Still-7-copy.jpg?w=1296&h=730&crop=1",
    title: "Land of Bad",
    year: "2024",
    rating: "R",
    season: "Action/Thriller",
    language: "4 languages",
    description:
      "A Delta Force team fights for survival as an Air Force drone pilot becomes its eyes in the sky.",
  },
  {
    id: 3,
    image:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/baby-john-et00386190-1733985497.jpg",
    bannerImage:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/12/25153517/baby-john-movie-ending-explained-1600x900.jpg",
    title: "Baby John",
    year: "2024",
    rating: "U/A",
    season: "Action/Drama",
    language: "3 languages",
    description:
      "Revolves around a DCP who transforms and travels to a different place in order to safeguard his family.",
  },
  {
    id:4,
    image:
      "https://preview.redd.it/1f1xaomdv9a91.jpg?auto=webp&s=96bf2353dcfeacb4d2642348ba54377abe825795",
    bannerImage:
      "https://sc0.blr1.cdn.digitaloceanspaces.com/article/180399-iplywznfqy-1664103907.jpeg",
    title: "Ponniyin Selvan: I",
    year: "2022",
    rating: "U/A",
    season: "Action/Adventure",
    language: "4 languages",
    description:
      "Vandiyathevan crosses the Chola land to deliver a message from the Crown Prince Aditha Karikalan, while Kundavai attempts to establish political peace as vassals and petty chieftains plot against the throne.",
  },
  {
    id:5 ,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTM3ZGUwYTEtZTI5NS00ZmMyLTk2YmQtMWU4YjlhZTI3NjRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://images.firstpost.com/uploads/2024/06/MixCollage-26-Jun-2024-12-50-PM-8555-2024-06-717dd311caaba0508153dfd95549fc55.jpg?im=FitAndFill=(596,336)",
    title: "Kalki 2898 AD",
    year: "2024",
    rating: "U/A",
    season: "Sci-fi/Action",
    language: "3 languages",
    description:
      "The future of those in the dystopian city of Kasi is altered when the destined arrival of Lord Vishnu's final avatar launches a war against darkness.",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSSuL2mkhIdCgi5yArS7QWKrUKYx57sphHBZ420xSnmg0ABNRg7XqE4tXQZNPeNxVQVmHsi",
    bannerImage:
      "https://www.hollywoodreporter.com/wp-content/uploads/2024/07/Lakshya-stars-in-KILL.-Photo-Credit-courtesy-of-Roadside-Attractions_rgb-H-2024.jpg?w=1296&h=730&crop=1",
    title: "Kill",
    year: "2024",
    rating: "U/A",
    season: "Action/Thriller",
    language: "4 languages",
    description:
      "During a train trip to New Delhi, a pair of commandos face an army of invading bandits.",
  },
  {
    id: 7,
    image:
      "https://m.media-amazon.com/images/M/MV5BODUyZjkxZDMtZGI3ZC00ZmEwLTgwMTUtYTU4OTQ5YjU4ZjRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23920857/53B1661F_E5EF_4358_9ACF_9319989365C0.jpeg?quality=90&strip=all&crop=0.017857142857139,0,99.964285714286,100",
    title: "Bullet Train",
    year: "2022",
    rating: "A",
    season: "Action/Comedy",
    language: "2 languages",
    description:
      "Five assassins aboard a swiftly-moving bullet train find out that their missions have something in common.",
  },
  {
    id:8 ,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjm_Dh2ymeSgkYufVYQBHoR6dcO8QkNQFEiOw6wxGGZufMLkrcdOVkPjBvTaiJMLnFBlKaDw",
    bannerImage:
      "https://m.media-amazon.com/images/S/pv-target-images/4de3596c1b0690762bc3be8eeb4e1e06fa68e0addab1d7a0c993d29dbf2622c0._SX1080_FMjpg_.jpg",
    title: "Viduthalai Part 1",
    year: "2023",
    rating: "U/A",
    season: "Crime/Action",
    language: "4 languages",
    description:
      "A police officer is recruited to capture the leader of a separatist group.",
  },
    {
    id: 9,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVn0y7RuNHnktmebSF6Uf_bv6Ue5ZxMmrRR1I_Yz9Bvs51_P1AMV5ku8qB98PmOVTFK_oh",
    bannerImage:
      "https://www.myworldofmovies.in/wp-content/uploads/2022/06/vikram-two-latest.gif",
    title: "Vikram",
    year: "2022",
    rating: "U/A",
    season: "Action/Thriller",
    language: "4 languages",
    description:
      "A special investigator discovers a case of serial killings is not what it seems to be, and leading down this path is only going to end in a war between everyone involved.",
  },
    {
    id: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3giEteXGggow1hYtpRIuy3bDLO_Z9aoximYp_tuFK0Bb0N_fnmPaChKv1l_mgBxiiOwN3",
    bannerImage:
      "https://www.indiewire.com/wp-content/uploads/2023/09/JAWAN-Shah-Rukh-Khan.jpg",
    title: "Jawan",
    year: "2023",
    rating: "U/A",
    season: "Action/Thriller",
    language: "6 languages",
    description:
      "A prison warden recruits inmates to commit outrageous crimes that shed light on corruption and injustice - and that lead him to an unexpected reunion.",
  },
    {
    id: 11,
    image:
      "https://rukminim2.flixcart.com/image/850/1000/l01blow0/poster/4/p/s/medium-pirates-of-the-caribbean-on-good-quality-hd-quality-original-imagbx2ppdupkdka.jpeg?q=20&crop=false",
    bannerImage:
      "https://hips.hearstapps.com/hmg-prod/images/pirates-of-the-caribbean-movies-in-order-disney-plus-5-1655317294.png?crop=1xw:0.8069881889763779xh;center,top",
    title: "Pirates of the Caribbean",
    year: "2003-2017",
    rating: "U/A",
    season: "Action/Adventure",
    language: "8 languages",
    description:
      "Blacksmith Will Turner teams up with eccentric pirate `Captain`` Jack Sparrow to save Elizabeth Swann, the governor's daughter and his love, from Jack's former pirate allies, who are now undead.",
  },
    {
    id:12,
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg",
    bannerImage:
      "https://lumiere-a.akamaihd.net/v1/images/image_c2fe5514.jpeg?region=0,0,2048,878",
    title: "Raya and the Last Dragon",
    year: "2021",
    rating: "U",
    season: "Action/Adventure",
    language: "6 languages",
    description:
      "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
  },
  {
    id: 13,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgiGVlHabuN6dmgW_0E82BSRVkBETsvXdnSISCmefDySoIeQI0mak_0Le--LCe0bQK4vVrug",
    bannerImage:
      "https://images4.alphacoders.com/147/thumb-1920-147496.jpg",
    title: "Tron: Legacy",
    year: "2010",
    rating: "U",
    season: "Sci-fi/Action",
    language: "4 languages",
    description:
      "The son of a virtual world designer goes looking for his father and ends up inside the digital world that his father designed.",
  },
    {
    id: 14,
    image:
      "https://posterspy.com/wp-content/uploads/2024/10/Venom-The-Last-Dance-Poster.jpg",
    bannerImage:
      "https://www.dneg.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F3sjsytt3tkv5%2F1XTlbhMN6i2myR0FduXnF9%2Fd34a2e397e3e6b14afe80a67da79117c%2FVenom_The_Last_Dance9633.jpg&w=3840&q=75",
    title: "Venom: The Last Dance",
    year: "2024",
    rating: "U/A",
    season: "Action/Sci-fi",
    language: "4 languages",
    description:
      "Eddie Brock and Venom must make a devastating decision as they're pursued by a mysterious military man and alien monsters from Venom's home world.",
  },
  {
    id: 15,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanLn4C93_fZCHLoMmGhQHJLjM4eHbhN23Eu8OpF7-8wDqBw2ehb_TvjAknVD-8NvtqAinXw",
    bannerImage:
      "https://freestonecountytimesonline.com/wp-content/uploads/2023/05/fast-x-3.png",
    title: "Fast X",
    year: "2023",
    rating: "PG-13",
    season: "Action/Crime",
    language: "6 languages",
    description:
      "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.",
  },
   {
    id:16,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQwblbv-87AJXtZvlEEKwYGE2q9fbIN7V2dOJ_eC8wSzrvkgAc6eW4POcGDmKal-rKykDHAA",
    bannerImage:
      "https://www.koimoi.com/wp-content/new-galleries/2024/06/after-a-great-run-at-the-theaters-r-s-durai-senthilkumars-garudan-is-set-to-release-on-ott-soon-heres-when-and-where-to-watch-the-soori-starrer.jpg",
    title: "Garudan",
    year: "2024",
    rating: "U/A",
    season: "Action",
    language: "4 languages",
    description:
      "Sokkan, the trusted confidant of childhood friends Aadhi and Karuna.But when his loyalty and self respect is put into test, which would he choose?",
  },
   {
    id: 17,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/3bfd55d766b05a72eab00feb08fe2b61b14ca8d81fef5ec51a965e3743c89617.jpg",
    bannerImage:
      "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/gran-turismo-featured.jpg",
    title: "Gran Turismo",
    year: "2023",
    rating: "PG-13",
    season: "Action/Adventure",
    language: "6 languages",
    description:
      "Based on the unbelievable, inspiring true story of a team of underdogs - a struggling, working-class gamer, a failed former race car driver, and an idealistic motorsport exec - who risk it all to take on the most elite sport in the world.",
  },

];
const comedyData = [
 
  {
    id: 1,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRzLIriCYaZ7FT943c13L5FJ864hXGENgRGQprAnx7uD1VbC_c7S6ezd2t4vfCTZ1UywLpW",
    bannerImage:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/bloody-beggar-kavin-314825238-16x9_0.jpg?VersionId=wwXjG7y45y8od_Oo9KN7CKAMcNvue4L1",
    title: "Bloody Beggar",
    year: "2024",
    rating: "U/A",
    season: "Drama/Comedy",
    language: "4 languages",
    description:
      "A beggar's life takes an unexpected turn when a misadventure upends his daily routine. Can he navigate the bizarre, witty situations that follow?",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxLuXYOke3LVVab-L2S69U-TtWXbyfSEBiqOStErShoLPDXetHsTjltmL2nYMegr_MySyF",
    bannerImage:
      "https://m.media-amazon.com/images/S/pv-target-images/3bc0c53d84a20f007b04ed1fde7f0646be82f16e41f0d3b756a8de80b1015fae._SX1080_FMjpg_.jpg",
    title: "Mark Antony",
    year: "2023",
    rating: "U/A",
    season: "Comedy/Action",
    language: "4 languages",
    description:
      "Mark, the son of gangster Antony, finds a telephone that has the ability to contact the past.",
  },
  {
    id: 3,
    image:
      "https://www.acmodasi.in/amdb/images/movie/n/q/guruvayoor-ambalanadayil-2024-NaNoVx.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/S/pv-target-images/cce72a7f92d7a52e6a6e18ddb29cd10fd1cc3da2c50e1c45c076dc7c124b501a.jpg",
    title: "Guruvayoor Ambalanadayil",
    year: "2024",
    rating: "U/A",
    season: "Comedy",
    language: "3 languages",
    description:
      "A young man never wanted to marry because his girlfriend married someone else. Five years later, he was all set to get married. But a discovery about his bride's extended family forces him to reconsider? Will he marry her?",
  },
  {
    id: 4,
    image:
      "https://images.justwatch.com/poster/315756972/s718/imaginary-friends.jpg",
    bannerImage:
      "https://www.hollywoodreporter.com/wp-content/uploads/2024/05/IF_VFX_012R-copy.jpg?w=1296&h=730&crop=1",
    title: "IF",
    year: "2024",
    rating: "PG",
    season: "Comedy/Fantasy",
    language: "2 languages",
    description:
      "A young girl who goes through a difficult experience begins to see everyone's imaginary friends who have been left behind as their real-life friends have grown up.",
  },
  {
    id: 5,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/db8caaf1cb76c24c3a9423ef342abc43418fc2e0a0cc4e2dac8850d034acf9d8.jpg",
    bannerImage:
      "https://th-i.thgim.com/public/entertainment/movies/oeem6u/article68210846.ece/alternates/LANDSCAPE_1200/318A9580.JPG",
    title: "PT Sir",
    year: "2024",
    rating: "U",
    season: "Comedy/Drama",
    language: "4 languages",
    description:
      "It follows a young teacher as he attempts to introduce unique physical activities to school children.",
  },
  {
    id: 6,
    image:
      "https://image.tmdb.org/t/p/original/k5RWPaNjgRcNvGoawYaQHQwyctI.jpg",
    bannerImage:
      "https://upperstall.com/wp-content/uploads/2024/05/Aavesham.jpg",
    title: "Aavesham",
    year: "2024",
    rating: "U/A",
    season: "Comedy/Action",
    language: "4 languages",
    description:
      "Three teenagers reach Bangalore for their engineering degree and gets involved in a fight with seniors. They find a local gangster named Ranga to help them take revenge.",
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSI48Ohi0Zng9Jzb89gzgWxWgO4aLHQk7dJd-P4Pi4aWMX0oW7JTsQj8wYibOKiW8_A1RkZ",
    bannerImage:
      "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8201/1408201-i-c547136405c1",
    title: "Free Guy",
    year: "2021",
    rating: "A",
    season: "Comedy/Action",
    language: "6 languages",
    description:
      "When Guy, a bank teller, learns that he is a non-player character in a bloodthirsty, open-world video game, he goes on to become the hero of the story and takes the responsibility of saving the world.",
  },
    {
    id: 8,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrCrMYm7st-Rd1tG6PwkD470El4h-ngOPFVOICYGqcFDqGMordDYuPWt94tZ8uw3J2tdbm",
    bannerImage:
      "https://images.thedirect.com/media/article_full/brothers-movie-cast_mAwRH50.jpg",
    title: "Brothers",
    year: "2024",
    rating: "U/A",
    season: "Comedy/Action",
    language: "4 languages",
    description:
      "Two criminal twin brothers, one who is trying to reform, embark on a dangerous heist road trip. Facing legal troubles, gunfights, and family drama, they must reconcile their differences before their mission leads to self-destruction.",
  },
    {
    id: 9,
    image:
      "https://assetscdn1.paytm.com/images/cinema/172446-0449dad0-3f4f-11ef-95aa-f7343890830b.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/S/pv-target-images/533a42b699461d5450bf87a90626050532f1e2185ac0f1db8ec58eb8f20e7d0f.jpg",
    title: "Soodhu Kavvum 2",
    year: "2024",
    rating: "U/A",
    season: "Comedy/Drama",
    language: "Tamil",
    description:
      "A gang of kidnappers find they have bitten off more than they can chew.",
  },
    {
    id: 10,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/ea69a214aae320b318948bfe528000204a2f6aa3477d5961bf62af74446a92b5.jpg",
    bannerImage:
      "https://static01.nyt.com/images/2024/09/27/multimedia/26saturday-night-review-mwlj/26saturday-night-review-mwlj-videoSixteenByNine3000.jpg",
    title: "Saturday Night",
    year: "2024",
    rating: "R",
    season: "Comedy/Biography",
    language: "2 languages",
    description:
      "At 11:30pm on October 11th, 1975, a ferocious troupe of young comedians and writers changed television forever. Find out what happened behind the scenes in the 90 minutes leading up to the first broadcast of Saturday Night Live (1975).",
  },
    {
    id: 11,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTsWe67gbLW0wI7vnU4QWWHRttb5vLz7ONgbdppQGnrQsyjX-t5Y4w1HBtTWzpSSPgDxwFK",
    bannerImage:
      "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/486/1707127570486-i",
    title: "Neymar",
    year: "2023",
    rating: "U",
    season: "Comedy/Drama",
    language: "4 languages",
    description:
      "Kunjava and his friend Sinto bring a new furry friend named Neymar into their lives. Little did they know that their lives were about to be turned upside down.",
  },
    {
    id:12 ,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeLSwuLrn5bVP5CNyQEZSfmOENqW3nw_KAM7ZAxo30_dxxaEdkhITO8RV2mt2zG8jw7KEWnw",
    bannerImage:
      "https://images.hindustantimes.com/img/2022/01/26/1600x900/bro_daddy_review_1643191350116_1643191358222.png",
    title: "Bro Daddy",
    year: "2022",
    rating: "U/A",
    season: "Comedy/Drama",
    language: "2 languages",
    description:
      "The plot revolves around the life of a family man. Unexpected events happen in their house. The brother and father decide to take on the challenges.",
  },
      {
    id: 13,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPUUowU1YIWUNy9wzpZN6z5vL0yKAORGVaS7tVnL5I_eyo99g0y9zx5kC-X_u1m7VnG5y0",
    bannerImage:
      "https://i.ytimg.com/vi/wd1YOBnwX90/maxresdefault.jpg",
    title: "Oh My Ghost",
    year: "2022",
    rating: "U/A",
    season: "Horror/Comedy",
    language: "Tamil",
    description:
      "When a single woman and her two friends reach a small town, they begin to discover their connection to a ghost and the secret legacy their grandfather left behind.",
  },
];
const dramaData = [
    {
    id: 1,
    image:
      "https://i.pinimg.com/736x/de/9a/d9/de9ad956254a06d4a727d054f045da74.jpg",
    bannerImage:
      "https://www.indiewire.com/wp-content/uploads/2019/08/Spahn-Ranch-2.jpg?w=600&h=337&crop=1",
    title: "Once Upon a Time... in Hollywood",
    year: "2019",
    rating: "R",
    season: "Drama/Comedy",
    language: "3 languages",
    description:
      "As Hollywood's Golden Age is winding down during the summer of 1969, television actor Rick Dalton and his stunt double Cliff Booth endeavor to achieve lasting success in Hollywood while meeting several colorful characters along the way.",
  },
  {
    id: 2,
    image:
      "https://m.media-amazon.com/images/M/MV5BMGZlZTE3N2EtMGFmZS00MjIxLWI0Y2UtOTU4MDNjMmVmZjRhXkEyXkFqcGc@._V1_.jpg",
    bannerImage:
      "https://th-i.thgim.com/public/entertainment/movies/ep5z0x/article67776335.ece/alternates/LANDSCAPE_1200/BlueStar%20Review.jpeg",
    title: "Blue Star",
    year: "2024",
    rating: "U/A",
    season: "Sport/Drama",
    language: "4 languages",
    description:
      "The cricket captains of Arakkonam, Ranjith and Rajesh, ignite a rivalry that ruins their chances of playing when politics interferes.",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGNsk7gjCacTFiHGLsXkw69zzw5NhEmcPDzH6ffF3Tyi2LK3c2_Qg4NkyNNvxdnf20zOVO",
    bannerImage:
      "https://s.yimg.com/ny/api/res/1.2/NvDRuXhJv1w9kI20o5xHOQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTg-/https://s.yimg.com/os/creatr-uploaded-images/2021-06/9add3540-d4f0-11eb-a6df-f7c9fb93c5f3",
    title: "Waiting for Rain",
    year: "2021",
    rating: "U/A",
    season: "Romance/Drama",
    language: "2 languages",
    description:
      "Strangers Young-ho and So-hee confide in each other through the exchange of handwritten letters in the early 2000s.",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZlkKlfAsgX-jGm6PkyoVj0Bql_fJGpOJk5NBkRJ6EFA8919PFjMnMECY9qxNbguOZKO0P",
    bannerImage:
      "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/2400/1642400-i-125162fd3311",
    title: "Parking",
    year: "2023",
    rating: "U/A",
    season: "Drama",
    language: "5 languages",
    description:
      "An elderly man and a youngster who are tenants sharing two different floors of an individual house fight over a parking space.",
  },
  {
    id:5,
    image:
      "https://images.tv9hindi.com/wp-content/uploads/2025/02/sanam-teri-kasam-actress.jpeg",
    bannerImage:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/sanam-teri-kasam-105959329-16x9.jpg?VersionId=mZ87KjGYGl9whL31s6YOgx41WYJQ5Tin&size=690:388",
    title: "Sanam Teri Kasam",
    year: "2016",
    rating: "U",
    season: "Drama/Romance",
    language: "Hindi",
    description:
      "After being disowned by her family, an awkward librarian relies on the help of her brooding neighbour.",
  },
  {
    id:6 ,
    image:
      "https://a.ltrbxd.com/resized/film-poster/8/5/2/5/3/1/852531-my-old-ass-0-230-0-345-crop.jpg?v=2b684502b7",
    bannerImage:
      "https://a.ltrbxd.com/resized/alternative-backdrop/8/5/2/5/3/1/tmdb/iPHsjvbFyGbeCEDC7u8Ib8U1zS6-1200-1200-675-675-crop-000000.jpg?v=123f16bd26",
    title: "My Old Ass",
    year: "2024",
    rating: "U/A",
    season: "Drama/Comedy",
    language: "English",
    description:
      "A mushroom trip brings free-spirited Elliott face-to-face with her 39-year-old self. But when Elliott's `old ass`` delivers warnings to her younger self, Elliott realizes she has to rethink everything about her family, life and love.",
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTBmd9-7zHfOW0U6TbvHYAdynG5HncFer4oPPdffCucLX92Pp35lBKKSiqWbLeUy5cg3Xm6",
    bannerImage:
      "https://data1.ibtimes.co.in/en/full/699446/varathan.jpg",
    title: "Varathan",
    year: "2018",
    rating: "U/A",
    season: "Drama/Thriller",
    language: "2 languages",
    description:
      "After losing his job Abin along with his wife Priya, who has suffered a miscarriage, decide to shift from Dubai to Priya's family estate in Kerala. However, peace eludes the couple as they run into a set of new troubles.",
  },
  {
    id:8,
    image:
      "https://m.media-amazon.com/images/M/MV5BNmJhMzNjMjctYWQ3YS00OWRkLWE4MTgtOGEwODdiNWNmMTk5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/7743/1637743-i-386a7df5ac11",
    title: "Falimy",
    year: "2023",
    rating: "U/A",
    season: "Drama/Comedy",
    language: "5 languages",
    description:
      "A family of self-centered individuals sets out on a journey to fulfill their grandfather's pilgrimage wish, partly to prevent his frequent escapes.",
  },

   {
    id: 9,
    image:
      "https://image.tmdb.org/t/p/original/kZI4zpg2Tzqkwpnxitl0ZKxUn9L.jpg",
    bannerImage:
      "https://assets.aboutamazon.com/dims4/default/039e5e4/2147483647/strip/true/crop/6720x3780+0+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F9a%2F3c%2F2f914496403d98504533686c9a92%2Fimg-3498.JPG",
    title: "Star",
    year: "2024",
    rating: "U",
    season: "Drama",
    language: "4 languages",
    description:
      "Follows a youngster Kalai and his aspirations of becoming a 'Star' in the Tamil Film Industry. Born in a lower-middle-class family, will Kalai overcome all his struggles to emerge as a Star?",
  },
     {
    id: 10,
    image:
      "https://images.justwatch.com/poster/320026039/s718/vaazhai.jpg",
    bannerImage:
      "https://bingeddata.s3.amazonaws.com/uploads/2024/09/vaazhai-2.jpg",
    title: "Vaazhai",
    year: "2024",
    rating: "U",
    season: "Drama",
    language: "7 languages",
    description:
      "A twelve-year-old boy, Sivanandhan, his mother, sister, and friend navigate life's challenges, where a plantain tree, Vaazhai, becomes a central presence.",
  },
     {
    id:11 ,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/0dd223e5c41c64421b5665e5e7aa5491cd9965e4b61c24badc0f75cc6a4abbf9.png",
    bannerImage:
      "https://www.leisurebyte.com/wp-content/uploads/2024/09/killer-heat-review-1.jpg",
    title: "Killer Heat",
    year: "2024",
    rating: "R",
    season: "Drama/Mystery",
    language: "2 languages",
    description:
      "Follows twin brothers who find themselves in a dangerous love triangle on an isolated Greek island. The investigation is given to `The Jealousy Man,` a wounded detective.",
  },
     {
    id:12 ,
    image:
      "https://resizing.flixster.com/_8RQCZKbf1Cvn-gM3MBMKIrZKNk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2NhNGM5ZGZkLWViMjUtNDM5MS1iOGExLWEwN2MxNmQ3MTI2OS5qcGc=",
    bannerImage:
      "https://ychef.files.bbci.co.uk/1280x720/p0j01qj5.jpg",
    title: "All We Imagine as Light",
    year: "2024",
    rating: "U/A",
    season: "Drama",
    language: "3 languages",
    description:
      "In Mumbai, Nurse Prabha's routine is troubled when she receives an unexpected gift from her estranged husband. Her younger roommate, Anu, tries in vain to find a spot in the city to be intimate with her boyfriend.",
  },
     {
    id:13,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73fVt8D9niiAqztZCI3_7MRro_01QadOFYA&s",
    bannerImage:
      "https://media.vanityfair.com/photos/66b61eba371071e487f51a20/master/pass/it-ends-with-us-review.jpg",
    title: "It Ends with Us",
    year: "2024",
    rating: "PG-13",
    season: "Drama/Romance",
    language: "English",
    description:
      "When a woman's first love suddenly reenters her life, her relationship with a charming, but abusive neurosurgeon is upended and she realizes she must learn to rely on her own strength to make an impossible choice for her future.",
  },

  {
    id: 14,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNS7th8eTYZWYl08jXLFbFRlzeGWjmmbIcLsNwgNeC1zgWbTXZMGrx19hxiLte3MWfpeTc",
    bannerImage:
      "https://www.hindustantimes.com/ht-img/img/2023/07/23/550x309/A-still-from-Kartik-Aaryan--Kiara-Advani-s-Satyapr_1689315259801_1690077575368.jpg",
    title: "Satyaprem Ki Katha",
    year: "2023",
    rating: "U/A",
    season: "Drama/Comedy",
    language: "Hindi",
    description:
      "Sattu is a good hearted but good for nothing LLB fail guy who dreams of marrying the IT girl of Ahmedabad Katha, a girl way out of his league.",
  },

];
const scifiData = [
    {
    id: 1,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/06cb0a5c7c5fb9eceaff211c896bd1ca227bd6f7431df080a312abbde945868c.jpg",
    bannerImage:
      "https://i.blogs.es/e7d433/ready-player-one/1366_2000.jpg",
    title: "Ready Player One",
    year: "2018",
    rating: "U/A",
    season: "Sci-Fi/Fantasy",
    language: "4 languages",
    description:
      "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.",
  },
  {
    id:2 ,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQhpxQjo0PG6ooGy-u_YCiKJay4ZkzY4IZuivTFZFQARdw6IveSDTDgYkuRxJ30SV3X2c",
    bannerImage:
      "https://imageio.forbes.com/specials-images/imageserve/5ee168af194e4200062e8ed8/Nonso-Anozie--Lara-McDonnell--Josh-Gad-and-Ferdia-Shaw-in-Kenneth-Branagh-s--Artemis/0x0.jpg?format=jpg&crop=4096,2304,x0,y0,safe&width=960",
    title: "Artemis Fowl",
    year: "2020",
    rating: "PG",
    season: "Fantasy/Sci-Fi",
    language: "4 languages",
    description:
      "Artemis Fowl, a young criminal prodigy, hunts down a secret society of fairies to find his missing father.",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRBZdOqbE6L0oDF1_CobY9VLPqmXzeT9xgqJMC4BOgyve0vm8pEGxoFs2glHz0jB2BExlJtdQ",
    bannerImage:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/11/Pixar-Sequels-Wall-E-Cropped.jpg",
    title: "WALL-E",
    year: "2008",
    rating: "G",
    season: "Sci-Fi/Family",
    language: "6 languages",
    description:
      "A robot who is responsible for cleaning a waste-covered Earth meets another robot and falls in love with her. Together, they set out on a journey that will alter the fate of mankind.",
  },
  {
    id:4,
    image:
      "https://m.media-amazon.com/images/M/MV5BN2I1MGNiOWMtYmFlNC00MDYxLTkzODEtZDhiMTg5MjYzNTQxXkEyXkFqcGc@._V1_.jpg",
    bannerImage:
      "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeUodG7M5lu32sS-TrYwoZcKUiwFwr8-ULwe1_IogxyQ7SfGSNmqtxNNrW-_UbODgmw9UJL8X4RA1OzAwLBYSK_Hig7wLxtTUC44.jpg?r=f4b",
    title: "Love and Monsters",
    year: "2020",
    rating: "PG-13",
    season: "Fantasy/Sci-Fi",
    language: "3 languages",
    description:
      "Seven years after he survived the monster apocalypse, lovably hapless Joel leaves his cozy underground bunker behind on a quest to reunite with his high school sweetheart.",
  },
  {
    id: 5,
    image:
      "https://images.justwatch.com/poster/310502709/s718/ayalaan.jpg",
    bannerImage:
      "https://media.assettype.com/TNIE%2Fimport%2F2024%2F1%2F6%2Foriginal%2FAyalaan_Sivakarthikeyan.jpg?w=480&auto=format%2Ccompress&fit=max",
    title: "Ayalaan",
    year: "2024",
    rating: "U",
    season: "Sci-Fi",
    language: "4 languages",
    description:
      "A lost alien seeks help to go back to his home, but everything gets harder after the alien returns to its home.",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRYHC29qEVmyQeWmF5CUMkzMUwYdbqtTExjXtdrEfJl3hMIPeVhJ-54Tt3OyhvuybD0U0v-DA",
    bannerImage:
      "https://static.rayvision.com/media/Bollywood_Robot_2_0_Resurgence_jpg_c9ef67b8ec.jpeg",
    title: "2.0",
    year: "2018",
    rating: "U/A",
    season: "Sci-Fi",
    language: "4 languages",
    description:
      "After mobiles start mysteriously flying out of the hands of people in Chennai, Dr Vaseegaran summons his trusted robot Chitti to ward off the bird-shaped supernatural powers of Pakshirajan.",
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZIIZuuqIoUBMfkJGrb7Zt89BaqAZ8CJoDjbZPI_bgaqYDYwv_X-qkpFUkgoPpV8_c3mgrvg",
    bannerImage:
      "https://www.fridaywall.com/wp-content/uploads/2024/05/BUDDY-LV01-Thumbnail_Empty-2-scaled.jpg",
    title: "Buddy",
    year: "2024",
    rating: "U/A",
    season: "Sci-Fi",
    language: "4 languages",
    description:
      "A teddy bear named Buddy is in trouble and asks pilot Aditya Ram for help. Can the duo join forces and help each other out?",
  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmcw39iGktTuIoTFx5Hzvw7Svw7Vw-s-NqkMTP5fQWv-4I0WfrQ-QYQUsSRUgwuoSobkRlw",
    bannerImage:
      "https://images.mubicdn.net/images/film/319853/cache-719254-1633269674/image-w1280.jpg?size=800x",
    title: "Churuli",
    year: "2021",
    rating: "U/A",
    season: "Sci-Fi/Fantasy",
    language: "Malayalam",
    description:
      "Two undercover cops who go in search of a fugitive enter another dimension occupied by uncivilized residents who are crass and rude. There, the two men get stuck in an apparent time loop as inexplicable events begin to occur.",
  },

     {
    id: 9,
    image:
      "https://m.media-amazon.com/images/M/MV5BOWY0ZGJiNWYtNTUwMC00YjE4LTg2ODYtMDVjYTEyNTNjMjRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://filmysasi.com/wp-content/uploads/2021/12/Minnal-Murali.jpeg",
    title: "Minnal Murali",
    year: "2021",
    rating: "TV-14",
    season: "Sci-Fi/Fantasy",
    language: "2 languages",
    description:
      "A tailor gains special powers after being struck by lightning, but must take down an unexpected foe if he is to become the superhero his hometown needs.",
  },

     {
    id:10 ,
    image:
      "https://www.rogerebert.com/wp-content/uploads/2024/09/yZWHpr5HlKTDlPf46UH8RSlEOu9-jpg.webp",
    bannerImage:
      "https://www.geekgirlauthority.com/wp-content/uploads/2024/09/mega-03-06-10-02-00268082.jpg",
    title: "Megalopolis",
    year: "2024",
    rating: "U/A",
    season: "Sci-Fi",
    language: "4 languages",
    description:
      "The city of New Rome faces the duel between Cesar Catilina, a brilliant artist in favor of a Utopian future, and the greedy mayor Franklyn Cicero.",
  },
     {
    id: 11,
    image:
      "https://m.media-amazon.com/images/M/MV5BY2NiNDM0NWYtNzQxNi00NmY1LTg1YmYtMDE5ZmQzMGJlMGQzXkEyXkFqcGc@._V1_.jpg",
    bannerImage:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/11/morena-baccarin-and-anthony-mackie-looking-at-a-map-in-elevation.jpg",
    title: "Elevation",
    year: "2024",
    rating: "U/A",
    season: "Sci-Fi/Fantasy",
    language: "4 languages",
    description:
      "A single father and two women venture from the safety of their homes to face monstrous creatures to save the life of a young boy.",
  },
     {
    id:12 ,
    image:
      "https://dx35vtwkllhj9.cloudfront.net/paramountpictures/transformers-one/images/regions/au/updates/onesheet.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/S/pv-target-images/b861ab69424654c266299b50f3a1cd66fc73977e0882777632c58bae9714b06c._SX1080_FMjpg_.jpg",
    title: "Transformers One",
    year: "2024",
    rating: "PG",
    season: "Sci-Fi",
    language: "2 languages",
    description:
      "The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but who once were friends bonded like brothers who changed the fate of Cybertron forever.",
  },
     {
    id: 13,
    image:
      "https://m.media-amazon.com/images/M/MV5BMmIxODljNDEtNTRhYS00NDQ2LTg1MTktYWVhNmU4YmY0YTdlXkEyXkFqcGc@._V1_.jpg",
    bannerImage:
      "https://variety.com/wp-content/uploads/2025/03/01_THE-LIFE-OF-CHUCK_Courtesy-of-NEON-2.jpg?crop=0px%2C176px%2C1800px%2C1012px&resize=1000%2C563",
    title: "The Life of Chuck",
    year: "2024",
    rating: "U/A",
    season: "Sci-fi/Fantasy",
    language: "2 languages",
    description:
      "A life-affirming, genre-bending story based on Stephen King's novella about three chapters in the life of an ordinary man named Charles Krantz.",
  },
      {
    id:14 ,
    image:
      "./image/ultraman.jpg",
    bannerImage:
      "https://gizmodo.com/app/uploads/2024/05/6e581ac5243330aa28f8e3129015e0d6.jpg",
    title: "Ultraman: Rising",
    year: "2024",
    rating: "U/A",
    season: "Sci--Fi/Action",
    language: "3 languages",
    description:
      "A superstar baseball player who returns to Japan to become the latest hero to carry the mantle of Ultraman.",
  },
];
const horrorData = [
    {
    id: 1,
    image:
      "https://m.media-amazon.com/images/M/MV5BOGM5N2FkNGMtNmYzMS00MGRiLWI5ZDItOTRmNThiYWNlNDZhXkEyXkFqcGc@._V1_QL75_UX190_CR0,8,190,281_.jpg",
    bannerImage:
      "https://images.indianexpress.com/2024/10/Black-Movie-Review.jpg",
    title: "Black",
    year: "2024",
    rating: "U/A",
    season: "Horror/Thriller",
    language: "4 languages",
    description:
      "A young couple move into a serene row house, eager for peace and privacy. A violent storm and unsettling forces unravel their marriage. Vasanth must uncover the truth behind these supernatural occurrences before everything falls apart.",
  },
  {
    id: 2,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23021868_p_v8_aa.jpg",
    bannerImage:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/09/30104835/Untitled-design-38-1600x900.jpg",
    title: "Naane Varuvean",
    year: "2022",
    rating: "U/A",
    season: "Horror/Thriller",
    language: "4 languages",
    description:
      "Prabhu an average suburban man for whom his family is everything. His life is turned upside down when his daughter Satya is possessed by the ghost of a little boy.",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHyfMVjRYyEyPRFm2GxkHfrhWh3lziZqaEbxEFiHYWU-OgkJlKhl4vI29J5aGH6AbLS066",
    bannerImage:
      "https://sc0.blr1.cdn.digitaloceanspaces.com/article/143084-fowtjclyyd-1592508290.jpg",
    title: "Penguin",
    year: "2020",
    rating: "U/A",
    season: "Thriller",
    language: "4 languages",
    description:
      "It is a spine chilling tale of a pregnant mother who sets out on a dangerous mission to unravel the mystery and save her loved ones.",
  },
  {
    id:4 ,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRrcWfbFERV30vGQzkfSaN53EbAOXi-xKBy07UaIfGDPqPKE6D6XdskHmtTmNfhLCQPbgM-",
    bannerImage:
      "https://www.koimoi.com/wp-content/new-galleries/2024/08/demonte-colony-2-box-office-collection-day-1-arulnithis-film-beats-rajinikanths-lal-salaam-record-in-tamil-nadu-grosses-over-5-crore-globally.jpg",
    title: "Demonte Colony 2",
    year: "2024",
    rating: "U/A",
    season: "Horror/Thriller",
    language: "4 languages",
    description:
      "A group of friends who return to a cursed location, driven by curiosity and the quest to uncover the truth behind the malevolent spirits that reside there.",
  },
  {
    id:5 ,
    image:
      "https://resizing.flixster.com/t2qh6gfav_Sp6ZeubGxeT2yYC4I=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27342077_v_v9_ab.jpg",
    bannerImage:
      "https://img.texasmonthly.com/2024/10/caddo-lake-film-review.jpg?auto=compress&crop=faces&fit=fit&fm=jpg&h=0&ixlib=php-3.3.1&q=45&w=1250",
    title: "Caddo Lake",
    year: "2024",
    rating: "PG-13",
    season: "Horror",
    language: "languages",
    description:
      "When an 8-year-old girl disappears on Caddo Lake, a series of past deaths and disappearances begin to link together, altering a broken family's history.",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGr1NJ4xaVo64gFOKDnj07enVfPgLsrrMr7qE_EhUXPaT-c_rp-tBvdKDcxgMr4yU2qselSA",
    bannerImage:
      "https://static.toiimg.com/thumb/msid-106214712,width-1280,height-720,resizemode-4/106214712.jpg",
    title: "Phoenix",
    year: "2023",
    rating: "U/A",
    season: "Horror/Thriller",
    language: "Malayalam",
    description:
      "John and his family relocate to a far away island village with hopes of rebuilding their lives. But destiny has other plans for them as a series of horrifying events begin to unfold.",
  },
  {
    id:7 ,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/34a003a275202b853b1e14406b4ba6e61d4f7dc14bd4b0c9d9aabba2f36c94ef.jpg",
    bannerImage:
      "https://images.indianexpress.com/2023/04/Neelavelicham-review-1200.jpg",
    title: "Neelavelicham",
    year: "2023",
    rating: "U",
    season: "Horror/Thriller",
    language: "Malayalam",
    description:
      "A young, enthusiastic and free-spirited writer arrives to stay in a desolate mansion, rumored to be haunted by the apparition of a young woman who committed suicide when she was betrayed in love.",
  },
  {
    id: 8,
    image:
      "https://image.tmdb.org/t/p/original/5pj1OTtOtBkh2seqg3K9Hjtaapg.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/S/pv-target-images/c586fc35256fe02f1e4fd9bfbfd3652172dbe0aa1dc110ea079691a068ef19bd.jpg",
    title: "Sattam En Kaiyil",
    year: "2024",
    rating: "U/A",
    season: "Horror/Thriller",
    language: "4 languages",
    description:
      "An accident leads Gowtham to conceal a body in his car. Arrested for drunk driving, his impounded vehicle at the police station holds the hidden corpse. Complications ensue, compelling him to find an escape from the perilous circumstances.",
  },
   {
    id: 9,
    image:
      "https://preview.redd.it/i-finally-saw-the-new-haunted-mansion-movie-last-night-and-v0-w524ukst2zvb1.jpg?width=900&format=pjpg&auto=webp&s=9e1457babb55f9c51469be0ec7fb6c4247ecd5ff",
    bannerImage:
      "https://m.media-amazon.com/images/M/MV5BNzA4OWZlNmQtNDIwZi00MGM3LTliYjItYjA3MjVhMjUyOTQ5XkEyXkFqcGdeQWFkcmllY2xh._V1_.jpg",
    title: "Haunted Mansion",
    year: "2023",
    rating: "PG-13",
    season: "Horror",
    language: "2 languages",
    description:
      "A single mom named Gabbie hires a tour guide, a psychic, a priest and a historian to help exorcise her newly bought mansion after discovering it is inhabited by ghosts.",
  },
   {
    id:10 ,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShjTcbkXhwkPAX0EDC2D687kHkkNk6HDyKuRrsuEA1RAriL56GGtIyeOMJCWNPSFUEoh5fBQ",
    bannerImage:
      "https://m.media-amazon.com/images/M/MV5BNDRkYjgyOTMtZjgyMy00ZGRmLWJhZTktZGU0NTVlNzQ4YmEyXkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg",
    title: "Hotel Transylvania: Transformania",
    year: "2022",
    rating: "PG",
    season: "Horror",
    language: "4 languages",
    description:
      "After one experiment, Johnny turns into a monster and everyone else becomes human. Now it has to be seen whether they will be able to reverse this experiment.",
  },
   {
    id:11 ,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4h7CIIPqhj8k05-rKmhVWRmptSynrb_TDdA&s",
    bannerImage:
      "https://helios-i.mashable.com/imagery/articles/06mH6E0Mj7dPxIGlfMjGR2l/hero-image.fill.size_1248x702.v1727125882.jpg",
    title: "Apartment 7A",
    year: "2024",
    rating: "R",
    season: "Horror",
    language: "2 languages",
    description:
      "A struggling young dancer finds herself drawn in by dark forces when a peculiar, well-connected older couple promise her a shot at fame.",
  },
   {
    id: 12,
    image:
      "https://waxworkrecords.com/cdn/shop/files/GBFE_FrontCover_1800x1800.jpg?v=1722026455",
    bannerImage:
      "https://talkingfilms.net/wp-content/uploads/2024/03/ghost1.jpg",
    title: "Ghostbusters: Frozen Empire",
    year: "2024",
    rating: "U/A",
    season: "Horror",
    language: "2 languages",
    description:
      "When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second ice age.",
  },
   {
    id: 13,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQpNyINQ9C2tvY5wMRGHWXOGBpjpi5_RfAKLSrxG9M1o---2ClNvtij3jnG5iuefp6f4qlcew",
    bannerImage:
      "https://variety.com/wp-content/uploads/2024/02/IMAGINARY_Unit_230531_00362RC2.jpg?w=1000&h=563&crop=1",
    title: "Imaginary",
    year: "2024",
    rating: "PG-13",
    season: "Horror/Thriller",
    language: "2 languages",
    description:
      "A woman returns to her childhood home to discover that the imaginary friend she left behind is very real and unhappy that she abandoned him.",
  },
   {
    id:14 ,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAxvVNCfAD3CvfrsWQqQ-s11o1MkY0-BEUufleoMJ5fu5ILHGZhrxbML-s020Gk9y8NrDKtQ",
    bannerImage:
      "https://images.moviebuff.com/422852bf-aa47-48de-b563-c9ef5d006493?w=1000",
    title: "Pechi",
    year: "2024",
    rating: "U/A",
    season: "Horror",
    language: "2 languages",
    description:
      "Revolves around age-old practices such as black magic and witchcraft.",
  },

];

const animeData = [
    {
    id: 1,
    image:
      "https://m.media-amazon.com/images/M/MV5BNjY4MDQxZTItM2JjMi00NjM5LTk0MWYtOTBlNTY2YjBiNmFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/12/341369.jpg",
    title: "Attack on Titan",
    year: "2021-2023",
    rating: "TV-MA",
    season: "Anime",
    language: "2 languages",
    description:
      "After his hometown is destroyed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
  },
  {
    id: 2,
    image:
      "https://static0.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2025/01/0388694_poster_w780.jpg",
    bannerImage:
      "https://animotaku.fr/wp-content/uploads/2024/10/anime-one-piece-pause-avril-2025.jpg",
    title: "One Piece",
    year: "1999-2025",
    rating: "TV-14",
    season: "Anime",
    language: "2 languages",
    description:
      "Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as the `One Piece.`",
  },
  {
    id: 3,
    image:
      "https://es.web.img3.acsta.net/pictures/19/09/18/13/46/0198270.jpg",
    bannerImage:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GY5P48XEY-backdrop_wide",
    title: "Demon Slayer: Kimetsu no Yaiba",
    year: "2019-2024",
    rating: "TV-MA",
    season: " Anime",
    language: "2 languages",
    description:
      "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
  },
  {
    id:4 ,
    image:
      "https://m.media-amazon.com/images/M/MV5BNTY1M2NjMTItOGFhNi00NDU3LWExNzQtZGY2YWJlYzExNmU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GRGG9798R-backdrop_wide",
    title: "Re: Zero - Starting Life in Another World",
    year: "2016",
    rating: "TV-14",
    season: "Anime",
    language: "2 languages",
    description:
      "After being suddenly transported to another world, Subaru Natsuki and his new female partner are brutally murdered. However, Subaru awakens to a familiar scene, meeting the same girl again. The day begins to mysteriously repeat itself.",
  },
  {
    id: 5,
    image:
      "https://m.media-amazon.com/images/M/MV5BZTI4ZGMxN2UtODlkYS00MTBjLWE1YzctYzc3NDViMGI0ZmJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/10/frieren-beyond-journeys-end.jpg",
    title: "Frieren: Beyond Journey's End",
    year: "2023",
    rating: "TV-14",
    season: "Anime",
    language: "2 languages",
    description:
      "Elf mage Frieren and her fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her?",
  },
  {
    id: 6,
    image:
      "https://m.media-amazon.com/images/M/MV5BNzgxMzI3NzgtYzE2Zi00MzlmLThlNWEtNWVmZWEyZjNkZWYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/07/my-hero-academia-group-happy.jpg",
    title: "My Hero Academia",
    year: "2016",
    rating: "TV-14",
    season: "Anime",
    language: "2 languages",
    description:
      "A superhero-admiring boy enrolls in a prestigious hero academy and learns what it really means to be a hero, after the strongest superhero grants him his own powers.",
  },
  {
    id:7 ,
    image:
      "https://m.media-amazon.com/images/M/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc@._V1_.jpg",
    bannerImage:
      "https://images.squarespace-cdn.com/content/v1/5ace4845e17ba35c9d8eb95e/ae0a750d-101e-4bdf-8a85-da70ac123aea/thorfinn+and+einar.PNG",
    title: "Vinland Saga",
    year: "2019-2023",
    rating: "TV-MA",
    season: "Anime",
    language: "2 languages",
    description:
      "Following a tragedy, Thorfinn embarks on a journey with the man responsible for it to take his life in a duel as a true and honorable warrior to pay homage.",
  },
  {
    id: 8,
    image:
      "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/S/pv-target-images/37ae6eaf1e35049384801438c20a4dec3aa06593542c9770c83935d6b84a3e59._SX1080_FMjpg_.jpg",
    title: "Naruto",
    year: "2002-2007",
    rating: "TV-PG",
    season: "Anime",
    language: "2 languages",
    description:
      "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
  },

   {
    id: 9,
    image:
      "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_.jpg",
    bannerImage:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GY3VKX1MR-backdrop_wide",
    title: "Hunter x Hunter",
    year: "2011-2014",
    rating: "TV-14",
    season: "Anime",
    language: "2 languages",
    description:
      "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks out his father, who left him when he was younger.",
  },

   {
    id: 10,
    image:
      "https://m.media-amazon.com/images/M/MV5BYWFhOWMxNTYtZThiMi00ZmQ5LTlmODktN2QwNzUyZjMyZGQzXkEyXkFqcGc@._V1_.jpg",
    bannerImage:
      "https://sm.ign.com/ign_in/photo/default/dandadan-1729117859807_2dhd.jpg",
    title: "Dandadan",
    year: "2024",
    rating: "TV-MA",
    season: "Anime",
    language: "2 languages",
    description:
      "When Momo and Okarun's beliefs clash, they're thrown into a world of ghosts, aliens and awakened powers.",
  },
   {
    id: 11,
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png",
    bannerImage:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/bleach-every-main-character-s-age-height-and-birthday.jpg",
    title: "Bleach",
    year: "2004-2023",
    rating: "TV-MA",
    season: "Anime",
    language: "2 languages",
    description:
      "High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from `Hollows`.",
  },
   {
    id:12 ,
    image:
      "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://cinema-safari.com/wp-content/uploads/2024/01/death-note.jpg",
    title: "Death Note",
    year: "2006-2007",
    rating: "TV-14",
    season: "Anime",
    language: "2 languages",
    description:
      "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
  },
   {
    id: 13,
    image:
      "https://resizing.flixster.com/D5mLRg__QUp4UEhtOwifL9pcTYU=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9065121_b_v8_aa.jpg",
    bannerImage:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/Fullmetal-Alchemist.jpg",
    title: "Fullmetal Alchemist: Brotherhood",
    year: "2009-2010",
    rating: "TV-14",
    season: "Anime",
    language: "2 languages",
    description:
      "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
  },
   {
    id: 14,
    image:
      "https://m.media-amazon.com/images/M/MV5BNmFiM2FkYTYtY2FiOS00ZWJkLTkyOTgtNmFmODI4NjcwNDgzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://deadline.com/wp-content/uploads/2024/07/Dragon-Ball-Series_c42772.jpg",
    title: "Dragon Ball Z",
    year: "1996–2003",
    rating: "TV-PG",
    season: "Anime",
    language: "2 languages",
    description:
      "With the help of the powerful Dragonballs, a team of fighters led by the saiyan warrior Goku defend the planet earth from extraterrestrial enemies.",
  },
   {
    id: 15,
    image:
      "https://m.media-amazon.com/images/M/MV5BMThjNzdiMzUtZjA4OC00YzBlLWFhOWQtODVjODhjMjY3MTkxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://preview.redd.it/favorite-monster-character-v0-0zshowsyxtra1.jpg?width=1080&crop=smart&auto=webp&s=5b4bad433a951b00ae0d462c6db785dc9d54e767",
    title: "Monster",
    year: "2004-2005",
    rating: "TV-14",
    season: "Anime",
    language: "2 languages",
    description:
      "Tenma, a brilliant neurosurgeon with a promising future, risks his career to save the life of a critically wounded young boy. The boy, now a charismatic young man, reappears 9 years later in the midst of a string of unusual serial murders.",
  },
   {
    id: 16,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20081301_b_v8_aa.jpg",
    bannerImage:
      "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/3575/1613575-i-963953ac511b",
    title: "Tokyo Revengers",
    year: "2021",
    rating: "TV-14",
    season: "Anime",
    language: "2 languages",
    description:
      "Hanagaki Takemichi lives an unsatisfying life right up until his death. Waking up 12 years in the past, he reckons with the eventual fate of his friends and tries to prevent an unfortunate future.",
  },
   {
    id: 17,
    image:
      "https://m.media-amazon.com/images/M/MV5BYjYxMWFlYTAtYTk0YS00NTMxLWJjNTQtM2E0NjdhYTRhNzE4XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg",
    bannerImage:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/haikyuu.jpg",
    title: "Haikyu!!",
    year: "2014–2020",
    rating: "TV-14",
    season: "Anime",
    language: "2 languages",
    description:
      "Determined to be like the volleyball championship's star player nicknamed `the small giant`, Shoyo joins his school's volleyball club.",
  },

   {
    id: 18,
    image:
      "https://m.media-amazon.com/images/M/MV5BNzMwOGQ5MWItNzE3My00ZDYyLTk4NzAtZWIyYWI0NTZhYzY0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/07/one-punch-man.jpg",
    title: "One Punch Man",
    year: "2015",
    rating: "TV-14",
    season: "Anime",
    language: "2 languages",
    description:
      "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.",
  },

];

const familyData = [
   
  {
    id: 1,
    image:
      "https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0%2C0%2C540%2C810",
    bannerImage:
      "https://ew.com/thmb/XDJ9UzANqSzYyGm_jjQgJ7RGH04=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LUCA-ONLINE-USE-v228_81_cs.pub16.280-4d81ad8f263d429dbf5bdf7fd13f02a9.jpg",
    title: "Luca",
    year: "2021",
    rating: "PG",
    season: "Family/Fantasy",
    language: "5 languages",
    description:
      "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.",
  },
  {
    id: 2,
    image:
      "https://m.media-amazon.com/images/M/MV5BMzM0MmUyNDgtZmYwNi00ZGI2LWJhNjYtMDQzMzhjOTcyNjdhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/S/pv-target-images/b41b2cc6959b35b7fa26a3ebe3c1f3842b7b6bfeb6625381f5a1a7eef43c166e._SX1080_FMjpg_.jpg",
    title: "Harold and the Purple Crayon",
    year: "2024",
    rating: "PG",
    season: "Family/Comedy",
    language: "5 languages",
    description:
      "Inside of his book, adventurous Harold can make anything come to life simply by drawing it. After he grows up and draws himself off the book's pages and into the physical world, Harold finds he has a lot to learn about real life.",
  },
  {
    id: 3,
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg",
    bannerImage:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/03/Onward-Elves.jpg",
    title: "Onward",
    year: "2020",
    rating: "U",
    season: "Family/Fantasy",
    language: "2 languages",
    description:
      "Teenage elf brothers Ian and Barley embark on a magical quest to spend one more day with their late father. Like any good adventure, their journey is filled with cryptic maps, impossible obstacles and unimaginable discoveries.",
  },
  {
    id: 4,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/fb3a25074611308e7044fffce00d6141c2dd4ef3e9caadb96c5e57d5865b5f06.jpg",
    bannerImage:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/rockcms/2023-12/willy-wonka-mc-231211-03-2b6c32.jpg",
    title: "Wonka",
    year: "2023",
    rating: "PG",
    season: "Family/Fantasy",
    language: "2 languages",
    description:
      "A young and poor Willy Wonka discovers that the industry is run by a cartel of greedy chocolatiers.",
  },
  {
    id: 5,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/9552935dbc42f282810b432318ec0dad3717f4c743caf56e92ac10040a67f675.jpg",
    bannerImage:
      "https://www.indiewire.com/wp-content/uploads/2024/05/MV5BZmRiMmI4ZjEtYjdkNi00ZDY3LTk4OTEtOGQ0ZDhmZWY3ZGFlXkEyXkFqcGdeQXVyNjI4MjU4MTY@._V1_.jpg",
    title: "The Garfield Movie",
    year: "2024",
    rating: "PG",
    season: "Family/Comedy",
    language: "5 languages",
    description:
      "After Garfield's unexpected reunion with his long-lost father, ragged alley cat Vic, he and his canine friend Odie are forced from their perfectly pampered lives to join Vic on a risky heist.",
  },
  {
    id:6 ,
    image:
      "https://m.media-amazon.com/images/I/91oCE+ZchRL._AC_UF1000,1000_QL80_.jpg",
    bannerImage:
      "https://images.bauerhosting.com/legacy/empire-tmdb/films/920/images/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80",
    title: "Cars",
    year: "2006",
    rating: "U",
    season: "Family/Comedy",
    language: "9 languages",
    description:
      "On the way to the biggest race of his life, a hotshot rookie race car gets stranded in a rundown town and learns that winning isn't everything in life.",
  },
  {
    id: 7,
    image:
      "https://images.moviesanywhere.com/c07276e9473360730fdbc94baebc4236/4692c964-61ba-486d-9c77-939dbfba2f07.jpg?h=375&resize=fit&w=250",
    bannerImage:
      "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8698/1418698-i-ea1d9b523dc4",
    title: "The Lion King",
    year: "2019",
    rating: "PG",
    season: "Family/Drama",
    language: "5 languages",
    description:
      "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
  },
     {
    id: 8,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTzAtcocqsw5DGjEI2iyQ_ZYK5NBlGoRHVusvIHv2aVNpXwBUIdde-3CEqJkxp2EItplVl1ow",
    bannerImage:
      "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/3619/1373619-i-f18bf644c9cc",
    title: "Big Hero 6",
    year: "2014",
    rating: "PG",
    season: "Family/Action",
    language: "5 languages",
    description:
      "A special bond develops between plus-sized inflatable robot Baymax and prodigy Hiro Hamada, who together team up with a group of friends to form a band of high-tech heroes.",
  },
     {
    id: 9,
    image:
      "https://m.media-amazon.com/images/M/MV5BNWJlZDhkM2UtNTdmNi00OWM4LWE1NTItMDMzZmFjODU0ZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/S/pv-target-images/228f933d26721b6b736c0358413f113dd56686535d80f8313f687b4b2e46a837.jpg",
    title: "Four Kids and It",
    year: "2020",
    rating: "PG",
    season: "Fantasy/Family",
    language: "5 languages",
    description:
      "A group of kids on holiday in Cornwall meets a magical creature on the beach that has the power to grant wishes.",
  },
     {
    id: 10,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/cdcb6283a6ab184f5fb6434e93c769ec82551fd3a338f362967b9f3bfd9bb5cc.jpg",
    bannerImage:
      "https://www.indiewire.com/wp-content/uploads/2019/08/PIEAPY5ZBBACTHZ5B2R4OJQHHE.jpg",
    title: "Dora and the Lost City of Gold",
    year: "2019",
    rating: "U",
    season: "Family/Adventure",
    language: "4 languages",
    description:
      "Teenage explorer Dora leads her friends on an adventure to save her parents and solve the mystery behind a lost city of gold.",
  },
     {
    id: 11,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZtC1uj2aV1JL8Elv9K4Z4xFUtmbwaO2EoQ&s",
    bannerImage:
      "https://static01.nyt.com/images/2007/06/28/arts/29rat600.1.jpg",
    title: "Ratatouille",
    year: "2007",
    rating: "U/A",
    season: "Family/Comedy",
    language: "5 languages",
    description:
      "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.",
  },
     {
    id: 12,
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_disney_lightyear_519_c4636841.jpeg",
    bannerImage:
      "https://phantom-marca.unidadeditorial.es/6cef070866d3138243c0e441a1ab4d4e/resize/828/f/jpg/assets/multimedia/imagenes/2022/06/09/16547847976767.jpg",
    title: "Lightyear",
    year: "2022",
    rating: "U",
    season: "Family/Sci-fi",
    language: "4 languages",
    description:
      "Marooned Space Ranger Buzz Lightyear encounters an army of ruthless robots commanded by Zurg who are attempting to steal the fuel source of his ship.",
   },
     {
    id: 13,
    image:
      "https://images-cdn.ubuy.co.in/636455c97732475ab778de46-turning-red-dvd.jpg",
    bannerImage:
      "https://sc0.blr1.cdn.digitaloceanspaces.com/article/171185-gicmfnxccv-1646664253.jpg",
    title: "Turning Red",
    year: "2022",
    rating: "PG",
    season: "Family/Comedy",
    language: "4 languages",
    description:
      "A thirteen-year-old girl named Mei Lee is torn between staying her mother's dutiful daughter and the changes of adolescence. And as if the challenges were not enough, whenever she gets overly excited Mei transforms into a giant red panda.",
  },
     {
    id: 14,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmnAtpOgBAFdq3FCB60mobxfa92XAivCt6wA46wrl_ygV3nQ_BU_OHAfX4p_fBccMWoInMmQ",
    bannerImage:
      "https://m.media-amazon.com/images/M/MV5BZWZmMGZjYzctMjczMC00MGQ4LTkyODMtZWJkZDBjNTM4YmIwXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL75_UX500_CR0,0,500,281_.jpg",
    title: "Wish",
    year: "2023",
    rating: "U/A",
    season: "Family/Fantasy",
    language: "4 languages",
    description:
      "A young girl wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.",
   },
     {
    id:15,
    image:
      "https://fastfilmreviews.com/wp-content/uploads/2019/10/abominable_ver4-1.jpg",
    bannerImage:
      "https://ew.com/thmb/EklGk7R40u9Kn1nCLJ3wwSTICYU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/15c35_sq2701_s130_f216_2k_finalr-2000-66a68ffd45914a54a7fb100fa04eeb6a.jpg",
    title: "Abominable",
    year: "2019",
    rating: "U",
    season: "Family/Adventure",
    language: "5 languages",
    description:
      "Three teenagers must help a Yeti return to his family while avoiding a wealthy man and a zoologist who want him for their own needs.",
  },
];

const intlData = [
    {
    id: 1,
    image:
      "https://bestmoviesbyfarr.com/wp-content/uploads/2024/05/perfectdays-640x960.jpg",
    bannerImage:
      "https://festivalkontoret.s3.eu-central-1.amazonaws.com/filmbilder_opx/2021/_articleFullWidth/Perfect-Days.jpg",
    title: "Perfect Days",
    year: "2023",
    rating: "PG",
    season: "Drama/Narrative",
    language: "5 languages",
    description:
      "Hirayama cleans public toilets in Tokyo, lives his life in simplicity and daily tranquility. Some encounters also lead him to reflect on himself.",
  },
  {
    id: 2,
    image:
      "https://image.tmdb.org/t/p/original/sjKCQ0kA2oliN2lDkmu1etLBxpw.jpg",
    bannerImage:
      "https://nextbestpicture-com.b-cdn.net/wp-content/uploads/2022/10/Decision-To-Leave-Oscar-Chances.jpg",
    title: "Decision to Leave",
    year: "2022",
    rating: "U/A",
    season: "Romance/Mystery",
    language: "4 languages",
    description:
      "A detective investigating a man's death in the mountains meets the dead man's mysterious wife in the course of his dogged sleuthing.",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCKKMkRGKasxtnoZJjCLczKa-S4YbNxzifRz4_dxpABm-0b94a-2NsYPoZktkQyUzgXSv49g",
    bannerImage:
      "https://www.hollywoodreporter.com/wp-content/uploads/2022/05/AS-BESTAS-Cannes-Film-Festival-H-2022.jpg?w=1296&h=730&crop=1",
    title: "The Beasts",
    year: "2022",
    rating: "U/A",
    season: "Thriller/Thriller",
    language: "5 languages",
    description:
      "An expatriate French couple operate an organic farm in the Spanish countryside but clash with villagers.",
  },
  {
    id: 4,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/f0c2cbec14a4992acc71a86b3c8e281913fd8665728910b9d882cd339c128fc5.jpg",
    bannerImage:
      "https://i.ytimg.com/vi/MyQUOeS4Vlg/maxresdefault.jpg",
    title: "Io Capitano",
    year: "2023",
    rating: "U/A",
    season: "Adventure/Drama",
    language: "4 languages",
    description:
      "A Homeric fairy tale that tells the adventurous journey of two young boys, Seydou and Moussa, who leave Dakar to reach Europe.",
  },
  {
    id: 5,
    image:
      "https://play-lh.googleusercontent.com/ytPRrO1Ol_9oVkqSON-i-e-N2gvLrBNfaDFBdAep08h0fusZeGrn7WndzwwqtaNvOfhWXsRJqNQ9AeBtTWI=w240-h480-rw",
    bannerImage:
      "https://cinephilecorner.com/wp-content/uploads/2024/12/the-teachers-lounge.webp",
    title: "The Teachers’ Lounge",
    year: "2023",
    rating: "PG-13",
    season: "Drama/Narrative",
    language: "5 languages",
    description:
      "When one of her students is suspected of theft, teacher Carla Nowak decides to get to the bottom of the matter. Caught between her ideals and the school system, the consequences of her actions threaten to break her.",
  },
  {
    id: 6,
    image:
      "https://resizing.flixster.com/nF_GRWI-IRaOoWHn6qLC0g2j_so=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23010362_p_v13_ad.jpg",
    bannerImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWNFZe8xoL7gF2wYfT9trezbQJEQN8NI2gQ&s",
    title: "No Bears",
    year: "2022",
    rating: "U/A",
    season: "Romance/Thriller",
    language: "2 languages",
    description:
      "Two parallel love stories in which the partners are thwarted by hidden, inevitable obstacles, the force of superstition, and the mechanics of power.",
  },
  {
    id: 7,
    image:
      "https://intheseats.ca/wp-content/uploads/2024/06/GreenBorder_KL_poster_675x1000.jpg",
    bannerImage:
      "https://www.rogerebert.com/wp-content/uploads/2024/07/Green-Border-2.jpg",
    title: "Green Border",
    year: "2023",
    rating: "U/A",
    season: "Drama/Fiction",
    language: "5 languages",
    description:
      "Follows a family of Syrian refugees, an English teacher from Afghanistan and a border guard.",
  },
  {
    id: 8,
    image:
      "https://resizing.flixster.com/Kmd1CEyf0sX_CEkJaxNBzefVeGs=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26805607_v_v9_ab.jpg",
    bannerImage:
      "https://i.guim.co.uk/img/media/c664023aed63b4823acbe5910d48ac53f39ab680/0_33_1695_1017/master/1695.jpg?width=465&dpr=1&s=none&crop=none",
    title: "Dahomey",
    year: "2024",
    rating: "U/A",
    season: "Documentary",
    language: "4 languages",
    description:
      "The journey of 26 plundered royal treasures from the Kingdom of Dahomey exhibited in Paris, now being returned to Benin.",
  },
   {
    id: 9,
    image:
      "https://spoilerfreereviews.com/wp-content/uploads/2025/02/dRyQwww6M7DWbBZ8viPfaOQfvMn.jpg",
    bannerImage:
      "https://static01.nyt.com/images/2025/02/12/multimedia/brutalist-anatomy1-fbmc/brutalist-anatomy1-fbmc-videoSixteenByNine3000.jpg",
    title: "The Brutalist",
    year: "2024",
    rating: "R",
    season: "Drama/History",
    language: "4 languages",
    description:
      "When a visionary architect and his wife flee post-war Europe in 1947 to rebuild their legacy and witness the birth of modern United States, their lives are changed forever by a mysterious, wealthy client.",
  },
   {
    id: 10,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/987909fb35beba90d0751b1d0e73ecca36c916ccc5b6c62868706658ea903851.jpg",
    bannerImage:
      "https://www.lavocedivenezia.it/wp-content/uploads/The-Substance-il-film_11zon.webp",
    title: "The Substance",
    year: "2024",
    rating: "R",
    season: "Horror/Sci-fi",
    language: "4 languages",
    description:
      "A fading celebrity takes a black-market drug: a cell-replicating substance that temporarily creates a younger, better version of herself.",
  },
   {
    id: 11,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHEnl13Ru0RI7F8VFU47XECa2FmpX4jcy1g&s",
    bannerImage:
      "https://www.venuecymru.co.uk/sites/default/files/styles/vc_banner_image/public/images/a%20complete%20unknown%20vc%20web%20.png?itok=FJaxkbTP",
    title: "A Complete Unknown",
    year: "2024",
    rating: "A",
    season: "Music/Drama",
    language: "4 languages",
    description:
      "Set in the influential New York City music scene of the early 1960s, A Complete Unknown follows 19-year-old Minnesota musician Bob Dylan's meteoric rise.",
  },
   {
    id:12 ,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/3ed14e402f42fee03dcbe838b8997b78a66ace6067842566c6ff6d5c53c0f830.jpg",
    bannerImage:
      "https://news.northeastern.edu/wp-content/uploads/2024/12/Nosferatu1400_e3797c.jpg?w=1024",
    title: "Nosferatu",
    year: "2024",
    rating: "U/A",
    season: "Horror/Mystery",
    language: "3 languages",
    description:
      "A gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror in its wake.",
  },
   {
    id: 13,
    image:
      "https://images.static-bluray.com/products/20/149368_2_large.jpg",
    bannerImage:
      "https://m.media-amazon.com/images/S/pv-target-images/5c1072deb699d35f36cf1f38783f9318f4a0cee44c703d27fb82848a7782a44c.jpg",
    title: "The Apprentice",
    year: "2024",
    rating: "R",
    season: "Drama/History",
    language: "4 languages",
    description:
      "The story of how a young Donald Trump started his real estate business in 1970s and 80s New York with the helping hand of infamous lawyer Roy Cohn.",
  },
   {
    id: 14,
    image:
      "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    bannerImage:
      "https://i.abcnewsfe.com/a/5805a2c5-5442-401d-b865-4ec0e4415577/dune-2-1-ap-bb-240228_1709145207400_hpMain.jpg",
    title: "Dune: Part Two",
    year: "2024",
    rating: "PG-13",
    season: "Sci-fi/Adventure",
    language: "4 languages",
    description:
      "Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future.",
  },
   {
    id: 15,
    image:
      "https://m.media-amazon.com/images/M/MV5BYTc2Y2U5MGUtODI4NS00YWRjLTk2OTUtYjA1NDdlMjNlYmYxXkEyXkFqcGc@._V1_.jpg",
    bannerImage:
      "https://www.hollywoodreporter.com/wp-content/uploads/2024/11/QOTR_EmilyBettRickards-H-2024.jpg?w=1296",
    title: "Queen of the Ring",
    year: "2024",
    rating: "PG-13",
    season: "Sport/Drama",
    language: "3 languages",
    description:
      "A small town single mother embraces the danger as she dominates America's most masculine sport and becomes the first million dollar female athlete in history.",
  },
   {
    id: 16,
    image:
      "https://movieswithtarek.com/wp-content/uploads/2024/12/img_0669.jpg?w=719",
    bannerImage:
      "https://hollywoodlife.com/wp-content/uploads/2024/08/babygirl-image-1-2-e1724764825416.jpg?fit=4700%2C3010",
    title: "Babygirl",
    year: "2024",
    rating: "R",
    season: "Thriller/Erotic",
    language: "4 languages",
    description:
      "A high-powered CEO puts her career and family on the line when she begins a torrid affair with her much-younger intern.",
  },
];


// Function to create gallery items for both galleries
function createGalleries() {
  // Create recommended movies gallery
  const galleryRow = document.getElementById("galleryRow");
  createGalleryItems(galleryData, galleryRow, "recommended");
  
  // Create all time favorites gallery
  const favoritesRow = document.getElementById("favoritesRow");
  createGalleryItems(favoritesData, favoritesRow, "favorites");
}

// Function to create gallery items for a specific gallery
function createGalleryItems(data, container, galleryType) {
  if (!container) return;
  
  data.forEach((item) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.dataset.id = item.id;
    galleryItem.dataset.galleryType = galleryType;

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

    container.appendChild(galleryItem);

    // Add event listener to watch button
    const watchButton = galleryItem.querySelector(".watch-button");
    watchButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Determine which expanded card to use based on gallery type
      const expandedCardId = galleryType === "recommended" ? "expandedCard" : "favoritesExpandedCard";
      showExpandedCard(item, expandedCardId);
    });
  });
}

// Function to show expanded card with the correct image (poster or banner)
function showExpandedCard(item, expandedCardId) {
  const expandedCard = document.getElementById(expandedCardId);
  const expandedContent = expandedCard.querySelector(".expanded-content");

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

  // Add event listener to watch-list button in expanded card
  const expandedWatchListButton = expandedContent.querySelector(".watch-list");
  expandedWatchListButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToWatchlist(item);
  });
}

// Function to handle adding to watchlist
function addToWatchlist(item) {
  console.log(`Added to watchlist: ${item.title}`);
}

// Function to close expanded card
function closeExpandedCard(expandedCardId) {
  const expandedCard = document.getElementById(expandedCardId);
  expandedCard.style.display = "none";
}

// Main DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
  // Create galleries
  createGalleries();

  // Add close button event listeners for both expanded cards
  document
    .getElementById("closeButton")
    .addEventListener("click", () => closeExpandedCard("expandedCard"));
    
  document
    .getElementById("favoritesCloseButton")
    .addEventListener("click", () => closeExpandedCard("favoritesExpandedCard"));

  // Close expanded cards when clicking outside the content
  document.getElementById("expandedCard").addEventListener("click", (e) => {
    if (e.target === document.getElementById("expandedCard")) {
      closeExpandedCard("expandedCard");
    }
  });
  
  document.getElementById("favoritesExpandedCard").addEventListener("click", (e) => {
    if (e.target === document.getElementById("favoritesExpandedCard")) {
      closeExpandedCard("favoritesExpandedCard");
    }
  });
  
  // Add scroll button functionality for both galleries
  document.getElementById("scrollLeft").addEventListener("click", () => {
    document.getElementById("gallery").scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("scrollRight").addEventListener("click", () => {
    document.getElementById("gallery").scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("favoritesScrollLeft").addEventListener("click", () => {
    document.getElementById("favoritesGallery").scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("favoritesScrollRight").addEventListener("click", () => {
    document.getElementById("favoritesGallery").scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });

  // Initialize new galleries if there's data
  if (trendingData.length > 0) {
    const trendingRow = document.getElementById("trendingRow");
    createGalleryItems(trendingData, trendingRow, "trending");
  }
  
  if (newReleasesData.length > 0) {
    const newReleasesRow = document.getElementById("newReleasesRow");
    createGalleryItems(newReleasesData, newReleasesRow, "newReleases");
  }
  
  if (actionData.length > 0) {
    const actionRow = document.getElementById("actionRow");
    createGalleryItems(actionData, actionRow, "action");
  }
  
  if (comedyData.length > 0) {
    const comedyRow = document.getElementById("comedyRow");
    createGalleryItems(comedyData, comedyRow, "comedy");
  }
  
  if (dramaData.length > 0) {
    const dramaRow = document.getElementById("dramaRow");
    createGalleryItems(dramaData, dramaRow, "drama");
  }
  
  if (scifiData.length > 0) {
    const scifiRow = document.getElementById("scifiRow");
    createGalleryItems(scifiData, scifiRow, "scifi");
  }
  
  if (horrorData.length > 0) {
    const horrorRow = document.getElementById("horrorRow");
    createGalleryItems(horrorData, horrorRow, "horror");
  }
  
  if (animeData.length > 0) {
    const animeRow = document.getElementById("animeRow");
    createGalleryItems(animeData, animeRow, "anime");
  }
  
  if (familyData.length > 0) {
    const familyRow = document.getElementById("familyRow");
    createGalleryItems(familyData, familyRow, "family");
  }
  
  if (intlData.length > 0) {
    const intlRow = document.getElementById("intlRow");
    createGalleryItems(intlData, intlRow, "intl");
  }
  
  // Add close button event listeners for new expanded cards
  document
    .getElementById("trendingCloseButton")
    .addEventListener("click", () => closeExpandedCard("trendingExpandedCard"));
    
  document
    .getElementById("newReleasesCloseButton")
    .addEventListener("click", () => closeExpandedCard("newReleasesExpandedCard"));
    
  document
    .getElementById("actionCloseButton")
    .addEventListener("click", () => closeExpandedCard("actionExpandedCard"));
    
  document
    .getElementById("comedyCloseButton")
    .addEventListener("click", () => closeExpandedCard("comedyExpandedCard"));
    
  document
    .getElementById("dramaCloseButton")
    .addEventListener("click", () => closeExpandedCard("dramaExpandedCard"));
    
  document
    .getElementById("scifiCloseButton")
    .addEventListener("click", () => closeExpandedCard("scifiExpandedCard"));
    
  document
    .getElementById("horrorCloseButton")
    .addEventListener("click", () => closeExpandedCard("horrorExpandedCard"));
    
  document
    .getElementById("animeCloseButton")
    .addEventListener("click", () => closeExpandedCard("animeExpandedCard"));
    
  document
    .getElementById("familyCloseButton")
    .addEventListener("click", () => closeExpandedCard("familyExpandedCard"));
    
  document
    .getElementById("intlCloseButton")
    .addEventListener("click", () => closeExpandedCard("intlExpandedCard"));
  
  // Add click event listeners for expanded cards
  document.getElementById("trendingExpandedCard").addEventListener("click", (e) => {
    if (e.target === document.getElementById("trendingExpandedCard")) {
      closeExpandedCard("trendingExpandedCard");
    }
  });
  
  document.getElementById("newReleasesExpandedCard").addEventListener("click", (e) => {
    if (e.target === document.getElementById("newReleasesExpandedCard")) {
      closeExpandedCard("newReleasesExpandedCard");
    }
  });
  
  document.getElementById("actionExpandedCard").addEventListener("click", (e) => {
    if (e.target === document.getElementById("actionExpandedCard")) {
      closeExpandedCard("actionExpandedCard");
    }
  });
  
  document.getElementById("comedyExpandedCard").addEventListener("click", (e) => {
    if (e.target === document.getElementById("comedyExpandedCard")) {
      closeExpandedCard("comedyExpandedCard");
    }
  });
  
  document.getElementById("dramaExpandedCard").addEventListener("click", (e) => {
    if (e.target === document.getElementById("dramaExpandedCard")) {
      closeExpandedCard("dramaExpandedCard");
    }
  });
  
  document.getElementById("scifiExpandedCard").addEventListener("click", (e) => {
    if (e.target === document.getElementById("scifiExpandedCard")) {
      closeExpandedCard("scifiExpandedCard");
    }
  });
  
  document.getElementById("horrorExpandedCard").addEventListener("click", (e) => {
    if (e.target === document.getElementById("horrorExpandedCard")) {
      closeExpandedCard("horrorExpandedCard");
    }
  });
  
  document.getElementById("animeExpandedCard").addEventListener("click", (e) => {
    if (e.target === document.getElementById("animeExpandedCard")) {
      closeExpandedCard("animeExpandedCard");
    }
  });
  
  document.getElementById("familyExpandedCard").addEventListener("click", (e) => {
    if (e.target === document.getElementById("familyExpandedCard")) {
      closeExpandedCard("familyExpandedCard");
    }
  });
  
  document.getElementById("intlExpandedCard").addEventListener("click", (e) => {
    if (e.target === document.getElementById("intlExpandedCard")) {
      closeExpandedCard("intlExpandedCard");
    }
  });
  
  // Add scroll button functionality for new galleries
  document.getElementById("trendingScrollLeft").addEventListener("click", () => {
    document.getElementById("trendingGallery").scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("trendingScrollRight").addEventListener("click", () => {
    document.getElementById("trendingGallery").scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("newReleasesScrollLeft").addEventListener("click", () => {
    document.getElementById("newReleasesGallery").scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("newReleasesScrollRight").addEventListener("click", () => {
    document.getElementById("newReleasesGallery").scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("actionScrollLeft").addEventListener("click", () => {
    document.getElementById("actionGallery").scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("actionScrollRight").addEventListener("click", () => {
    document.getElementById("actionGallery").scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("comedyScrollLeft").addEventListener("click", () => {
    document.getElementById("comedyGallery").scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("comedyScrollRight").addEventListener("click", () => {
    document.getElementById("comedyGallery").scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("dramaScrollLeft").addEventListener("click", () => {
    document.getElementById("dramaGallery").scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("dramaScrollRight").addEventListener("click", () => {
    document.getElementById("dramaGallery").scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("scifiScrollLeft").addEventListener("click", () => {
    document.getElementById("scifiGallery").scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("scifiScrollRight").addEventListener("click", () => {
    document.getElementById("scifiGallery").scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("horrorScrollLeft").addEventListener("click", () => {
    document.getElementById("horrorGallery").scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("horrorScrollRight").addEventListener("click", () => {
    document.getElementById("horrorGallery").scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("animeScrollLeft").addEventListener("click", () => {
    document.getElementById("animeGallery").scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("animeScrollRight").addEventListener("click", () => {
    document.getElementById("animeGallery").scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("familyScrollLeft").addEventListener("click", () => {
    document.getElementById("familyGallery").scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("familyScrollRight").addEventListener("click", () => {
    document.getElementById("familyGallery").scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("intlScrollLeft").addEventListener("click", () => {
    document.getElementById("intlGallery").scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });
  
  document.getElementById("intlScrollRight").addEventListener("click", () => {
    document.getElementById("intlGallery").scrollBy({
      left: 300,
      behavior: "smooth"
    });
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
