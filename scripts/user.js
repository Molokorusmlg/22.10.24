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
      let matches = 0;
      users.forEach((user) => {
        if (user.password === passwordValue && user.login === loginValue) {
          localStorage.setItem("login", loginValue);
          matches = 1;
          window.location.href = "../mainpage/mainpage.html";
        }
      });
      if (matches === 0) {
        errorBlock.classList.add("animation");
        setTimeout(function () {
          errorBlock.classList.remove("animation");
        }, 3000);
      }
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

  // Новый заказ у пользователя
  async newOrder() {
    userLogin = localStorage.getItem("login");
    userPassword = localStorage.getItem("password");

    inputLogin = document.querySelector(".modal__input_login").value;
    inputPassword = document.querySelector(".modal__input_password").value;

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
      localStorage.setItem("orders", newOrders);
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
