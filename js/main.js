let cardContentArr = [
  {
    title: "Journey's Embrace",
    p: `Discover the world's
        hidden wonders through the
        eyes of passionate explorers, 
        as they embark on transformative 
        adventures that redefine the meaning of wanderlust.`,
    src: "./assets/images/3-section/personOnMauntain.jpg",
    alt: "a person that on the mauntain",
  },
  {
    title: `Wanderer's Tapestry`,
    p: `Unravel the threads of diverse cultures, breathtaking landscapes,
        and personal growth as travel logs weave tales of exploration and
        ignite the spirit of wanderlust.`,
    src: "./assets/images/3-section/mauntain.jpg",
    alt: "a mauntain",
  },
  {
    title: "Footprints Unbound",
    p: `Follow the footprints of intrepid nomads as their travel logs
        unveil extraordinary destinations, unforgettable encounters, and
        the boundless freedom.`,
    src: "./assets/images/3-section/personOnMauntain1.jpg",
    alt: "a person On Mauntain",
  },
];
let links = [
  {
    first: "Home",
    second: "About Us",
    third: "My Travel Logs",
  },
  {
    first: "Travels",
    second: "Promo Flights",
    third: "Travel Routes",
  },
  {
    first: "Recommendations",
    second: "Guides",
    third: "Blogs",
  },
  {
    first: "Mission Statement",
    second: "The Team",
    third: "Contact Us",
  },
];
cardContentArr.forEach((object) => {
  let cardParent = document.getElementById("cardParent");
  let flexCard = document.createElement("div");
  flexCard.classList.add("flex-card");
  flexCard.innerHTML = `
    <img
      src="${object.src}"
      alt="${object.alt}"
      class="max-2xl:w-72 max-xl:w-60 max-2xl:h-w-72 max-xl:h-52 max-xl:object-contain"
      />
    <div class="line"></div>
    <h1 class="common-style-title">${object.title}</h1>
    <p>${object.p}</p>`;
  cardParent.append(flexCard);
});

links.forEach((object) => {
  let linksParent = document.getElementById("linksParent");
  let linkParent = document.createElement("div");
  linkParent.className = "flex flex-col gap-2";
  linkParent.innerHTML = `
      <a href="#">${object.first}</a>
      <a href="#">${object.second}</a>
      <a href="#">${object.third}</a>`;
  linksParent.append(linkParent);
});
