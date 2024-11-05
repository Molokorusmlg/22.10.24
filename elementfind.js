let cardsData = [];

function CardCreate(img, map, text, title) {
  const cardBlock = `<div class="page__title">
        <h1 class="page__title-text">${title}</h1>
      </div>
      <hr class="page__line" />
      <div class="page__card">
        <div class="page__card_img-box">
          <img
            src=${img}
            alt=""
            class="page__card_img-photo"
          />
        </div>
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
      </div>`;
  return cardBlock;
}

function innerCard() {
  const parentBlock = document.querySelector(".page");
  const cardFinal = CardCreate(
    cardData.Img_scr,
    cardData.Map_scr,
    cardData.Text,
    cardData.Title
  );
  parentBlock.innerHTML = cardFinal;
}

async function GetCardData() {
  try {
    const response = await fetch(
      "https://67275558302d03037e70ad42.mockapi.io/api/redline/cardList",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    cardsData = data;
  } catch (error) {
    console.log(error);
  }
}

async function loadingPage() {
  await GetCardData();
  const curentCardInexNew = localStorage.getItem("CurrentCard");
  cardData = cardsData[curentCardInexNew];
  await innerCard();
  const Loading = document.querySelector(".loading");
  Loading.classList.remove("activeLoading");
  Loading.classList.add("loadingComplete");
}

loadingPage();
