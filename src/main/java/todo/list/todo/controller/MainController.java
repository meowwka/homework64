package todo.list.todo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import todo.list.todo.model.Task;
import todo.list.todo.repo.TaskRepo;

import java.util.List;

@Controller
public class MainController {
    @Autowired
    TaskRepo taskRepo;

    @GetMapping("/")
    public String todo(){
    return "index";
    }




}
