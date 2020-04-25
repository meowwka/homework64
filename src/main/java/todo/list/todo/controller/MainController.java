package todo.list.todo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import todo.list.todo.model.Task;
import todo.list.todo.repo.TaskRepo;

@Controller
public class MainController {
    @Autowired
    TaskRepo taskRepo;

    @GetMapping("/")
    public String todo(){
    return "index";
    }

    @RequestMapping( value = "/",method = RequestMethod.POST)
    public final String addingTask(@RequestParam("taskName") String taskName) {
        Task newTask = new Task(taskName);
        taskRepo.save(newTask);
        System.out.println("added new task");
        return "succes";
    }




}
