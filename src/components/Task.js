import React, { Component } from "react";
import "../App.css";
import PropTypes from 'prop-types';

export default class Task extends Component {
  TextStyle() {
    return {
      textDecoration: this.props.task.done ? "line-through" : "none",
      background: this.props.task.done ? "rgb(184, 178, 178)" : "#cfdef3",
      color: this.props.task.done ? "white" : "black"
    };
  }
  backgroundStyle() {
    return {
      background: this.props.task.done ? "gray" : "white"
    }
  }
  render() {
    const { task } = this.props;

    return (
      <div style={{...card, ...this.backgroundStyle()}}>
        <h3 className="title-card" style={this.TextStyle()}>
          {task.title}
        </h3>
        <p className="text-card" style={this.TextStyle()}>{task.description}</p>
        <div className="btns-card">
          <input type="checkbox" className="check-card" onChange={this.props.checkDone.bind(this, task.id)}/>
          <button className="delate-btn" onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
        </div>
      </div>
    );
  }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}
const card = {
  background: "#fff",
  padding: "20px",
  boxShadow: "0 1.5em 2.5em -.5em rgba(#000000, .1)",
  display: "flex",
  flexDirection: "column",
  textAling: "center",
  width: "300px",
  margin: "10px",
  borderRadius: "5px",
};
