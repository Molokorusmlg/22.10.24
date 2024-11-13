let cityList = [];
let linkList = [];

function circlePagination() {
  // Создание пагинации
  const parentBlock = document.querySelector(".pagination");
  const scolko = linkList.length / 10;
  for (index = 0; index < Math.ceil(linkList.length / 10); ++index) {
    const links = document.createElement("a");
    const proIndex = index * index + 10;

    if (index != 0) {
      links.innerHTML = `<a onclick="pagination(${
        index + 1
      })" class="pagination__page-a">${proIndex + 1}..${proIndex + 10}</a>`;
      parentBlock.appendChild(links);
    } else {
      links.innerHTML = `<a onclick="pagination(${
        index + 1
      })" class="pagination__page-a">${index + 1}..${proIndex + 1}</a>`;
      parentBlock.appendChild(links);
    }
  }
}

function cicleLinks() {
  // Создание ссылок
  const parentBlock = document.querySelector(".red-line__big__text-text");
  linkList.forEach((link) => {
    const links = document.createElement("a");
    if (link.indexLink <= 10) {
      links.classList.add(link.classLink, "firstPage");
      links.innerHTML = `<a onclick="showCard(${link.indexLink})" id="${link.indexLink}" data-index=${link.indexLink} class="${link.classLink} cardLink" >${link.TitleLink}</a>`;
      parentBlock.appendChild(links);
    } else if (link.indexLink > 10 && link.indexLink <= 20) {
      links.classList.add(link.classLink, "secondPage", "hidePage");
      links.innerHTML = `<a onclick="showCard(${link.indexLink})" id="${link.indexLink}" data-index=${link.indexLink} class="${link.classLink} cardLink">${link.TitleLink}</a>`;
      parentBlock.appendChild(links);
    }
  });
}

//сама карточка
function cardCreate(img, map, text) {
  return `<div class="red-line__marshruts__card-box_card-img">
                  <img src=${img} alt="" />
                  
                 </div>
                <div class="red-line__marshruts__card-box_card-columnbox">
                  <div class="red-line__marshruts__card-box_card-map">
                    <iframe
                      src=${map}
                      width="200"
                      height="200"
                      style="border: 0;border-radius: 5px"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div class="red-line__marshruts__card-box_card-description">
                    <p>
                      ${text}
                    </p>
                  </div>
              </div>`;
}

function goToNextHTML() {
  localStorage.setItem("CurrentCard", curentCardIndex);
  window.location.href = "http://127.0.0.1:5500/pages/unical/unicalPage.html";
}

function cardInnerParent() {
  // Создание карточек
  const parentCards = document.querySelector(
    ".red-line__marshruts__card-box_small-card-box"
  );
  cityList.forEach((city) => {
    const card = document.createElement("div");
    card.classList.add("red-line__marshruts__card-box_card");
    card.classList.add("nonActive");
    const card_final = cardCreate(city.Img_scr, city.Map_scr, city.Text);
    card.innerHTML = card_final;
    parentCards.appendChild(card);
  });
}

let firstpage = document.querySelectorAll(".firstPage");
let secondpage = document.querySelectorAll(".secondPage");
let thirdpage = document.querySelectorAll(".thirdPage");
let fourpage = document.querySelectorAll(".fourPage");
// обработка пагинации
function pagination(page) {
  if (page == "1") {
    firstpage.forEach(function (firstpages) {
      firstpages.classList.remove("hidePage");
    });
    secondpage.forEach(function (secondpages) {
      secondpages.classList.add("hidePage");
    });
  } else if (page == "2") {
    secondpage.forEach(function (secondpages) {
      secondpages.classList.remove("hidePage");
    });
    firstpage.forEach(function (firstpages) {
      firstpages.classList.add("hidePage");
    });
  }
}
// Бургер меню
function burgerMenu() {
  const burger = document.querySelector(".burger__meny");
  if (!burger.classList.contains("base")) {
    if (burger.classList.contains("bhide")) {
      burger.classList.remove("bhide");
      burger.classList.add("bvis");
    } else {
      burger.classList.add("bhide");
      burger.classList.remove("bvis");
    }
  } else {
    burger.classList.remove("base");
    burger.classList.add("bvis");
  }
}

const checkBox = document.querySelectorAll(".check");
// Фильтры
function showCheckbox(type) {
  const checkBox = document.querySelectorAll(".check");
  checkBox.forEach((checkbox) => {
    if (checkbox.checked) {
      if (type == "p") {
        localStorage.setItem("parks", parks.checked);
      }
      if (type == "b") {
        localStorage.setItem("buildings", buildings.checked);
      }
      if (type == "m") {
        localStorage.setItem("museums", museums.checked);
      }
      if (type == "h") {
        localStorage.setItem("hrams", parks.checked);
      }
      viewElements();
    }
  });
}

let Buildings = document.querySelectorAll(".buildings");
let Parks = document.querySelectorAll(".parki");
let Museums = document.querySelectorAll(".museumi");
let Hrams = document.querySelectorAll(".hrami");

// Фильтры обработка и вывод
function viewElement(elList, localItem) {
  elList.forEach((el) => {
    if (localItem === 0) return el.classList.remove("hide");
    if (localItem === "true") return el.classList.remove("hide");
    el.classList.add("hide");
  });
}

function viewElements() {
  const buildingsState = localStorage.getItem("buildings");
  const ParksState = localStorage.getItem("parks");
  const MuseumsState = localStorage.getItem("museums");
  const HramsState = localStorage.getItem("hrams");
  viewElement(Buildings, buildingsState);
  viewElement(Parks, ParksState);
  viewElement(Museums, MuseumsState);
  viewElement(Hrams, HramsState);
  if (
    buildingsState === "false" &&
    ParksState === "false" &&
    MuseumsState === "false" &&
    HramsState === "false"
  ) {
    viewElement(Buildings, 0);
    viewElement(Parks, 0);
    viewElement(Museums, 0);
    viewElement(Hrams, 0);
  }
}

function reset() {
  const radio = document.querySelectorAll(".check");
  radio.forEach((el) => {
    el.checked = false;
  });
  viewElements();
}

// Поиск по буквам
function findCitiesByTitle(searchString) {
  const lowerCaseSearchString = searchString.toLowerCase();
  return cityList
    .filter((city) => city.Title.toLowerCase().includes(lowerCaseSearchString))
    .map((city) => city.indexObj);
}

// Вывод совпадений
function seeSearch() {
  const request = document.getElementById("search").value;
  const searchList = findCitiesByTitle(request);
  const linksCard = document.querySelectorAll(".cardLink");

  linksCard.forEach(function (link) {
    const indexStr = link.getAttribute("data-index");
    const index = indexStr !== null ? Number(indexStr) : NaN;
    if (!isNaN(index) && !searchList.includes(index)) {
      link.classList.add("hide");
    } else {
      link.classList.remove("hide");
    }
  });
}
let curentCardIndex = 0;
let number_card = document.querySelector(".red-line__marshruts-circle");
let cards = document.querySelectorAll(".red-line__marshruts__card-box_card");
let cardName = document.querySelector(".red-line__marshruts-text");
let Body = document.querySelector("body");

function showCard(index) {
  number_card = document.querySelector(".red-line__marshruts-circle");
  cards = document.querySelectorAll(".red-line__marshruts__card-box_card");
  cardName = document.querySelector(".red-line__marshruts-text");
  Body = document.querySelector("body");
  cards[curentCardIndex].classList.replace("active", "nonActive");
  cards[index].classList.replace("nonActive", "active");
  cardName.innerHTML = `<p class="red-line__marshruts-text">${cityList[index].Title}</p>`;
  curentCardIndex = index;
  number_card.innerHTML = `<p>${index + 1}</p>`;
  const active_title_text = document.getElementById(index);
  const title_blockd = document.querySelector(".red-line__marshruts-text");
}

// Переключение фильтров, запись в локалстроедж
document.querySelectorAll(".check").forEach((el) => {
  el.onchange = () => localStorage.setItem(el.id, el.checked);
  el.checked = localStorage.getItem(el.id) === "true";
});

const modalForm = document.querySelector(".modal");
// Модальное окно
function modalMeny() {
  const modal = document.querySelector(".modal");
  const inputs = document.querySelectorAll(".modal__form-input");
  if (!modal.classList.contains("base")) {
    if (modal.classList.contains("bhide")) {
      modal.classList.remove("bhide");
      modal.classList.add("bvis");
    } else {
      modal.classList.add("bhide");
      modal.classList.remove("bvis");
      inputs.forEach(function (input) {
        input.value = "";
      });
    }
  } else {
    modal.classList.remove("base");
    modal.classList.add("bvis");
  }
}
// Обработчик события нажатия на стрелки (слайдер)
document.querySelector(".controls").addEventListener("click", function (event) {
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

async function getCards() {
  try {
    const response = await fetch(
      "https://67275558302d03037e70ad42.mockapi.io/api/redline/cardList",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    cityList = data;
  } catch (error) {
    console.log(error);
  }
}

async function getLinks() {
  try {
    const response = await fetch(
      "https://67275558302d03037e70ad42.mockapi.io/api/redline/linkList",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    linkList = data;
  } catch (error) {
    console.log(error);
  }
}

async function loadingPage() {
  await getCards();
  await getLinks();
  await cardInnerParent();
  await cicleLinks();
  await circlePagination();
  await showCard(curentCardIndex);
  const Loading = document.querySelector(".loading");
  Loading.classList.remove("active__loading");
  Buildings = document.querySelectorAll(".buildings");
  Parks = document.querySelectorAll(".parki");
  Museums = document.querySelectorAll(".museumi");
  Hrams = document.querySelectorAll(".hrami");
  firstpage = document.querySelectorAll(".firstPage");
  secondpage = document.querySelectorAll(".secondPage");
  thirdpage = document.querySelectorAll(".thirdPage");
  fourpage = document.querySelectorAll(".fourPage");
  Loading.classList.add("loadingComplete");
}

loadingPage();

// const fruits = ["mama", "papa", "хахахахаха"];
// const [_, papa] = fruits;

// const deade = [...fruits.slice(1), "tochter"];
// console.log(deade, ..."mama");
// console.log(papa);

// const dima = {
//   name: "pidr",
//   age: "99 проблем js",
// };
// console.log(Object.keys(dima));
