class Slider {
  // слйадер отображение, global
  showCardGlobal(index) {
    number_card = document.querySelector(".red-line__marshruts-circle");
    cards = document.querySelectorAll(".red-line__marshruts__card-box_card");
    cardName = document.querySelector(".red-line__marshruts-text");

    cards[curentCardIndex].classList.replace("active", "nonActive");
    cards[index].classList.replace("nonActive", "active");

    cardName.innerHTML = `<p class="red-line__marshruts-text">${cityList[index].Title}</p>`;
    curentCardIndex = index;
    number_card.innerHTML = `<p>${index + 1}</p>`;
  }
  // слйадер отображение, досстопремечательности
  showCardAttraction(index) {
    cards = document.querySelectorAll(".page__card_img-photo");

    cards[curentCardIndex].classList.replace("active", "nonActive");
    cards[index].classList.replace("nonActive", "active");

    curentCardIndex = index;
  }

  // след.картинка
  goNextImg() {
    cards = document.querySelectorAll(".page__card_img-photo");
    let index = curentCardIndex - 1;
    if (index < 0) {
      index = cards.length - 1;
    }
    this.showCardAttraction(index);
  }

  // пред.картинка
  goPreviosImg() {
    cards = document.querySelectorAll(".page__card_img-photo");
    let index = curentCardIndex + 1;
    if (index >= cards.length) {
      index = 0;
    }
    this.showCardAttraction(index);
  }
}
