import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import task from "./sample/task.json";

// COMPONENTS
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";

class App extends React.Component {
  state = {
    tasks: task,
  };

  addTask = (title, description) => {
    const newTasks = {
      title: title,
      description: description,
      id: this.state.tasks.length,
    };
    this.setState({
      tasks: [...this.state.tasks, newTasks],
    });
  };

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: newTasks,
    });
  };

  checkDone = (id) => {
    const newTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    return (
      <Router>
        <div className="body">
          <nav className="navbar">
            <h1 className="app-title">AppTask</h1>
            <ul className="list-container">
              <li className="list-element">
                <Link className="link-nav" to="/">Tasks</Link>
              </li>
              <li className="list-element">
                <Link className="link-nav" to="/new-task">Add Task</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <Tasks
                  deleteTask={this.deleteTask}
                  checkDone={this.checkDone}
                  tasks={this.state.tasks}
                />
              }
            />
            <Route
              path="/new-task"
              element={<TaskForm addTask={this.addTask} />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
