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
      "https://mountvicflicks.com.au/site/assets/files/14051/filmposter_packshot.jpg",
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
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },




];
const newReleasesData = [
    // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
];
const actionData = [
    // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
];
const comedyData = [
    // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
];
const dramaData = [
    // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
];
const scifiData = [
    // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
];
const horrorData = [
    // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
];
const animeData = [
    // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
];
const familyData = [
    // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
];
const intlData = [
    // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
  // {
  //   id: ,
  //   image:
  //     "",
  //   bannerImage:
  //     "",
  //   title: "",
  //   year: "",
  //   rating: "U/A",
  //   season: " ",
  //   language: "languages",
  //   description:
  //     "",
  // },
];

// Extend the document.addEventListener DOMContentLoaded function
document.addEventListener("DOMContentLoaded", () => {
  // Existing code
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

  // New code for additional genre galleries
  
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

document.addEventListener("DOMContentLoaded", () => {
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
