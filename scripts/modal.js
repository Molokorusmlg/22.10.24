class Modal {
  setShowBurgerMenu() {
    const burger = document.querySelector(".burger__meny");
    const states = {
      base: "base",
      hidden: "bhide",
      visible: "bvis",
    };

    if (burger.classList.contains(states.base)) {
      burger.classList.replace(states.base, states.visible);
      return;
    }

    const isHidden = burger.classList.contains(states.hidden);
    burger.classList.replace(
      isHidden ? states.hidden : states.visible,
      isHidden ? states.visible : states.hidden
    );
  }

  modalMeny() {
    const elements = {
      modal: {
        element: document.querySelector(".modal"),
        hideClass: "bhide",
        showClass: "bvis",
        baseClass: "base",
      },
      form: {
        element: document.querySelector(".modal__form"),
        hideClass: "modal_hide",
        showClass: "modal_open",
        baseClass: "modal_base",
      },
    };

    const { modal, form } = elements;

    if (modal.element.classList.contains(modal.baseClass)) {
      modal.element.classList.replace(modal.baseClass, modal.showClass);
      form.element.classList.replace(form.baseClass, form.showClass);
      return;
    }

    const isHidden = modal.element.classList.contains(modal.hideClass);
    [modal, form].forEach((item) => {
      item.element.classList.toggle(item.hideClass, !isHidden);
      item.element.classList.toggle(item.showClass, isHidden);
    });
  }

  modalClose() {
    const elements = {
      modal: {
        element: document.querySelector(".modal"),
        hideClass: "bhide",
        showClass: "bvis",
      },
      form: {
        element: document.querySelector(".modal__form"),
        hideClass: "modal_hide",
        showClass: "modal_open",
      },
    };

    Object.values(elements).forEach(({ element, hideClass, showClass }) => {
      element.classList.add(hideClass);
      element.classList.remove(showClass);
    });
  }
}
