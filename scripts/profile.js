function createInfo(name, login, password) {
  return `<div class="profile__block_information_name">
              <input
                class="profile__block_information_name_input profile__input"
                type="text"
                placeholder="${name}"
              />
            </div>
            <div class="profile__block_information_login">
              <input
                class="profile__block_information_login_input profile__input"
                type="text"
                placeholder="${login}"
              />
            </div>
            <div class="profile__block_information_password">
              <input
                class="profile__block_information_password_input profile__input"
                type="text"
                placeholder="${password}"
              />
            </div>
            <div class="profile__block_information_orders">
              <p class="profile__block_information_orders_title">
                Ваши покупки:
              </p>
              <div class="profile__block_information_orders_list">
                <p class="profile__block_information_orders_text">
                  Гид-экскурсия по Екатеринбургу
                </p>
                <p class="profile__block_information_orders_text">
                  Гид-экскурсия по Екатеринбургу
                </p>
                <p class="profile__block_information_orders_text">
                  Гид-экскурсия по Екатеринбургу
                </p>
                <p class="profile__block_information_orders_text">
                  Гид-экскурсия по Екатеринбургу
                </p>
              </div>
            </div>`;
}

function innerOrders(orders) {
  const parentBlock = document.querySelector(
    ".profile__block_information_orders_list"
  );
  let orderBlock = ``;
  for (let step = 0; step <= orders; step++) {
    orderBlock += `<p class="profile__block_information_orders_text">
                  Гид-экскурсия по Екатеринбургу
                </p>`;
  }
  parentBlock.innerHTML = orderBlock;
}

function innerInfo(name, login, password) {
  const parentBlock = document.querySelector(
    ".profile__block_information_info"
  );
  const block = createInfo(name, login, password);
  parentBlock.innerHTML = block;
}

function backToMainPage() {
  window.location.href = BASE_URL + "mainpage/mainpage.html";
}

async function updateUser(userId, updatedData) {
  try {
    const response = await fetch(USERS_URL + "users/" + userId, {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "PATCH",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    const updatedUser = await response.json();
    console.log("Данные пользователя успешно обновлены:", updatedUser);
    localStorage.setItem("login", updatedData.login);
    location.reload();
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

async function updateOrders(userId) {
  const orders = localStorage.getItem("orders");
  const newOrders = Number(orders) + 1;
  try {
    const response = await fetch(USERS_URL + "users/" + userId, {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "PATCH",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orders: newOrders }),
    });
    location.reload();
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

document
  .querySelector(".profile__block_new_order_button")
  .addEventListener("click", () => {
    const userId = localStorage.getItem("userId");
    updateOrders(userId);
  });

document.querySelector(".exit").addEventListener("click", () => {
  window.location.href = BASE_URL + "register/register.html";
});

document
  .querySelector(".profile__block_new_order_save")
  .addEventListener("click", () => {
    const userId = localStorage.getItem("userId");
    const newName = document.querySelector(
      ".profile__block_information_name_input"
    ).value;
    const newLogin = document.querySelector(
      ".profile__block_information_login_input"
    ).value;
    const newPassword = document.querySelector(
      ".profile__block_information_password_input"
    ).value;
    const updatedData = {
      name: `${newName}`,
      login: `${newLogin}`,
      password: `${newPassword}`,
    };
    updateUser(userId, updatedData);
  });

async function getUsers() {
  try {
    const response = await fetch(USERS_URL + "users", {
      method: "GET",
    });
    const data = await response.json();
    userList = data;
    let matches = 0;
    userList.forEach((user) => {
      if (user.login == localStorage.getItem("login")) {
        matches = 1;
        innerInfo(user.name, user.login, user.password);
        localStorage.setItem("orders", user.orders);
        localStorage.setItem("userId", user.id);
      }
    });
    if (matches == 0) {
      console.log("Что то пошло не так...");
    }
  } catch (error) {
    console.log(error);
  }
}

async function loadingPage() {
  await getUsers();
  innerOrders(localStorage.getItem("orders"));
  Loading.classList.remove("active__loading");
  Loading.classList.add("loadingComplete");
}

loadingPage();
