function buttonClick(state) {
  if (state == 1) {
    buttonReg.classList.add("button-active");
    buttonIn.classList.remove("button-active");
    formReg.classList.remove("form-hide");
    formIn.classList.add("form-hide");
  } else {
    buttonReg.classList.remove("button-active");
    buttonIn.classList.add("button-active");
    formIn.classList.remove("form-hide");
    formReg.classList.add("form-hide");
  }
}
