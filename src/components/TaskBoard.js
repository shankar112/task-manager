import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import styles from "../styles/TaskBoard.module.css";

const TaskBoard = ({ tasks, setTasks }) => {
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [movedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, movedItem);
    setTasks(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps} className={styles.board}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={String(task.id)} index={index}>
                {(provided) => (
                  <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {task.title} - {task.category}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskBoard;
