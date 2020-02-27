function clearContainer(){
    const coloredBoxes = document.querySelectorAll('.coloredBox');
    coloredBoxes.forEach(box => {box.style.removeProperty('background-color');
                                box.style.removeProperty('opacity');
                                box.classList.remove('coloredBox'); 
                                box.classList.add('box');
                                box.addEventListener('mouseover', changeBoxColor)});
    let size = prompt("Size of new container?");
    while(isNaN(size) || size < 1 || size > 99){
        size = prompt("Size of new container must be between 0 and 100");
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    createCustomContainer(parseInt(size));
}

function createContainer(){
    for(i = 0; i < 256; i++)
    {
    let div = document.createElement('div');
    div.classList.add('box');
    div.addEventListener('mouseover', changeBoxColor);
    container.appendChild(div);
    }
}

function createCustomContainer(size){
    let count = container.childElementCount - (size * size);
    if (count > -1){
        for(i = 0; i < count; i++)
        {
            container.lastElementChild.remove();
        }
    }
    else{
        count = count * -1;
        for(i = 0; i < count; i++){
            let div = document.createElement('div');
            div.classList.add('box');
            div.addEventListener('mouseover', changeBoxColor);
            container.appendChild(div);
        }
    }
}

function changeBoxColor(){
    this.classList.remove('box');
    this.classList.add('coloredBox');
    this.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
    this.style.opacity = 1;
    this.removeEventListener('mouseover', changeBoxColor);
    this.addEventListener('mouseover', changeOpacity);
}

function changeOpacity(){
    if(this.style.opacity == 0){
        return;
    }
    this.style.opacity = this.style.opacity - 0.1;
}

function randomNumber() {
    let randNumber = Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
    return randNumber;
}

const container = document.querySelector('.container');
const clearButton = document.querySelector('button');
clearButton.addEventListener('click', clearContainer); 

window.addEventListener('load', createContainer);