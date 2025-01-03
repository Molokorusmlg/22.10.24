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
const arrowMap = document.querySelector(".arrow__map");
const mapText = document.querySelector(".big_map__text");
const mapEkb = document.querySelector(".map_small");

// Конец index.js -----------------------------------------

// URL для api
const CARDS_URL = "https://67275558302d03037e70ad42.mockapi.io/api/";
const USERS_URL = "https://6750125869dc1669ec198aa9.mockapi.io/";
const LINK_URL = "https://6750125869dc1669ec198aa9.mockapi.io/linkList";
const REVIEWS_URL =
  "https://67275558302d03037e70ad42.mockapi.io/api/redline/reviews";

const FULL_CARDS_URL = "https://675ebc5f1f7ad24269967ed4.mockapi.io/Crads/";

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

// Админ панель блоки для заполнения
const cardBlock = document.querySelector(".cards");
const usersBlock = document.querySelector(".users");
const reviewsBlock = document.querySelector(".reviews");

// Данные не найдены
const pageNotFound = `<h1 class="not_error">404</h1>
    <h1 class="not_tile">Упс, такой страницы не существует</h1>
    <a href="../../pages/mainpage/mainpage.html" class="not_link"
      >Перейдите на главную страницу</a
    >`;

// Страница достопремечательносей
const attractionPage = `<div class="attractions__navigate">
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
            onclick="card.likeChange()"
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
            onclick="card.viewsChange()"
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
              onchange="card.getCardsAttraction()"
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
                onchange="card.getCardsAttraction()"
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
                onchange="card.getCardsAttraction()"
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
                onchange="card.getCardsAttraction()"
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
                onchange="card.getCardsAttraction()"
              />
            </div>
          </div>
          <div class="attractions__list__arrow" onclick="filtersMeny()">
            <img
              src="../../assets/img/arrowBackWhite.svg"
              alt="close_filters_panel"
              class="attractions__list__arrow_img"
            />
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

// Добавляем обработчик события
document
  .querySelector(".profile__block_new_order_button")
  .addEventListener("click", () => {
    const userId = localStorage.getItem("userId");
    user.updateOrders(userId);
  });

document.querySelector(".exit").addEventListener("click", () => {
  window.location.href = BASE_URL + "../register/register.html";
});

user = new User();

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
    user.updateUser(userId, updatedData);
  });
