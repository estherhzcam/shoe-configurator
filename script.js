"use strict";
//global variables

/* let logo1;
let logo2;
let rubberDetail;
let innerPart;
let border;
let main;
let secondFront;
let secondLateral;
let thirdUp;
let thirdLateral;
let thirdLateralBack;
let thirdBack; */

let rubberDetail;
let mainColor;
let secondColor;
let thirdColor;
let forthColor;

let currentColor = "rgb(236, 236, 236)";

document.addEventListener("DOMContentLoaded", start);
async function start() {
  let response = await fetch("shoe.svg");
  let mySvgData = await response.text();
  document.querySelector("#image").innerHTML = mySvgData;
  getColors();
}

function getColors() {
  console.log("user can pick the colors");
  // add event listeners to pick up colors
  document.querySelectorAll(".color-circle").forEach((element) => {
    element.addEventListener("click", (event) => {
      currentColor = event.target.style.backgroundColor;
      console.log("currentColor is ", currentColor);
    });
  });
  document.querySelector("input").addEventListener("change", (event) => {
    currentColor = document.querySelector("input").value;
  });

  //redefine the variable of each group and add event listeners to add the colors
  mainColor = document.querySelector("#main-color");
  mainColor.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  secondColor = document.querySelector("#second-color");
  secondColor.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  thirdColor = document.querySelector("#third-color");
  thirdColor.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  forthColor = document.querySelector("#forth-color");
  forthColor.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  rubberDetail = document.querySelector("#rubber-detail");
  rubberDetail.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
}

function setColor(element, currentColor) {
  console.log("current color ", currentColor);
  console.log("element is ", element);
  element.style.fill = currentColor;
}
