import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Task from './Task';

export default class Tasks extends Component {
    render() {        
        return (
            <div style={taskContainer}>
                {this.props.tasks.map(task => 
                <Task 
                    task={task} 
                    key={task.id} 
                    deleteTask={this.props.deleteTask}
                    checkDone={this.props.checkDone}
                    />)}
            </div>
        )
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}
const taskContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: "40px"
  }