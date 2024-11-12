let cardsData = [];
let linksData = [];
let baseData = [];
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
      </div>`);
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

function innerCard() {
  const parentBlock = document.querySelector(".page");
  const cardFinal = cardCreate(
    cardData.Img_scr,
    cardData.Map_scr,
    cardData.Text,
    cardData.Title
  );
  parentBlock.innerHTML = cardFinal;
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
window.addEventListener("scroll", animationVisible);

function goToPageNext() {
  const indexThisPage = localStorage.getItem("CurrentCard");

  if (indexThisPage == baseData.length - 1) {
    localStorage.setItem("CurrentCard", 0);
  } else {
    localStorage.setItem("CurrentCard", Number(indexThisPage) + 1);
  }
  window.location.href = "http://127.0.0.1:5500/pages/unical/unicalPage.html";
}

function goToPagePrevios() {
  const indexThisPage = localStorage.getItem("CurrentCard");

  if (indexThisPage == 0) {
    localStorage.setItem("CurrentCard", baseData.length - 1);
  } else {
    localStorage.setItem("CurrentCard", Number(indexThisPage) - 1);
  }
  window.location.href = "http://127.0.0.1:5500/pages/unical/unicalPage.html";
}

async function getCardData() {
  try {
    const response = await fetch(
      "https://67275558302d03037e70ad42.mockapi.io/api/redline/cardList",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    baseData = data;
    cardsData = data;
  } catch (error) {
    console.log(error);
  }
}

async function loadingPage() {
  try {
    await getCardData();
    const curentCardInexNew = localStorage.getItem("CurrentCard");
    if (curentCardInexNew == 0) {
      linksData.push(cardsData[cardsData.length - 1]);
      linksData.push(cardsData[Number(curentCardInexNew) + 1]);
    } else if (curentCardInexNew == cardsData.length - 1) {
      linksData.push(cardsData[0]);
      linksData.push(cardsData[curentCardInexNew - 1]);
    } else {
      linksData.push(cardsData[Number(curentCardInexNew) + 1]);
      linksData.push(cardsData[curentCardInexNew - 1]);
    }

    cardData = cardsData[curentCardInexNew];
    await innerCard();
    await iinerLink();
  } catch (e) {
    console.error(e);
  } finally {
    const Loading = document.querySelector(".loading");
    Loading.classList.remove("active__loading");
    Loading.classList.add("loadingComplete");
  }
}

loadingPage();

/* 
git add
git commit -m ""
git push
git pull 
git pull --all 
git fetch
git fetch --all
new branch
git branch -m / branch -f 
git reset HEAD~
микро макро 
*/
