
const Overview = ({ tasks, deleteTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li className='formItem' key={task.id}>{task.text}<button 
            onClick={() => deleteTask(task.id)}
          >  
          X</button></li>
        ))}
      </ul>
    </div>
  )
}

export default Overview