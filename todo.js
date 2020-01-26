const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input");
    todoList = document.querySelector(".js-todoList");

const TODO_LS = "todos";

let todos = [];

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanTodos = todos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    todos = cleanTodos;
    saveToDos();

}
function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(todos));
}

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteTodo)
    const span = document.createElement("span");
    const newId = todos.length + 1;
    li.id = newId;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    todoList.appendChild(li);
    todoInput.focus();
    const todoObj = {
        text: text,
        id: newId,
    };
    todos.push(todoObj);
    saveToDos();
}

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODO_LS);
    if(loadedTodos !== null){
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(function(todo){
            paintTodo(todo.text);
        });
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