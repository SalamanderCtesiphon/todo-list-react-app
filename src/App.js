import React, { Component } from 'react'
import Overview from './components/Overview'
import Header from './components/Header'
import './App.css'
import uniqid from 'uniqid'

export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      task: { 
        id: uniqid(),
        text: '',
      },
      tasks: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      tasks:  this.state.tasks.concat(this.state.task),
      task: { 
        id: uniqid(),
        text: '',
      },
    })
  }

  delTask = (id) => {
    this.setState({ 
      tasks: [...this.state.tasks.filter(task => task.id !==id)]})
  }

  editTask = (id) => {
    alert('We are working on the edit feature for this application and hope to be able to implement it soon.')
  }

  render() {
    const { task, tasks, id } = this.state;

    return (
      <div className='App'>
        <Header />
        <div className='inputForm'>
          <form onSubmit={this.onSubmit}>
            <label htmlFor='taskInput'>Enter New Task: </label>
            <input 
              onChange={this.handleChange}
              value={task.text}
              type="text" 
              id='taskInput'
              placeholder='Input task ...'
            ></input>{'     '}
            <button type='submit'>Add Task</button>
          </form>
          <Overview 
            tasks={tasks} 
            task = {task}
            id={id}
            delTask={this.delTask} 
            editTask={this.editTask}
          />
        </div>
      </div>
    )
  }
}

export default App