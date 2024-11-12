let cityList = [];
let linkList = [];

function CardCreate(img, map, text) {
  const cardBlock = `<div class="red-line__marshruts__card-box_card-img">
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
  return cardBlock;
}

// Создание карточек
function createAllCards() {
  const parentCards = document.querySelector(".cards");
  cityList.forEach((city) => {
    const card = document.createElement("div");
    card.classList.add("red-line__marshruts__card-box_card");
    const card_final = CardCreate(city.Img_scr, city.Map_scr, city.Text);
    card.innerHTML = card_final;
    parentCards.appendChild(card);
  });
}

async function getCards() {
  try {
    const response = await fetch(
      "https://67275558302d03037e70ad42.mockapi.io/api/redline/cardList",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    cityList = data;
  } catch (error) {
    console.log(error);
  }
}

async function loadingPage() {
  await getCards();
  await createAllCards();
}

loadingPage();
