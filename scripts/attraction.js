const card = new Card();
const slider = new Slider();

function reviewsCreate(userName, text) {
  return `  <h3 class="reviews__card_username">${userName}</h3>
            <p class="reviews__card_text">
            ${text}
            </p>`;
}

function openForm() {
  const form = document.querySelector(".form__hide_block");
  form.classList.toggle("close__form");
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

async function sendLikes(cardId) {
  const response = await fetch(CARDS_URL + "redline/cardList/" + cardId, {
    method: "GET",
  });
  const data = await response.json();
  cardLikes = data.likes;
  cardLikes += 1;
  data.likes = cardLikes;

  await fetch(CARDS_URL + "redline/cardList/" + cardId, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

function gallery() {
  document.querySelector(".page__card_img-box").classList.toggle("gallery");
  document.querySelector(".arrow").classList.toggle("gallery-arrow");
  document
    .querySelector(".arrow-reverse")
    .classList.toggle("gallery-arrow-reverse");
}

// Карточка
async function createUnicalPage() {
  const response = await fetch(CARDS_URL + "redline/cardList/" + unicalPage, {
    method: "GET",
  });

  const cardData = await response.json();

  await card.unicalInnerCard(cardData);
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
