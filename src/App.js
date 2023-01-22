import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import AddNewTask from './components/AddNewTask'

export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tasks: [],
    }
  }
  
  

  delTask = (id) => {
    this.setState({ 
      tasks: [...this.state.tasks.filter(task => task.id !==id)]})
  } 


  render() {
    const { tasks } = this.state;

    return (
      <div className='App'>
        <Header />
        <div className='inputForm'>
          <AddNewTask tasks={tasks}/>
        </div>
      </div>
    )
  }
}

export default App