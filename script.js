const GridContainer = document.querySelector('#container');
const ChangeSize = document.querySelector('#ChangeSize');
const ClearColor = document.querySelector('#ClearColor');
const ColorInput = document.querySelector('#color');
const RandomColor = document.querySelector('#RandomColor');
const Erase = document.querySelector('#Erase');


let color = 'black';
let random = false;
let vitalik = 500;


RandomColor.addEventListener('click', ()=>{
    random = true;
});
ChangeSize.addEventListener('click', changeSize);
ClearColor.addEventListener('click', clearColor);
window.addEventListener('load', Grid());
Erase.addEventListener('click', ()=>{
    color = 'white';
    random = false;
});

ColorInput.addEventListener('input', ()=>{
    color = ColorInput.value;
    random = false;
});


function clearColor() {
    const Grid = document.querySelectorAll('.box');
    Grid.forEach((element) => {
      element.style.backgroundColor = 'white';
    });
}


 function changeSize() {
    let Size = prompt('Enter size:');
    if (Size !== null) {
        Size = parseInt(Size);
        if( Size < 1 || Size > 100) {
            alert('Choose number in range 1-64');
            changeSize();
        }
        else {
            ClearGrid();
            Grid(Size);
        }
    }
 }


function Grid(size = 3) {
    for(let i = 0; i < size * size; i++) {
        const GridElement = document.createElement('div');
        GridElement.classList.add('box');
        GridElement.style.height = `${vitalik / size}px`;
        GridElement.style.width = `${vitalik / size}px`;
        GridElement.addEventListener('mouseover', ()=>{
            if (random === true) {
                GridElement.style.backgroundColor = `${SetRandom()}`;
            }
            else {
                GridElement.style.backgroundColor = `${color}`;
            }
        });
        GridContainer.appendChild(GridElement);
    }
};


function SetRandom() {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    return  `rgb(${R}, ${G}, ${B})`;
}


function ClearGrid() {
    const Grid = document.querySelectorAll('.box');
    Grid.forEach((element) => {
      GridContainer.removeChild(element);
    });
}  



