let controls = document.querySelector(".controls");

function attractionPage() {
  return `<div class="attractions__navigate">
        <div class="attractions__navigate__logo">
          <img
            src="../../assets/img/favicon.ico"
            alt="logo"
            class="attractions__navigate__logo_svg"
          />
          <p class="attractions__navigate__logo_text">Город Бесов</p>
        </div>

        <div class="attractions__navigate__sort">
          <h3 class="attractions__navigate__sort_title">Сортировка</h3>

          <div
            class="attractions__navigate__sort__likes"
            onclick="likeChange()"
          >
            <img
              src="../../assets/img/Heart.svg"
              alt=""
              class="attractions__navigate__sort__likes_icon"
            />
            <p class="attractions__navigate__sort__likes_text">По лайкам</p>
            <img
              src="../../assets/img/sort_arrow.svg"
              alt="arrow sort"
              class="attractions__navigate__sort__likes_arrow likes_selected"
            />
          </div>

          <div
            class="attractions__navigate__sort__views"
            onclick="viewsChange()"
          >
            <img
              src="../../assets/img/Eye.svg"
              alt=""
              class="attractions__navigate__sort__views_icon"
            />
            <p class="attractions__navigate__sort__views_text">
              По популярности
            </p>
            <img
              src="../../assets/img/sort_arrow.svg"
              alt="arrow sort"
              class="attractions__navigate__sort__views_arrow views_selected"
            />
          </div>
        </div>

        <div class="attractions__navigate__search">
          <label
            class="attractions__navigate__search__label"
            for="search_input"
          >
            Поиск
          </label>
          <div class="attractions__navigate__search__box">
            <input
              type="text"
              id="search_input"
              class="attractions__navigate__search__box_input"
              onchange="getCards()"
            />
            <img
              src="../../assets/img/searchicon.svg"
              alt="search icon"
              class="attractions__navigate__search__box_icon"
            />
          </div>
        </div>

        <div class="attractions__navigate__filters">
          <h3>Филтры</h3>
          <div class="attractions__navigate__filters__checkboxes">
            <div class="attractions__navigate__filters__block">
              <label
                for="buildings-attractions"
                class="attractions__navigate__filters__block__building-label"
                >Здания</label
              >
              <input
                id="buildings-attractions"
                type="checkbox"
                class="attractions__navigate__filters__block__building-input"
                onchange="getCards()"
              />
            </div>

            <div class="attractions__navigate__filters__block">
              <label
                for="parks-attractions"
                class="attractions__navigate__filters__block__parks-label"
                >Парки</label
              >
              <input
                id="parks-attractions"
                type="checkbox"
                class="attractions__navigate__filters__block__parks-input"
                onchange="getCards()"
              />
            </div>

            <div class="attractions__navigate__filters__block">
              <label
                for="museums-attractions"
                class="attractions__navigate__filters__block__museums-label"
                >Музеи</label
              >
              <input
                id="museums-attractions"
                type="checkbox"
                class="attractions__navigate__filters__block__museums-input"
                onchange="getCards()"
              />
            </div>

            <div class="attractions__navigate__filters__block">
              <label
                for="temple-attractions"
                class="attractions__navigate__filters__block__temple-label"
                >Храмы</label
              >
              <input
                id="temple-attractions"
                type="checkbox"
                class="attractions__navigate__filters__block__temple-input"
                onchange="getCards()"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="attractions__list">
        <div class="attractions__list_title_box">
          <h1 class="attractions__list_title">Достопремечательности</h1>
        </div>
        <div class="attractions__list__cards_block"></div>
        <div class="pagination"></div>
      </div>`;
}
// Unical

window.addEventListener("scroll", animationVisible);

function linkCreate(img1, img2, title1, title2) {
  return (linkBlock = `<div class="block_to_next__firstblock" onclick = "goToPageNext()">
        <div class="block_to_next__card">
          <div class="block_to_next__cardsecond__imgBlock">
            <img
              class="imgArrow"
              src=${img1}
              alt="aaa"
            />
          </div>
          <p class="block_to_next__card-text">${title1}</p>

          <img
            class="block_to_next__card-photo reverse"
            src="../../assets/img/arrowBack.svg"
            alt="arrow"
          />
        </div>
      </div>
      <div class="block_to_next__secondblock" onclick = "goToPagePrevios()">
        <div class="block_to_next__cardsecond">
          <img
            class="block_to_next__card-photo"
            src="../../assets/img/arrowBack.svg"
            alt="arrow"
          />

          <p class="block_to_next__card-text">${title2}</p>
          <div class="block_to_next__cardsecond__imgBlock">
            <img
              class="imgArrowreverse"
              src = ${img2}
              alt="aaa"
            />
          </div>
        </div>
      </div>`);
}

function cardCreate(img, map, text, title) {
  return (cardBlock = `<div class="page__title">
        <h1 class="page__title-text">${title}</h1>
      </div>
      <hr class="page__line" />
      <div class="page__card">
        <div class="page__card_img-box">
        <img src="../../assets/img/arrowBack.svg" alt="" class='controls arrow' />
        <img
            src=${img}
            alt=""
            class="page__card_img-photo active"
          />
          <img
            src=${img}
            alt=""
            class="page__card_img-photo nonActive"
          />
          <img
            src=${img}
            alt=""
            class="page__card_img-photo nonActive"
          />
          <img
            src=${img}
            alt=""
            class="page__card_img-photo nonActive"
          />
          <img src="../../assets/img/arrowBack.svg" alt="" class='controls arrow-reverse' />
        </div>
        <div class="page__card__map">
          <iframe
            src=${map}
            ,
            width="100%"
            height="100%"
            style="border: 0; border-radius: 15px"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="page__card__text">
          <p class="page__card__text-paragraph">
            ${text}
          </p>
        </div>
      </div>`);
}

function showCard(index) {
  cards = document.querySelectorAll(".page__card_img-photo");

  cards[curentCardIndex].classList.replace("active", "nonActive");
  cards[index].classList.replace("nonActive", "active");
}

function iinerLink() {
  const parentLink = document.querySelector(".block_to_next");
  const linkCreateated = linkCreate(
    linksData[0].Img_scr,
    linksData[1].Img_scr,
    linksData[0].Title,
    linksData[1].Title
  );
  parentLink.innerHTML = linkCreateated;
}

function innerCard(cardData) {
  const parentBlock = document.querySelector(".page");
  const cardFinal = cardCreate(
    cardData.Img_scr,
    cardData.Map_scr,
    cardData.Text,
    cardData.Title
  );
  parentBlock.innerHTML = cardFinal;

  const attractionPageClass = document.querySelector(".attractions");
  attractionPageClass.innerHTML = "";
  controls = document.querySelector(".controls");
}

function animationVisible() {
  const elements = document.querySelectorAll(
    ".block_to_next__card, .block_to_next__cardsecond"
  );

  elements.forEach((element) => {
    const ourwindow = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const heightToHide = 100;

    if (
      ourwindow.top < windowHeight - heightToHide &&
      ourwindow.bottom > heightToHide
    ) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
}

function goToPageNext() {
  const indexThisPage = localStorage.getItem("CurrentCard");

  if (Number(indexThisPage) === baseData.length - 1) {
    localStorage.setItem("CurrentCard", 0);
  } else {
    localStorage.setItem("CurrentCard", Number(indexThisPage) + 1);
  }
  window.location.href = "../unical/unicalPage.html";
}

function goToPagePrevios() {
  const indexThisPage = localStorage.getItem("CurrentCard");

  if (Number(indexThisPage) === 0) {
    localStorage.setItem("CurrentCard", baseData.length - 1);
  } else {
    localStorage.setItem("CurrentCard", Number(indexThisPage) - 1);
  }
  window.location.href = "../unical/unicalPage.html";
}

// Main
const url = new URL(CARDS_URL + "redline/cardList/");
url.searchParams.append("page", 1);
url.searchParams.append("limit", 10);

let unicalPage = location.hash.substring(1);

function goToLine() {
  if (unicalPage == "") {
    window.location.href = "../redline/redLine.html";
    return;
  }
  window.location.hash = "";
}

function attractionPageCreate() {
  const parentBlockUnicalPage = document.querySelector(".page");
  parentBlockUnicalPage.innerHTML = "";
  const parentBlockAttractionPage = document.querySelector(".attractions");

  parentBlockAttractionPage.innerHTML = attractionPage();

  circlePagination();

  getCards();
}

function goToUnicalPage(index) {
  window.location.hash = `#${index}`;
}

window.addEventListener("hashchange", () => {
  unicalPage = location.hash.substring(1);
  if (location.hash == "") {
    attractionPageCreate();

    return;
  }
  getCards();
});

function createCard(img, title, text, likes) {
  return `
          <div class="attractions__card__img">
            <img
              src=${img}
              alt=""
              class="attractions__card__img_photo"
            />
          </div>
          <div class="attractions__card__text">
            <h1 class="attractions__card__text_title">${title}</h1>
            <p class="attractions__card__text_paragraph">
              ${text}
            </p>
          </div>
          <div class="attractions__card__likes">
            <img
              src="../../assets/img/no-likes.svg"
              alt=""
              class="attractions__card__likes_photo"
            />
            <p class="attractions__card__likes_counter">${likes}</p>
          </div>
    `;
}

function findCitiesByTitle() {
  const searchString = document.getElementById("search_input").value;
  return searchString;
}

async function getLinks() {
  try {
    const response = await fetch(CARDS_URL + "redline/linkList", {
      method: "GET",
    });
    const data = await response.json();
    linkList = data;
  } catch (error) {
    console.log(error);
  }
}

function circlePagination() {
  for (index = 0; index < Math.ceil(linkList.length / 10); ++index) {
    const links = document.createElement("a");
    const proIndex = index * index + 10;
    const curentIndex = index + 1;

    if (index)
      links.innerHTML = `<a onclick="getCards(${curentIndex})" class="pagination__page-a">${
        proIndex + 1
      }..${proIndex + 10}</a>`;
    if (!index) {
      links.innerHTML = `<a onclick="getCards(${curentIndex})" class="pagination__page-a">${curentIndex}..${
        proIndex + 1
      }</a>`;
    }

    paginationBlock.forEach((block) => {
      block.appendChild(links);
    });
  }
}

async function stableData() {
  const response = await fetch(url, {
    method: "GET",
  });
  const data = await response.json();
  const stableListPagination = data;
}

function getFulters() {
  const Bfilter = document.getElementById("buildings-attractions").checked;
  const Pfilter = document.getElementById("parks-attractions").checked;
  const Mfilter = document.getElementById("museums-attractions").checked;
  const Tfilter = document.getElementById("temple-attractions").checked;

  const request = { attractions: [] };

  // Проверяем, какие чекбоксы выбраны и добавляем их значения в массив
  if (Bfilter) {
    request.attractions.push("buildings");
  }
  if (Pfilter) {
    request.attractions.push("parki");
  }
  if (Mfilter) {
    request.attractions.push("museumi");
  }
  if (Tfilter) {
    request.attractions.push("temples");
  }

  request.attractionsString = request.attractions.join(",");

  return request.attractions;
}

function sortingCards() {
  sortView = document
    .querySelector(".attractions__navigate__sort__views_arrow")
    .classList.contains("views_selected");

  sortLikes = document
    .querySelector(".attractions__navigate__sort__likes_arrow")
    .classList.contains("likes_selected");

  return [sortLikes, sortView];
}
function likeChange() {
  sortLikes = document.querySelector(
    ".attractions__navigate__sort__likes_arrow"
  );

  sortLikes.classList.toggle("likes_selected");
  getCards();
}

function viewsChange() {
  sortView = document.querySelector(
    ".attractions__navigate__sort__views_arrow"
  );

  sortView.classList.toggle("views_selected");
  getCards();
}

// Карточка
async function createUnicalPage() {
  const response = await fetch(CARDS_URL + "redline/cardList/" + unicalPage, {
    method: "GET",
  });

  const cardData = await response.json();

  await innerCard(cardData);

  Loading.classList.remove("active__loading");
  Loading.classList.add("loading-complete");
}

///////////

async function getCards(page = 1) {
  Loading.classList.remove("loading-complete");
  Loading.classList.add("active__loading");

  if (!unicalPage == "") {
    createUnicalPage();
    return;
  }

  search = findCitiesByTitle();
  filters = getFulters();
  sorted = sortingCards();

  let filter = "";

  const url = new URL(CARDS_URL + "redline/cardList/");
  url.searchParams.append("page", page);
  url.searchParams.append("limit", 10);
  url.searchParams.append("Title", search);

  if (sorted[0] === true) {
    url.searchParams.append("sortBy", "likes");
    url.searchParams.append("order", "desc");
  } else if (sorted[1] === true) {
    url.searchParams.append("sortBy", "watch");
    url.searchParams.append("order", "desc");
  } else if (sorted[0] === false) {
    url.searchParams.append("sortBy", "likes");
  } else if (sorted[1] === false) {
    url.searchParams.append("sortBy", "watch");
  }

  if (filters.length > 1) {
    filters.forEach((filt) => {
      filter += filt + "||";
    });
  } else if (filters.length == 1) {
    filter = filters[0];
  } else {
    filter = "";
  }
  url.searchParams.append("classLink", filter);

  const response = await fetch(url, {
    method: "GET",
  });
  const data = await response.json();

  cityList = data;

  const parentBlock = document.querySelector(".attractions__list__cards_block");
  parentBlock.innerHTML = "";

  cityList.forEach((attraction) => {
    const card = document.createElement("div");
    card.classList.add("attractions__card");
    card.setAttribute("onclick", `goToUnicalPage("${attraction.indexObj}")`);
    const card_iner = createCard(
      attraction.Img_scr,
      attraction.Title,
      attraction.Text,
      attraction.likes
    );
    card.innerHTML = card_iner;
    parentBlock.appendChild(card);
  });

  Loading.classList.remove("active__loading");
  Loading.classList.add("loading-complete");
}

async function loading() {
  await stableData();
  const url = new URL(CARDS_URL + "redline/cardList/");
  url.searchParams.append("page", 1);
  url.searchParams.append("limit", 10);
  await getCards();
  await getLinks();
  await circlePagination();
}

loading();

// Обработчик события нажатия на стрелки (слайдер)
controls.addEventListener("click", function (event) {
  console.log(123);

  if (event.target.classList.contains("arrow")) {
    let index = curentCardIndex - 1;
    if (index < 0) {
      index = cards.length - 1;
    }
    showCard(index);
  } else if (event.target.classList.contains("arrow-reverse")) {
    let index = curentCardIndex + 1;
    if (index >= cards.length) {
      index = 0;
    }
    showCard(index);
  }
});
