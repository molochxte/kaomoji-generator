
function copyToClipboard() {
    var copyText = document.getElementById("kaomoji_display");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    navigator.clipboard.writeText(copyText.value);

}

function clearKaomoji() {
    document.getElementById("kaomoji_display").value = "";
    kaomoji = ["","","","","","",""];
}

window.onload = function() {
    createEyeButtons();
    createMouthButtons();
    createCheekButtons();
    createArmButtons();

};


var eyes = [" ","*", "o", "-", "^", "°", "♥", "☉", "✧", "="];
var mouths = [" ","-", "_", "o", "O", "u", "w", "v", "3",];
var cheeks = [" ","()", "[]", "{}"];
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
    var buttons = document.getElementById("Eyes");
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

function createMouthButtons() {
    console.log("Creating buttons...");
    var buttons = document.getElementById("Mouths");
    for (var i = 0; i < mouths.length; i++) {
        var button = document.createElement("button");
        button.classList.add("border-2", "rounded-lg", "p-2", "m-2");
        button.innerHTML = mouths[i];
        button.onclick = function() {
            kaomoji[3] = this.innerHTML;
            document.getElementById("kaomoji_display").value = kaomoji.join("");
        };
        buttons.appendChild(button);
    }
}

function createCheekButtons() {
    console.log("Creating buttons...");
    var buttons = document.getElementById("Cheeks");
    for (var i = 0; i < cheeks.length; i++) {
        var button = document.createElement("button");
        button.classList.add("border-2", "rounded-lg", "p-2", "m-2");
        button.innerHTML = cheeks[i];
        button.onclick = function() {
            kaomoji[1] = this.innerHTML[0];
            kaomoji[5] = this.innerHTML[1];
            document.getElementById("kaomoji_display").value = kaomoji.join("");
        };
        buttons.appendChild(button);
    }
}

function createArmButtons() {
    console.log("Creating buttons...");
    var buttons = document.getElementById("Arms");
    for (var i = 0; i < arms.length; i++) {
        var button = document.createElement("button");
        button.classList.add("border-2", "rounded-lg", "p-2", "m-2");
        button.innerHTML = arms[i];
        button.onclick = function() {
            kaomoji[0] = this.innerHTML;
            kaomoji[6] = this.innerHTML;
            document.getElementById("kaomoji_display").value = kaomoji.join("");
        };
        buttons.appendChild(button);
    }
}

function switchTab(e){
    active_tab = e.target;
    active_option = document.getElementById(e.target.innerText);

    disableTabs();
    hideOptions();

    active_tab.classList.add("text-purple-500");
    console.log(active_tab.classList);
    active_option.classList.remove("hidden");
}

function disableTabs(){
    all_tabs = document.getElementsByClassName("tabs");
    for (var i = 0; i < all_tabs.length; i++) {
        all_tabs[i].classList.remove("text-purple-500");
    }
}

function hideOptions(){
    all_options = document.getElementsByClassName("options");
    for (var i = 0; i < all_options.length; i++) {
        all_options[i].classList.add("hidden");
    }
}
