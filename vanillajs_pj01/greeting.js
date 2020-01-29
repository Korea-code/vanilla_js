const form = document.querySelector(".js-form"),
    input = document.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_ON = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function getName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}
function loadName(){
    const currrentUser = localStorage.getItem(USER_LS);
    if(currrentUser === null){
        getName();
    } else {
        paintGreeting(currrentUser);
    }
}

function init(){
    loadName();
    
}

init();