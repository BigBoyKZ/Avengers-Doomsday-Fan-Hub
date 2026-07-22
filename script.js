// ===============================
// DATA
// ===============================

const heroes = [
  {
    name: "Doctor Doom",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxWf8hQt4LqZx_qPVQkO-riJOTSC8XzEr54eVbAwDWA&s=10",
    actor: "Robert Downey Jr.",
    role: "Multiversal villain / armored ruler",
    universe: "Unknown / multiversal",
    group: "Villains",
    sigil: "doom",
  },
  {
    name: "Thor Odinson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LII8nFcdFDWX3Od4O75bIrd7N5duunjSGeGLtJD8Ng&s=10",
    actor: "Chris Hemsworth",
    role: "God of Thunder",
    universe: "Earth-616",
    group: "Avengers",
    sigil: "bolt",
  },
  {
    name: "Captain America",
    image:
      "https://ironstudios.com/cdn/shop/files/090309_0_1024x1024.jpg?v=1752766051",
    actor: "Anthony Mackie",
    role: "New Captain America",
    universe: "Earth-616",
    group: "Avengers",
    sigil: "shield",
  },
  {
    name: "Shuri / Black Panther",
    image:
      "https://static.wikia.nocookie.net/marvelmovies/images/4/4b/Wakanda_Forever_Shuri_Suit_Poster.jpg/revision/latest?cb=20221121232647",
    actor: "Letitia Wright",
    role: "Wakandan protector",
    universe: "Earth-616",
    group: "Wakanda",
    sigil: "panther",
  },
  {
    name: "Shang-Chi",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/simu-liu-shang-chi-legend-of-the-ten-rings-1629210410.jpg?crop=0.445xw:0.663xh;0.261xw,0&resize=1200:*",
    actor: "Simu Liu",
    role: "Master of the Ten Rings",
    universe: "Earth-616",
    group: "Marvel",
    sigil: "rings",
  },
  {
    name: "Ant-Man",
    image:
      "https://static.wikia.nocookie.net/marveldatabase/images/8/82/Scott_Lang_%28Earth-199999%29_from_Ant-Man_and_the_Wasp_%28film%29_001.jpg/revision/latest?cb=20180801154333",
    actor: "Paul Rudd",
    role: "Size-shifting Avenger",
    universe: "Earth-616",
    group: "Avengers",
    sigil: "ant",
  },
  {
    name: "Falcon",
    image:
      "https://static.wikia.nocookie.net/disney/images/8/86/Joaquin_Torres_-_Profile.png/revision/latest?cb=20250823150629",
    actor: "Danny Ramirez",
    role: "Winged hero",
    universe: "Earth-616",
    group: "Avengers",
    sigil: "wing",
  },
  {
    name: "Mister Fantastic",
    image:
      "https://deadline.com/wp-content/uploads/2025/04/pedro-pascal-fantastic-four-first-steps.jpg",
    actor: "Pedro Pascal",
    role: "Stretching genius",
    universe: "Earth-828",
    group: "Fantastic Four",
    sigil: "f4",
  },
  {
    name: "Invisible Woman",
    image:
      "https://static.wikia.nocookie.net/marvel-cinematic-universe-revived/images/c/c3/Invisible_Woman_Infobox2.webp/revision/latest?cb=20250606182627",
    actor: "Vanessa Kirby",
    role: "Force-field strategist",
    universe: "Earth-828",
    group: "Fantastic Four",
    sigil: "invis",
  },
  {
    name: "The Thing",
    image:
      "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/2a/Thing_Infobox.png/revision/latest?cb=20250716011850",
    actor: "Ebon Moss-Bachrach",
    role: "The rocky powerhouse",
    universe: "Earth-828",
    group: "Fantastic Four",
    sigil: "thing",
  },
  {
    name: "Human Torch",
    image:
      "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b8/Human_Torch_Infobox.png/revision/latest?cb=20250716012601",
    actor: "Joseph Quinn",
    role: "Flame flyer",
    universe: "Earth-828",
    group: "Fantastic Four",
    sigil: "flame",
  },
  {
    name: "H.E.R.B.I.E.",
    image:
      "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/6f/HERBIE_Infobox.png/revision/latest?cb=20250716011355",
    actor: "Matthew Wood",
    role: "Fantastic Four support unit",
    universe: "Earth-828",
    group: "Fantastic Four",
    sigil: "bot",
  },
  {
    name: "Doctor Strange",
    image:
      "https://static.wikia.nocookie.net/disney/images/d/dc/Doctor_Strange_-_Profile.png/revision/latest?cb=20220804200852",
    actor: "Benedict Cumberbatch",
    role: "Sorcerer Supreme",
    universe: "Earth-616",
    group: "Magic",
    sigil: "spell",
  },
  {
    name: "Winter Soldier",
    image: "https://i.redd.it/oy4plzos8iof1.jpeg",
    actor: "Sebastian Stan",
    role: "Veteran operative",
    universe: "Earth-616",
    group: "Avengers",
    sigil: "arm",
  },
  {
    name: "Yelena Belova",
    image:
      "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/8/8e/Yelena_Belova_Infobox.jpg/revision/latest?cb=20250425194545",
    actor: "Florence Pugh",
    role: "Elite spy and warrior",
    universe: "Earth-616",
    group: "Thunderbolts",
    sigil: "blade",
  },
  {
    name: "U.S. Agent",
    image:
      "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/ba/U.S._Agent_Infobox.png/revision/latest?cb=20260313234727",
    actor: "Wyatt Russell",
    role: "Weaponized patriot",
    universe: "Earth-616",
    group: "Thunderbolts",
    sigil: "star",
  },
  {
    name: "Ghost",
    image: "https://i.redd.it/w7wstzqisuye1.png",
    actor: "Hannah John-Kamen",
    role: "Phase-shifting infiltrator",
    universe: "Earth-616",
    group: "Thunderbolts",
    sigil: "phase",
  },
  {
    name: "Sentry",
    image:
      "https://cosmicbook.news/wp-content/uploads/2025/05/thunderbolts-sentry-concept-art1.jpg",
    actor: "Lewis Pullman",
    role: "Solar-level powerhouse",
    universe: "Earth-616",
    group: "Thunderbolts",
    sigil: "sun",
  },
  {
    name: "Loki",
    image:
      "https://preview.redd.it/is-tva-loki-still-considered-616-loki-would-he-get-a-new-v0-io72kd9n2i791.jpg?auto=webp&s=2604e2ad743de7a48d6111bdbd58d8dda59d3ec1",
    actor: "Tom Hiddleston",
    role: "God of stories",
    universe: "Earth-616 / TVA",
    group: "Asgard",
    sigil: "horns",
  },
  {
    name: "Steve Rogers",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQ0YWM1ODEtZDFkYy00MGJhLTkwZDUtMzVkZjljODU3ZTRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    actor: "Chris Evans",
    role: "Captain America return",
    universe: "Earth-616 / past timeline",
    group: "Avengers",
    sigil: "shield",
  },
  {
    name: "Namor",
    image: "https://www.refinery29.com/images/11192563.jpg",
    actor: "Tenoch Huerta Mejia",
    role: "Ruler of Talokan",
    universe: "Earth-616",
    group: "Talokan",
    sigil: "wave",
  },
  {
    name: "Namora",
    image:
      "https://i.redd.it/new-bts-photos-of-mabel-cadena-as-namora-in-black-panther-v0-crd2c0ys7mz91.jpg?width=1440&format=pjpg&auto=webp&s=5c1bc08cc4ca998332be578650fc484e1ff38915",
    actor: "Mabel Cadena",
    role: "Talokan champion",
    universe: "Earth-616",
    group: "Talokan",
    sigil: "wave",
  },
  {
    name: "Attuma",
    image:
      "https://remezcla.com/wp-content/uploads/sites/3/2022/07/Alex_Livinalli_Black_Panther_Wakanda_Forever_Film.jpg",
    actor: "Alex Livinalli",
    role: "Talokan warrior",
    universe: "Earth-616",
    group: "Talokan",
    sigil: "spear",
  },
  {
    name: "Wong",
    image:
      "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/00/Wong_in_She-Hulk.jpg/revision/latest?cb=20240802144541",
    actor: "Benedict Wong",
    role: "Master of the Mystic Arts",
    universe: "Earth-616",
    group: "Magic",
    sigil: "spell",
  },
  {
    name: "M'Baku",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX6rplISw7JDlZPhazQgrv2MJ6EOaIsxKG8_5jAkqSgBIoC9ateGaWDv0&s=10",
    actor: "Winston Duke",
    role: "Jabari leader",
    universe: "Earth-616",
    group: "Wakanda",
    sigil: "mask",
  },
  {
    name: "Peggy Carter",
    image:
      "https://static.wikia.nocookie.net/heroes-and-villain/images/8/88/Peggy_Carter.jpg/revision/latest?cb=20250731180854",
    actor: "Hayley Atwell",
    role: "Strategist and ally",
    universe: "Earth-616",
    group: "Legacy",
    sigil: "star",
  },
  {
    name: "Professor X",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRvLFCfzE6C83OhPuoluSDIpj21h19uPZ1VyqlLseBixR5VNgKgom_-Bf&s=10",
    actor: "Patrick Stewart",
    role: "Telepathic leader",
    universe: "Fox X-Men universe",
    group: "X-Men",
    sigil: "x",
  },
  {
    name: "Beast",
    image:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/12/beast-variant-examining-monica-rambeau-in-the-marvels.jpg",
    actor: "Kelsey Grammer",
    role: "Brilliant mutant scholar",
    universe: "Fox X-Men universe",
    group: "X-Men",
    sigil: "claw",
  },
  {
    name: "Cyclops",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKPMd5lFVhQsOzc06k3aToHFkZ2S917tk8uvU4zlg3EvRuQX86b1XPfAFR&s=10",
    actor: "James Marsden",
    role: "Optic-blast leader",
    universe: "Fox X-Men universe",
    group: "X-Men",
    sigil: "beam",
  },
  {
    name: "Magneto",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuJxr5dxLPLXzHOFKYSdhD-Xwv1w5U7KRWuoGuVqR7pjJ4PDb2bzgjOQ&s=10",
    actor: "Ian McKellen",
    role: "Master of magnetism",
    universe: "Fox X-Men universe",
    group: "X-Men",
    sigil: "magnet",
  },
  {
    name: "Gambit",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52OOfINO66A8Kap-YashORve2lK0q3cZd2HegC10SRCpqUe_6z_hPRo4X&s=10",
    actor: "Channing Tatum",
    role: "Card-throwing rogue",
    universe: "Fox X-Men universe",
    group: "X-Men",
    sigil: "card",
  },
  {
    name: "Nightcrawler",
    image:
      "https://cdn.theplaylist.net/wp-content/uploads/2025/08/18083730/ALAN-CUMMING_TALKS_AVENGERS-DOOMSDAY_NIGHTCRAWLER_X-MEN_MCU_.jpg",
    actor: "Alan Cumming",
    role: "Teleporting mutant",
    universe: "Fox X-Men universe",
    group: "X-Men",
    sigil: "teleport",
  },
  {
    name: "Mystique",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbSItmkHdHW3qVw5c6VxrS0UdTwE2Hul9er9CT1lp399FkGLxNoc6HTiHk&s=10",
    actor: "Rebecca Romijn",
    role: "Shapeshifter",
    universe: "Fox X-Men universe",
    group: "X-Men",
    sigil: "mask",
  },
  {
    name: "Deadpool",
    image:
      "https://www.slashfilm.com/img/gallery/deadpool-wolverines-nicepool-credit-explained-who-is-gordon-reynolds/l-intro-1731604790.jpg",
    actor: "Ryan Reynolds",
    role: "Merc with a mouth",
    universe: "Deadpool / multiversal",
    group: "Mutants",
    sigil: "deadpool",
  },
  {
    name: "America Chavez",
    image:
      "https://static.wikia.nocookie.net/marveldatabase/images/8/87/America_Chavez_%28Earth-TRN952%29_from_Doctor_Strange_in_the_Multiverse_of_Madness_Promo_001.jpg/revision/latest?cb=20220504145508",
    actor: "Xochitl Gomez",
    role: "Star portal traveler",
    universe: "Multiversal",
    group: "Multiverse",
    sigil: "portal",
  },
  {
    name: "Monica Rambeau",
    image:
      "https://static.wikia.nocookie.net/disney/images/a/a1/Monica_Rambeau_-_Profile.jpg/revision/latest?cb=20240213140020",
    actor: "Teyonah Parris",
    role: "Spectrum hero",
    universe: "Earth-616",
    group: "Cosmic",
    sigil: "spectrum",
  },
  {
    name: "Ms. Marvel",
    image:
      "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Ms._Marvel_Infobox.png/revision/latest/scale-to-width-down/1200?cb=20240120054811",
    actor: "Iman Vellani",
    role: "Cosmic-powered fan turned hero",
    universe: "Earth-616",
    group: "Young heroes",
    sigil: "spark",
  },
  {
    name: "Hawkeye",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hy74jPWXVOMmEA96r3KJtOyUpweXDB-BEx-2fPBzny9TAr1As0GEBPS4&s=10",
    actor: "Jeremy Renner",
    role: "Master archer",
    universe: "Earth-616",
    group: "Avengers",
    sigil: "arrow",
  },
  {
    name: "She-Hulk",
    image:
      "https://preview.redd.it/what-do-we-all-think-about-jens-mcu-suit-i-dont-know-about-v0-ih6j1jq80ss91.jpg?width=857&format=pjpg&auto=webp&s=234e3e9c884321b5aa12fb6a2fd98e8f729c46e4",
    actor: "Tatiana Maslany",
    role: "Gamma-powered attorney",
    universe: "Earth-616",
    group: "Heroes",
    sigil: "gamma",
  },
  {
    name: "Jubilee",
    image: "https://i.redd.it/5ac2ypoykl4d1.jpeg",
    actor: "Lana Condor",
    role: "Firework mutant",
    universe: "Fox X-Men universe",
    group: "X-Men",
    sigil: "spark",
  },
  {
    name: "Stature",
    image: "https://i.redd.it/cedvw6uc2lfe1.jpeg",
    actor: "Kathryn Newton",
    role: "Young Avenger and Ant-Man ally",
    universe: "Earth-616",
    group: "Young heroes",
    sigil: "ant",
  },
];

const confirmedBoards = [
  {
    title: "Release and credits",
    tag: "Confirmed",
    items: [
      "The current Marvel movie page lists Avengers: Doomsday for December 18, 2026.",
      "The official teaser roundup also uses December 18, 2026.",
      "The current Marvel trailer article says the film is directed by Joe Russo and Anthony Russo.",
      "The trailer article names Kevin Feige, Louis D'Esposito, and Jonathan Schwartz as producers.",
    ],
  },
  {
    title: "Trailer status",
    tag: "Confirmed",
    items: [
      "Marvel says an all-new Avengers: Doomsday trailer has launched.",
      "The movie page links to the teaser trailer roundup.",
      "The teaser roundup includes the Steve Rogers, Thor, X-Men, and Wakandans/Fantastic Four drops.",
    ],
  },
  {
    title: "Cast and scope",
    tag: "Confirmed",
    items: [
      "The cast list includes heroes from the MCU, the Fantastic Four, the X-Men, and more.",
      "Marvel's overview says beloved heroes from three distinct universes are set on a collision course.",
      "The trailer article highlights Robert Downey Jr. as Doctor Doom and the multiverse premise.",
    ],
  },
];

const debunkedFacts = [
  {
    title: "Sam Raimi directing",
    text: "The rumor page marks this as debunked; the Russos are set to direct.",
  },
  { title: "Shawn Levy directing", text: "Also debunked on the rumor page." },
  {
    title: "Tony Stark Doom variant",
    text: "The page explicitly says Doom will not be a Tony Stark variant.",
  },
  { title: "Super Bowl TV spot", text: "Marked debunked on the rumor page." },
  {
    title: "Children of Thanos return",
    text: "The page marks this villain comeback theory as debunked.",
  },
  {
    title: "Onslaught appearance",
    text: "The rumor page says this theory is debunked.",
  },
];

const productionNotes = {
  locations: [
    "The Watchtower will appear.",
    "The Baxter Building will appear.",
    "The X-Mansion will appear.",
    "The Time Variance Authority will appear.",
    "The Void at the End of Time will appear.",
    "The Citadel at the End of Time will appear.",
    "The house of Steve Rogers and Peggy Carter from the end of Endgame will appear.",
    "The Quantum Realm will appear.",
  ],
  story: [
    "The film will be much bigger than Avengers: Endgame.",
    "Doctor Strange in the Multiverse of Madness will lead directly into it.",
    "The storylines of Avengers: Time Runs Out and Avengers Forever will be adapted.",
    "After a final incursion, one group of characters is expected to survive in the Quantum Realm and another above the Void as Doom creates Battleworld.",
    "Doom is described as relying on armor because his body is completely broken.",
    "Steve Rogers will be a father.",
  ],
};

const trailers = [
  {
    title: "Official Trailer",
    subtitle: "Marvel Entertainment",
    link: "https://www.youtube.com/watch?v=iFl4YeX6jmc",
    embed: "https://www.youtube-nocookie.com/embed/iFl4YeX6jmc",
    tag: "All-new trailer",
  },
  {
    title: "Steve Rogers Will Return",
    subtitle: "First teaser",
    link: "https://www.youtube.com/watch?v=UiMg566PREA",
    embed: "https://www.youtube-nocookie.com/embed/UiMg566PREA",
    tag: "December 23 drop",
  },
  {
    title: "Thor Will Return",
    subtitle: "Second teaser",
    link: "https://www.youtube.com/watch?v=1clWprLC5Ak",
    embed: "https://www.youtube-nocookie.com/embed/1clWprLC5Ak",
    tag: "December 30 drop",
  },
  {
    title: "The X-Men Will Return",
    subtitle: "Third teaser",
    link: "https://www.youtube.com/watch?v=kH1XlwHQv9o",
    embed: "https://www.youtube-nocookie.com/embed/kH1XlwHQv9o",
    tag: "January 6 drop",
  },
  {
    title: "Wakandans and Fantastic Four",
    subtitle: "Fourth teaser",
    link: "https://www.youtube.com/watch?v=399Ez7WHK5s",
    embed: "https://www.youtube-nocookie.com/embed/399Ez7WHK5s",
    tag: "January 13 drop",
  },
];

const timeline = [
  {
    year: "2012",
    title: "The Avengers",
    text: "The first big crossover brought Earth's Mightiest Heroes together.",
  },
  {
    year: "2015",
    title: "Age of Ultron",
    text: "The team expanded while the MCU pushed deeper into world-ending threats.",
  },
  {
    year: "2018",
    title: "Infinity War",
    text: "The multiverse-scale stakes of the modern MCU started to sharpen.",
  },
  {
    year: "2019",
    title: "Endgame",
    text: "The original saga closed, leaving the door open for legacy heroes and variants.",
  },
  {
    year: "2022",
    title: "Multiverse of Madness",
    text: "Reality cracks widened, setting up cross-universe consequences.",
  },
  {
    year: "2026",
    title: "Avengers: Doomsday",
    text: "A collision of worlds, heroes, and timelines on a massive scale.",
  },
];

const universeFilters = [
  "All",
  ...new Set(heroes.map((hero) => hero.universe)),
];

// ===============================
// HELPERS / PAGE STATE
// ===============================

const currentPage = (
  location.pathname.split("/").pop() || "index.html"
).toLowerCase();

const pageLabels = {
  "index.html": "Home",
  "facts.html": "Facts",
  "trailer.html": "Trailer",
  "heroes.html": "Heroes",
  "timeline.html": "Timeline",
  "links.html": "Links",
};

document.querySelectorAll("#sidebarNav a").forEach((link) => {
  const href = (link.getAttribute("href") || "").toLowerCase();
  link.classList.toggle("active", href === currentPage);
});

const sectionLabel = document.getElementById("sectionLabel");
if (sectionLabel) {
  sectionLabel.textContent = pageLabels[currentPage] || "Home";
}

function createBoardCard(data) {
  const card = document.createElement("article");
  card.className = "board";
  card.innerHTML = `
    <span class="tag">${data.tag}</span>
    <h3>${data.title}</h3>
    <ul>${data.items.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
  return card;
}

function renderFactsBoards() {
  const confirmedBoard = document.getElementById("confirmedBoard");
  const debunkedBoard = document.getElementById("debunkedBoard");
  const productionBoard = document.getElementById("productionBoard");
  const trailersList = document.getElementById("videoButtons");
  const mainTrailerFrame = document.getElementById("mainTrailerFrame");
  const trailerCards = document.getElementById("trailerCards");

  if (confirmedBoard) {
    confirmedBoards.forEach((board) =>
      confirmedBoard.appendChild(createBoardCard(board)),
    );
  }

  if (debunkedBoard) {
    debunkedFacts.forEach((item) => {
      const card = document.createElement("article");
      card.className = "board";
      card.innerHTML = `
        <span class="tag debunk">Debunked</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      `;
      debunkedBoard.appendChild(card);
    });
  }

  if (productionBoard) {
    const locationsCard = document.createElement("article");
    locationsCard.className = "board";
    locationsCard.innerHTML = `
      <span class="tag">Locations</span>
      <h3>Places mentioned on the rumor board</h3>
      <ul>${productionNotes.locations.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;

    const storyCard = document.createElement("article");
    storyCard.className = "board";
    storyCard.innerHTML = `
      <span class="tag">Story</span>
      <h3>Story and production notes</h3>
      <ul>${productionNotes.story.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;

    productionBoard.appendChild(locationsCard);
    productionBoard.appendChild(storyCard);
  }

  if (trailersList && mainTrailerFrame) {
    function setTrailer(index) {
      const trailer = trailers[index];
      mainTrailerFrame.src = trailer.embed;
      trailersList.querySelectorAll(".video-btn").forEach((btn, idx) => {
        btn.classList.toggle("active", idx === index);
      });
    }

    trailers.forEach((trailer, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `video-btn${index === 0 ? " active" : ""}`;
      btn.innerHTML = `<strong>${trailer.title}</strong><span>${trailer.subtitle} - ${trailer.tag}</span>`;
      btn.addEventListener("click", () => setTrailer(index));
      trailersList.appendChild(btn);
    });

    setTrailer(0);
  }

  if (trailerCards) {
    trailers.forEach((trailer) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <h3>${trailer.title}</h3>
        <p>${trailer.subtitle}</p>
        <div class="trailer-actions">
    <a
        href="${trailer.link}"
        target="_blank"
        rel="noopener"
        class="youtube-btn"
    >
      Watch on YouTube
    </a>
</div>
      `;
      trailerCards.appendChild(card);
    });
  }
}

function renderTimeline() {
  const timelineGrid = document.getElementById("timelineGrid");
  if (!timelineGrid) return;

  timeline.forEach((item) => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.innerHTML = `
      <div class="year">${item.year}</div>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    `;
    timelineGrid.appendChild(el);
  });
}

function initHeroFlipButtons() {
  const heroGrid = document.getElementById("heroGrid");
  if (!heroGrid) return;

  const mobileQuery = window.matchMedia(
    "(max-width: 980px), (hover: none) and (pointer: coarse)",
  );

  const closeAllMobileCards = () => {
    heroGrid.querySelectorAll(".hero-card.flipped").forEach((card) => {
      card.classList.remove("flipped");
      card.setAttribute("aria-expanded", "false");
    });
  };

  const syncWithViewport = () => {
    if (!mobileQuery.matches) {
      closeAllMobileCards();
    }
  };

  const getCard = (target) => {
    if (!target || typeof target.closest !== "function") return null;
    return target.closest(".hero-card");
  };

  heroGrid.addEventListener("click", (event) => {
    if (!mobileQuery.matches) return;

    const button = event.target.closest(".hero-flip-btn");
    if (!button) return;

    const card = getCard(button);
    if (!card || !heroGrid.contains(card)) return;

    event.preventDefault();
    event.stopPropagation();

    const willOpen = !card.classList.contains("flipped");
    closeAllMobileCards();

    if (willOpen) {
      card.classList.add("flipped");
      card.setAttribute("aria-expanded", "true");
    }

    button.blur();
  });

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", syncWithViewport);
  } else if (typeof mobileQuery.addListener === "function") {
    mobileQuery.addListener(syncWithViewport);
  }
}

function initControlsDropdown() {

  const dropdown = document.getElementById("controlsDropdown");
  if (!dropdown) return;

  const mobileQuery = window.matchMedia("(max-width: 1024px)");

  function syncDropdown() {
    dropdown.open = !mobileQuery.matches;
  }

  syncDropdown();
  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", syncDropdown);
  } else if (typeof mobileQuery.addListener === "function") {
    mobileQuery.addListener(syncDropdown);
  }
}

function initHeroCardToggle() {
  const heroGrid = document.getElementById("heroGrid");
  if (!heroGrid) return;

  const mobileQuery = window.matchMedia("(max-width: 980px)");
  const coarseQuery = window.matchMedia("(pointer: coarse)");

  function isTouchLayout() {
    return mobileQuery.matches || coarseQuery.matches;
  }

  // Keep the desktop hover/keyboard behavior only on non-touch layouts.
  if (isTouchLayout()) return;

  function closeOtherCards(current) {
    heroGrid.querySelectorAll(".hero-card.is-flipped").forEach((card) => {
      if (card !== current) card.classList.remove("is-flipped");
    });
  }

  function bindCard(card) {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a,button,input")) return;
      const shouldFlip = !card.classList.contains("is-flipped");
      closeOtherCards(card);
      card.classList.toggle("is-flipped", shouldFlip);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      const shouldFlip = !card.classList.contains("is-flipped");
      closeOtherCards(card);
      card.classList.toggle("is-flipped", shouldFlip);
    });
  }

  function refreshBindings() {
    heroGrid.querySelectorAll(".hero-card").forEach((card) => {
      if (!card.dataset.bound) {
        card.dataset.bound = "true";
        bindCard(card);
      }
    });
  }

  refreshBindings();

  const observer = new MutationObserver(refreshBindings);
  observer.observe(heroGrid, { childList: true });
}

function renderHeroes() {

  const heroGrid = document.getElementById("heroGrid");
  const universeChips = document.getElementById("universeChips");
  const searchInput = document.getElementById("searchInput");
  if (!heroGrid || !universeChips || !searchInput) return;

  let activeUniverse = "All";

  function drawHeroes() {
    const query = searchInput.value.trim().toLowerCase();
    heroGrid.innerHTML = "";

    const filtered = heroes.filter((hero) => {
      const haystack =
        `${hero.name} ${hero.actor} ${hero.role} ${hero.universe} ${hero.group}`.toLowerCase();
      const matchesQuery = haystack.includes(query);
      const matchesUniverse =
        activeUniverse === "All" || hero.universe === activeUniverse;
      return matchesQuery && matchesUniverse;
    });

    if (!filtered.length) {
      heroGrid.innerHTML = `
        <div class="card">
          <h3>No heroes match this search.</h3>
          <p>Try a different name or universe.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((hero) => {
      const card = document.createElement("article");
      card.className = "hero-card";
      card.tabIndex = 0;
      card.setAttribute("aria-label", `${hero.name} card.`);
      card.setAttribute("role", "group");
      card.setAttribute("aria-expanded", "false");

      card.innerHTML = `
        <div class="flip">
          <div class="side front">
            <div class="portrait">
              <img src="${hero.image}" alt="${hero.name}" loading="lazy" />
              <div class="hero-meta">
                <h3>${hero.name}</h3>
                <div class="actor">${hero.actor}</div>
                <div class="badge">${hero.group}</div>
              </div>
              <button
                type="button"
                class="hero-flip-btn hero-flip-open"
                aria-label="View details for ${hero.name}"
              >
                View details
              </button>
            </div>
          </div>

          <div class="side flipback">
            <button
              type="button"
              class="hero-flip-btn hero-flip-close"
              aria-label="Return to portrait for ${hero.name}"
            >
              Back to portrait
            </button>
            <h4>${hero.name}</h4>
            <p>${hero.role}</p>
            <div class="line"><strong>Actor</strong><span>${hero.actor}</span></div>
            <div class="line"><strong>Universe</strong><span>${hero.universe}</span></div>
            <div class="line"><strong>Team</strong><span>${hero.group}</span></div>
            <div class="mini">${hero.sigil.toUpperCase()} SIGNAL</div>
          </div>
        </div>
      `;

      heroGrid.appendChild(card);
    });
  }

  const filters = ["All", ...new Set(heroes.map((hero) => hero.universe))];
  universeChips.innerHTML = "";

  filters.forEach((universe) => {
    const btn = document.createElement("button");
    btn.className = `chip${universe === "All" ? " active" : ""}`;
    btn.type = "button";
    btn.textContent = universe;

    btn.addEventListener("click", () => {
      activeUniverse = universe;
      document
        .querySelectorAll(".chip")
        .forEach((chip) => chip.classList.remove("active"));
      btn.classList.add("active");
      drawHeroes();
    });

    universeChips.appendChild(btn);
  });

  searchInput.addEventListener("input", drawHeroes);
  drawHeroes();
}

function renderCountdown() {
  const countdown = document.getElementById("countdown");
  if (!countdown) return;

  const boxes = countdown.querySelectorAll("strong");
  const target = new Date("2026-12-18T00:00:00+08:00").getTime();

  function tick() {
    const now = Date.now();
    const diff = Math.max(0, target - now);
    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    [days, hours, minutes, seconds].forEach((value, index) => {
      if (boxes[index])
        boxes[index].textContent = String(value).padStart(2, "0");
    });
  }

  tick();
  setInterval(tick, 1000);
}

function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem("doomsday-theme");
  if (savedTheme === "light") document.body.classList.add("theme-light");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("theme-light");
    localStorage.setItem(
      "doomsday-theme",
      document.body.classList.contains("theme-light") ? "light" : "dark",
    );
  });
}

function initSidebarTools() {
  const tools = document.getElementById("sidebarTools");
  if (!tools) return;

  const mobileQuery = window.matchMedia("(max-width: 1024px)");

  function syncTools() {
    tools.open = !mobileQuery.matches;
  }

  syncTools();

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", syncTools);
  } else if (typeof mobileQuery.addListener === "function") {
    mobileQuery.addListener(syncTools);
  }
}

function initMusicToggle() {
  const muteBtn = document.getElementById("muteBtn");
  if (!muteBtn) return;

  let audioContext = null;
  let masterGain = null;
  let loopTimer = null;
  let musicEnabled = localStorage.getItem("doomsday-music") === "on";
  let musicPlaying = false;
  let pendingRestore = musicEnabled;

  function updateMusicButtons() {
    const label = musicEnabled ? "Theme music" : "Theme music";
    const color = musicEnabled ? "var(--green)" : "var(--red)";

    muteBtn.innerHTML = `<span class="led" style="background:${color}"></span>${label}`;
  }

  function ensureAudioContext() {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
  }

  function makeNoiseBuffer(ctx, duration = 2) {
    const sampleRate = ctx.sampleRate;
    const buffer = ctx.createBuffer(1, sampleRate * duration, sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < data.length; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    return buffer;
  }

  function beep(time, frequency, duration, volume, type = "sine") {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, time);

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(volume, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(masterGain);

    osc.start(time);
    osc.stop(time + duration + 0.05);
  }

  function pulseNoise(time, volume = 0.02, duration = 0.8) {
    const src = audioContext.createBufferSource();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    src.buffer = makeNoiseBuffer(audioContext, duration);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1200, time);
    filter.Q.value = 6;

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(volume, time + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    src.start(time);
    src.stop(time + duration + 0.05);
  }

  function missionComputerPulse() {
    if (!musicPlaying || !audioContext) return;

    const now = audioContext.currentTime;

    // Low reactor drone
    beep(now, 42, 1.2, 0.7, "sine");
    beep(now, 84, 0.6, 0.18, "triangle");

    // Computer scan pings
    beep(now + 0.45, 880, 0.06, 0.18, "square");
    beep(now + 0.82, 1020, 0.05, 0.14, "triangle");
    beep(now + 1.18, 760, 0.06, 0.16, "square");

    // Radar / warning chirp
    beep(now + 1.65, 560, 0.08, 0.14, "sawtooth");
    pulseNoise(now + 1.7, 0.018, 0.7);

    // Second low pulse
    beep(now + 2.4, 42, 1.2, 0.7, "sine");
    beep(now + 2.4, 84, 0.6, 0.18, "triangle");

    // Soft ambient hiss
    pulseNoise(now + 2.85, 0.012, 0.9);
  }

  async function startMusic() {
    if (musicPlaying) return;

    try {
      ensureAudioContext();

      if (audioContext.state === "suspended") {
        await audioContext.resume();
      }

      masterGain = audioContext.createGain();
      masterGain.gain.value = 0.09;
      masterGain.connect(audioContext.destination);

      musicEnabled = true;
      musicPlaying = true;
      pendingRestore = false;
      localStorage.setItem("doomsday-music", "on");

      missionComputerPulse();
      clearInterval(loopTimer);
      loopTimer = setInterval(missionComputerPulse, 3600);

      updateMusicButtons();
    } catch (error) {
      console.warn("Audio could not start:", error);
      pendingRestore = true;
    }
  }

  function stopMusic() {
    musicEnabled = false;
    musicPlaying = false;
    pendingRestore = false;
    localStorage.setItem("doomsday-music", "off");

    if (loopTimer) {
      clearInterval(loopTimer);
      loopTimer = null;
    }

    if (masterGain && audioContext) {
      masterGain.gain.setTargetAtTime(0.0001, audioContext.currentTime, 0.08);
      setTimeout(() => {
        if (audioContext) audioContext.close();
        audioContext = null;
        masterGain = null;
      }, 180);
    }

    updateMusicButtons();
  }

  async function toggleMusic() {
    if (!musicEnabled || !musicPlaying) {
      await startMusic();
    } else {
      stopMusic();
    }
  }

  async function restoreMusicAfterGesture() {
    if (!pendingRestore || musicPlaying) return;
    await startMusic();
  }

  if (musicEnabled) {
    pendingRestore = true;
  }

  document.addEventListener("pointerdown", restoreMusicAfterGesture, {
    once: true,
  });
  document.addEventListener("keydown", restoreMusicAfterGesture, {
    once: true,
  });

  muteBtn.addEventListener("click", toggleMusic);

  updateMusicButtons();
}

renderFactsBoards();
renderTimeline();
renderHeroes();
renderCountdown();
initThemeToggle();
initSidebarTools();
initMusicToggle();
initHeroFlipButtons();
