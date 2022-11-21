const initialMediaBlogCards = [
  {
    imageLink: "images/blog-media-img.png",
    date: "20 мая 2020",
    title: "Gett и фонд «Друзья» запустили проект #МыРядом",
    link: "#",
    linkText: "https://incrussia.ru/pnews/gett-i-fond-druzya/",
  },
  {
    imageLink: "images/blog-media-img2.png",
    date: "08 мая 2020",
    title: "Карантин для добрых дел: как стать интеллектуальным волонтером",
    link: "#",
    linkText: "https://dszn.ru/press-center/news/3549",
  },
  {
    imageLink: "images/blog-media-img3.png",
    date: "12 мая 2020",
    title: "Как прошел онлайн-ужин фонда «Друзья»",
    link: "#",
    linkText: "https://style.rbc.ru/repost/5eba6f449a794754304abf65",
  },
  {
    imageLink: "images/blog-media-img4.png",
    date: "09 мая 2020",
    title: "Фонд «Друзья» провел благотворительный ужин в Zoom",
    link: "#",
    linkText:
      "https://instyle.ru/stars/star_life/viktoriya-shelyagova-v-samoy-modnoy-obuvi-leta-2020-na-svetskoy-vecherinke-v-zoom/",
  },
  {
    imageLink: "images/blog-media-img5.png",
    date: "09 мая 2020",
    title: "«Друзья» отпраздновали пятилетие в зуме",
    link: "#",
    linkText:
      "https://www.tatler.ru/party/kak-fond-druzya-otprazdnoval-pyatiletie-v-zume",
  },
  {
    imageLink: "images/blog-media-img6.png",
    date: "01 мая 2020",
    title:
      "Интеллектуальное волонтерство: как делать добрые дела, не выходя из дома",
    link: "#",
    linkText: "https://www.dobro.live/daily/21944/",
  },
  {
    imageLink: "images/blog-media-img7.png",
    date: "28 апреля 2020",
    title: "Вклад компаний в борьбу с коронавирусом",
    link: "#",
    linkText: "– источник «b-soc.ru»",
  },
  {
    imageLink: "images/blog-media-img8.png",
    date: "22 апреля 2020",
    title: "Онлайн-НКО: как они продолжают помогать людям",
    link: "#",
    linkText: "– источник «mos.ru»",
  },
  {
    imageLink: "images/blog-media-img6.png",
    date: "21 апреля 2020",
    title: "Серия гастрономических live-вечеринок «Друзей»",
    link: "#",
    linkText: "– источник «tatler.ru»",
  },
];

const loadMoreBtn = document.querySelector(".blog__button");
const blogCards = document.querySelectorAll(".blog__card");
const mediaBlogContainer = document.querySelector("#media");
const mediaCardsContainer = mediaBlogContainer.querySelector(".blog__cards");
const cardTemplate = document.querySelector("#blog-card-template").content;
const mediaLoadMoreBtn = document.querySelector("#media-load-btn");
const mediaCards = mediaCardsContainer.childNodes;

function addCard(cardElement) {
  mediaCardsContainer.append(cardElement);
}

function createCard(item) {
  const cardElement = cardTemplate.querySelector(".blog__card").cloneNode(true);

  cardElement.querySelector(".blog__card-img").src = item.imageLink;
  cardElement.querySelector(".blog__card-img").alt = item.title;
  cardElement.querySelector(".blog__card-date").textContent = item.date;
  cardElement.querySelector(".blog__card-title").textContent = item.title;
  cardElement.querySelector(".blog__card-link").textContent = item.linkText;
  cardElement.querySelector(".blog__card-link").href = item.link;

  return cardElement;
}

function hideCards(object, startingIndex, cardsAmount = object.length) {
  for (let i = startingIndex; i < cardsAmount; i++) {
    object[i].style.display = "none";
  }
}

function showCards(object, startingIndex, cardsAmount = object.length) {
  for (let i = startingIndex; i < cardsAmount; i++) {
    object[i].style.display = "block";
  }
}

loadMoreBtn.addEventListener("click", () => {
  showCards(blogCards, 3);
});

mediaLoadMoreBtn.addEventListener("click", () => {
  showCards(mediaCards, 2);
});

initialMediaBlogCards.forEach(function (item) {
  addCard(createCard(item));
});

function getScreenWidth() {
  const screenWidth = document.documentElement.clientWidth;
  return screenWidth;
}

function isMobile() {
  if (getScreenWidth() < 768) {
    return true;
  }
  return false;
}

// if (isMobile()) {
//   hideCards(blogCards, 4);
//   hideCards(mediaCards, 3);
// }

// Кол-во карточек, в зависимости от размера экрана, изменяется при обновлении страницы

//блок 58 Артём
const boxes = document.querySelectorAll(".partners__logo");
const buttonPartners = document.querySelector(".partners__button");
const gridWrapper = document.querySelectorAll(".partners__logo-grid");
const hiddenLogos = Array.from(boxes).splice(20); //создает новый массив из элементов, которые должны быть скрыты после показа

//именяет видимость логотипов по нажатию на кнопку в блоке 58
function toggleCardsVisibility() {
  if (buttonPartners.textContent === "Показать еще") {
    gridWrapper.forEach((item) => {
      item.style.cssText = `grid-template-rows: repeat(22, 1fr);`;
    });
    boxes.forEach((item) => {
      item.classList.remove("partners__logo_hidden");
    });
    buttonPartners.textContent = "Скрыть";
  } else {
    gridWrapper.forEach((item) => {
      item.style.cssText = `grid-template-rows: repeat(10, 1fr);`;
    });
    hiddenLogos.forEach((item) => {
      item.classList.add("partners__logo_hidden");
    });
    buttonPartners.textContent = "Показать еще";
  }
}

buttonPartners.addEventListener("click", toggleCardsVisibility);
// конец блока 58
// начало блока 49
const button = document.querySelector(".business-partners__button");
const box = document.querySelectorAll(".business-partners__logo");
const lastElem = Array.from(box)[box.length - 1];
console.log(box);
function hideLogos() {
  for (let i = 36; i < box.length; i++) {
    box[i].style.display = "none";
  }
}
hideLogos();

function toggleLogosVisibility() {
  if (lastElem.style.display === "none") {
    for (let i = 34; i < box.length; i++) {
      box[i].style.display = "block";
    }
    button.textContent = "Скрыть";
  } else {
    hideLogos();
    button.textContent = "Показать еще";
  }
}

button.addEventListener("click", toggleLogosVisibility);
//конец блока 49
