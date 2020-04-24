package todo.list.todo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import todo.list.todo.model.Task;
import todo.list.todo.repo.TaskRepo;

import java.util.List;

@RestController
@RequestMapping("tasks")
public class RController {
    @Autowired
    TaskRepo taskRepo;

    @GetMapping()
    public List<Task> getTasks(){return taskRepo.findAll();}

    @GetMapping("/{id}")
    public List<Task> getTasksById(@PathVariable("id") String id){
        return  taskRepo.findAllById(id);
    }

}
