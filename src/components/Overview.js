import React, { Component } from "react";

class Overview extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { tasks, id } = this.props;

  if (tasks.length === 0) {
    return (
      <ul>
        <li>You have completed all tasks.</li>
      </ul>
      
    )
  } else {
    return (
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>
            {tasks.indexOf(task) + 1}. {''} {task.text}
            <button onClick={this.props.delTask.bind(this, task.id)}>Remove</button>        
          </li>;
        })}
      </ul>
    );
  }

  

  }

  
};

export default Overview;
