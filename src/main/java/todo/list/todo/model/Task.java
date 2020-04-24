package todo.list.todo.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Data
@Document("task")
public class Task {
    @Id
    private String id = UUID.randomUUID().toString();
    private String taskName;

    public Task(String taskName) {
        this.taskName = taskName;
    }
}
