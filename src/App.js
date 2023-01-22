import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import AddNewTask from './components/AddNewTask'
import uniqid from 'uniqid'

export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tasks: [
      ],
    }
  }
  
  

  delTask = (id) => {
    this.setState({ 
      tasks: [...this.state.tasks.filter(task => task.id !==id)]})
  } 

  addItem = (text) => {
    const newTask = {
      id: uniqid(),
      text,
      edit: false
    }
    this.setState({ tasks: [...this.state.tasks, newTask]})
  }


  render() {
    const { tasks } = this.state;

    return (
      <div className='App'>
        <Header />
        <div className='inputForm'>
          <AddNewTask 
          tasks={tasks}
          delTask={this.delTask}
          addItem={this.addItem}
          />
        </div>
      </div>
    )
  }
}

export default App