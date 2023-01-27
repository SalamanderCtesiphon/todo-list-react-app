
const Overview = ({ tasks, deleteTask, editTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li className='formItem' key={task.id}>
              {tasks.indexOf(task) + 1}.{' '}{task.text}
              <div className="btnBox">
                <button 
                  onClick={() => deleteTask(task.id)}
                >  
                  Delete
                </button>
                <button onClick={() =>editTask(task.id)}>Edit</button>
              </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Overview