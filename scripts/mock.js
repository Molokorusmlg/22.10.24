// <! -- TODO: разграничить что и где используется на отдельные блоки и подписать коментариями --!>
const modalForm = document.querySelector(".modal");
const paginationBlock = document.querySelector(".pagination");
const linksBlock = document.querySelector(".red-line__big__text-text");
let firstpage = document.querySelectorAll(".firstPage");
let secondpage = document.querySelectorAll(".secondPage");
let thirdpage = document.querySelectorAll(".thirdPage");
let fourpage = document.querySelectorAll(".fourPage");
const cardInnerBlock = document.querySelector(
  ".red-line__marshruts__card-box_small-card-box"
);
const burgerMenu = document.querySelector(".burger__meny");
const checkBox = document.querySelectorAll(".check");
let Buildings = document.querySelectorAll(".buildings");
let Parks = document.querySelectorAll(".parki");
let Museums = document.querySelectorAll(".museumi");
let Hrams = document.querySelectorAll(".hrami");
const radioBlock = document.querySelectorAll(".check");
let curentCardIndex = 0;
let number_card = document.querySelector(".red-line__marshruts-circle");
let cards = document.querySelectorAll(".red-line__marshruts__card-box_card");
let cardName = document.querySelector(".red-line__marshruts-text");
let Body = document.querySelector("body");
const inputsModal = document.querySelectorAll(".modal__form-input");
const buttonReg = document.querySelector(".block__button-register");
const buttonIn = document.querySelector(".block__button-signin");
const formReg = document.querySelector(".register");
const formIn = document.querySelector(".signin");
const TitleEKB = document.querySelector(".about__city__title");
const TextEKB = document.querySelector(".about__city__text");
const Mainpage = document.querySelector(".about__background_main");
const arrowMap = document.querySelector(".arrow__map");
const MapText = document.querySelector(".big_map__text");
const MapEkb = document.querySelector(".map_small");

const BASE_URL = "https://67275558302d03037e70ad42.mockapi.io/api/";

let cityList = [];
let linkList = [];
let cardsData = [];
let linksData = [];
let baseData = [];
