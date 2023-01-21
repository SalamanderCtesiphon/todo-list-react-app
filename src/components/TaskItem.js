import React, { Component } from 'react'

export class TaskItem extends Component {

  onResubmit = (id) => {
    this.setState({
      tasks: this.props.tasks.map(task => {
        if (task.id === id) {
          task.edit = !task.edit
      }
        return task;
      }),
      task: {
        text: this.props.task.text,
        id: this.props.task.id,
        edit: this.props.task.edit,
      }
    })
  }

 

  render() {
    const { tasks, task } = this.props;

    if (task.edit === true) {
      return(
        <li key={task.id}>
          {(tasks.indexOf(task) + 1 )}.{' '}
            <input 
              onChange={this.props.rehandleChange}
              value={this.props.task.text}
              type="text" 
              id='taskInput'
              placeholder={task.text}
            ></input>{'     '}
            <div >
              <button onClick={this.props.delTask.bind(this, task.id)}
                >Delete</button>
              <button onClick={this.onResubmit.bind(this, task.id)}>Add Task</button>
            </div>
        </li>                
      )
    } else {
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
}

export default TaskItem