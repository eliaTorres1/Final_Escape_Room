var k = 0;
var d = 0;
var c = 0;
var s = 0;
var w = 0;
var t = 0;
function clue() {
  showModal2();
  t = t + 1;
  if (t < 2) {
    startTimer(60);
    k = 0;
    d = 0;
    c = 0;
  }
  const boxes = document.querySelectorAll(".begone");
  boxes.forEach((begone) => {
    begone.classList.remove("begone");
  });
}

function submit() {
  if (k == 2 && d == 1 && c == 3) {
    w++;
    win();
    console.log(w);
    document.getElementById("treasure").removeAttribute("onclick", "submit()");
    document.getElementById("treasure").setAttribute("onclick", "submit2()");
  } else {
    s++;
    fail();
  }
}

function submit2() {
  if (k == 3 && d == 2 && c == 7) {
    w++;
    win();
    document.getElementById("treasure").removeAttribute("onclick", "submit2()");
    document.getElementById("treasure").setAttribute("onclick", "submit3()");
  } else {
    s++;
    fail();
  }
}

function submit3() {
  if (k == 4 && d == 5 && c == 9) {
    w++;
    win();
  } else {
    s++;
    fail();
  }
}

function win() {
  if (w == 3) {
    showModal();
    document.getElementById("winner").play();
    //modal code
  } else if (w == 1) {
    document.getElementById("clue_six").src = "images/crown_clue.png";
    document.getElementById("advance").play();
    document.getElementById("level_2").classList.remove("translucent");
    blur();
  } else if (w == 2) {
    document.getElementById("advance").play();
    document.getElementById("clue_one").src = "images/crown_clue.png";
    document.getElementById("clue_two").src = "images/crown_clue.png";
    document.getElementById("clue_three").src = "images/king.png";
    document.getElementById("clue_four").src = "images/red_dragon.png";
    document.getElementById("clue_five").src = "images/red_dragon.png";
    document.getElementById("clue_six").src = "images/red_dragon.png";
    document.getElementById("level_3").classList.remove("translucent");
    blur();
  }
}

function fail() {
  document.getElementById("clicker").play();
  opaque();
  shake();

  if (s == 1) {
    document.getElementById("strike1").classList.remove("begone2");
    swap();
  } else if (s == 2) {
    document.getElementById("strike2").classList.remove("begone2");
    swap();
  } else if (s == 3) {
    failure();
  }
}

function failure() {
  document.getElementById("failure").play();
  document.getElementById("strike3").classList.remove("begone2");
  document.getElementById("clue_one").src = "images/king.png";
  document.getElementById("clue_two").src = "images/red_dragon.png";
  document.getElementById("clue_three").src = "images/crown_clue.png";
  document.getElementById("clue_four").src = "images/crown_clue.png";
  document.getElementById("clue_five").src = "images/crown_clue.png";
  document.getElementById("clue_six").src = "images/king.png";
  c = 0;
  d = 0;
  k = 0;
  w = 0;
  s = 0;
  document.getElementById("strike1").classList.add("begone2");
  document.getElementById("strike2").classList.add("begone2");
  document.getElementById("strike3").classList.add("begone2");
  document.getElementById("bod").classList.add("shake");
  setTimeout(function () {
    document.getElementById("bod").classList.remove("shake");
  }, 1000);
}
function opaque() {
  document.getElementById("slot_one").classList.add("translucent");
  document.getElementById("slot_two").classList.add("translucent");
  document.getElementById("slot_three").classList.add("translucent");
  setTimeout(function () {
    document.getElementById("slot_one").classList.remove("translucent");
  }, 1000);
  setTimeout(function () {
    document.getElementById("slot_two").classList.remove("translucent");
  }, 1000);
  setTimeout(function () {
    document.getElementById("slot_three").classList.remove("translucent");
  }, 1000);
}

function shake() {
  document.getElementById("slot_one").classList.add("shake");
  document.getElementById("slot_two").classList.add("shake");
  document.getElementById("slot_three").classList.add("shake");
  setTimeout(function () {
    document.getElementById("slot_one").classList.remove("shake");
  }, 1000);
  setTimeout(function () {
    document.getElementById("slot_two").classList.remove("shake");
  }, 1000);
  setTimeout(function () {
    document.getElementById("slot_three").classList.remove("shake");
  }, 1000);
}

function blur() {
  let clue = [
    "clue_one",
    "clue_two",
    "clue_three",
    "clue_four",
    "clue_five",
    "clue_six"
  ];
  for (let x = 0; x <= 5; x++) {
    document.getElementById(clue[x]).classList.add("blur");
    document.getElementById(clue[x]).classList.add("shake");
    setTimeout(function () {
      document.getElementById(clue[x]).classList.remove("blur");
      document.getElementById(clue[x]).classList.remove("shake");
    }, 1000);
  }
}

function slot1() {
  c++;
  document.getElementById("noise").play();
}

function slot2() {
  d++;
  document.getElementById("noise").play();
}
function slot3() {
  k++;
  document.getElementById("noise").play();
}

function swap() {
  if (document.getElementById("clue_six").src.match("images/king.png")) {
    c = 0;
    d = 0;
    k = 0;
  } else if (
    document.getElementById("clue_six").src.match("images/crown_clue.png")
  ) {
    c = 3;
    d = 1;
    k = 2;
  } else if (
    document.getElementById("clue_six").src.match("images/red_dragon.png")
  ) {
    c = 7;
    d = 2;
    k = 3;
  }
}
function hideModal() {
  document.getElementById("clueModal").style.display = "none";
}
function showModal() {
  document.getElementById("keyModal").style.display = "flex";
}
function showModal2() {
  document.getElementById("clueModal").style.display = "flex";
}

function nextPage() {
  window.location.href = "https://m3l47y.csb.app/";
}
var myTimer = document.getElementById("time");

function startTimer(seconds) {
  console.log(seconds);
  myTimer.innerHTML = seconds;

  if (seconds > 0) {
    seconds = seconds - 1;
    myTimer.style.color = "red";
    setTimeout(startTimer, 1000, seconds);
  } else {
    myTimer.style.color = "red";
    window.location.href = "https://pbx7hr.csb.app/";
  }
}
