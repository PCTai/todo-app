
var inputTodo = document.querySelector('.form .input-todo');
var listTodoEl =document.querySelector('.form .list-todo'); 
var form= document.querySelector('.form');
var todos = JSON.parse(localStorage.getItem('todos'));

if(todos){
    todos.forEach(todo => {
        addTodo(todo);
        console.log(todo);
    });
}
form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo();
})
function addTodo(todo){
    var todoText = inputTodo.value;
    if(todo){
        todoText=todo.text;
    }
    if(todoText){
        const todoElement= document.createElement('li');
        if(todo && todo.completed){
            todoElement.classList.add('completed');
        }

        todoElement.classList.add('todo');

        todoElement.innerText= todoText;
        todoElement.addEventListener('click',() =>{
            todoElement.classList.toggle('completed');
            updateLS();
        })
        todoElement.addEventListener('contextmenu',(e) =>{
            e.preventDefault();
            todoElement.remove();
            updateLS();
        })
        listTodoEl.appendChild(todoElement);
        inputTodo.value='';
        updateLS();
    }
            
}
function updateLS(){
    var todoEls= document.querySelectorAll('.list-todo li');
    const todos= [];
    todoEls.forEach(todoEl =>{
        todos.push({
                text: todoEl.innerText,
                completed: todoEl.classList.contains('completed')
        })
    })
    localStorage.setItem('todos',JSON.stringify(todos));
}

