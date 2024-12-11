const user = new User();
const card = new Card();
const slider = new Slider();

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
    slider.showCardGlobal(index);
  } else if (event.target.classList.contains("arrow-reverse")) {
    let index = curentCardIndex + 1;
    if (index >= cards.length) {
      index = 0;
    }
    slider.showCardGlobal(index);
  }
});

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

async function loadingPage() {
  await card.getCards();
  await card.getLinks();
  await card.globalCardInnerParent();
  await slider.showCardGlobal(curentCardIndex);

  Loading.classList.remove("active__loading");
  Loading.classList.add("loading-complete");
}

loadingPage();
