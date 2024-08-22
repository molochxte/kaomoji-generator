const eyes = [
  " ",
  "*",
  "☆",
  "o",
  "-",
  "^",
  "°",
  "♥",
  "☉",
  "□",
  "✧",
  "=",
  "˘",
  "︶",
  "≖",
  "⌒",
  "◕",
  "•",
  "¬",
  "ᓀ",
  "ಠ",
  "✧",
  "Φ",
  " ͡°",
  "×",
];
const mouths = [
  " ",
  "-",
  "_",
  "o",
  "O",
  "u",
  "w",
  "v",
  "3",
  "︿",
  "‸",
  "~",
  "ヮ​",
  "ᴥ",
  "▽",
  "Д",
  "﹏",
  "ᆺ",
  " ͜ʖ",
];
const cheeks = [" ", "()", "[]", "{}", "ʕʔ"];
const PairsArms = ["ᕕ ᕗ", "\\ ノ​", "╮ ╭", "⊂ ⊃", "└ ┘", "┌ ┐"];
const LeftArms = [" ", "\\", "ヽ", "ლ", "ᕕ", "⊂"];
const RightArms = ["/", "ノ​", "ᕗ", "╯", "つ​", "シ​"];
const MouthEyes = ["ᐛ"];
var kaomoji = [8];

function copyToClipboard() {
  var copyText = document.getElementById("kaomoji_display");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  navigator.clipboard.writeText(copyText.value);
}

function clearKaomoji() {
  deactivateButtons();
  document.getElementById("kaomoji_display").value = "";
  kaomoji = ["", "", "", "", "", "", ""];
}

window.onload = function () {
  clearKaomoji();
  createEyeButtons();
  createMouthButtons();
  createCheekButtons();
  createArmButtons();
  randomizeKaomoji();
};

/* 

0 -> arm
1 -> cheek
2 -> arm
3 -> eye
4 -> mouth
5 -> eye
6 -> cheek
7 -> arm

*/
function createEyeButtons() {
  var buttons = document.getElementById("Eyes");
  for (var i = 0; i < eyes.length; i++) {
    var button = document.createElement("button");
    button.classList.add("border-2", "rounded-lg", "p-2", "m-2");
    button.innerHTML = eyes[i];
    button.onclick = function () {
      activateButton(this);
      if (kaomoji[4] == "ᐛ") {
        kaomoji[4] = "";
      }
      kaomoji[3] = this.innerHTML;
      kaomoji[5] = this.innerHTML;
      document.getElementById("kaomoji_display").value = kaomoji.join("");
    };
    buttons.appendChild(button);
  }
}

function createMouthButtons() {
  var buttons = document.getElementById("Mouths");
  for (var i = 0; i < mouths.length; i++) {
    var button = document.createElement("button");
    button.classList.add("border-2", "rounded-lg", "p-2", "m-2");
    button.innerHTML = mouths[i];
    button.onclick = function () {
      activateButton(this);
      kaomoji[4] = this.innerHTML;
      document.getElementById("kaomoji_display").value = kaomoji.join("");
    };
    buttons.appendChild(button);
  }

  for (var i = 0; i < MouthEyes.length; i++) {
    var button = document.createElement("button");
    button.classList.add("border-2", "rounded-lg", "p-2", "m-2");
    button.innerHTML = MouthEyes[i];
    button.onclick = function () {
      activateButton(this);
      kaomoji[3] = "";
      kaomoji[5] = "";
      kaomoji[4] = this.innerHTML;
      document.getElementById("kaomoji_display").value = kaomoji.join("");
    };
    buttons.appendChild(button);
  }
}

function createCheekButtons() {
  var buttons = document.getElementById("Cheeks");
  for (var i = 0; i < cheeks.length; i++) {
    var button = document.createElement("button");
    button.classList.add("border-2", "rounded-lg", "p-2", "m-2");
    button.innerHTML = cheeks[i];
    button.onclick = function () {
      activateButton(this);
      kaomoji[1] = this.innerHTML[0];
      kaomoji[7] = this.innerHTML[1];
      document.getElementById("kaomoji_display").value = kaomoji.join("");
    };
    buttons.appendChild(button);
  }
}

function createArmButtons() {
  var buttons = document.getElementById("Arms");
  // arms right
  for (var i = 0; i < RightArms.length; i++) {
    var button = document.createElement("button");
    button.classList.add("border-2", "rounded-lg", "p-2", "m-2");
    button.innerHTML = RightArms[i];
    button.onclick = function () {
      activateButton(this);
      resetArms();
      kaomoji[2] = this.innerHTML;
      kaomoji[8] = this.innerHTML;
      document.getElementById("kaomoji_display").value = kaomoji.join("");
    };
    buttons.appendChild(button);
  }
  // arms left
  for (var i = 0; i < LeftArms.length; i++) {
    var button = document.createElement("button");
    button.classList.add("border-2", "rounded-lg", "p-2", "m-2");
    button.innerHTML = LeftArms[i];
    button.onclick = function () {
      activateButton(this);
      resetArms();
      kaomoji[0] = this.innerHTML;
      kaomoji[6] = this.innerHTML;
      document.getElementById("kaomoji_display").value = kaomoji.join("");
    };
    buttons.appendChild(button);
  }

  // arm pairs
  for (var i = 0; i < PairsArms.length; i++) {
    var button = document.createElement("button");
    button.classList.add("border-2", "rounded-lg", "p-2", "m-2");
    button.innerHTML = PairsArms[i];
    button.onclick = function () {
      activateButton(this);
      resetArms();
      kaomoji[0] = this.innerHTML[0];
      kaomoji[8] = this.innerHTML[2];
      document.getElementById("kaomoji_display").value = kaomoji.join("");
    };
    buttons.appendChild(button);
  }
}

function resetArms() {
  kaomoji[2] = " ";
  kaomoji[8] = " ";
  kaomoji[0] = " ";
  kaomoji[6] = " ";
}

function activateButton(e) {
  // determine what tab is active
  var active_tab =
    document.getElementsByClassName("border-purple-500")[0].innerText;
  buttons_in_tab = document
    .getElementById(active_tab)
    .getElementsByTagName("button");
  for (var i = 0; i < buttons_in_tab.length; i++) {
    buttons_in_tab[i].classList.remove("border-purple-500");
    e.classList.add("border-purple-500");
  }
}

function deactivateButtons() {
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    if (!buttons[i].classList.contains("tabs")) {
      buttons[i].classList.remove("border-purple-500");
    }
  }
}

function switchTab(e) {
  active_tab = e.target;
  active_option = document.getElementById(e.target.innerText);

  disableTabs();
  hideOptions();

  active_tab.classList.add("border-purple-500");
  active_option.classList.remove("hidden");
}

function disableTabs() {
  all_tabs = document.getElementsByClassName("tabs");
  for (var i = 0; i < all_tabs.length; i++) {
    all_tabs[i].classList.remove("border-purple-500");
  }
}

function hideOptions() {
  all_options = document.getElementsByClassName("options");
  for (var i = 0; i < all_options.length; i++) {
    all_options[i].classList.add("hidden");
  }
}

function randomizeKaomoji() {
  clearKaomoji();
  // eyes and cheeks comes in pairs
  random_eyes = eyes[Math.floor(Math.random() * (eyes.length - 1)) + 1];
  kaomoji[3] = random_eyes;
  kaomoji[5] = random_eyes;

  random_cheeks = cheeks[Math.floor(Math.random() * (cheeks.length - 1)) + 1];
  kaomoji[1] = random_cheeks[0];
  kaomoji[7] = random_cheeks[1];

  random_mouths = mouths[Math.floor(Math.random() * (mouths.length - 1)) + 1];
  kaomoji[4] = random_mouths;
  if (random_mouths == "ᐛ") {
    kaomoji[3] = "";
    kaomoji[5] = "";
  }

  // pick randomly between left or right arms or both
  random_arm_orientation = Math.floor(Math.random() * 3);
  switch (random_arm_orientation) {
    case 0:
      arm = LeftArms[Math.floor(Math.random() * LeftArms.length)];
      kaomoji[0] = arm;
      kaomoji[6] = arm;
      break;
    case 1:
      arm = RightArms[Math.floor(Math.random() * RightArms.length)];
      kaomoji[2] = arm;
      kaomoji[8] = arm;
      break;
    case 2:
      arm = PairsArms[Math.floor(Math.random() * PairsArms.length)];
      kaomoji[0] = arm[0];
      kaomoji[8] = arm[2];
      break;
  }
  document.getElementById("kaomoji_display").value = kaomoji.join("");
}

// TO DO
function saveKaomoji() {
  var kaomoji_text = document.getElementById("kaomoji_display").value;
  var kaomoji_list = document.getElementById("saved_kaomoji");
  var kaomoji = document.createElement("li");
  kaomoji.innerHTML = kaomoji_text;
  kaomoji_list.appendChild(kaomoji);
}
