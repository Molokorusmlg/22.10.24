// Бургер меню
function burger__meny() {
  const burger = document.querySelector(".burger__meny");
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
const TitleEKB = document.querySelector(".aboutcity__title");
const TextEKB = document.querySelector(".aboutcity__text");
const Mainpage = document.querySelector(".aboutcitY");

// Смена заднего фона и текста на главной странице
function ShowEkb() {
  if (Mainpage.className == "aboutcitY") {
    TitleEKB.innerHTML = `<h1 class="aboutcity__title">город бесов😈</h1>`;
    TextEKB.innerHTML = `<p class="aboutcity__text">
          Самый крутой город на руси. Самый модный и инновационный!
        </p>`;
    Mainpage.classList.add("zloiEKB");
    Mainpage.classList.remove("aboutcitY");
  } else {
    TitleEKB.innerHTML = `<h1 class="aboutcity__title">Екатеринбург</h1>`;
    TextEKB.innerHTML = `<p class="aboutcity__text">
          Главный кород Свердловской области. Эталон промышленного города,
          конструктивизма и постмодернизма в одном лице
        </p>>`;
    Mainpage.classList.add("aboutcitY");
    Mainpage.classList.remove("zloiEKB");
  }
}

const Strelka = document.querySelector(".streka");
const MapText = document.querySelector(".Bigmap__text");
const MapEkb = document.querySelector(".mapsmall");

// Убираем текст, открываем полностью карту города
function hedeText() {
  if (MapEkb.className == "mapsmall") {
    MapText.classList.replace("noroute", "route");
    Strelka.classList.replace("streka", "streka_hiden");
    MapEkb.classList.replace("mapsmall", "mapbig");
  } else {
    MapText.classList.replace("route", "noroute");
    Strelka.classList.replace("streka_hiden", "streka");
    MapEkb.classList.replace("mapbig", "mapsmall");
  }
}

const modalForm = document.querySelector(".modal");

// Модальное окно
function ModalMeny() {
  const modal = document.querySelector(".modal");
  if (!modal.classList.contains("bbase")) {
    if (modal.classList.contains("bhide")) {
      modal.classList.remove("bhide");
      modal.classList.add("bvis");
    } else {
      modal.classList.add("bhide");
      modal.classList.remove("bvis");
    }
  } else {
    modal.classList.remove("bbase");
    modal.classList.add("bvis");
  }
}
