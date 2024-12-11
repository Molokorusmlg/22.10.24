const user = new User();

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

// Модальное окно
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

//Функция получание данных о всех пользователях
async function getFullData() {
  try {
    const response = await fetch(USERS_URL + "users", {
      method: "GET",
    });
    const data = await response.json();
    const userList = data;
    userList.forEach((user) => {
      if (!(user.login === localStorage.getItem("login"))) return;
      localStorage.setItem("name", user.name);
      localStorage.setItem("admin", user.admin);
      localStorage.setItem("password", user.password);
    });
  } catch (error) {
    console.log(error);
  }
}

// Загрузка
async function loadingPage() {
  await getFullData();
  showAdminPanel();
  Loading.classList.remove("active__loading");
  Loading.classList.add("loading-complete");
}

loadingPage();
