const user = new User();

function createInfo(name, login, password) {
  return `<div class="profile__block_information_name">
              <input
                class="profile__block_information_name_input profile__input"
                type="text"
                placeholder="Фио: ${name}"
                value = '${name}'
              />
            </div>
            <div class="profile__block_information_login">
              <input
                class="profile__block_information_login_input profile__input"
                type="text"
                placeholder="Логин: ${login}"
                value = '${login}'
              />
            </div>
            <div class="profile__block_information_password">
              <input
                class="profile__block_information_password_input profile__input"
                type="text"
                placeholder="Пароль: ${password}"
                value = '${password}'
              />
            </div>
            <div class="profile__block_information_orders">
              <p class="profile__block_information_orders_title">
                Ваши покупки:
              </p>
              <div class="profile__block_information_orders_list">
              </div>
            </div>`;
}

function innerOrders(orders) {
  const parentBlock = document.querySelector(
    ".profile__block_information_orders_list"
  );
  let orderBlock = ``;
  for (let step = 0; step < orders; step++) {
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

async function loadingPage() {
  await user.findUser();
  await innerOrders(localStorage.getItem("orders"));
  Loading.classList.remove("active__loading");
  Loading.classList.add("loading-complete");
}

loadingPage();
