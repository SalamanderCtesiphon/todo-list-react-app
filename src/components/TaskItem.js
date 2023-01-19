import React, { Component } from 'react'

export class TaskItem extends Component {

  render() {
    const { tasks, task } = this.props;
    
    return (
        <li key={task.id}>
        <div>{(tasks.indexOf(task) + 1 )}.{' '}{task.text}</div>
        <div className='btnBox'>
          <button onClick={this.props.delTask.bind(this, task.id)}
          >Delete</button>
          <button onClick={this.props.editTask.bind(this, task.id)}>Edit</button>
        </div>
        </li>
    )
  }
}

export default TaskItem