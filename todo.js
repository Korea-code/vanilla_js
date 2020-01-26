const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input");
    todoList = document.querySelector(".js-todoList");

const TODO_LS = "todos";

const todos = [];
function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    todoList.appendChild(li);
    todoInput.focus();
    const todoObj = {
        text: text,
        id: todos.length + 1,
    }
}
function loadTodos(){
    const todos = localStorage.getItem(TODO_LS);
    if(todos !== null){
    }

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
}
function init(){
    loadTodos()
    todoForm.addEventListener("submit", handleSubmit);
}

init();