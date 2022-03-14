/*let inputtext = document.querySelector('input');
let addtodo = document.querySelector('button');
let todolist = document.querySelector('div.todos');
let count = 0;
addtodo.onclick = function(){
    var input = inputtext.value;
    if(input.length === 0) {
    alert("Please enter a task");
    } else {
    let p = document.createElement("p")
    p.setAttribute("key",count)
    p.innerHTML = input
    todolist.appendChild(p)
    document.querySelector(`p[key="${count}"]`).addEventListener('click',function(){
        todolist.removeChild(this)
    })
    count++;
    }
}*/
let compBtn = document.querySelector("#complete");
let pendBtn = document.querySelector("#pending");
let alldata = document.querySelector("#user");
let todolist = document.querySelector(".todos");

fetechtodo();

async function fetechtodo(){
    const res=await fetch("https://jsonplaceholder.typicode.com/todos");
    const data=await res.json();

    alldata.addEventListener("click", () => {
        getdata(data);
    });
    compBtn.addEventListener("click", () => {
        let truedatalist = data.filter(ele => ele.completed);
        getdata(truedatalist);
    });
    pendBtn.addEventListener("click", () => {
        let falsedatalist = data.filter(ele => !ele.completed);
        getdata(falsedatalist);
    });

}
function getdata(data){
    let output="";
    data.forEach(todo => {
        let check;
        if(todo.completed){
            check = "completed"
        }
        else{
            check = "pending"
        }
        output+=`<div class="value_d">
                <h4>${todo.title}</h4>
                <p>userId : ${todo.userId}</p>
                <p> ID : ${todo.id}</p>
                <p>status :${check}</p>
                </div>`
    });todolist.innerHTML=output;
}