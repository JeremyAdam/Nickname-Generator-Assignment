// Nickname Generator

// HTML Variables
let firstNameEl = document.getElementById("firstNameInput");
let lastNameEl = document.getElementById("lastNameInput");
let outputEl = document.getElementById("output");

// Event  Listeners
document.getElementById("oneNickname").addEventListener("click", generateNickname);
document.getElementById("allNicknames").addEventListener("click", generateAllNicknames)

// Nickname Array
let names = ["the Conquerer", "the Quick", "the Ridiculous", "the Biggest", "the Programmer", "the Smallest"];

// Generate One Nickname

function generateNickname () {  
    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value; 
    outputEl.innerHTML = `<div>${firstName} ${names[Math.floor(Math.random() * (names.length - 1) + 1)]} ${lastName}</div>`;
}

// Generate All Nicknames in the Array
function generateAllNicknames () {
    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value; 
    for (let i = 0; i < names.length; i++) {
        outputEl.innerHTML += `<div>${firstName} ${names[i]} ${lastName}</div>`;
    }
}