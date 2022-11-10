console.log("Hello World!\n==========\n");

"use strict";

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "tcOCCsvawnskVh8RG0TKmfUWLMMFBmv5";

let feedbackEle = document.querySelector("#feedback");
let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let gifEle = document.querySelector("#imageContainer > img");


searchBtn.addEventListener("click", (event) => {
    fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchInput.value}`)
        .then((res) => {
            return res.json()
        })
        .then((body) => {
            gifEle.src = body.data.images.original.url;
            searchInput.value = "";
        })
        .catch((err) => {
            console.error(err);
            feedbackEle.textContent = err.message;
        })
    });
