let gameseq = [];
let userseq = [];
let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (started == false) {
    // console.log("game started");
    started = true;
    levelup();
  }
});

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 750);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 750);
}

function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randomIdx = Math.floor(Math.random() * 3);
  let randomcolor = btns[randomIdx];
  let randombtn = document.querySelector(`.${randomcolor}`);
  gameseq.push(randomcolor);
  // console.log(gameseq);
  btnflash(randombtn);
}

function checkans(idx) {
  // console.log("curr level :",level);
  if (gameseq[idx] == userseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game over! Your score was <b>${level}</b> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 1000);
    reset();
  }
}

function btnpress() {
  // console.log(this);
  let btn = this;
  userflash(btn);
  let usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];

  level = 0;
}
