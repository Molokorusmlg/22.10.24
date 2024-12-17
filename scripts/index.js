const user = new User();
const modal = new Modal();

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
  if (mainPage.className === "about__background_main") {
    titleEkb.innerHTML = `<h1 class="about__city__title">город бесов😈</h1>`;
    textEkb.innerHTML = `<p class="about__city__text">
          Самый крутой город на Руси. Самый модный и инновационный!
        </p>`;
    mainPage.classList.add("zloiEKB");
    mainPage.classList.remove("about__background_main");
  } else {
    titleEkb.innerHTML = `<h1 class="about__city__title">Екатеринбург</h1>`;
    textEkb.innerHTML = `<p class="about__city__text">
          Главный город Свердловской области. Эталон промышленного города,
          конструктивизма и постмодернизма в одном лице
        </p>`;
    mainPage.classList.add("about__background_main");
    mainPage.classList.remove("zloiEKB");
  }
}

// Проверка на админа
function showAdminPanel() {
  const isAdmin = localStorage.getItem("admin");

  if (isAdmin === "false") return;
  const parentLinks = document.querySelector(".admin__panel__link");
  const adminPanelLink = `<a class = "header__link" href="../adminpanel/adminpanel.html">Админ-панель</a>`;
  parentLinks.innerHTML = adminPanelLink;
}

// Убираем текст, открываем полностью карту города
function hideText() {
  const isMapSmall = mapEkb.className === "map_small";

  mapText.classList.replace(
    isMapSmall ? "no-route" : "route",
    isMapSmall ? "route" : "no-route"
  );

  arrowMap.classList.replace(
    isMapSmall ? "arrow__map" : "arrow__map_hiden",
    isMapSmall ? "arrow__map_hiden" : "arrow__map"
  );

  mapEkb.classList.replace(
    isMapSmall ? "map_small" : "mapbig",
    isMapSmall ? "mapbig" : "map_small"
  );
}

// Загрузка
async function loadingPage() {
  await user.setUpUserDataInLocalStorage();
  showAdminPanel();
  Loading.classList.remove("active__loading");
  Loading.classList.add("loading-complete");
}

loadingPage();
