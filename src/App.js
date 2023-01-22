import React, { Component } from "react";
import Overview from "./components/Overview";
import Header from "./components/Header";
import uniqid from "uniqid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        text: '', 
        id: uniqid()
      },
      tasks: [],
    };

    this.delTask = this.delTask.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '', 
        id: uniqid()
      },
    });
  };

  delTask = (id) => {
    this.setState({ tasks: [...this.state.tasks.filter(task => task.id !==id)]})
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div className="App">
        <Header />
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task:</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} 
        delTask={this.delTask}
        />
      </div>
    );
  }
}

export default App;