<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Todo List</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body onload="addingTasks()">
    <div id="todo" class="basic">
        <h2>To Do List</h2>
        <input type="text" name="taskName" id="input" placeholder="Новое задание..." autofocus>
        <button type="button" class="btn btn-light">Добавить</button>
    </div>

    <ul id="list">

    </ul>
</body>
</html>
<script src="/js/script.js"></script>
