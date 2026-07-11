let todos = [];
let a = 0;

function delTodo(index){
    const realIdx = todos.findIndex(todo => todo.id === index);
    if(realIdx !== -1){
        todos.splice(realIdx , 1);
        render();
    }
}

function doneTodo(condition, index){
    const readIdx = todos.findIndex(todo => todo.id === index);
    if(readIdx !== -1){
        todos[readIdx].isDone = condition;
    }
    render();
}

function editTodo(index){
    const realIdx = todos.findIndex(todo => todo.id === index);
    const newTitle = prompt("Edit the Todo : " , todos[realIdx].title);

    if(newTitle){
        todos[realIdx].title = newTitle
        render()
    }
}

function todocompt(todo){
    const todoEl = document.createElement("div")
    const heading = document.createElement("h2")
    const delbtn = document.createElement("button")
    const editbtn = document.createElement("button")
    const donebtn = document.createElement("input")
    todoEl.setAttribute("id",`${todo.id}`)
    donebtn.setAttribute("type","checkbox")
    todoEl.setAttribute("class","elss")
    heading.setAttribute("class","cont")
    delbtn.setAttribute("class","delss")
    editbtn.setAttribute("class","edtss")
    heading.innerHTML = todo.title
    delbtn.innerHTML = "Delete!"
    editbtn.innerHTML = "Edit?"
    delbtn.addEventListener("click", ()=>{
        let deli = todo.id;
        delTodo(deli);
    })
    donebtn.checked = todo.isDone
    donebtn.addEventListener("change",(event)=>{
        let doni = todo.id
        doneTodo(event.target.checked, doni);
    })
    if(todo.isDone){
        heading.setAttribute("class","donee")
    }else{
        heading.setAttribute("class","cont")
    }
    editbtn.addEventListener("click", ()=>{
        let doni = todo.id
        editTodo(doni)
    })
    todoEl.appendChild(donebtn)
    todoEl.appendChild(heading)
    todoEl.appendChild(delbtn)
    todoEl.appendChild(editbtn)
    return todoEl
}

function render() {
    let todoall = document.getElementById("todos");
    todoall.innerHTML = "";
    todos.forEach(todo => {
        let eles = todocompt(todo)
        todoall.appendChild(eles)
    });
}


function todoSave(){
    if(document.getElementById("inp").value){
            todos.push({
            title : document.querySelector("#inp").value,
            id : a,
            isDone : false
        })
        a++;
        document.querySelector("#inp").value = "";
        render()
    }
}