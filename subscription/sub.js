document.addEventListener("DOMContentLoaded", function() {
  // Handle Back Button Click
  const backButton = document.querySelector(".close-btn");
  if (backButton) {
    backButton.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "../index.html";
    });
  } else {
    console.log("Back button element not found");
  }
});

// Define plan pricing for each billing cycle
const planPricing = {
  quarterly: {
    super: { price: 69, period: "/3Months" },
    premium: { price: 99, period: "/3Months" }
  },
  yearly: {
    super: { price: 149, period: "/Year" },
    premium: { price: 299, period: "/Year" }
  },
  monthly: {
    super: { price: 19, period: "/Month" },
    premium: { price: 39, period: "/Month" }
  }
};

// Current state
let currentPlan = 'super';
let currentBillingCycle = 'yearly';

// Generate posters dynamically with movie names
function generatePosters() {
  const posterContainer = document.getElementById('posterContainer');

  const movieData = [
    { title: 'Avengers', imageUrl: 'https://cdn.marvel.com/content/1x/dic_infinitysaga_hb_1080x1920-legal-line.jpg' },
    { title: 'Spider-Man', imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1BnTGSgBwFNCLnlAMaCl8Ocb2PfVjkGLrI75v6_2uQwsuTeaOAVlR_WfYDqHAnK1YMHsevA' },
    { title: 'Black Panther', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
    { title: 'Avengers', imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg' },
    { title: 'Avengers', imageUrl: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/lucky-baskhar-et00386124-1707118285.jpg' },
    { title: 'Avengers', imageUrl: 'https://www.dreamworks.com/storage/cms-uploads/kung-fu-panda-4-he-poster.jpg' },
    { title: 'Avengers', imageUrl: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-1882225,resizemode-75,msid-114885579/magazines/panache/squid-game-2-release-date-what-to-expect-check-plot-cast-and-everything-you-need-to-know-about-the-korean-thriller.jpg' },
    { title: 'Avengers', imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/kvzkosw0/poster/y/l/2/medium-ford-vs-ferrari-movie-matte-finish-poster-ppoint7095-original-imag8rk4dpf58e5t.jpeg?q=90&crop=false' },
    { title: 'Avengers', imageUrl: 'https://cdn.pixabay.com/photo/2020/09/03/08/28/doremon-5540537_640.jpg' },
    { title: 'Avengers', imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg' },
    { title: 'Avengers', imageUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-10/26/17/asset/bb8104eafde8/sub-buzz-213-1603731688-17.jpg' },
    { title: 'Avengers', imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-250,h-390/et00430623-rtqnsspgng-portrait.jpg' },
    { title: 'Avengers', imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjllNTdiM2QtYjQ0Ni00ZGM1LWFlYmUtNWY0YjMzYWIxOTYxXkEyXkFqcGc@._V1_.jpg' },
    { title: 'Avengers', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjAlzy6dCe68XBQzomwjJSEMryRBLnlPFdw&s' },
    { title: 'Avengers', imageUrl: 'https://www.reelviews.net/resources/img/posters/thumbs/artemis_1.jpg' },
    { title: 'Avengers', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/screen-shot-2021-01-08-at-2-12-55-pm-1610133207.png' },
    { title: 'Avengers', imageUrl: 'https://i.redd.it/acfhx292uuxc1.jpeg' },
    { title: 'Avengers', imageUrl: ' https://m.media-amazon.com/images/M/MV5BMTcwNTU5NDk5N15BMl5BanBnXkFtZTgwMDQ5MTUzMTE@._V1_FMjpg_UX1000_.jpg' },
    { title: 'Avengers', imageUrl: ' https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_.jpg' },
    { title: 'Avengers', imageUrl: ' https://cdn.moviefone.com/admin-uploads/posters/afterwefell-movie-poster_1657920259.jpg?d=360x540&q=80' },
    { title: 'Avengers', imageUrl: ' https://m.media-amazon.com/images/M/MV5BMTVmZDNjMGEtNzc5MC00ODY4LWI1ZTYtMjM2ODhhNGExNzgxXkEyXkFqcGc@._V1_.jpg' },
    { title: 'Avengers', imageUrl: ' https://akamaividz2.zee5.com/image/upload/w_336,h_504,c_scale,f_webp,q_auto:eco/resources/0-0-1z5715023/portrait/1920x770663af365374345ef80c73bbd16807a283615e1f1b1ff47b09a25ee62a32c31c2b0b8d24ce6d748f1a09f02639f7dbbb6.jpg' },
    { title: 'Avengers', imageUrl: 'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL5R7M/image?locale=en-us&purposes=BoxArt&mode=scale&q=90&w=256 ' },
    { title: 'Avengers', imageUrl: ' https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL5DPR/image?locale=en-us&purposes=BoxArt&mode=scale&q=90&w=256' },
    { title: 'Avengers', imageUrl: ' https://m.media-amazon.com/images/I/71NzzMw13eL._AC_UF1000,1000_QL80_.jpg' },
    { title: 'Avengers', imageUrl: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713824139671-D9DAKEPKQFJJZ9VS6OOF/23_luca.jpg ' },
    { title: 'Avengers', imageUrl: ' https://i.pinimg.com/236x/6b/0b/93/6b0b93a17b3981d352070deb3cfe5cbd.jpg' },
    { title: 'Avengers', imageUrl: ' https://twincitieskidsclub.com/wp-content/uploads/2022/10/encanto-movie.jpeg' },
    { title: 'Avengers', imageUrl: ' https://qqcdnpictest.mxplay.com/pic/6459c11c50d250324895c10cee21a77b/en/2x3/312x468/1a2cb821df8b73ab3c7edbb32e1bfded_1280x1920.webp' },
    { title: 'Avengers', imageUrl: ' https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2023/07/image82.png' },
    { title: 'Avengers', imageUrl: ' https://www.boredpanda.com/blog/wp-content/uploads/2022/05/fantasy-movies_6-627a377038127__700.jpg' },
    { title: 'Avengers', imageUrl: ' https://www.kyuhoshi.com/wp-content/uploads/2023/09/children_who_chase_lost_voices_2011.jpg' },
    { title: 'Avengers', imageUrl: 'https://resizing.flixster.com/wAAIvgpeIupPeh-G6xfcw_HBJzw=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p34483_p_v8_bd.jpg ' },
    { title: 'Avengers', imageUrl: 'https://tinybeans.com/wp-content/uploads/2024/01/best-fantasy-movies-hugo.png?w=427 ' },
    { title: 'Avengers', imageUrl: 'https://images.ctfassets.net/9mqyb8metqsu/6KTewusrMRTDj54la5ElzN/2bc7742f32d880fee89d627be2aa9ee0/NeZha-min.webp ' },
    { title: 'Avengers', imageUrl: 'https://i5.walmartimages.com/seo/Avatar-DVD_dfa1eb28-6a7c-455f-abea-a967512b0f74.87a2fad92cde3d2e03b4ac03283f8a43.jpeg ' },
    { title: 'Avengers', imageUrl: 'https://movieswithaplottwist.com/wp-content/uploads/2019/10/Lady_in_the_water_movie_poster.jpg ' },
    { title: 'Avengers', imageUrl: ' https://m.media-amazon.com/images/M/MV5BYTRmOTk2ZDYtY2Q3Mi00MGYwLWFjNDQtYTliODc3NzM1ZjBlXkEyXkFqcGc@._V1_.jpg' },
    { title: 'Avengers', imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00419608-trfneqsypn-portrait.jpg ' },
    { title: 'Avengers', imageUrl: 'https://3.bp.blogspot.com/_t68ar0SFX54/S9eNk4vu5mI/AAAAAAAAEtg/IqxSc8i5MyQ/s1600/Grave+of+Fireflies.jpg ' },
    { title: 'Avengers', imageUrl: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2024/11/htd_teaser1sheet7_rgb_2sm.jpg ' },
    { title: 'Avengers', imageUrl: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6ZWBprs0QYaiA92kpjTxle0KhX96--Nc2Q&s' },
    { title: 'Avengers', imageUrl: ' https://resizing.flixster.com/ioQtD3b6hKJON0J4_7S-Wp0Ss5M=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzczNzQ3NjczLTE3MWMtNGJlYi1hODUwLTNkMmU5MGYxYjJiNy5qcGc=' },
    { title: 'Avengers', imageUrl: 'https://resizing.flixster.com/SneFHH-BDOhBkh7h1A-aNwcrxLM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U3YTY2YTQzLTU5NDgtNDNiMC04ZTI1LTFiZDYyMTMxMjc5MC5qcGc= ' },
    { title: 'Avengers', imageUrl: ' https://images.squarespace-cdn.com/content/v1/5f6cf1a893e35255d4d7e89d/1e414140-0d19-4e2e-859d-33f3c8537dfa/AKW-ALL-NEW-FINAL%281%29.jpg' },
    { title: 'Avengers', imageUrl: 'https://resizing.flixster.com/LjP_YBdwVIehvFE04lJgajPtOoc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU5M2FmN2I4LTBjYTQtNDI2NS05MTJkLTg4MWZiOGI2MDRhNi5qcGc= ' },
    { title: 'Avengers', imageUrl: 'https://resizing.flixster.com/TNORsbW_zai228k_jM1B5F3lN-0=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25089179_v_v13_aa.jpg ' },
    { title: 'Avengers', imageUrl: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3546149_p_v8_aq.jpg ' },
    { title: 'Avengers', imageUrl: ' https://static1.cbrimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/the-green-knight-poster.jpg' },
    { title: 'Avengers', imageUrl: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/08/bewitched-poster.jpg ' },
    { title: 'Avengers', imageUrl: ' https://resizing.flixster.com/31MUPYoGBwNKA4Xc2O8X5xjfcvM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y1YzhmOGNiLTEyZWEtNDgzYy05YjU0LWY4OWVhMWI5ZWM1Ni5qcGc=' },
    { title: 'Avengers', imageUrl: ' https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24266_p_v12_ae.jpg' },
    { title: 'Avengers', imageUrl: ' https://resizing.flixster.com/jWgJJGiIM3RKZLbqEa_qUbFTSmk=/300x300/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20201199_v_h9_am.jpg' },
    { title: 'Avengers', imageUrl: ' https://wp.scoopwhoop.com/wp-content/uploads/2024/03/19161823/Screenshot-2024-03-19-161812.png' },
    { title: 'Avengers', imageUrl: 'https://wp.scoopwhoop.com/wp-content/uploads/2024/03/19161252/Screenshot-2024-03-19-161242.png ' },
    { title: 'Avengers', imageUrl: ' https://hips.hearstapps.com/hmg-prod/images/mv5bmtk2mjc2nzyxnl5bml5banbnxkftztgwmta2ota1ndmat-v1-1-1589813785.jpg' },
    { title: 'Avengers', imageUrl: 'https://pop-verse.com/wp-content/uploads/2014/12/19fk32sw3nt1wjpg.jpg ' },
    { title: 'Avengers', imageUrl: ' https://assets-in.bmscdn.com/discovery-catalog/events/et00377025-rzyjfppszt-portrait.jpg' },
    { title: 'Avengers', imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00418623-mvwmddngcv-portrait.jpg ' },
    { title: 'Avengers', imageUrl: ' https://mena-img-cdn-lb.aws.playco.com/474w/tvtokyo/NARUTOSHIPPUDENTHEMOVIE3THEWILLOFFIREY2009MJA/NARUTOSHIPPUDENTHEMOVIE3THEWILLOFFIREY2009MJA-474x677-PST.jpg' },
    { title: 'Avengers', imageUrl: 'https://m.media-amazon.com/images/M/MV5BM2E5Mjg3NzItNTNlNy00NzJmLThjOGUtZjdjMTZiMGJkYTMzXkEyXkFqcGc@._V1_.jpg ' },
    { title: 'Avengers', imageUrl: ' https://bollyspice.com/wp-content/uploads/2022/10/82A9AC93-D26C-4A7C-8ACF-180E9FEF512D.jpeg' },

  ];
  

    // Create posters for each movie, repeating as needed to fill the grid
    for (let i = 0; i < 125; i++) {
      const movieIndex = i % movieData.length;
      const movie = movieData[movieIndex];
      
      const poster = document.createElement('div');
      poster.className = 'poster';
      poster.innerHTML = `<img src="${movie.imageUrl}" alt="${movie.title}">`;
      
      posterContainer.appendChild(poster);
    }
  }

  // Select plan function (Super or Premium)
  function selectPlan(plan) {
    // Update current plan
    currentPlan = plan;
    
    // Update plan column highlights
    document.querySelectorAll('.plan-column').forEach(col => col.classList.remove('active'));
    document.querySelectorAll(`.plan-column.${plan}`).forEach(col => col.classList.add('active'));
    
    // Update price card selection
    document.querySelectorAll('.price-card').forEach(card => card.classList.remove('active'));
    document.querySelector(`.price-card.${plan}`).classList.add('active');
    
    // Update continue button text and color
    const continueBtn = document.getElementById('continueBtn');
    continueBtn.innerHTML = `Continue with ${plan.charAt(0).toUpperCase() + plan.slice(1)} <span class="iconify btn-icon" data-icon="mdi:arrow-right"></span>`;
    
    // Update button gradient based on the plan
    if (plan === 'super') {
      continueBtn.style.backgroundImage = 'linear-gradient(to right,rgb(0, 85, 255),rgb(24, 140, 255))';
    } else {
      continueBtn.style.backgroundImage = 'linear-gradient(to right, #2196f3,rgb(255, 34, 136))';
    }
    
    updatePrices();
  }

  // Select billing cycle function
  function selectBillingCycle(cycle) {
    // Update current billing cycle
    currentBillingCycle = cycle;
    
    // Update UI
    document.querySelectorAll('.cycle-option').forEach(option => option.classList.remove('active'));
    document.querySelector(`.cycle-option[data-period="${cycle}"]`).classList.add('active');
    
    updatePrices();
  }

  // Select price card function
  function selectPriceCard(plan) {
    selectPlan(plan);
  }

  // Update prices based on current plan and billing cycle
  function updatePrices() {
    const superPricing = planPricing[currentBillingCycle].super;
    const premiumPricing = planPricing[currentBillingCycle].premium;
    
    // Update Super plan price with animation
    animateNumberChange('superPrice', superPricing.price);
    document.getElementById('superPeriod').textContent = superPricing.period;
    
    // Update Premium plan price with animation
    animateNumberChange('premiumPrice', premiumPricing.price);
    document.getElementById('premiumPeriod').textContent = premiumPricing.period;
  }

  // Animate number change
  function animateNumberChange(elementId, newValue) {
    const element = document.getElementById(elementId);
    const currentValue = parseInt(element.textContent);
    const diff = newValue - currentValue;
    const steps = 20;
    const increment = diff / steps;
    
    let step = 0;
    
    const animation = setInterval(() => {
      step++;
      const intermediateValue = Math.round(currentValue + (increment * step));
      element.textContent = intermediateValue;
      
      if (step >= steps) {
        clearInterval(animation);
        element.textContent = newValue;
      }
    }, 20);
  }

  // Initialize the page
  document.addEventListener('DOMContentLoaded', function() {
    generatePosters();
    selectPlan('super');
    selectBillingCycle('yearly');
    
    // Add event listener for posters to pause animation on hover
    const posterContainer = document.getElementById('posterContainer');
    posterContainer.addEventListener('mouseenter', function() {
      this.style.animationPlayState = 'paused';
    });
    
    posterContainer.addEventListener('mouseleave', function() {
      this.style.animationPlayState = 'running';
    });
  });

  document.getElementById("cycle-option").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent unexpected page behavior
});
