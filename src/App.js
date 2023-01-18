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
            delTask={this.delTask} 
            task = {task}
            id={id}
            alterTask={this.alterTask}
          />
        </div>
      </div>
    )
  }
}

export default App