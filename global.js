let cityList = [];
let linkList = [];
// const cityList = [
//   {
//     Img_scr: "./assets/img/1905year.jpg",
//     Map_scr:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.4491093621905!2d60.59446207744233!3d56.83823997350532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e8ab92d9b9f%3A0xa9573fbeb44831e9!2z0L_Quy4gMTkwNSDQs9C-0LTQsCwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMDE0!5e0!3m2!1sru!2sru!4v1728936782649!5m2!1sru!2sru",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
//     Title: "Площадь 1905 года",
//     indexObj: 0,
//   },
//   {
//     Img_scr: "./assets/img/secondHouse-of-checkist.png",
//     Map_scr:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2181.0860025656148!2d60.632838112779424!3d56.86162020593547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16dc5558ad7eb%3A0x47624145d9cd9abb!2z0YPQuy4g0KfQtdC60LjRgdGC0L7Qsiwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMTM3!5e0!3m2!1sru!2sru!4v1729060751115!5m2!1sru!2sru",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
//     Title: "Дом чекистов",
//     indexObj: 1,
//   },
//   {
//     Img_scr: "./assets/img/okt-sqare.jpg",
//     Map_scr:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1091.1005395470968!2d60.59550748919695!3d56.84249469337674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e61a8323e45%3A0xc3fa10d54b3c49b9!2z0J7QutGC0Y_QsdGA0YzRgdC60LDRjyDQv9C7Liwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7Lg!5e0!3m2!1sru!2sru!4v1729006716315!5m2!1sru!2sru",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
//     Title: "Октябрьская площадь",
//     indexObj: 2,
//   },
//   {
//     Img_scr: "./assets/img/ekbCity.jpg",
//     Map_scr:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.138706345739!2d60.58524799554698!3d56.84356460519855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e60b249851b%3A0x8e3e98a0a15d7362!2z0JHQsNGI0L3RjyAnJ9CY0YHQtdGC0YwnJw!5e0!3m2!1sru!2sru!4v1729006849607!5m2!1sru!2sru",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
//     Title: "Квартал «Екатеринбург-Сити»",
//     indexObj: 3,
//   },
//   {
//     Img_scr: "./assets/img/elzin.jpg",
//     Map_scr:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.061626726333!2d60.58835217744273!3d56.84488677350793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e67465f8ea5%3A0x2d55b7e6b1aa059!2z0JXQu9GM0YbQuNC9INCm0LXQvdGC0YA!5e0!3m2!1sru!2sru!4v1729006943518!5m2!1sru!2sru",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
//     Title: "Ельцин Центр",
//     indexObj: 4,
//   },
//   {
//     Img_scr: "./assets/img/square.jpg",
//     Map_scr:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1297.5501158977713!2d60.59522386456155!3d56.842333396949044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e61af56f913%3A0xbdf51b74a2ab8206!2z0J7QutGC0Y_QsdGA0YzRgdC60LDRjyDQv9C70L7RidCw0LTRjA!5e0!3m2!1sru!2sru!4v1729007066167!5m2!1sru!2sru",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
//     Title: "Сквер в честь 275-летия Екатеринбурга",
//     indexObj: 5,
//   },
//   {
//     Img_scr: "./assets/img/home.jpg",
//     Map_scr:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.1788600311083!2d60.59469166131707!3d56.84119922110858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e61da9c2e79%3A0x575cae2c3a22b65!2z0L3QsNCxLiDQoNCw0LHQvtGH0LXQuSDQvNC-0LvQvtC00LXQttC4LCDQldC60LDRgtC10YDQuNC90LHRg9GA0LMsINCh0LLQtdGA0LTQu9C-0LLRgdC60LDRjyDQvtCx0LsuLCA2MjAwMTQ!5e0!3m2!1sru!2sru!4v1729007264498!5m2!1sru!2sru",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
//     Title: "Набережная Рабочей Молодёжи",
//     indexObj: 6,
//   },
//   {
//     Img_scr: "./assets/img/gim.jpg",
//     Map_scr:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.4444256934307!2d60.59804274342254!3d56.83832031923502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e8af60d9cff%3A0x5f487a09ce6c4518!2z0JPQuNC80L3QsNC30LjRjyDihJYgOQ!5e0!3m2!1sru!2sru!4v1729007361013!5m2!1sru!2sru",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
//     Title: "Мужская гимназия",
//     indexObj: 7,
//   },
//   {
//     Img_scr: "./assets/img/plotinka.jpg",
//     Map_scr:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.4695211211147!2d60.6019191998703!3d56.83788982028663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e8a4badf5c7%3A0x884800455bf4c21b!2z0J_Qu9C-0YLQuNC90LrQsA!5e0!3m2!1sru!2sru!4v1729007447363!5m2!1sru!2sru",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
//     Title: "Исторический сквер",
//     indexObj: 8,
//   },
//   {
//     Img_scr: "./assets/img/voda.jpg",
//     Map_scr:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1091.235186358091!2d60.60464076814041!3d56.837875211581256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e8bd2160ca7%3A0xa6b0557b5668013b!2z0JLQvtC00L7QvdCw0L_QvtGA0L3QsNGPINCx0LDRiNC90Y8!5e0!3m2!1sru!2sru!4v1729007590368!5m2!1sru!2sru",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
//     Title: "Музеи исторического сквера",
//     indexObj: 9,
//   },
//   {
//     Img_scr: "./assets/img/work.jpg",
//     Map_scr:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.444288453689!2d60.60419607489687!3d56.83832267350527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e897d692ccb%3A0xd5975fecb335a6d1!2z0J_Qu9C-0YnQsNC00Ywg0KLRgNGD0LTQsCwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMDc1!5e0!3m2!1sru!2sru!4v1729007674219!5m2!1sru!2sru",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
//     Title: "Площадь труда",
//     indexObj: 10,
//   },
//   {
//     Img_scr: "./assets/img/Zerokilowetr.jpg",
//     Map_scr:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.3867344995247!2d60.60632617744242!3d56.839309973505706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16dcc60a95555%3A0xf77351846a2e4352!2z0J_QvtGH0YLQsCDQoNC-0YHRgdC40Lg!5e0!3m2!1sru!2sru!4v1729423559763!5m2!1sru!2sru",
//     Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione quas beatae ex, error laudantium fugit necessitatibus magni ea neque est molestias iste iure voluptates.",
//     Title: "Нулевой километр (Дом связи)",
//     indexObj: 11,
//   },
// ];

// const linkList = [
//   {
//     TitleLink: "1. Площадь 1905 года",
//     classLink: "buildings",
//     indexLink: 0,
//   },
//   {
//     TitleLink: "2. Второй Дом Советов («Дом Чекиста»)",
//     classLink: "buildings",
//     indexLink: 1,
//   },
//   {
//     TitleLink: "3. Октябрьская площадь",
//     classLink: "parki",
//     indexLink: 2,
//   },
//   {
//     TitleLink: "4. Квартал «Екатеринбург-Сити»",
//     classLink: "parki",
//     indexLink: 3,
//   },
//   {
//     TitleLink: "5. Ельцин Центр",
//     classLink: "buildings",
//     indexLink: 4,
//   },
//   {
//     TitleLink: "6. Сквер в честь 275-летия Екатеринбурга",
//     classLink: "parki",
//     indexLink: 5,
//   },
//   {
//     TitleLink: "7. Набережная Рабочей Молодёжи",
//     classLink: "parki",
//     indexLink: 6,
//   },
//   {
//     TitleLink: "8. Мужская гимназия",
//     classLink: "buildings",
//     indexLink: 7,
//   },
//   {
//     TitleLink: "9. Исторический сквер",
//     classLink: "parki",
//     indexLink: 8,
//   },
//   {
//     TitleLink: "10. Музеи исторического сквера",
//     classLink: "museumi",
//     indexLink: 9,
//   },
//   {
//     TitleLink: "11. Площадь труда",
//     classLink: "parki",
//     indexLink: 10,
//   },
//   {
//     TitleLink: "12. Нулевой километр (Дом связи)",
//     classLink: "buildings",
//     indexLink: 11,
//   },
// ];

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
  const parentBlock = document.querySelector(".redline__bigText-text");
  linkList.forEach((link) => {
    const links = document.createElement("a");
    if (link.indexLink <= 10) {
      links.classList.add(link.classLink, "firstPage");
      links.innerHTML = `<a onclick="ShowCard(${link.indexLink})" id="${link.indexLink}" data-index=${link.indexLink} class="${link.classLink} cardLink" >${link.TitleLink}</a>`;
      parentBlock.appendChild(links);
    } else if (link.indexLink > 10 && link.indexLink <= 20) {
      links.classList.add(link.classLink, "secondPage", "hidePage");
      links.innerHTML = `<a onclick="ShowCard(${link.indexLink})" id="${link.indexLink}" data-index=${link.indexLink} class="${link.classLink} cardLink">${link.TitleLink}</a>`;
      parentBlock.appendChild(links);
    }
  });
}

//сама карточка
function CardCreate(img, map, text) {
  const cardBlock = `<div class="redline__marshruts__cardBox_card-img">
                  <img src=${img} alt="" />
                  
                 </div>
                <div class="redline__marshruts__cardBox_card-columnbox">
                  <div class="redline__marshruts__cardBox_card-map">
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
                  <div class="redline__marshruts__cardBox_card-description">
                    <p>
                      ${text}
                    </p>
                  </div>
              </div>`;
  return cardBlock;
}

function cikle() {
  // Создание карточек
  const parentCards = document.querySelector(
    ".redline__marshruts__cardBox_SmallCardBox"
  );
  cityList.forEach((city) => {
    const card = document.createElement("div");
    card.classList.add("redline__marshruts__cardBox_card");
    const card_final = CardCreate(city.Img_scr, city.Map_scr, city.Text);
    card.innerHTML = card_final;
    parentCards.appendChild(card);
  });
}

const firstpage = document.querySelectorAll(".firstPage");
const secondpage = document.querySelectorAll(".secondPage");
const thirdpage = document.querySelectorAll(".thirdPage");
const fourpage = document.querySelectorAll(".fourPage");
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
function burgerMeny() {
  const burger = document.querySelector(".burgerMeny");
  if (!burger.classList.contains("bbase")) {
    if (burger.classList.contains("bhide")) {
      burger.classList.remove("bhide");
      burger.classList.add("bvis");
    } else {
      burger.classList.add("bhide");
      burger.classList.remove("bvis");
    }
  } else {
    burger.classList.remove("bbase");
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
const Buildings = document.querySelectorAll(".buildings");
const Parks = document.querySelectorAll(".parki");
const Museums = document.querySelectorAll(".museumi");
const Hrams = document.querySelectorAll(".hrami");

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

function Reset() {
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
function SeeSearch() {
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
// Вывод карт

let number_card = document.querySelector(".redline__marshruts-circle");
let cards = document.querySelectorAll(".redline__marshruts__cardBox_card");
let cardName = document.querySelector(".redline__marshruts-text");
let Body = document.querySelector("body");

function ShowCard(index) {
  number_card = document.querySelector(".redline__marshruts-circle");
  cards = document.querySelectorAll(".redline__marshruts__cardBox_card");
  cardName = document.querySelector(".redline__marshruts-text");
  Body = document.querySelector("body");
  console.log("fff");
  cards[curentCardIndex].classList.remove("active");
  cards[index].classList.add("active");
  cardName.innerHTML = `<p class="redline__marshruts-text">${cityList[index].Title}</p>`;
  curentCardIndex = index;
  number_card.innerHTML = `<p>${index + 1}</p>`;
  const active_title_text = document.getElementById(index);
  const title_blockd = document.querySelector(".redline__marshruts-text");
}

// Переключение фильтров, запись в локалстроедж
document.querySelectorAll(".check").forEach((el) => {
  el.onchange = () => localStorage.setItem(el.id, el.checked);
  el.checked = localStorage.getItem(el.id) === "true";
});

const modalForm = document.querySelector(".modal");
// Модальное окно
function ModalMeny() {
  const modal = document.querySelector(".modal");
  const inputs = document.querySelectorAll(".modal__form-input");
  if (!modal.classList.contains("bbase")) {
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
    modal.classList.remove("bbase");
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
    ShowCard(index);
  } else if (event.target.classList.contains("arrow-reverse")) {
    let index = curentCardIndex + 1;
    if (index >= cards.length) {
      index = 0;
    }
    ShowCard(index);
  }
});

// fetch("http://127.0.0.1:8000/api/videos/full_videos/", {
//   method: "GET",
//   headers: {
//     Authorization: token,
//   },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     setList(data);
//   })
//   .catch((rejected) => {
//     console.log(rejected);
//   })
//   .finally(() => {
//     console.log("DATA SUCSESS");
//   });

async function GetCards() {
  try {
    const response = await fetch(
      "https://67275558302d03037e70ad42.mockapi.io/api/redline/cardList",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
    cityList = data;
    console.log(cityList);
  } catch (error) {
    console.log(error);
  }
}

async function GetLinks() {
  try {
    const response = await fetch(
      "https://67275558302d03037e70ad42.mockapi.io/api/redline/linkList",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
    linkList = data;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  await GetCards();
  await GetLinks();
  await cikle();
  await cicleLinks();
  await circlePagination();
  await ShowCard(curentCardIndex);
  console.log("Остальной код выполняется после завершения GetCards");
}

main();
