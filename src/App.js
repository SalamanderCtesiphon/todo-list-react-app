import './App.css'
import Overview from './components/Overview'
import { useState } from 'react'

const App = () => {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([])
  const [todoEditing, setTodoEditing] = useState(null)
  const [editingText, setEditingText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('please add a task')
      return
    }
    addTask({ text, todoEditing })
    
    setText('')
    setTodoEditing(null)
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const submitEdits = (id) => {
    const updatedTasks = [...tasks].map((task) => {
      if (task.id === id) {
        task.text = editingText;
      } 
      return task;
    });
    setTasks(updatedTasks);
    setTodoEditing(null);
  }


  return (
    <div className="App">
      <h1>Task App</h1> 
      <form onSubmit={onSubmit}>
        <label>Enter a Task: </label>
        <input 
          type='text' 
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Submit</button>
        </form> 
      <Overview 
        tasks={tasks} 
        deleteTask={deleteTask}
        setEditingText={setEditingText}
        submitEdits={submitEdits}
        todoEditing={todoEditing}
        setTodoEditing={setTodoEditing}
      />    
    </div>
  )
}

export default App