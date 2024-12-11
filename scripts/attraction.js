const card = new Card();

function reviewsCreate(userName, text) {
  return `  <h3 class="reviews__card_username">${userName}</h3>
            <p class="reviews__card_text">
            ${text}
            </p>`;
}

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

function linkCreate(img1, img2, title1, title2) {
  return (linkBlock = `<div class="block_to_next__firstblock" onclick = "goToPageNext()">
        <div class="block_to_next__card">
          <div class="block_to_next__cardsecond__imgBlock">
            <img
              class="imgArrow"
              src=${img1}
              alt="aaa"
            />
          </div>
          <p class="block_to_next__card-text">${title1}</p>

          <img
            class="block_to_next__card-photo reverse"
            src="../../assets/img/arrowBack.svg"
            alt="arrow"
          />
        </div>
      </div>
      <div class="block_to_next__secondblock" onclick = "goToPagePrevios()">
        <div class="block_to_next__cardsecond">
          <img
            class="block_to_next__card-photo"
            src="../../assets/img/arrowBack.svg"
            alt="arrow"
          />

          <p class="block_to_next__card-text">${title2}</p>
          <div class="block_to_next__cardsecond__imgBlock">
            <img
              class="imgArrowreverse"
              src = ${img2}
              alt="aaa"
            />
          </div>
        </div>
      </div>`);
}

function cardCreate(img, map, text, title) {
  return (cardBlock = `<div class="page__title">
        <h1 class="page__title-text">${title}</h1>
      </div>
      <hr class="page__line" />
      <div class="page__card">
      <img onclick = 'goNextImg()' src="../../assets/img/arrowBack.svg" alt="" class='controls arrow' />
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
        <img onclick='goPreviosImg()' src="../../assets/img/arrowBack.svg" alt="" class='controls arrow-reverse' />
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
      </div>`);
}

function openForm() {
  const form = document.querySelector(".form__hide_block");
  form.classList.toggle("close__form");
}

function goNextImg() {
  cards = document.querySelectorAll(".page__card_img-photo");
  let index = curentCardIndex - 1;
  if (index < 0) {
    index = cards.length - 1;
  }
  showCard(index);
}

function goPreviosImg() {
  cards = document.querySelectorAll(".page__card_img-photo");
  let index = curentCardIndex + 1;
  if (index >= cards.length) {
    index = 0;
  }
  showCard(index);
}

// Unical

window.addEventListener("scroll", animationVisible);

function showCard(index) {
  cards = document.querySelectorAll(".page__card_img-photo");

  cards[curentCardIndex].classList.replace("active", "nonActive");
  cards[index].classList.replace("nonActive", "active");

  curentCardIndex = index;
}

function iinerLink() {
  const parentLink = document.querySelector(".block_to_next");
  const linkCreateated = linkCreate(
    linksData[0].Img_scr,
    linksData[1].Img_scr,
    linksData[0].Title,
    linksData[1].Title
  );
  parentLink.innerHTML = linkCreateated;
}

function innerCard(cardData) {
  const parentBlock = document.querySelector(".page");
  const cardFinal = cardCreate(
    cardData.Img_scr,
    cardData.Map_scr,
    cardData.Text,
    cardData.Title
  );
  parentBlock.innerHTML = cardFinal;

  const attractionPageClass = document.querySelector(".attractions");
  attractionPageClass.innerHTML = "";
}

function animationVisible() {
  const elements = document.querySelectorAll(
    ".block_to_next__card, .block_to_next__cardsecond"
  );

  elements.forEach((element) => {
    const ourwindow = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const heightToHide = 100;

    if (
      ourwindow.top < windowHeight - heightToHide &&
      ourwindow.bottom > heightToHide
    ) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
}

// Main
const url = new URL(CARDS_URL + "redline/cardList/");
url.searchParams.append("page", 1);
url.searchParams.append("limit", 10);

let unicalPage = location.hash.substring(1);

function goToLine() {
  if (unicalPage == "") {
    window.location.href = "../redline/redLine.html";
    return;
  }
  window.location.hash = "";
}

function attractionPageCreate() {
  const parentBlockUnicalPage = document.querySelector(".page");
  parentBlockUnicalPage.innerHTML = "";

  const parentBlockReviews = document.querySelector(".reviews");
  parentBlockReviews.classList.add("hidePage");
  parentBlockReviews.innerHTML = "";

  const parentBlockAttractionPage = document.querySelector(".attractions");
  parentBlockAttractionPage.innerHTML = attractionPage;

  card.circlePagination();
  card.getCardsAttraction();
}

function goToUnicalPage(index) {
  window.location.hash = `#${index}`;
  curentCardIndex = 0;
}

async function getReviews(cardId) {
  try {
    const responseReviews = await fetch(
      REVIEWS_URL + `/?cardListId=${cardId}`,
      {
        method: "GET",
      }
    ).catch((error) => console.log(error));

    const dataReviews = await responseReviews.json();
    const reviewsToThisPage = dataReviews;

    const parentBlock = document.querySelector(".reviews");
    reviewsToThisPage.forEach((review) => {
      const card = document.createElement("div");
      card.classList.add("reviews__card");
      cardIner = reviewsCreate(review.userName, review.text);
      card.innerHTML = cardIner;
      parentBlock.appendChild(card);
    });
  } catch (error) {}
}

async function sendComents() {
  const userName = document.getElementById("nameInput").value;
  const text = document.getElementById("formAreaId").value;
  const attrNumber = location.hash;
  if (userName == "" || text == "") return;

  const response = await fetch(REVIEWS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      userName: userName,
      text: text,
      cardListId: attrNumber[1],
    }),
  });

  if (response.ok) {
    await attractionPageCreate();
  }
}

function gallery() {
  const imgBlock = document.querySelector(".page__card_img-box");
  const arrow = document.querySelector(".arrow");
  const arrowReverse = document.querySelector(".arrow-reverse");

  imgBlock.classList.toggle("gallery");
  arrow.classList.toggle("gallery-arrow");
  arrowReverse.classList.toggle("gallery-arrow-reverse");
}

// Карточка
async function createUnicalPage() {
  const response = await fetch(CARDS_URL + "redline/cardList/" + unicalPage, {
    method: "GET",
  });

  const cardData = await response.json();

  await innerCard(cardData);
  await getReviews(unicalPage);
  const parentReviewsBlock = document.querySelector(".reviews");
  parentReviewsBlock.classList.remove("hidePage");

  Loading.classList.remove("active__loading");
  Loading.classList.add("loading-complete");
}

async function loading() {
  const url = new URL(CARDS_URL + "redline/cardList/");
  url.searchParams.append("page", 1);
  url.searchParams.append("limit", 10);
  await card.getCardsAttraction();
  await card.getLinks();
  await card.circlePagination();
}

loading();

window.addEventListener("hashchange", () => {
  unicalPage = location.hash.substring(1);
  if (location.hash == "") {
    attractionPageCreate();

    return;
  }
  card.getCardsAttraction();
});
