"use strict";

const displayInput = document.getElementById("display-input");
const displayOutput = document.getElementById("display-output");

const clear = document.getElementById("clear");
const deleteNum = document.getElementById("delete");

function displayNum(input) {
	displayInput.textContent += input;
}
