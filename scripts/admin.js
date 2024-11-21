function cardCreate(img, map, text, index) {
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

function usersCreate(name, login, password) {
  return `<div class = 'users__field_block'>
              <p class = "users__name">Name: ${name}</p>
            </div>
            <div class = 'users__field_block'>
              <p class = "users__login">Login: ${login}</p>
            </div>
            <div class = 'users__field_block'>
              <p class = "users__password">Password: ${password}</p>
            </div>
          `;
}

// Создание карточек с данными пользователя
function createUsers() {
  const parentUsers = document.querySelector(".users");
  userList.forEach((user) => {
    const userBlock = document.createElement("div");
    userBlock.classList.add("users__block");
    const user_final = usersCreate(user.name, user.login, user.password);
    userBlock.innerHTML = user_final;
    parentUsers.appendChild(userBlock);
  });
}

// Удаление карточек
async function deleteCard(index) {
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
async function addNewCard() {
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

// Создание карточек
function createAllCards() {
  const parentCards = document.querySelector(".cards");
  cityList.forEach((city) => {
    const card = document.createElement("div");
    card.classList.add("red-line__marshruts__card-box_card");
    const card_final = cardCreate(
      city.Img_scr,
      city.Map_scr,
      city.Text,
      cityList.indexOf(city)
    );
    card.innerHTML = card_final;
    parentCards.appendChild(card);
  });
}

async function getCards() {
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

async function getUsers() {
  try {
    const response = await fetch(USERS_URL + "users", {
      method: "GET",
    });
    const data = await response.json();
    userList = data;
  } catch (error) {
    console.log(error);
  }
}

async function loadingPage() {
  const isAdmin = localStorage.getItem("admin");
  if (isAdmin == "false") {
    const body = document.querySelector(".body");
    body.classList.add("lock");
    return;
  }
  await getCards();
  await getUsers();
  await createAllCards();
  await createUsers();
  Loading.classList.remove("active__loading");
  Loading.classList.add("loading-complete");
}

loadingPage();
