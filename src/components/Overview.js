import React, { Component } from 'react'
import TaskItem from './TaskItem';

class Overview extends Component {
  
  render() {
    const { tasks, task, id } = this.props;

    if (tasks.length === 0) {
      return (
        <ul>
          <li key={task.id}>All tasks are complete.
          </li>
        </ul>
      )
    } else {
      return (
        <ul>
          {tasks.map((task) => {
              return <TaskItem tasks={tasks} task={task}
              key={task.id} 
              id={id}
              edit={this.props.task.edit}
              delTask={this.props.delTask}
              editTask={this.props.editTask}
              handleChange={this.props.handleChange}
              />
          })}
        </ul>
      );
      }
    
  }

  
};

export default Overview;

