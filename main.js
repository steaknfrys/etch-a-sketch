
//Setting up variables making it easier to change down if wanted in the future.
let gridSize = 16;
let divWidth = 100/(gridSize);
let mainScreen = document.querySelector('#screen');

gridStart();
let pixels = document.querySelectorAll('.pixel');
for (var i = 0; i < pixels.length; i++) {
  pixels[i].addEventListener('mouseover', etch);
}


function gridStart() {
  for (var i = 1; i <= gridSize; i++) {
    for (var j = 1; j <= gridSize; j++) {
      let newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'pixel');
      newDiv.style.width = divWidth.toString()+'%';
      newDiv.style.height = divWidth.toString()+'%';
      mainScreen.appendChild(newDiv);
    }
  }
}

function etch(e) {
  console.log(e.target);
  e.target.style.backgroundColor = 'black';
}
