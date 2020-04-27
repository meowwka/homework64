package todo.list.todo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import todo.list.todo.model.Task;
import todo.list.todo.repo.TaskRepo;
import todo.list.todo.service.TaskService;

import java.util.List;

@RestController
@RequestMapping("tasks")
public class RController {
    private final TaskService taskService;
    @Autowired
    TaskRepo taskRepo;

    public RController(TaskService service) {
        this.taskService = service;
    }

    @GetMapping
    public List<Task> getTasks(){return taskRepo.findAll();}

    @GetMapping("/{id}")
    public List<Task> getTasksById(@PathVariable("id") String id){
        return  taskRepo.findAllById(id);
    }

}
