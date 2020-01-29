const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const control_color = document.getElementsByClassName("jsColors");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const CAN_SIZE = 700;
canvas.width = CAN_SIZE;
canvas.height = CAN_SIZE;

ctx.fillStyle = "white"
ctx.fillRext = (0, 0, CAN_SIZE, CAN_SIZE);
ctx.strokeStyle = "black";
ctx.fillStyle = ctx.strokeStyle;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;


function onMouseMove(event){
    // offsetX, Y : only div **, clientX, Y : whole window
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}
function stopPainting(){
    painting = false;
}
function startPainting(){
    painting = true;
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = ctx.strokeStyle;
}

function handleRangeChange(event){
    ctx.lineWidth = event.srcElement.value;
}

function handleModeClick(event){
    if(filling){
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick(event){
    if(filling)
        ctx.fillRect(0, 0, CAN_SIZE, CAN_SIZE);
}
function handleCM(event){
    event.preventDefault();
}
function handleSaveClick(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS_exprot";
    link.click();
}
function init(){
    if(canvas){
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", startPainting);
        canvas.addEventListener("mouseup", stopPainting);
        canvas.addEventListener("mouseleave", stopPainting);
        canvas.addEventListener("click", handleCanvasClick);
        canvas.addEventListener("contextmenu", handleCM);
    }

    Array.from(control_color).forEach(control_color =>
        control_color.addEventListener("click", handleColorClick)
    );

    if(range){
        range.addEventListener("input", handleRangeChange);
    }
    if(mode) {
        mode.addEventListener("click", handleModeClick);
    }
    if(saveBtn){
        saveBtn.addEventListener("click", handleSaveClick);
    }
}

init();