const user = new User();
const card = new Card();

async function loadingPage() {
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
