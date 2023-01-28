
const Overview = ({ tasks, deleteTask, todoEditing , setEditingText, submitEdits, setTodoEditing }) => {
  
  return (
    <div>
      <ul>
        { tasks.length === 0 &&
          <li>No more tasks to do</li>
        } 
        {tasks.map((task) => (
          <li className='formItem' key={task.id}>
              {tasks.indexOf(task) + 1}.{' '}
              {task.id === todoEditing ? (
                <input
                  type='text'
                  onChange= {(e) => setEditingText(e.target.value)}
                />
              ) : (
                <div className="textBox">{task.text}</div>
              )}
              <div className="btnBox">
                {task.id === todoEditing ? (
                  <button onClick={() => submitEdits(task.id)}>Submit Edits</button>
                ) : (
                  <button onClick={() => setTodoEditing(task.id)}>Edit</button>
                )}
                <button 
                  onClick={() => deleteTask(task.id)}
                >Delete</button>
               
              </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Overview