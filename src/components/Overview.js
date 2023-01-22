import React, { Component } from 'react'
import TaskItem from './TaskItem';

class Overview extends Component {
  
  render() {
    const { tasks } = this.props;

    if (tasks.length === 0) {
      return (
        <ul>
          <li key={this.props.task.id}>All tasks are complete.
          </li>
        </ul>
      )
    } else {
      return (
        <ul>
          {tasks.map((task) => {
              return <TaskItem tasks={tasks} task={task}
              key={this.props.task.id} 
              id={this.props.task.id}
              edit={this.props.task.edit}
              delTask={this.props.delTask}
              editTask={this.props.editTask}
              rehandleChange={this.props.rehandleChange}
              />
          })}
        </ul>
      );
      }
    
  }

  
};

export default Overview;

