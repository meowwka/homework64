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
let tasks = `${task.taskName}`
newLi1.innerHTML = tasks;
mainUl.append(newLi1);
return newLi1;
}

async function addingTasks() {
    let task = await getTasks();
    for(let i=0; i<task.length; i++){
        let tasks = new Task(task[i].id, task[i].taskName);
        let elem = creatingTask(tasks);
        let list = document.getElementById("list");
        list.append(elem);
    }
}

window.addEventListener('load', function () {
    let addButton = document.getElementById("button-addon2");
    addButton.addEventListener('click', function () {
        const addForm = document.getElementById("addingForm");
        let data = new FormData(addForm);
        console.log(data);
        fetch(baseUrl, {
            method:'POST',
            body: data
        }).then(r => r.json());
    })
});

var list = document.querySelector('ul');
list.addEventListener('dblclick', function(ev) {
    if (ev.target.tagName === 'li') {
        ev.target.classList.toggle('checked');
    }
}, false);