import React, { Component } from 'react'

class Overview extends Component {
  
  render() {
    const { tasks } = this.props;

    return (
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>
                  <div>{task.position}.{' '}{task.text}</div>
                  <button onClick={this.props.delTask}>Remove</button>
              </li>;
        })}
      </ul>
    );
  }

  
};

export default Overview;