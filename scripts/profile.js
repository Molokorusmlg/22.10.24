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

const backToMainPage = () => {
  window.location.href = "../mainpage/mainpage.html";
};

async function updateUser(userId, updatedData) {
  try {
    await fetch(USERS_URL + "users/" + userId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    localStorage.setItem("login", updatedData.login);
    await getUsers();
    innerOrders(localStorage.getItem("orders"));
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

async function updateOrders(userId) {
  const orders = localStorage.getItem("orders");
  const newOrders = Number(orders) + 1;
  try {
    await fetch(USERS_URL + "users/" + userId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orders: newOrders }),
    });
    await getUsers();
    innerOrders(localStorage.getItem("orders"));
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

async function getUsers() {
  try {
    const response = await fetch(USERS_URL + "users", {
      method: "GET",
    });
    const data = await response.json();
    userList = data;
    const currentUser = await userList.find(({ login }) => {
      return login === localStorage.getItem("login");
    });

    if (!currentUser) return;
    const { name, login, password, orders, id } = currentUser;

    innerInfo(name, login, password);
    localStorage.setItem("orders", orders);
    localStorage.setItem("userId", id);
  } catch (error) {
    console.log(error);
  }
}

async function loadingPage() {
  await getUsers();
  await innerOrders(localStorage.getItem("orders"));
  Loading.classList.remove("active__loading");
  Loading.classList.add("loading-complete");
}

loadingPage();
