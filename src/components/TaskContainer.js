import { useState } from "react";
import TaskList from "./TaskList";
import TaskBoard from "./TaskBoard";

const TaskContainer = ({ tasks }) => {
  const [view, setView] = useState("list");

  return (
    <div>
      <button onClick={() => setView(view === "list" ? "board" : "list")}>
        Toggle View
      </button>
      {view === "list" ? <TaskList tasks={tasks} /> : <TaskBoard tasks={tasks} />}
    </div>
  );
};

export default TaskContainer;
