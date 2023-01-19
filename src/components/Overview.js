import React, { Component } from 'react'

class Overview extends Component {
  
  render() {
    const { tasks } = this.props;

    return (
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>
                  <div>{(tasks.indexOf(task) + 1 )}.{' '}{task.text}</div>
                  <div className='btnBox'>
                    <button onClick={this.props.delTask.bind(this, task.id)}
                    >Delete</button>
                    <button onClick={this.props.handleEdit(this, task.id)}>Edit</button>
                  </div>
                 </li>;
        })}
      </ul>
    );
  }

  
};

export default Overview;