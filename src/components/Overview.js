import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Overview extends Component {
  
  render() {
    const { tasks } = this.props;

    return (
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>
                  <div>{task.position}.{' '}{task.text}</div>
                  <button onClick={this.props.delTask.bind(this, task.id)}
                  >Remove</button>
              </li>;
        })}
      </ul>
    );
  }

  
};

Overview.propTypes = {
  task: PropTypes.object.isRequired
}

export default Overview;