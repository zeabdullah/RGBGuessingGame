let gameOver = true;
let squares = document.querySelectorAll(".square");
let visibleSquares;
const header = document.querySelector("header");
const rgbStringInHeader = document.querySelector(".rgbString");
const info = document.querySelector(".info");
const hardBtn = document.querySelector(".hard");
const easyBtn = document.querySelector(".easy");
const newColorsBtn = document.querySelector(".newColors");

hardBtn.addEventListener("click", function () {
   //HARD MODE
   this.classList.add("selected");
   easyBtn.classList.remove("selected");
   startOverHard();
});
easyBtn.addEventListener("click", function () {
   //EASY MODE
   this.classList.add("selected");
   hardBtn.classList.remove("selected");
   startOverEasy();
});

newColorsBtn.addEventListener("click", function () {
   gameOver = false;
   if (isHard) {
      startOverHard();
      hardBtn.classList.add("selected");
      easyBtn.classList.remove("selected");
   } else {
      startOverEasy();
      easyBtn.classList.add("selected");
      hardBtn.classList.remove("selected");
   }

   for (let i = 0; i < visibleSquares.length; i++) {
      visibleSquares[i].classList.remove("clicked");
      visibleSquares[i].classList.remove("answer");
   }
});

//GLOBAL FUNCTIONS
function addEventListenerToVisibleSquares() {
   //THIS. IS. A. MESS.
   for (let i = 0; i < visibleSquares.length; i++) {
      visibleSquares[i].addEventListener("click", function () {
         if (!gameOver && this.classList.contains("square-visible")) {
            this.classList.add("clicked");
            if (
               this.style.backgroundColor.toUpperCase() ===
               rgbStringInHeader.textContent
            ) {
               this.classList.add("answer");
               gameOver = true;
               for (let j = 0; j < visibleSquares.length; j++) {
                  visibleSquares[
                     j
                  ].style.backgroundColor = this.style.backgroundColor;
                  visibleSquares[j].classList.add("square-visible");
               }
               info.style.opacity = "1";
               info.textContent = "Correct!";
               header.style.backgroundColor = this.style.backgroundColor;
               newColorsBtn.textContent = "PLAY AGAIN?";
            } else if (
               this.style.backgroundColor.toUpperCase() !==
                  rgbStringInHeader.textContent &&
               this.classList.contains("square-visible")
            ) {
               this.classList.remove("square-visible");
               info.style.opacity = "1";
               info.textContent = "Try Again";
            }
         }
      });
   }
}

function startOverHard() {
   isHard = true;

   for (let i = 0; i < squares.length; i++) {
      squares[i].classList.add("square-visible");
   }

   startOver();

   for (let i = 0; i < visibleSquares.length; i++) {
      visibleSquares[i].classList.remove("clicked");
      visibleSquares[i].classList.remove("answer");
   }

   addEventListenerToVisibleSquares();
}

function startOverEasy() {
   isHard = false;

   for (let i = 0; i < squares.length; i++) {
      squares[i].classList.add("square-visible");
   }
   for (let j = 3; j < squares.length; j++) {
      squares[j].classList.remove("square-visible");
      squares[j].style = "";
   }

   startOver();

   for (let i = 0; i < visibleSquares.length; i++) {
      visibleSquares[i].style.backgroundColor = colors[i];
      visibleSquares[i].classList.remove("clicked");
      visibleSquares[i].classList.remove("answer");
   }

   addEventListenerToVisibleSquares();
}

function startOver() {
   gameOver = false;
   newColorsBtn.textContent = "NEW COLORS";
   visibleSquares = document.querySelectorAll(".square.square-visible");
   renewColors();
   assignColors();
   rgbStringInHeader.textContent = pickARandomSquare().toUpperCase();
   info.style.opacity = "0";
   header.style.backgroundColor = "var(--my-blue)";
}

function renewColors() {
   if (isHard) {
      colors = [
         randomRgbString(),
         randomRgbString(),
         randomRgbString(),
         randomRgbString(),
         randomRgbString(),
         randomRgbString(),
      ];
   } else {
      colors = [randomRgbString(), randomRgbString(), randomRgbString()];
   }
}

function assignColors() {
   for (let i = 0; i < visibleSquares.length; i++) {
      visibleSquares[i].style = "";
      visibleSquares[i].style.backgroundColor = colors[i];
   }
}

function randomIntFromInterval(min, max) {
   //USEFUL FUNCTION TO GENERATE RANDOM NUMBERS
   return Math.floor(Math.random() * (max - min + 1) + min);
}

function pickARandomSquare() {
   //PICKS A SQUARE BY RANDOMLY GETTING ITS INDEX
   if (isHard) return colors[randomIntFromInterval(0, 5)];
   return colors[randomIntFromInterval(0, 2)];
}

function randomRgbString() {
   //CREATES A RANDOM 'RGB(X, Y, Z)' STRING
   return `rgb(${randomIntFromInterval(0, 255)}, ${randomIntFromInterval(
      0,
      255
   )}, ${randomIntFromInterval(0, 255)})`;
}
