package todo.list.todo.service;

import org.springframework.stereotype.Service;
import todo.list.todo.repo.TaskRepo;

@Service
public class TaskService {
    private final TaskRepo repo;

    public TaskService(TaskRepo repo) {
        this.repo = repo;
    }
}
