// Written by: Ben Gorgan 7/23/19

const SCREENBACKGROUND = '#eff0f1';

let mainScreen = document.querySelector('#screen');

gridInit();

function gridInit(gridSize) {
  gridSize=gridSize || 16;
  let divWidth = 100/gridSize;
  for (var i = 1; i <= gridSize; i++) {
    for (var j = 1; j <= gridSize; j++) {
      let newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'pixel');
      newDiv.style.width = divWidth.toString()+'%';
      newDiv.style.height = divWidth.toString()+'%';
      mainScreen.appendChild(newDiv);
    }
  }
  pixelsInit();
  buttonInit();
}

function pixelsInit(){
  let pixels = document.querySelectorAll('.pixel');
  for (var i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('mouseover', etch);
    pixels[i].style.backgroundColor = SCREENBACKGROUND;
  }
}

function buttonInit() {
  let reset = document.querySelector('.reset');
  reset.addEventListener('click', gridReset);
}

function etch(e) {
  e.target.style.backgroundColor = 'black';
}

function gridReset(e) {

  let newSize = prompt('What should the new grid size be?');

  //need to remove the current pixels before we can add new ones
  let pixels = document.querySelectorAll('.pixel');
  for (var i = 0; i < pixels.length; i++) {
    mainScreen.removeChild(pixels[i]);
  }
  gridInit(newSize);
}
