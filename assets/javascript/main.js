// List Recommend Variable
const topDays = document.getElementById("topDaysLi");
const topWeeks = document.getElementById("topWeeksLi");
const topMonths = document.getElementById("topMonthsLi");
const listBtnKdrama = document.getElementById("listBtnKdrama");
const listBtnJdrama = document.getElementById("listBtnJdrama");
const listBtnMovies = document.getElementById("listBtnMovies");

const divMobile = {
  kdrama: document.getElementById("listKdrama"),
  jdrama: document.getElementById("listJdrama"),
  movies: document.getElementById("listMovies"),
};

const listOne = {
  image: document.getElementById("img1"),
  contentText: document.getElementById("txt1"),
};
const listTwo = {
  image: document.getElementById("img2"),
  contentText: document.getElementById("txt2"),
};
const listThree = {
  image: document.getElementById("img3"),
  contentText: document.getElementById("txt3"),
};
const listFour = {
  image: document.getElementById("img4"),
  contentText: document.getElementById("txt4"),
};
const listFive = {
  image: document.getElementById("img5"),
  contentText: document.getElementById("txt5"),
};

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav #menuNav");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

function listRecommend(x) {
  if (x == 1) {
    topDays.style.backgroundColor = "#bb2525";
    topDays.style.borderRadius = "10px";
    topDays.style.color = "white";

    topWeeks.style.backgroundColor = "inherit";
    topWeeks.style.borderRadius = "none";
    topWeeks.style.color = "inherit";
    topMonths.style.backgroundColor = "inherit";
    topMonths.style.borderRadius = "none";
    topMonths.style.color = "inherit";

    // DOM Content Top Days
    listOne.image.src = "/assets/image/CheerUp.jpg";
    listOne.contentText.innerText = "Cheer Up (2022)";
    listTwo.image.src = "/assets/image/RebornRich.jpg";
    listTwo.contentText.innerText = "Reborn Rich (2022)";
    listThree.image.src = "/assets/image/betweenUs.jpg";
    listThree.contentText.innerText = "Between Us (2022)";
    listFour.image.src = "/assets/image/curtainCall.jpg";
    listFour.contentText.innerText = "Curtain Call (2022)";
    listFive.image.src = "/assets/image/RM.jpg";
    listFive.contentText.innerText = "Running Man (2010)";
  } else if (x == 2) {
    topWeeks.style.backgroundColor = "#bb2525";
    topWeeks.style.borderRadius = "10px";
    topWeeks.style.color = "white";

    topDays.style.backgroundColor = "#ddd";
    topDays.style.borderRadius = "none";
    topDays.style.color = "black";
    topMonths.style.backgroundColor = "inherit";
    topMonths.style.borderRadius = "none";
    topMonths.style.color = "inherit";

    // DOM Content Top Weeks
    listOne.image.src = "/assets/image/RebornRich.jpg";
    listOne.contentText.innerText = "Reborn Rich (2022)";
    listTwo.image.src = "/assets/image/TheLoveinYourEyes.jpg";
    listTwo.contentText.innerText = "The Love in Your Eyes";
    listThree.image.src = "/assets/image/CheerUp.jpg";
    listThree.contentText.innerText = "Cheer Up (2022)";
    listFour.image.src = "/assets/image/RM.jpg";
    listFour.contentText.innerText = "Running Man (2010)";
    listFive.image.src = "/assets/image/betweenUs.jpg";
    listFive.contentText.innerText = "Between Us (2022)";
  } else if (x == 3) {
    topMonths.style.backgroundColor = "#bb2525";
    topMonths.style.borderRadius = "10px";
    topMonths.style.color = "white";

    topWeeks.style.backgroundColor = "inherit";
    topWeeks.style.borderRadius = "none";
    topWeeks.style.color = "inherit";
    topDays.style.backgroundColor = "#ddd";
    topDays.style.borderRadius = "none";
    topDays.style.color = "black";

    // DOM Content top years
    listOne.image.src = "/assets/image/RebornRich.jpg";
    listOne.contentText.innerText = "Reborn Rich (2022)";
    listTwo.image.src = "/assets/image/loveinContract.jpg";
    listTwo.contentText.innerText = "Love in Contract";
    listThree.image.src = "/assets/image/weakHeroClass.jpg";
    listThree.contentText.innerText = "Weak Hero Class 1";
    listFour.image.src = "/assets/image/MayiHelpYou.jpg";
    listFour.contentText.innerText = "May I Help You";
    listFive.image.src = "/assets/image/TheLoveinYourEyes.jpg";
    listFive.contentText.innerText = "The Love in Your Eyes";
  }
}

function listMobile(y) {
  if (y == 1) {
    listBtnKdrama.style.backgroundColor = "#bb2525";
    listBtnKdrama.style.borderRadius = "10px";
    listBtnKdrama.style.color = "white";

    listBtnJdrama.style.backgroundColor = "inherit";
    listBtnJdrama.style.borderRadius = "none";
    listBtnJdrama.style.color = "inherit";
    listBtnMovies.style.backgroundColor = "inherit";
    listBtnMovies.style.borderRadius = "none";
    listBtnMovies.style.color = "inherit";

    // DOM Kdrama
    divMobile.kdrama.style.display = "block";
    divMobile.jdrama.style.display = "none";
    divMobile.movies.style.display = "none";
  } else if (y == 2) {
    listBtnJdrama.style.backgroundColor = "#bb2525";
    listBtnJdrama.style.borderRadius = "10px";
    listBtnJdrama.style.color = "white";

    listBtnKdrama.style.backgroundColor = "#ddd";
    listBtnKdrama.style.borderRadius = "none";
    listBtnKdrama.style.color = "black";
    listBtnMovies.style.backgroundColor = "inherit";
    listBtnMovies.style.borderRadius = "none";
    listBtnMovies.style.color = "inherit";

    // DOM Jdrama
    divMobile.kdrama.style.display = "none";
    divMobile.jdrama.style.display = "block";
    divMobile.movies.style.display = "none";
  } else if (y == 3) {
    listBtnMovies.style.backgroundColor = "#bb2525";
    listBtnMovies.style.borderRadius = "10px";
    listBtnMovies.style.color = "white";

    listBtnKdrama.style.backgroundColor = "#ddd";
    listBtnKdrama.style.borderRadius = "none";
    listBtnKdrama.style.color = "black";
    listBtnJdrama.style.backgroundColor = "inherit";
    listBtnJdrama.style.borderRadius = "none";
    listBtnJdrama.style.color = "inherit";

    // DOM Movies
    divMobile.kdrama.style.display = "none";
    divMobile.jdrama.style.display = "none";
    divMobile.movies.style.display = "block";
  }
}
