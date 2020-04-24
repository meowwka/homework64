package todo.list.todo.util;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import todo.list.todo.model.Task;
import todo.list.todo.repo.TaskRepo;

@Configuration
public class DataBasePreloader {

    @Bean
    CommandLineRunner initDatabase(TaskRepo taskRepo){
        taskRepo.deleteAll();

        return (args) -> save(taskRepo);
    }

    private void save(TaskRepo taskRepo){
        for(int i = 0; i<3; i++){
            Task tasks = new Task(Generator.makeDescription(), false);
            taskRepo.save(tasks);
        }
    }
}
