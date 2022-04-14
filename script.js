const form=document.getElementById('form');
const input=document.getElementById('input');
const todoUL=document.getElementById('todos');



const todos=JSON.parse(localStorage.getItem('todos'))
if(todos)
todos.forEach((todo)=>addTodo(todo));

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    addTodo();

})

function addTodo(todo){
    let todoText=input.value;
    if(todo){
        todoText=todo.text;
    }
    if(todoText){
        const todoElement=document.createElement('li');
        if(todo && todo.completed){
            todoElement.classList.add('completed');
            updateLocal();
        }
        todoElement.innerText=todoText;

        todoElement.addEventListener("click",(event)=>{
            todoElement.classList.toggle('completed');
            updateLocal();
        })
        todoElement.addEventListener("contextmenu",(e)=>{
            e.preventDefault();
            todoElement.remove();
            updateLocal();
        })
        todoUL.appendChild(todoElement);
        input.value=' ';
        updateLocal();
    }

}function updateLocal(){

    todoElement=document.querySelectorAll('li');
    const todos=[];
    todoElement.forEach(item=>todos.push({
        text:item.innerText,
        completed:item.classList.contains('completed')
    }))
    localStorage.setItem('todos',JSON.stringify(todos));

}

