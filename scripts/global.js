// Переключение фильтров, запись в локалстроедж
document.querySelectorAll(".check").forEach((el) => {
  el.onchange = () => localStorage.setItem(el.id, el.checked);
  el.checked = localStorage.getItem(el.id) === "true";
});

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

const typesCheckBox = {
  p: ["parks", parks],
  b: ["buildings", buildings],
  m: ["museums", museums],
  h: ["hrams", hrams],
};

// Создание пагинации
function circlePagination() {
  for (index = 0; index < Math.ceil(linkList.length / 10); ++index) {
    const links = document.createElement("a");
    const proIndex = index * index + 10;
    const curentIndex = index + 1;

    if (index)
      links.innerHTML = `<a onclick="pagination(${curentIndex})" class="pagination__page-a">${
        proIndex + 1
      }..${proIndex + 10}</a>`;
    if (!index) {
      links.innerHTML = `<a onclick="pagination(${curentIndex})" class="pagination__page-a">${curentIndex}..${
        proIndex + 1
      }</a>`;
    }
    paginationBlock.forEach((block) => {
      block.appendChild(links);
    });
  }
}

// Создание ссылок
function cicleLinks() {
  linksBlock.forEach((block) => {
    linkList.forEach((link) => {
      const links = document.createElement("a");
      const curentClass = ["hidePage"];
      block.appendChild(links);
      links.innerHTML = `<a onclick="showCard(${link.indexLink})" data-index=${link.indexLink} class="${link.classLink} mini-link" >${link.TitleLink}</a>`;
      links.classList.add(link.classLink, curentClass[0], "cardLink");
      links.setAttribute("id", Math.ceil(link.indexLink / 10));
    });
  });
}

// Сама карточка
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

function goToAttraction() {
  window.location.href = "../attractions/attractions.html";
}

function goToNextHTML() {
  localStorage.setItem("CurrentCard", curentCardIndex);
  window.location.href = "../unical/unicalPage.html";
}

async function updateOrders(userId) {
  const orders = localStorage.getItem("orders");
  const newOrders = Number(orders) + 1;
  try {
    await fetch(USERS_URL + "users/" + userId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orders: newOrders }),
    });
    localStorage.setItem("orders", newOrders);
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

document.querySelector(".modal__form-button").addEventListener("click", () => {
  const userId = localStorage.getItem("userId");
  updateOrders(userId);
});

// Создание карточек
function cardInnerParent() {
  cityList.forEach((city) => {
    const card = document.createElement("div");
    card.classList.add("red-line__marshruts__card-box_card");
    card.classList.add("nonActive");
    const card_final = cardCreate(city.Img_scr, city.Map_scr, city.Text);
    card.innerHTML = card_final;
    cardInnerBlock.appendChild(card);
  });
}

// Открытие филтров при мобильном разрешении
const mobileFilterFunction = () => {
  const toggleClasses = [
    { element: filterBlock, className: "mobile__animation" },
    { element: filterArrow, className: "arrow__animation" },
    { element: shadowBlock, className: "mobile__shadow" },
  ];

  toggleClasses.forEach(({ element, className }) => {
    element.classList.toggle(className);
  });
};

// Обработка пагинации
function pagination(page) {
  const allLinks = document.querySelectorAll(".cardLink");

  allLinks.forEach((allLink) => {
    allLink.classList.add("hidePage");
  });

  const pagPage = document.querySelectorAll(`[id='${page}']`);
  pagPage.forEach((element) => {
    element.classList.remove("hidePage");
  });
  if (page == "1")
    return document.querySelector("[id='0']").classList.remove("hidePage");
}

function setShowBurgerMenu() {
  const burger = document.querySelector(".burger__meny");
  const states = {
    base: "base",
    hidden: "bhide",
    visible: "bvis",
  };

  if (burger.classList.contains(states.base)) {
    burger.classList.replace(states.base, states.visible);
    return;
  }

  const isHidden = burger.classList.contains(states.hidden);
  burger.classList.replace(
    isHidden ? states.hidden : states.visible,
    isHidden ? states.visible : states.hidden
  );
}

function showCheckbox(type) {
  const linksCard = document.querySelectorAll(".mini-link");
  const linksCardextra = document.querySelectorAll(".cardLink");
  let valueCheckbox = 0;
  checkBox.forEach((checkbox) => {
    if (checkbox.checked === false) valueCheckbox += 1;
  });

  if (valueCheckbox === 4) {
    linksCard.forEach((link) => {
      link.classList.remove("hidePage");
    });
    linksCardextra.forEach((elink) => {
      elink.classList.remove("hidePage");
    });
  }

  checkBox.forEach((checkbox) => {
    if (!checkbox.checked) return;
    if (!typesCheckBox[type]) return;
    localStorage.setItem(
      typesCheckBox[type][0],
      typesCheckBox[type][1].checked
    );
    viewElements();
  });
}

// Фильтры
function viewElement(elList, localItem) {
  const isLocalItem = !localItem || localItem === "true";

  elList.forEach((el) => {
    if (!isLocalItem) return el.classList.remove("hidePage");
    el.classList.add("hidePage");
  });
}

async function newOrder() {
  userLogin = localStorage.getItem("login");
  userPassword = localStorage.getItem("password");

  inputLogin = document.querySelector(".modal__input_login").value;
  inputPassword = document.querySelector(".modal__input_password").value;

  if (userLogin === inputLogin && userPassword === inputPassword) {
    await updateOrders(localStorage.getItem("userId"));

    const sucsessBlock = document.querySelector(".sucsess");
    sucsessBlock.classList.replace("sucsess__close", "sucsess__open");

    setTimeout(function () {
      sucsessBlock.classList.replace("sucsess__open", "sucsess__close");
    }, 3000);

    return;
  }

  const errorBlock = document.querySelector(".error");

  errorBlock.classList.replace("error__close", "error__open");

  setTimeout(function () {
    errorBlock.classList.replace("error__open", "error__close");
  }, 3000);
}

function viewElements() {
  const states = {
    buildings: localStorage.getItem("buildings"),
    parks: localStorage.getItem("parks"),
    museums: localStorage.getItem("museums"),
    hrams: localStorage.getItem("hrams"),
  };

  const elements = {
    buildings: Buildings,
    parks: Parks,
    museums: Museums,
    hrams: Hrams,
  };

  Object.entries(states).forEach(([key, state]) => {
    viewElement(elements[key], state);
  });

  if (!Object.values(states).every((state) => state === "false")) return;

  Object.values(elements).forEach((element) => {
    viewElement(element, true);
  });
}

function reset() {
  radioBlock.forEach((el) => (el.checked = false));

  localStorage.setItem("buildings", false);
  localStorage.setItem("hrams", false);
  localStorage.setItem("museums", false);
  localStorage.setItem("parks", false);

  viewElements();
}

function findCitiesByTitle(searchString) {
  const lowerCaseSearchString = searchString.toLowerCase();

  return cityList
    .filter((city) => city.Title.toLowerCase().includes(lowerCaseSearchString))
    .map((city) => city.indexObj);
}

function seeSearch() {
  const blocks = document.querySelectorAll(".red-line__big__text-input");
  blocks.forEach((input) => {
    request = input.value;
    console.log(request);
    if (request === "") return;

    const searchList = findCitiesByTitle(request);
    const linksCard = document.querySelectorAll(".mini-link");

    linksCard.forEach((link) => {
      const indexStr = link.getAttribute("data-index");
      const index = indexStr !== null ? Number(indexStr) : NaN;

      if (!isNaN(index) && !searchList.includes(index)) {
        return link.classList.add("hidePage");
      }

      link.classList.remove("hidePage");
    });
  });
}

function showCard(index) {
  number_card = document.querySelector(".red-line__marshruts-circle");
  cards = document.querySelectorAll(".red-line__marshruts__card-box_card");
  cardName = document.querySelector(".red-line__marshruts-text");

  cards[curentCardIndex].classList.replace("active", "nonActive");
  cards[index].classList.replace("nonActive", "active");

  cardName.innerHTML = `<p class="red-line__marshruts-text">${cityList[index].Title}</p>`;
  curentCardIndex = index;
  number_card.innerHTML = `<p>${index + 1}</p>`;
}

function modalMeny() {
  const elements = {
    modal: {
      element: document.querySelector(".modal"),
      hideClass: "bhide",
      showClass: "bvis",
      baseClass: "base",
    },
    form: {
      element: document.querySelector(".modal__form"),
      hideClass: "modal_hide",
      showClass: "modal_open",
      baseClass: "modal_base",
    },
  };

  const { modal, form } = elements;

  if (modal.element.classList.contains(modal.baseClass)) {
    modal.element.classList.replace(modal.baseClass, modal.showClass);
    form.element.classList.replace(form.baseClass, form.showClass);
    return;
  }

  const isHidden = modal.element.classList.contains(modal.hideClass);
  [modal, form].forEach((item) => {
    item.element.classList.toggle(item.hideClass, !isHidden);
    item.element.classList.toggle(item.showClass, isHidden);
  });
}

function modalClose() {
  const elements = {
    modal: {
      element: document.querySelector(".modal"),
      hideClass: "bhide",
      showClass: "bvis",
    },
    form: {
      element: document.querySelector(".modal__form"),
      hideClass: "modal_hide",
      showClass: "modal_open",
    },
  };

  Object.values(elements).forEach(({ element, hideClass, showClass }) => {
    element.classList.add(hideClass);
    element.classList.remove(showClass);
  });
}

async function getCards() {
  try {
    const response = await fetch(CARDS_URL + "redline/cardList", {
      method: "GET",
    });
    const data = await response.json();
    cityList = data;
  } catch (error) {
    console.log(error);
  }
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

async function loadingPage() {
  await getCards();
  await getLinks();
  await cardInnerParent();
  await cicleLinks();
  await circlePagination();
  await showCard(curentCardIndex);
  const pagPage = document.querySelectorAll("[id='1']");
  const nullElement = document.querySelector("[id='0']");
  nullElement.classList.remove("hidePage");
  pagPage.forEach((element) => {
    element.classList.remove("hidePage");
  });

  Buildings = document.querySelectorAll(".buildings");
  Parks = document.querySelectorAll(".parki");
  Museums = document.querySelectorAll(".museumi");
  Hrams = document.querySelectorAll(".hrami");

  Loading.classList.remove("active__loading");
  Loading.classList.add("loading-complete");
}

loadingPage();
