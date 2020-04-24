package todo.list.todo.repo;

import org.springframework.data.repository.CrudRepository;
import todo.list.todo.model.Task;

import java.util.List;

public interface TaskRepo extends CrudRepository<Task,String> {
    List<Task> findAll();
    List<Task> findAllById(String id);
}
