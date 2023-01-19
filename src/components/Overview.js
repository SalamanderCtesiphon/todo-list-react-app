import React, { Component } from 'react'
import TaskItem from './TaskItem';

class Overview extends Component {
  
  render() {
    const { tasks, task } = this.props;

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

  
};

export default Overview;