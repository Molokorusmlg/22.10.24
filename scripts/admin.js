const user = new User();
const card = new Card();

function reviewsCreate(userName, text, cardId) {
  return `  
      <h2 class="reviews__card_username">CardId: ${cardId}</h2>
      <h3 class="reviews__card_username">User name: ${userName}</h3>
            <p class="reviews__card_text">
            Text:
            ${text}
            </p>`;
}

async function getReviews() {
  try {
    const responseReviews = await fetch(REVIEWS_URL, {
      method: "GET",
    }).catch((error) => console.log(error));

    const dataReviews = await responseReviews.json();
    const reviewsToThisPage = dataReviews;

    const parentBlock = document.querySelector(".reviews");
    reviewsToThisPage.forEach((review) => {
      const card = document.createElement("div");
      card.setAttribute("onclick", `deleteReviews(${review.id})`);
      card.classList.add("reviews__card");
      cardIner = reviewsCreate(review.userName, review.text, review.cardListId);
      card.innerHTML = cardIner;
      parentBlock.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}

async function deleteReviews(index) {
  Loading.classList.add("active__loading");
  Loading.classList.remove("loading-complete");
  try {
    const response = await fetch(REVIEWS_URL + `/${index}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);

    console.log("Delete sucsess");
    cardBlock.innerHTML = "";
    usersBlock.innerHTML = "";
    reviewsBlock.innerHTML = "";
    await loadingPage();
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Deleted completed");
  }
}

async function loadingPage() {
  await getReviews();
  const isAdmin = localStorage.getItem("admin");
  if (isAdmin == "false") {
    const body = document.querySelector(".body");
    body.classList.add("lock");
    return;
  }

  await card.getCards();
  await user.getUsers();
  await card.adminCreateAllCards();
  await user.createUsers();
  Loading.classList.remove("active__loading");
  Loading.classList.add("loading-complete");
}

loadingPage();
