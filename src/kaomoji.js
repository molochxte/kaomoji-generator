
function copyToClipboard() {
    var copyText = document.getElementById("kaomoji_display");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    navigator.clipboard.writeText(copyText.value);

}

function clearKaomoji() {
    document.getElementById("kaomoji_display").value = "";
}

window.onload = function() {
    createEyeButtons();
    createMouthButtons();

};


var eyes = [" ","*", "o", "-", "^", "°", "♥", "☉", "✧", "="];
var mouth = [" ","-", "_", "o", "O", "u", "w", "v", "3",];
var cheeks = [" ","(", ")", "[", "]", "{", "}", "<", ">"];
var arms = [" ","\\", "/", "┌", "┐", "└", "┘", "┌", "┐"];

// kaomoji array -> [arm, cheek, eye, mouth, eye, cheek, arm]
var kaomoji = ["","","","","","",""];

/* 

0 -> arm
1 -> cheek
2 -> eye
3 -> mouth
4 -> eye
5 -> cheek
6 -> arm

*/ 
// create 3x3 buttons in a div with id "buttons" that will change the text in the text area of id="kaomoji" to the corresponding kaomoji
function createEyeButtons() {
    console.log("Creating buttons...");
    var buttons = document.getElementById("eye_menu");
    for (var i = 0; i < eyes.length; i++) {
        var button = document.createElement("button");
        button.classList.add("border-2",  "rounded-lg", "p-2", "m-2");
        button.innerHTML = eyes[i];
        button.onclick = function() {
            kaomoji[2] = this.innerHTML;
            kaomoji[4] = this.innerHTML;
            document.getElementById("kaomoji_display").value = kaomoji.join("");
        };
        buttons.appendChild(button);
    }
}

function showEyeMenu() {
    var eye_menu = document.getElementById("eye_menu");
    eye_menu.classList.toggle("hidden");
    var tab_eye = document.getElementById("tab_eye");
    tab_eye.classList.add("border-purple-400")
    disableMouthMenu();
}

function showMouthMenu() {
    var mouth_menu = document.getElementById("mouth_menu");
    mouth_menu.classList.toggle("hidden");
    var tab_mouth = document.getElementById("tab_mouth");
    tab_mouth.classList.add("border-purple-400")
    disableEyeMenu();
}

function disableEyeMenu() {
    var eye_menu = document.getElementById("eye_menu");
    eye_menu.classList.add("hidden");
    var tab_eye = document.getElementById("tab_eye");
    tab_eye.classList.remove("border-purple-400")
}
function disableMouthMenu() {
    var mouth_menu = document.getElementById("mouth_menu");
    mouth_menu.classList.add("hidden");
    var tab_mouth = document.getElementById("tab_mouth");
    tab_mouth.classList.remove("border-purple-400")
}
function createMouthButtons() {
    console.log("Creating buttons...");
    var buttons = document.getElementById("mouth_menu");
    for (var i = 0; i < mouth.length; i++) {
        var button = document.createElement("button");
        button.classList.add("border-2", "rounded-lg", "p-2", "m-2");
        button.innerHTML = mouth[i];
        button.onclick = function() {
            kaomoji[3] = this.innerHTML;
            document.getElementById("kaomoji_display").value = kaomoji.join("");
        };
        buttons.appendChild(button);
    }
}

