import React, { Component } from 'react'
import Overview from './components/Overview'
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

  editTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.edit = !task.edit
        }
        return task;
      })
    })
  }


  rehandleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        edit: this.state.task.edit,
      }
    })
  }
  

  render() {
    const { task, tasks, id } = this.state;

    return (
      <div className='App'>
        <Header />
        <div className='inputForm'>
          <AddNewTask />
          <Overview 
            tasks={this.state.tasks} 
            task = {this.state.task}
            id={id}
            edit={this.state.task.edit}
            delTask={this.delTask} 
            editTask={this.editTask}
            rehandleChange={this.rehandleChange}
          />
        </div>
      </div>
    )
  }
}

export default App