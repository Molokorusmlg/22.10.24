//global.js -----------------------------------------
// Модальное окно
const modalForm = document.querySelector(".modal");

// Пагинация на странице
const paginationBlock = document.querySelector(".pagination");
const linksBlock = document.querySelector(".red-line__big__text-text");
let firstpage = document.querySelectorAll(".firstPage");
let secondpage = document.querySelectorAll(".secondPage");
let thirdpage = document.querySelectorAll(".thirdPage");
let fourpage = document.querySelectorAll(".fourPage");

// Родительский блок для карточек
const cardInnerBlock = document.querySelector(
  ".red-line__marshruts__card-box_small-card-box"
);

// Фильтры
const checkBox = document.querySelectorAll(".check");
let Buildings = document.querySelectorAll(".buildings");
let Parks = document.querySelectorAll(".parki");
let Museums = document.querySelectorAll(".museumi");
let Hrams = document.querySelectorAll(".hrami");
const radioBlock = document.querySelectorAll(".check");

// Текущий индекс карточки в слайдере
let curentCardIndex = 0;

// Элементы для изменения заголовка и номера карточки
let number_card = document.querySelector(".red-line__marshruts-circle");
let cards = document.querySelectorAll(".red-line__marshruts__card-box_card");
let cardName = document.querySelector(".red-line__marshruts-text");

// Элементы ввода информации (инпуты) для модпльного окна
const inputsModal = document.querySelectorAll(".modal__form-input");

// Конец global.js -----------------------------------------

// formAuth.js Элементы для изменеия формы
const buttonReg = document.querySelector(".block__button-register");
const buttonIn = document.querySelector(".block__button-signin");
const formReg = document.querySelector(".register");
const formIn = document.querySelector(".signin");

// index.js
// Элементы для изменения на главной странице
const Mainpage = document.querySelector(".about__background_main");
const TitleEKB = document.querySelector(".about__city__title");
const TextEKB = document.querySelector(".about__city__text");

// Элементы для изменения карты на главной странице
const arrowMap = document.querySelector(".arrow__map");
const MapText = document.querySelector(".big_map__text");
const MapEkb = document.querySelector(".map_small");

// Конец index.js -----------------------------------------

// URL для api
const BASE_URL = "https://67275558302d03037e70ad42.mockapi.io/api/";

// admin.js
// Все родители карточек (два папы)
let parentCards = document.querySelector(".cards");

// global.js, index.js Бургер-меню
const burgerMenu = document.querySelector(".burger__meny");

// global.js, elementfind.js Загрузка
const Loading = document.querySelector(".loading");

// Данные с Fetch запросов на страницах
let cityList = []; // global.js admin.js
let linkList = []; // global.js
let cardsData = []; // elementfind.js
let linksData = []; // elementfind.js
let baseData = []; // elementfind.js
