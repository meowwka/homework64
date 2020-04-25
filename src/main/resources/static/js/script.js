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
        //запустить ту цикл tasks и в dblcklick тоже
        let elem = creatingTask(tasks);
        // if(elem.classList.contains('checked')){
        //     return tasks.status = true;
        // }
        // // else
        if (tasks.status===false){
              elem.classList.remove('checked');
        }
        console.log(tasks);
        let list = document.getElementById("list");
        var listOfTasks = document.querySelector('ul');
        listOfTasks.addEventListener('dblclick', function(ev) {
            if (ev.target.tagName === 'LI') {
                console.log(tasks);
                ev.target.classList.toggle('checked');
                tasks.status = true;
            }
            // else if(ev.target.tagName === 'LI'){
            //     ev.target.classList.remove('checked');
            //     tasks.status = false;
            // }
        },false);
        list.append(elem);
    }
}

window.addEventListener('load', function () {
    let addButton = document.getElementById("button-addon2");
    addButton.addEventListener('click', function (e) {
        e.preventDefault();
        const addForm = document.getElementById("addingForm");
        let data = new FormData(addForm).get("taskName");
        if(data ===''){
            window.alert('You did not write anything! Try again!');
            return false;
        }
        let data2 =  new FormData(addForm);
            fetch(baseUrl, {
                method:'POST',
                body: data2
            }).then(r => r.json()).then(data => window.location.href = baseUrl);
    })
});

