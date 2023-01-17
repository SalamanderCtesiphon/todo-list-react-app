import React from "react";

const Overview = (props) => {

  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>
                <div>{task.position}.{' '}{task.text}</div>
                <button onClick={task.delTask}>Remove</button>
            </li>;
      })}
    </ul>
  );
};

export default Overview;