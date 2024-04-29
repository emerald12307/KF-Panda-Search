// KF Panda Search

// HTML variable
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
let charImgEl = document.getElementById("char-img");
//button event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Input
  let name = document.getElementById("char-in").value.toLowerCase();

  // If statement - Test the Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panada") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImgEl.src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was hardcore!";
    charImgEl.src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear The Bug!";
    charImgEl.src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "We cannot give up hope.";
    charImgEl.src = "img/monkey.png";
  } else if (name === "viper") {
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I don't need to bite to fight!";
    charImgEl.src = "img/viper.png";
  } else if (name === "crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "Wings of Justice!";
    charImgEl.src = "img/crane.png";
  } else if (name === "boss wolf") {
    charNameEl.innerHTML = "Boss Wolf";
    charQuoteEl.innerHTML = "If you mess with the wolf, you get the fangs!";
    charImgEl.src = "img/boss-wolf.png";
  } else if (name === "croc") {
    charNameEl.innerHTML = "Croc";
    charQuoteEl.innerHTML = "Vengeance is served!";
    charImgEl.src = "img/croc.png";
  } else if (name === "kai") {
    charNameEl.innerHTML = "Kai";
    charQuoteEl.innerHTML = "SILENCE!";
    charImgEl.src = "img/kai.png";
  } else if (name === "mr ping") {
    charNameEl.innerHTML = "Mr. Ping";
    charQuoteEl.innerHTML =
      "To make something special, you just have to believe it's special.";
    charImgEl.src = "img/mr-ping.png";
  } else if (name === "oogway") {
    charNameEl.innerHTML = "Oogway";
    charQuoteEl.innerHTML = "There are no accidents.";
    charImgEl.src = "img/oogway.png";
  } else if (name === "shen") {
    charNameEl.innerHTML = "Shen";
    charQuoteEl.innerHTML = "Happiness must be taken and I will take mine.";
    charImgEl.src = "img/shen.png";
  } else if (name === "shifu") {
    charNameEl.innerHTML = "Shifu";
    charQuoteEl.innerHTML = "If you are truly at peace, you can do anything.";
    charImgEl.src = "img/shifu.png";
  } else if (name === "soothsayer") {
    charNameEl.innerHTML = "Soothsayer";
    charQuoteEl.innerHTML = "The most important time is now.";
    charImgEl.src = "img/soothsayer.png";
  } else if (name === "storming ox") {
    charNameEl.innerHTML = "Storming Ox";
    charQuoteEl.innerHTML = "You insolent fool!";
    charImgEl.src = "img/storming-ox.png";
  } else if (name === "tai lung") {
    charNameEl.innerHTML = "Tai Lung";
    charQuoteEl.innerHTML = "Finally, a worthy opponent!";
    charImgEl.src = "img/tai-lung.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQuoteEl.innerHTML = "---------";
    charImgEl.src = "img/question-mark.png";
  }
}

//Theme
//Html Elements
let bodyEl = document.getElementById("body");
document.getElementById("theme-btn").addEventListener("click", themeBtnClicked);

function themeBtnClicked() {
  //Input
  let theme = document.getElementById("theme-in").value.toLowerCase();

  //If statement
  if (theme === "light" || theme === "white") {
    bodyEl.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    bodyEl.style.color = "black";
  } else if (theme === "black" || theme === "dark") {
    bodyEl.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    bodyEl.style.color = "white";
  }
}
