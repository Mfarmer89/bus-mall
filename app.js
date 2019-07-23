"use strict";

let productImages = [];
let flexBox = document.getElementById("flex-box");
let images = [
  ["bag", "bag", "img/bag.jpg"],
  ["banana", "banana", "img/banana.jpg"],
  ["bathroom", "bathroom", "img/bathroom.jpg"],
  ["boots", "boots", "img/boots.jpg"],
  ["breakfast", "breakfast", "img/breakfast.jpg"],
  ["bubblegum", "bubblegum", "img/bubblegum.jpg"],
  ["chair", "chair", "img/chair.jpg"],
  ["cthulhu", "cthulhu", "img/cthulhu.jpg"],
  ["dog-duck", "dog-duck", "img/dog-duck.jpg"],
  ["dragon", "dragon", "img/dragon.jpg"],
  ["pen", "pen", "img/pen.jpg"],
  ["pet-sweep", "pet-sweep", "img/pet-sweep.jpg"],
  ["scissors", "scissors", "img/scissors.jpg"],
  ["shark", "shark", "img/shark.jpg"],
  ["sweep", "sweep", "img/sweep.png"],
  ["tauntaun", "tauntaun", "img/tauntaun.jpg"],
  ["unicorn", "unicorn", "img/unicorn.jpg"],
  ["usb", "usb", "img/usb.gif"],
  ["water-can", "water-can", "img/water-can.jpg"],
  ["wine-glass", "wine-glass", "img/wine-glass.jpg"],
];

//Constructor function to create image objects
function ProductImage(htmlId, name, filePath) {
  this.htmlId = htmlId;
  this.name = name;
  this.filePath = filePath;
  // this.timesShown = timesShown;
  // this.timesClicked = timesClicked;
  productImages.push(this);
}

//Function (that uses constructor function) to create product objects
let createProductObjects = function() {
  for(let i = 0; i < images.length; i++) {
    productImages[i] = new ProductImage(images[i][0], images[i][1], images[i][2]);
  }
};

//Function to create array of random numbers
let randomArray = function(numberOfImages) {
  let randomNumbers = [];
  for (let i = 0; i < numberOfImages; i++) {
    let random = Math.floor(Math.random() * productImages.length);
    if (randomNumbers.indexOf(random) === -1) {
      randomNumbers.push(random);
    } else {
      i--;
    }
  }
  return randomNumbers;
};

let createImage = function (iSrc, iAlt) {
  let img = document.createElement("img");
  img.setAttribute("src", iSrc);
  img.setAttribute("alt", iAlt);
  return img;
};

//Function to create number of divs desired inline
let createDivs = function(numberOfImages) {
  let position = randomArray(numberOfImages);
  for(let i = 0; i < numberOfImages; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "flex-one");
    console.log(position[i]);
    console.log(productImages[position[i]]);
    console.log(productImages);
    let img = createImage(productImages[position[i]].filePath,productImages[position[i]].name);
    newDiv.appendChild(img);
    flexBox.appendChild(newDiv);
  }
};



//calling function to create product objects
createProductObjects();
//calling function to create 3 inline divs
createDivs(3);



