const body = document.querySelector("body");

const IMG_NUMBER = 5;

function handleImgLoad(){
    console.log("finished loading");
}
function paintImage(imgNumber){
    const image = new Image();
    image.src =`img/background${imgNumber+1}.jpg`;
    body.appendChild(image);
    image.classList.add("bg-image");
}
function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();