'use strict';
const baseUrl = "http://localhost:8000";

async function getTasks() {
    let url = baseUrl + "/tasks";
    let response = await fetch(url);
    return await response.json();
}

getTasks().then(data => console.log(data));

class Task{
    constructor(id, taskName, status) {
        this.id = id;
        this.taskName = taskName;
        this.status= status;
    }
}

function creatingTask(task){
let mainUl = document.getElementById("list");
let newLi1 = document.createElement("li");
let tasks = `${task.taskName}`;
newLi1.innerHTML = tasks;
mainUl.append(newLi1);
return newLi1;
}




async function addingTasks() {
    let task = await getTasks();
    for(let i=0; i<task.length; i++){
        let tasks = new Task(task[i].id, task[i].taskName, task[i].status);
        let elem = creatingTask(tasks);
        // if (tasks.taskName === ''){
        //     alert('try again')
        // } else{
            let list = document.getElementById("list");
            list.append(elem);
        // }
    }
}

window.addEventListener('load', function () {
    let addButton = document.getElementById("button-addon2");
    addButton.addEventListener('click', function (e) {
        e.preventDefault();
        const addForm = document.getElementById("addingForm");
        let data = new FormData(addForm).get("taskName");
        // console.log(data)
        if(data ===''){
            window.alert('You did not write anything! Try again!');
            return false;
        }
        let data2 =  new FormData(addForm);
            // console.log(data2);
            fetch(baseUrl, {
                method:'POST',
                body: data2
            }).then(r => r.json()).then(data => window.location.href = baseUrl);



    })
});

var list = document.querySelector('ul');
list.addEventListener('dblclick', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);