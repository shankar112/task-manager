import { useState } from "react";
import TaskList from "./TaskList";
import TaskBoard from "./TaskBoard";
import tasksData from "../utils/tasks";

const TaskContainer = () => {
  const [view, setView] = useState("list");
  const [tasks, setTasks] = useState(tasksData);

  return (
    <div>
      <button onClick={() => setView(view === "list" ? "board" : "list")}>Toggle View</button>
      {view === "list" ? <TaskList tasks={tasks} /> : <TaskBoard tasks={tasks} setTasks={setTasks} />}
    </div>
  );
};

export default TaskContainer;
