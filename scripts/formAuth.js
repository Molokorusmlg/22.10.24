const user = new User();

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
