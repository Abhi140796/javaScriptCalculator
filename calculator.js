'use strict'

// operaters
// display

let inputText = document.querySelector("button");
let displayBox = document.querySelector("#inputDisplay");

// take input
function inputNumber(number){
    debugger;
    console.log("in")
    return displayBox.value = number;
}

//event listener
inputText.addEventListner("click",inputNumber(inputText.innerText));