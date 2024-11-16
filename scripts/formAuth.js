const FORM_STATES = {
  REGISTER: 1,
  LOGIN: 2,
};

function buttonClick(state) {
  const elements = {
    buttons: {
      register: buttonReg,
      login: buttonIn,
    },
    forms: {
      register: formReg,
      login: formIn,
    },
  };

  const isRegisterState = state === FORM_STATES.REGISTER;

  elements.buttons.register.classList.toggle("button-active", isRegisterState);
  elements.buttons.login.classList.toggle("button-active", !isRegisterState);
  elements.forms.register.classList.toggle("form-hide", !isRegisterState);
  elements.forms.login.classList.toggle("form-hide", isRegisterState);
}

async function signInUser() {
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
      if (user.password == passwordValue && user.login == loginValue) {
        localStorage.setItem("login", loginValue);
        window.location.href =
          "http://127.0.0.1:5500/pages/mainpage/mainpage.html";
      }
    });
    if (matches == 0) {
      console.log("Неверные данные");
    }
  } catch (error) {
    console.log(error);
  }
}

async function postUser() {
  try {
    const loginValue = document.querySelector(".login__registration").value;
    const passwordValue = document.querySelector(
      ".password__registration"
    ).value;
    const nameValue = document.querySelector(".name__registration").value;

    const response = await fetch(`${USERS_URL}users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        login: loginValue,
        password: passwordValue,
        name: nameValue,
        admin: false,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("login", loginValue);
      window.location.href =
        "http://127.0.0.1:5500/pages/mainpage/mainpage.html";
    }
    return data;
  } catch (error) {
    console.log(`Ошибка типа: ${error}`);
  }
}
