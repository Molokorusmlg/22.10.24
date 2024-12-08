const url = new URL(CARDS_URL + "redline/cardList/");
url.searchParams.append("page", 1);
url.searchParams.append("limit", 10);

let unicalPage = location.hash.substring(1);

function goToLine() {
  console.log(123);

  window.location.href = "../redline/redLine.html";
}

function goToUnicalPage(index) {
  window.location.hash = `#${index}`;
}

window.addEventListener("hashchange", () => {
  unicalPage = location.hash.substring(1);
  getCards();
});

function createCard(img, title, text, likes) {
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

function findCitiesByTitle() {
  const searchString = document.getElementById("search_input").value;
  return searchString;
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

function circlePagination() {
  for (index = 0; index < Math.ceil(linkList.length / 10); ++index) {
    const links = document.createElement("a");
    const proIndex = index * index + 10;
    const curentIndex = index + 1;

    if (index)
      links.innerHTML = `<a onclick="getCards(${curentIndex})" class="pagination__page-a">${
        proIndex + 1
      }..${proIndex + 10}</a>`;
    if (!index) {
      links.innerHTML = `<a onclick="getCards(${curentIndex})" class="pagination__page-a">${curentIndex}..${
        proIndex + 1
      }</a>`;
    }
    paginationBlock.forEach((block) => {
      block.appendChild(links);
    });
  }
}

async function stableData() {
  const response = await fetch(url, {
    method: "GET",
  });
  const data = await response.json();
  const stableListPagination = data;
}

function getFulters() {
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

  // Преобразуем массив в строку, если это необходимо
  request.attractionsString = request.attractions.join(",");

  return request.attractions;
}

function sortingCards() {
  sortView = document
    .querySelector(".attractions__navigate__sort__views_arrow")
    .classList.contains("views_selected");

  sortLikes = document
    .querySelector(".attractions__navigate__sort__likes_arrow")
    .classList.contains("likes_selected");

  return [sortLikes, sortView];
}
function likeChange() {
  sortLikes = document.querySelector(
    ".attractions__navigate__sort__likes_arrow"
  );

  sortLikes.classList.toggle("likes_selected");
  getCards();
}

function viewsChange() {
  sortView = document.querySelector(
    ".attractions__navigate__sort__views_arrow"
  );

  sortView.classList.toggle("views_selected");
  getCards();
}

async function createUnicalPage() {
  const response = await fetch(CARDS_URL + "redline/cardList/" + unicalPage, {
    method: "GET",
  });

  const data = await response.json();

  console.log(data);
}

///////////

async function getCards(page = 1) {
  Loading.classList.remove("loading-complete");
  Loading.classList.add("active__loading");

  console.log(unicalPage);

  if (!unicalPage == "") {
    createUnicalPage();
    return;
  }

  search = findCitiesByTitle();
  filters = getFulters();
  sorted = sortingCards();

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

  parentBlock = document.querySelector(".attractions__list__cards_block");

  parentBlock.innerHTML = "";

  cityList.forEach((attraction) => {
    const card = document.createElement("div");
    card.classList.add("attractions__card");
    card.setAttribute("onclick", `goToUnicalPage("${attraction.indexObj}")`);
    const card_iner = createCard(
      attraction.Img_scr,
      attraction.Title,
      attraction.Text,
      attraction.likes
    );
    card.innerHTML = card_iner;
    parentBlock.appendChild(card);
  });
  Loading.classList.remove("active__loading");
  Loading.classList.add("loading-complete");
}

async function loading() {
  await stableData();
  const url = new URL(CARDS_URL + "redline/cardList/");
  url.searchParams.append("page", 1);
  url.searchParams.append("limit", 10);
  await getCards();
  await getLinks();
  await circlePagination();
}

loading();
