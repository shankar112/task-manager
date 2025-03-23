import styles from "../styles/TaskList.module.css";

const TaskList = ({ tasks }) => {
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <li key={task.id}>{task.title} - {task.category}</li>
      ))}
    </ul>
  );
};

export default TaskList;
