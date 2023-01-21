import React, { Component } from 'react'
import uniqid from 'uniqid'

export class TaskItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: { 
        id: this.props.task.id,
        text: this.props.task.text,
        edit: this.props.task.edit,
      },
      tasks: this.props.tasks,
    }
  }

  onResubmit = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.edit = !task.edit
        }
        return task;
      }),
      task: this.props.task,
    })
    console.log(this.props.task)
  }

  rehandleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.props.task.id,
        edit: this.props.task.edit,
      }
    })
    console.log(this.props.task)
  }

  render() {
    const { tasks, task } = this.props;

    if (task.edit === true) {
      return(
        <li key={task.id}>
          {(tasks.indexOf(task) + 1 )}.{' '}
            <input 
              onChange={this.rehandleChange}
              value={this.state.task.text}
              type="text" 
              id='taskInput'
              placeholder={task.text}
            ></input>{'     '}
            <div >
              <button onClick={this.props.delTask.bind(this, task.id)}
                >Delete</button>
              <button onClick={this.onResubmit}>Add Task</button>
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