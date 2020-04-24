<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Todo List</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous">
</head>
<body onload="addingTasks()">
<h2>To Do List</h2>
<div class="container">
    <form id="addingForm">
        <div id="todo" class="basic input-group mb-3">
            <input type="text"  class="form-control" name="taskName" id="input"  aria-describedby="button-addon2" placeholder="Новое задание..." autofocus>
            <div class="input-group-append">
            <button id="button-addon2" type="submit" class="btn btn-light btn-outline-secondary">Добавить</button>
            </div>
        </div>
    </form>

    <ul id="list">
        <li class="checked">My first Task</li>

    </ul>
</div>
</body>
</html>
<script src="/js/script.js"></script>
