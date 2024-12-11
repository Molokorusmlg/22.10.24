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
        const card_iner = this.attractionCreateCard(
          attraction.Img_scr,
          attraction.Title,
          attraction.Text,
          attraction.likes
        );
        card.innerHTML = card_iner;
        parentBlock.appendChild(card);
      });
    } catch (error) {
      console.log(error);

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

  adminCreateAllCards() {
    const parentCards = document.querySelector(".cards");
    cityList.forEach((city) => {
      const card = document.createElement("div");
      card.classList.add("red-line__marshruts__card-box_card");
      const card_final = this.adminCardCreate(
        city.Img_scr,
        city.Map_scr,
        city.Text,
        cityList.indexOf(city)
      );
      card.innerHTML = card_final;
      parentCards.appendChild(card);
    });
  }

  // Удаление карточек
  async deleteCard(index) {
    try {
      await fetch(CARDS_URL + `redline/cardList/${index}`, {
        method: "DELETE",
      });
      console.log("Delete sucsess");
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Deleted completed");
    }
  }

  // Добавление новых карточек в mock.api
  async addNewCard() {
    const imgScrNew = document.getElementById("images").files;
    const mapSrcNew = document.getElementById("mapid").value;
    const TextNew = document.getElementById("textid").value;
    const TitleNew = document.getElementById("titleid").value;

    try {
      await fetch(CARDS_URL + `redline/cardList/${cityList.length}`, {
        method: "PUT",
        body: JSON.stringify({
          Img_scr: imgScrNew,
          Map_scr: `"${mapSrcNew}"`,
          Text: `"${TextNew}"`,
          Title: `"${TitleNew}"`,
          id: `"${cityList.length}"`,
          indexObj: cityList.length,
        }),
      });
      console.log("Delete sucsess");
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Deleted completed");
    }
  }

  adminCardCreate(img, map, text, index) {
    return `<div class = "red-line__marshruts__card-box_card" onclick = "deleteCard(${index})">
    <div class="red-line__marshruts__card-box_card-img">
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
              </div>
              </div>`;
  }

  // Вставляем карточки с апи в родительский блок
  globalCardInnerParent() {
    cityList.forEach((city) => {
      const card = document.createElement("div");
      card.classList.add("red-line__marshruts__card-box_card");
      card.classList.add("nonActive");
      const card_final = this.globalCardCreate(
        city.Img_scr,
        city.Map_scr,
        city.Text
      );
      card.innerHTML = card_final;
      cardInnerBlock.appendChild(card);
    });
  }

  // Сама карточка
  globalCardCreate(img, map, text) {
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

  attractionCreateCard(img, title, text, likes) {
    return `
          <div class="attractions__card__img">
            <img
              src=${img}
              alt=""
              class="attractions__card__img_photo"
            />
          </div>
          <div class="attractions__card__text">
            <h1 class="attractions__card__text_title">${title}</h1>
            <p class="attractions__card__text_paragraph">
              ${text}
            </p>
          </div>
          <div class="attractions__card__likes">
            <img
              src="../../assets/img/no-likes.svg"
              alt=""
              class="attractions__card__likes_photo"
            />
            <p class="attractions__card__likes_counter">${likes}</p>
          </div>
    `;
  }

  unicalInnerCard(cardData) {
    const parentBlock = document.querySelector(".page");
    const cardFinal = this.unicalCardCreate(
      cardData.Img_scr,
      cardData.Map_scr,
      cardData.Text,
      cardData.Title
    );
    parentBlock.innerHTML = cardFinal;

    const attractionPageClass = document.querySelector(".attractions");
    attractionPageClass.innerHTML = "";
  }

  unicalCardCreate(img, map, text, title) {
    return `<div class="page__title">
        <h1 class="page__title-text">${title}</h1>
      </div>
      <hr class="page__line" />
      <div class="page__card">
      <img onclick = 'slider.goNextImg()' src="../../assets/img/arrowBack.svg" alt="" class='controls arrow' />
        <div class="page__card_img-box" onclick = 'gallery()'>
        
        <img
            src=${img}
            alt=""
            class="page__card_img-photo active"
          />
          <img
            src=${img}
            alt=""
            class="page__card_img-photo nonActive"
          />
          <img
            src=${img}
            alt=""
            class="page__card_img-photo nonActive"
          />
          <img
            src=${img}
            alt=""
            class="page__card_img-photo nonActive"
          />
          
        </div>
        <img onclick='slider.goPreviosImg()' src="../../assets/img/arrowBack.svg" alt="" class='controls arrow-reverse' />
        <div class="page__card__map">
          <iframe
            src=${map}
            ,
            width="100%"
            height="100%"
            style="border: 0; border-radius: 15px"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="page__card__text">
          <p class="page__card__text-paragraph">
            ${text}
          </p>
        </div>
      </div>
      <div class='form__block'>
        <p onclick='openForm()' class='form__button'>Оставить отзыв</p>
        <div class='form__hide_block close__form'>
          <form class='form'>
            <div class="form__logo">
              <img
                src="../../assets/img/favicon.ico"
                alt="logo"
                class=form__logo_svg"
              />
              <p class="form__logo_text">Город Бесов</p>
            </div>
              <div class='form__input__block'>
                <label class='form__input__label' for='nameInput'>Имя</label>
                <input required  id='nameInput' type='text' class='form__input' placeholder="Имя"/>
              </div>
              <div class='form__input__block'>
                <label class='form__input__label' for='nameInput'>Текст</label>
                <textarea required  minlength="6" maxlength="100" class='form__textarea' name="" id="formAreaId" placeholder="Ваш отзыв:"></textarea>
            </div>
          </form>
          <div class='form__button_center'>
            <p onclick='sendComents()' class='form__button mini'>Отправить</p>
          </div>
        </div>
      </div>`;
  }
}
