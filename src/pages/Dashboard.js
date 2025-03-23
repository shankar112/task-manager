import { useState } from "react";
import Auth from "../components/Auth";
import TaskContainer from "../components/TaskContainer";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Auth user={user} setUser={setUser} />
      {user && <TaskContainer />}
    </div>
  );
};

export default Dashboard;
