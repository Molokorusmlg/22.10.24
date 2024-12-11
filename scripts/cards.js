class Card {
  // Получаем все карточки
  async getCards() {
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

  async getCardsAttraction(page = 1) {
    curentCardIndex = 0;
    Loading.classList.remove("loading-complete");
    Loading.classList.add("active__loading");
    const parentBlock = document.querySelector(
      ".attractions__list__cards_block"
    );

    if (!unicalPage == "") {
      createUnicalPage();
      return;
    }

    const search = this.findCitiesByTitle();
    const filters = this.getFulters();
    const sorted = this.sortingCards();

    let filter = "";

    const url = new URL(CARDS_URL + "redline/cardList/");
    url.searchParams.append("page", page);
    url.searchParams.append("limit", 10);
    url.searchParams.append("Title", search);

    if (sorted[0] === true) {
      url.searchParams.append("sortBy", "likes");
      url.searchParams.append("order", "desc");
    } else if (sorted[1] === true) {
      url.searchParams.append("sortBy", "watch");
      url.searchParams.append("order", "desc");
    } else if (sorted[0] === false) {
      url.searchParams.append("sortBy", "likes");
    } else if (sorted[1] === false) {
      url.searchParams.append("sortBy", "watch");
    }

    if (filters.length > 1) {
      filters.forEach((filt) => {
        filter += filt + "||";
      });
    } else if (filters.length == 1) {
      filter = filters[0];
    } else {
      filter = "";
    }
    url.searchParams.append("classLink", filter);

    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();

    cityList = data;
    parentBlock.innerHTML = "";

    try {
      cityList.forEach((attraction) => {
        const card = document.createElement("div");
        card.classList.add("attractions__card");
        card.setAttribute(
          "onclick",
          `goToUnicalPage("${attraction.indexObj}")`
        );
        const card_iner = createCard(
          attraction.Img_scr,
          attraction.Title,
          attraction.Text,
          attraction.likes
        );
        card.innerHTML = card_iner;
        parentBlock.appendChild(card);
      });
    } catch {
      const card = document.createElement("div");
      card.classList.add("body");
      const card_iner = pageNotFound;
      card.innerHTML = card_iner;
      parentBlock.appendChild(card);
    }
    Loading.classList.remove("active__loading");
    Loading.classList.add("loading-complete");
  }

  // Находим карточку по инпуту
  findCitiesByTitle() {
    const searchString = document.getElementById("search_input").value;
    return searchString;
  }

  // Сортировка карточек
  sortingCards() {
    const sortView = document
      .querySelector(".attractions__navigate__sort__views_arrow")
      .classList.contains("views_selected");

    const sortLikes = document
      .querySelector(".attractions__navigate__sort__likes_arrow")
      .classList.contains("likes_selected");

    return [sortLikes, sortView];
  }

  // Смотрим Фильтры
  getFulters() {
    const Bfilter = document.getElementById("buildings-attractions").checked;
    const Pfilter = document.getElementById("parks-attractions").checked;
    const Mfilter = document.getElementById("museums-attractions").checked;
    const Tfilter = document.getElementById("temple-attractions").checked;

    const request = { attractions: [] };

    // Проверяем, какие чекбоксы выбраны и добавляем их значения в массив
    if (Bfilter) {
      request.attractions.push("buildings");
    }
    if (Pfilter) {
      request.attractions.push("parki");
    }
    if (Mfilter) {
      request.attractions.push("museumi");
    }
    if (Tfilter) {
      request.attractions.push("temples");
    }

    request.attractionsString = request.attractions.join(",");

    return request.attractions;
  }

  // Изменяет парамерты сортировки "По лйакам"
  likeChange() {
    const sortLikes = document.querySelector(
      ".attractions__navigate__sort__likes_arrow"
    );

    sortLikes.classList.toggle("likes_selected");
    card.getCardsAttraction();
  }

  // Изменяет парамерты сортировки "По просмотрам"
  viewsChange() {
    const sortView = document.querySelector(
      ".attractions__navigate__sort__views_arrow"
    );

    sortView.classList.toggle("views_selected");
    card.getCardsAttraction();
  }

  // Ссылки на карточки
  async getLinks() {
    try {
      const response = await fetch(LINK_URL, {
        method: "GET",
      });
      const data = await response.json();
      linkList = data;
    } catch (error) {
      console.log(error);
    }
  }

  // Вставляем карточки с апи в родительский блок
  cardInnerParent() {
    cityList.forEach((city) => {
      const card = document.createElement("div");
      card.classList.add("red-line__marshruts__card-box_card");
      card.classList.add("nonActive");
      const card_final = cardCreate(city.Img_scr, city.Map_scr, city.Text);
      card.innerHTML = card_final;
      cardInnerBlock.appendChild(card);
    });
  }

  // Отрисовка пагинации
  circlePagination() {
    for (let index = 0; index < Math.ceil(linkList.length / 10); ++index) {
      const links = document.createElement("a");
      const proIndex = index * index + 10;
      const curentIndex = index + 1;

      if (index)
        links.innerHTML = `<a onclick="card.getCardsAttraction(${curentIndex})" class="pagination__page-a">${
          proIndex + 1
        }..${proIndex + 10}</a>`;
      if (!index) {
        links.innerHTML = `<a onclick="card.getCardsAttraction(${curentIndex})" class="pagination__page-a">${curentIndex}..${
          proIndex + 1
        }</a>`;
      }

      paginationBlock.forEach((block) => {
        block.appendChild(links);
      });
    }
  }
}
