'use strict';
async function getTasks() {
    let url = "http://localhost:8000/tasks";
    let response = await fetch(url);
    return await response.json();
}

getTasks().then(data => console.log(data));

class Task{
    constructor(id, taskName) {
        this.id = id;
        this.taskName = taskName;
    }

}

function creatingTask(task){
let mainUl = document.getElementsByClassName("list");
let newLi1 = document.createElement("li")
let newLi = `<li>${task.taskName}</li>`
mainUl.innerHTML += newLi;
mainUl.clas
return newLi;
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