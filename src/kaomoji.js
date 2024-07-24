
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

function switchTab(e){

    tab_name = e.target.innerText;
    active_tab = e.target;
    all_tabs = document.getElementsByClassName("tabs");
    all_options = document.getElementsByClassName("options");
    active_option = document.getElementById(tab_name);
    console.log("tab_name", tab_name);
    console.log("active_option",active_option);
    console.log("all_options", all_options);
    console.log("all_tabs", all_tabs);
    console.log("active_tab", active_tab);

  
    disableTabs();
    hideOptions();
    active_tab.classList.add("text-purple-500");
    console.log(active_tab.classList);
    active_option.classList.remove("hidden");

    // active_tab = the button that was clicked
    // all_tabs = all buttons in the tabs class
    // all_options = all options (emojis) in the options class
    // active_option = the option that is currently active

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
