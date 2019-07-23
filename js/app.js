"use strict";

let numberOfImages = 3;
let rounds = 25;
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
  this.timesShown = 0;
  this.timesClicked = 0;
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

//Function to create image elements
let createImage = function (iSrc, iAlt, indexN) {
  let img = document.createElement("img");
  img.setAttribute("src", iSrc);
  img.setAttribute("alt", iAlt);
  img.setAttribute("data-number", indexN);
  img.addEventListener("click", handleVote);
  return img;
};

//Function to create divs with images
let createDivs = function(numberOfImages) {
  let position = randomArray(numberOfImages);
  for(let i = 0; i < numberOfImages; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "flex-one");
    let img = createImage(productImages[position[i]].filePath,productImages[position[i]].name, position[i]);
    productImages[position[i]].timesShown +=1;
    newDiv.appendChild(img);
    flexBox.appendChild(newDiv);
  }
};

//function to display results
let displayResults = function() {
  // document.getElementByTagName("h2").innerHTML = "Results:";
  let ulEl = document.getElementById("results");
  for (let i = 0; i < productImages.length; i++) {
    let liEl = document.createElement("li");
    liEl.innerHTML = `${productImages[i].timesClicked} votes for the ${productImages[i].name}, which was displayed ${productImages[i].timesShown} times`;
    ulEl.appendChild(liEl);
  }
};




//Event handler
function handleVote(event) {
  if (rounds >0) {
    const imageIndex = event.target.getAttribute("data-number");
    productImages[imageIndex].timesClicked += 1;
    document.getElementById("flex-box").innerHTML = "";
    createDivs(numberOfImages);
    rounds -= 1;
    console.log(rounds);
  } else {
    document.getElementById("flex-box").innerHTML = "";
    displayResults();
  }
}


//calling function to create product objects
createProductObjects();
//calling function to run test
createDivs(numberOfImages);

console.log({productImages});
