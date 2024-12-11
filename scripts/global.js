const user = new User();
const card = new Card();

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

document.querySelector(".modal__form-button").addEventListener("click", () => {
  const userId = localStorage.getItem("userId");
  user.updateOrders(userId);
});

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

async function loadingPage() {
  await card.getCards();
  await card.getLinks();
  await card.cardInnerParent();
  await showCard(curentCardIndex);

  Loading.classList.remove("active__loading");
  Loading.classList.add("loading-complete");
}

loadingPage();
