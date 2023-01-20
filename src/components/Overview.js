import React, { Component } from 'react'
import TaskItem from './TaskItem';

class Overview extends Component {
  
  render() {
    const { tasks, task } = this.props;

    if (tasks.length == 0) {
      return (
        <ul>
          <li>No more tasks for now ...</li>
        </ul>
      )
    } else {
      return (
        <ul>
          {tasks.map((task) => {
              return <TaskItem tasks={tasks} task={task} 
              delTask={this.props.delTask}
              editTask={this.props.editTask}/>
            
          })}
        </ul>
      );
      }
    
  }

  
};

export default Overview;

