import React, { Component } from 'react'

export class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.editTask = this.editTask.bind(this);
  }

  editTask = (id) => {
    this.setState({
      task: { 
        edit: true,
      },
    })
    console.log(this.props.task)
  }

  render() {
    const { tasks, task } = this.props;

    if (task.edit ===true) {
      return(
        <li key={task.id}>You did it</li>                
      )
    } else {
      return (
        <li key={task.id}>
        <div>{(tasks.indexOf(task) + 1 )}.{' '}{task.text}</div>
        <div className='btnBox'>
          <button onClick={this.props.delTask.bind(this, task.id)}
          >Delete</button>
          <button onClick={this.editTask.bind(this, task.id)}>Edit</button>
        </div>
        </li>
    )
  }
    }
}

export default TaskItem