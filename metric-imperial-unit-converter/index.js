/* 
RULES
1. Generate all conversions when the use presses "convert"
2. Round to 3 decimal places.
/*

/*


/*
CONVERSIONS
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthTxt = document.getElementById("length-txt")
const volumeTxt = document.getElementById("volume-txt")
const massTxt = document.getElementById("mass-txt")

convertBtn.addEventListener("click", function() {
    const baseNumber = inputEl.value
    const lengthMetersToFeet = (baseNumber * 3.281).toFixed(3)
    const lengthFeetToMeters = (baseNumber / 3.281).toFixed(3)
    const volumeLitersToGallons = (baseNumber * 0.264).toFixed(3)
    const volumeGallonsToLiters = (baseNumber / 0.264).toFixed(3)
    const massKilogramsToPounds = (baseNumber * 2.204).toFixed(3)
    const massPoundsToKilograms = (baseNumber / 2.204).toFixed(3)
    lengthTxt.innerText = 
        `${inputEl.value} meters = ${lengthMetersToFeet} feet | ${inputEl.value} feet = ${lengthFeetToMeters} meters`
    volumeTxt.innerText = 
        `${inputEl.value} liters = ${volumeLitersToGallons} gallons | ${inputEl.value} gallons = ${volumeGallonsToLiters} liters`
    massTxt.innerText = 
        `${inputEl.value} kilograms = ${massKilogramsToPounds} pounds | ${inputEl.value} pounds = ${massPoundsToKilograms} kilograms`
})