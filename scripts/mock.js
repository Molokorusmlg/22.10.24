//global.js -----------------------------------------
// Модальное окно
const modalForm = document.querySelector(".modal");

// Пагинация на странице
const paginationBlock = document.querySelectorAll(".pagination");
const linksBlock = document.querySelectorAll(".red-line__big__text-text");
let firstpage = document.querySelectorAll(".firstPage");
let secondpage = document.querySelectorAll(".secondPage");
let thirdpage = document.querySelectorAll(".thirdPage");
let fourpage = document.querySelectorAll(".fourPage");

// Родительский блок для карточек
const cardInnerBlock = document.querySelector(
  ".red-line__marshruts__card-box_small-card-box"
);

// Мобильные фильтры
const filterBlock = document.querySelector(".mobile__block");
const filterArrow = document.querySelector(".mobile__arrow");
const shadowBlock = document.querySelector(".mobile__shadow__hide");
const bodyBlock = document.querySelector(".scroll");

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
const errorBlock = document.querySelector(".error");

// index.js
// Элементы для изменения на главной странице
const mainPage = document.querySelector(".about__background_main");
const titleEkb = document.querySelector(".about__city__title");
const textEkb = document.querySelector(".about__city__text");

// Элементы для изменения карты на главной странице
const arrowMap = document.querySelector(".arrow__map_hiden");
const mapText = document.querySelector(".big_map__text");
const mapEkb = document.querySelector(".map_small");

// Конец index.js -----------------------------------------

// URL для api
const CARDS_URL = "https://67275558302d03037e70ad42.mockapi.io/api/";
const USERS_URL = "https://6737c61b4eb22e24fca622b9.mockapi.io/";

const BASE_URL = "../pages/";

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
let userList = []; // admin.js
let cardsData = []; // elementfind.js
let linksData = []; // elementfind.js
let baseData = []; // elementfind.js

// Добавляем обработчик события
document
  .querySelector(".profile__block_new_order_button")
  .addEventListener("click", () => {
    const userId = localStorage.getItem("userId");
    updateOrders(userId);
  });

document.querySelector(".exit").addEventListener("click", () => {
  window.location.href = BASE_URL + "../register/register.html";
});

document
  .querySelector(".profile__block_new_order_save")
  .addEventListener("click", () => {
    const userId = localStorage.getItem("userId");
    const newName = document.querySelector(
      ".profile__block_information_name_input"
    ).value;
    const newLogin = document.querySelector(
      ".profile__block_information_login_input"
    ).value;
    const newPassword = document.querySelector(
      ".profile__block_information_password_input"
    ).value;
    const updatedData = {
      name: `${newName}`,
      login: `${newLogin}`,
      password: `${newPassword}`,
    };
    updateUser(userId, updatedData);
  });
