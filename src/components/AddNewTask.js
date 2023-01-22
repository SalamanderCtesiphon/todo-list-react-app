import React, { Component } from "react";
import Overview from './Overview'
import uniqid from 'uniqid';

class AddNewTask extends Component {

    constructor(props) {
        super(props);
        this.state= { 
            task: { 
            id: uniqid(),
            text: '',
            edit: false,
          },
        }
    }

    handleChange = (e) => {
        this.setState({
          task: {
            text: e.target.value,
            id: this.state.task.id,
            edit: this.state.task.edit,
          }
        })
      }
    
      onSubmit = (e) => {
        e.preventDefault();
        this.setState({
          tasks:  this.props.tasks.concat(this.state.task),
          task: { 
            id: uniqid(),
            text: '',
            edit: false,
          },
        })
      }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
            <label className="formItem" htmlFor='taskInput'>Enter New Task: </label>
            <input 
              className="formItem" 
              onChange={this.handleChange}
              value={this.state.task.text}
              type="text" 
              id='taskInput'
              placeholder='Input task ...'
            ></input>{'     '}
            <button className="formItem" type='submit'>Add Task</button>
          </form>
          <Overview 
            tasks={this.props.tasks} 
            task={this.state.task}
            delTask={this.delTask} 
            editTask={this.editTask}
          />
            </div>
        )
    }
}

export default AddNewTask;