import React, { Component } from 'react'

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, id } = this.props;

    return (
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>
                  <div>{task.position}.{' '}{task.text}</div>
                  <button onClick={this.props.delTask.bind(this, id)}>Remove</button>
              </li>;
        })}
      </ul>
    );
  }

  
};

export default Overview;