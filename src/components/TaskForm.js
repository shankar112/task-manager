import styles from './TaskList.module.css';

const TaskList = ({ tasks }) => (
  <ul className={styles.taskList}>
    {tasks.map((task) => (
      <li key={task.id} className={styles.taskItem}>
        {task.title}
        <span className={styles.dragHandle}>☰</span>
      </li>
    ))}
  </ul>
);
