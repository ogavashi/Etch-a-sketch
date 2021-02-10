const GridContainer = document.querySelector('#container');
const ChangeSize = document.querySelector('#ChangeSize');
const ClearColor = document.querySelector('#ClearColor');
const ColorInput = document.querySelector('#color');
const RandomColor = document.querySelector('#RandomColor');
const Erase = document.querySelector('#Erase');


let color = 'black';
let random = false;
let vitalik = 500;
let eraseActive = false;
let colMemory = color;


RandomColor.addEventListener('click', ()=>{
    eraseActive = false;
    random = true;
    Erase.style.backgroundColor = 'Transparent';
});
ChangeSize.addEventListener('click', changeSize);
ClearColor.addEventListener('click', clearColor);
window.addEventListener('load', Grid());


Erase.addEventListener('click', ()=>{
    eraseActive = !eraseActive;
    Erase.style.backgroundColor = 'Transparent';
    if(eraseActive) {
        Erase.style.backgroundColor = 'Red';
        color = 'rgba(0,0,0,0)';
        random = false;
    }
    else {
        color = colMemory;
    }
    
});

ColorInput.addEventListener('input', ()=>{
    colMemory = ColorInput.value;
    if(!eraseActive) {
        color = colMemory;
    }
    random = false;
});


function clearColor() {
    const Grid = document.querySelectorAll('.box');
    Grid.forEach((element) => {
      element.style.backgroundColor = 'rgba(0,0,0,0)';
    });
}


 function changeSize() {
    let Size = prompt('Enter size:');
    if (Size) {
        Size = parseInt(Size);
        if( Size < 1 || Size > 100) {
            alert('Choose number in range 1-100');
            changeSize();
        }
        else {
            ClearGrid();
            Grid(Size);
        }
    }
    else {
        alert('Choose number in range 1-100');
        changeSize();
    } 
 }


function Grid(size = 80) {
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

