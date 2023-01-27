
const Overview = ({ tasks, deleteTask, editTask, setEditText, text, edit, submitEdits }) => {
  
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li className='formItem' key={task.id}>
              {tasks.indexOf(task) + 1}.{' '}
              {task.id === editTask ? (
                <input
                  type='text'
                  onChange= {(e) => setEditText(e.target.value)}
                />
              ) : (
                <div>{task.text}</div>
              )}
              <div className="btnBox">
                {task.id = edit ? (
                  <button onClick={() => submitEdits(task.id)}>Submit Edits</button>
                ) : (
                  <button onClick={() => setEditText(task.id)}>Edit</button>
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