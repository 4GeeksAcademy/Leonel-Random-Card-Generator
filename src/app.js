/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const valuesCard = {
    numberFigures: [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "K", "J", "Q"],
    figureCards: ["♦", "♥", "♠", "♣"],
    colorCards: ["red", "black"]
  };
  const timer = 10000;
  //Declaration of variables that will help me to get the same color in the figures and number
  let figureColor;
  let numberColor;
  //Variables to connect with the index.html
  const figuresToShow = document.getElementById("figure");
  const numberToShow = document.getElementById("number");
  const figureTwo = document.getElementById("figureTwo");
  const buttonChanges = document.getElementById("buttonChange");
  const cardWithInput = document.getElementById("cardWidth");
  const cardHeightInput = document.getElementById("cardHeight");
  const card = document.getElementById("cardValueInput");

  const updateCardDimensions = () => {
    const width = cardWithInput.value;
    const height = cardHeightInput.value;

    card.style.width = width + "px";
    card.style.height = height + "px";
  };
  const randomColor = () => {
    const randomColorValue =
      valuesCard.colorCards[
        Math.floor(Math.random() * valuesCard.colorCards.length)
      ];

    return randomColorValue;
  };

  const generateFigure = () => {
    let valueColor = randomColor();
    figureColor = valueColor;
    const randomFigure =
      valuesCard.figureCards[
        Math.floor(Math.random() * valuesCard.figureCards.length)
      ];

    figuresToShow.textContent = randomFigure;
    figureTwo.textContent = randomFigure;
    figuresToShow.style.color = valueColor;
    figureTwo.style.color = valueColor;
  };

  const generateNumber = () => {
    let valueColor = randomColor();
    numberColor = valueColor;
    const randomValue =
      valuesCard.numberFigures[
        Math.floor(Math.random() * valuesCard.numberFigures.length)
      ];

    numberToShow.textContent = randomValue;
    //The loop do-while helps to get the same color for the figure and number.
    do {
      valueColor = randomColor();
    } while (valueColor !== figureColor);

    figureColor = valueColor;
    numberToShow.style.color = figureColor;
  };

  document.addEventListener("DOMContentLoaded", generateFigure());
  document.addEventListener("DOMContentLoaded", generateNumber());
  buttonChanges.addEventListener("click", () => {
    generateFigure();
    generateNumber();
  });

  cardHeightInput.addEventListener("input", updateCardDimensions);
  cardWithInput.addEventListener("input", updateCardDimensions);

  const generateCard = () => {
    generateFigure();
    generateNumber();
  };
  setInterval(generateCard, timer);
};
