// Бургер меню
function setShowBurgerMenu() {
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

// Смена заднего фона и текста на главной странице
function showEkb() {
  if (Mainpage.className == "about__background_main") {
    TitleEKB.innerHTML = `<h1 class="about__city__title">город бесов😈</h1>`;
    TextEKB.innerHTML = `<p class="about__city__text">
          Самый крутой город на руси. Самый модный и инновационный!
        </p>`;
    Mainpage.classList.add("zloiEKB");
    Mainpage.classList.remove("about__background_main");
  } else {
    TitleEKB.innerHTML = `<h1 class="about__city__title">Екатеринбург</h1>`;
    TextEKB.innerHTML = `<p class="about__city__text">
          Главный кород Свердловской области. Эталон промышленного города,
          конструктивизма и постмодернизма в одном лице
        </p>>`;
    Mainpage.classList.add("about__background_main");
    Mainpage.classList.remove("zloiEKB");
  }
}

// Убираем текст, открываем полностью карту города
function hedeText() {
  if (MapEkb.className == "map_small") {
    MapText.classList.replace("no-route", "route");
    arrowMap.classList.replace("arrow__map", "arrow__map_hiden");
    MapEkb.classList.replace("map_small", "mapbig");
  } else {
    MapText.classList.replace("route", "no-route");
    arrowMap.classList.replace("arrow__map_hiden", "arrow__map");
    MapEkb.classList.replace("mapbig", "map_small");
  }
}

// Модальное окно
function modalMeny() {
  const modal = document.querySelector(".modal");
  if (!modal.classList.contains("base")) {
    if (modal.classList.contains("bhide")) {
      modal.classList.remove("bhide");
      modal.classList.add("bvis");
    } else {
      modal.classList.add("bhide");
      modal.classList.remove("bvis");
    }
  } else {
    modal.classList.remove("base");
    modal.classList.add("bvis");
  }
}
