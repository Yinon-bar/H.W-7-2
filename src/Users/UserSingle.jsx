import React, { useState } from "react";
import "./UserSingle.css";
import axios from "axios";

function UserSingle(props) {
  const [tasks, setTasks] = useState([]);
  const [isDisplay, setIsDisplay] = useState(false);
  const handleTasks = async () => {
    const resp = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?userId=" + props.user.id
    );
    const top3Tasks = resp.data.slice(0, 3);
    setTasks(top3Tasks);
    console.log(top3Tasks);
    setIsDisplay(!isDisplay);
  };

  return (
    <div className={!isDisplay ? "UserSingle notActive" : "UserSingle active"}>
      <h4>{props.user.id}</h4>
      <h3>{props.user.name}</h3>
      <h4>{props.user.email}</h4>
      <button onClick={handleTasks}>
        {!isDisplay ? "Show Tasks" : "Hide Tasks"}
      </button>
      {isDisplay && (
        <div className="tasks">
          <h4>Tasks:</h4>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserSingle;
