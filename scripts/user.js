class User {
  // Вход пользователей
  async signInUser() {
    try {
      const response = await fetch(USERS_URL + "users", {
        method: "GET",
      });
      const data = await response.json();
      const users = data;
      const loginValue = document.querySelector(".login__signin").value;
      const passwordValue = document.querySelector(".password__signin").value;

      const user = await users.find((user) => {
        return user.password === passwordValue && user.login === loginValue;
      });

      if (user) {
        localStorage.setItem("login", loginValue);
        window.location.href = "../mainpage/mainpage.html";
        return;
      }

      errorBlock.classList.add("animation");
      setTimeout(function () {
        errorBlock.classList.remove("animation");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  // Отправка пользователей
  async postUser() {
    try {
      const loginValue = document.querySelector(".login__registration").value;
      const passwordValue = document.querySelector(
        ".password__registration"
      ).value;
      const nameValue = document.querySelector(".name__registration").value;

      if (loginValue == "" || passwordValue == "" || nameValue == "") {
        errorBlock.classList.add("animation");
        setTimeout(function () {
          errorBlock.classList.remove("animation");
        }, 3000);

        return;
      }

      const response = await fetch(USERS_URL + "users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          login: loginValue,
          password: passwordValue,
          name: nameValue,
          admin: false,
          orders: 0,
        }),
      });

      if (!response.ok) return;
      localStorage.setItem("login", loginValue);
      window.location.href = BASE_URL + "../mainpage/mainpage.html";
    } catch (error) {
      console.log(`Ошибка типа: ${error}`);
    }
  }

  // Обновление данных пользователя
  async updateUser(userId, updatedData) {
    Loading.classList.add("active__loading");
    Loading.classList.remove("loading-complete");
    try {
      await fetch(USERS_URL + "users/" + userId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      localStorage.setItem("login", updatedData.login);
      await this.setUpUserDataInLocalStorage();

      innerOrders(localStorage.getItem("orders"));
      Loading.classList.remove("active__loading");
      Loading.classList.add("loading-complete");
    } catch (error) {
      console.error("Произошла ошибка:", error);
    }
  }

  // Новый заказ у пользователя
  async newOrder() {
    const userLogin = localStorage.getItem("login");
    const userPassword = localStorage.getItem("password");

    const inputLogin = document.querySelector(".modal__input_login").value;
    const inputPassword = document.querySelector(
      ".modal__input_password"
    ).value;

    if (userLogin === inputLogin && userPassword === inputPassword) {
      await updateOrders(localStorage.getItem("userId"));
      const sucsessBlock = document.querySelector(".sucsess");
      sucsessBlock.classList.replace("sucsess__close", "sucsess__open");

      setTimeout(function () {
        sucsessBlock.classList.replace("sucsess__open", "sucsess__close");
      }, 3000);
      return;
    }

    const errorBlock = document.querySelector(".error");
    errorBlock.classList.replace("error__close", "error__open");

    setTimeout(function () {
      errorBlock.classList.replace("error__open", "error__close");
    }, 3000);
  }

  // Обновляем данные на клиенте пользователдя, а так же отправляем запрос на изменеия данных серверу
  async updateOrders(userId) {
    Loading.classList.add("active__loading");
    Loading.classList.remove("loading-complete");
    const orders = localStorage.getItem("orders");
    const newOrders = Number(orders) + 1;
    Loading.classList.add("active__loading");
    Loading.classList.remove("loading-complete");
    try {
      await fetch(USERS_URL + "users/" + userId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orders: newOrders }),
      });
      localStorage.setItem("orders", newOrders);

      const parentBlock = document.querySelector(
        ".profile__block_information_orders_list"
      );

      parentBlock.innerHTML = "";
      await innerOrders(localStorage.getItem("orders"));
      Loading.classList.remove("active__loading");
      Loading.classList.add("loading-complete");
    } catch (error) {
      console.error("Произошла ошибка:", error);
    }
  }

  // Получаем всех пользователей
  async getUsers() {
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

  // Создание карточек с данными пользователя
  createUsers() {
    const parentUsers = document.querySelector(".users");
    userList.forEach((user) => {
      const userBlock = document.createElement("div");
      userBlock.classList.add("users__block");
      const user_final = this.adminUsersCreate(
        user.name,
        user.login,
        user.password
      );
      userBlock.innerHTML = user_final;
      parentUsers.appendChild(userBlock);
    });
  }

  // Находим нашего пользоваетля по введденным данным
  async findUser() {
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

  // Получаем данные всех пользователей и записываем в локал стродж нашего зареганного пользователя
  async setUpUserDataInLocalStorage() {
    try {
      const response = await fetch(USERS_URL + "users", {
        method: "GET",
      });
      const data = await response.json();
      const userList = data;
      userList.forEach((user) => {
        if (!(user.login === localStorage.getItem("login"))) return;
        localStorage.setItem("name", user.name);
        localStorage.setItem("admin", user.admin);
        localStorage.setItem("password", user.password);
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Шаблон карточки админа
  adminUsersCreate(name, login, password) {
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
}

// TO do
// К бд пользователей добавить позицию likes: в ней будет то какие лайки дал пользователь (id карточки).
// Так же изменить функцию likes в ней должна содержаться проверка лайкнул ли этот пользователь карточку,
//так же изменить классы, вынести все константы в конструктор, добаить обновлятор этих контант
