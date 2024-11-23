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

  const isRegister = state === FORM_STATES.REGISTER;

  elements.buttons.register.classList.toggle("button-active", isRegister);
  elements.buttons.login.classList.toggle("button-active", !isRegister);
  elements.forms.register.classList.toggle("form-hide", !isRegister);
  elements.forms.login.classList.toggle("form-hide", isRegister);
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

function checkForEnterRegistration(e) {
  if (e.keyCode === 13) {
    document.querySelector(".register__box-submit").click();
  }
}

function checkForEnterSignIn(e) {
  if (e.keyCode === 13) {
    document.querySelector(".signin__box-submit").click();
  }
}

async function postUser() {
  try {
    const loginValue = document.querySelector(".login__registration").value;
    const passwordValue = document.querySelector(
      ".password__registration"
    ).value;
    const nameValue = document.querySelector(".name__registration").value;

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

    const data = await response.json();
    if (!response.ok) return;
    localStorage.setItem("login", loginValue);
    window.location.href = BASE_URL + "../mainpage/mainpage.html";
  } catch (error) {
    console.log(`Ошибка типа: ${error}`);
  }
}
