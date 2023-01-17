import React, { Component } from 'react'
import Overview from './components/Overview'
import Header from './components/Header'
import './App.css'

export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      task: { text: ''},
      tasks: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      tasks:  this.state.tasks.concat(this.state.task),
      task: { text: '' },
    })
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='inputForm'>
          <form onSubmit={this.state.onSubmit}>
            <label htmlFor='taskInput'>Enter New Task: </label>
            <input 
              type="text" 
              id='taskInput'
              placeholder='New task ...'
            ></input>{'     '}
            <button type='submit'>Add Task</button>
          </form>
          <Overview />
        </div>
      </div>
    )
  }
}

export default App