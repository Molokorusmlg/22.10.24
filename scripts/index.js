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
          Самый крутой город на руси. Самый модный и инновационный!
        </p>`;
    mainPage.classList.add("zloiEKB");
    mainPage.classList.remove("about__background_main");
  } else {
    titleEkb.innerHTML = `<h1 class="about__city__title">Екатеринбург</h1>`;
    textEkb.innerHTML = `<p class="about__city__text">
          Главный кород Свердловской области. Эталон промышленного города,
          конструктивизма и постмодернизма в одном лице
        </p>>`;
    mainPage.classList.add("about__background_main");
    mainPage.classList.remove("zloiEKB");
  }
}

function showAdminPanel() {
  const isAdmin = localStorage.getItem("admin");
  if (!isAdmin === "true") return;
  const parentLinks = document.querySelector(".admin__panel__link");
  const adminPanelLink = `<a class = "header__link" href="http://127.0.0.1:5500/pages/adminpanel/adminpanel.html">Админ-панель</a>`;
  parentLinks.innerHTML = adminPanelLink;
}

// Убираем текст, открываем полностью карту города
function hedeText() {
  if (mapEkb.className === "map_small") {
    mapText.classList.replace("no-route", "route");
    arrowMap.classList.replace("arrow__map", "arrow__map_hiden");
    mapEkb.classList.replace("map_small", "mapbig");
  } else {
    mapText.classList.replace("route", "no-route");
    arrowMap.classList.replace("arrow__map_hiden", "arrow__map");
    mapEkb.classList.replace("mapbig", "map_small");
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

async function getFullData() {
  try {
    const response = await fetch(USERS_URL + "users", {
      method: "GET",
    });
    const data = await response.json();
    const userList = data;
    userList.forEach((user) => {
      if (!user.login === localStorage.getItem("login")) return;
      localStorage.setItem("name", user.name);
      localStorage.setItem("admin", user.admin);
    });
  } catch (error) {
    console.log(error);
  }
}

async function loadingPage() {
  await getFullData();
  showAdminPanel();
  Loading.classList.remove("active__loading");
  Loading.classList.add("loadingComplete");
}

loadingPage();
