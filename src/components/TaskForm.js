import React, { useState }from "react";
import { useNavigate } from "react-router-dom"

const TaskForm = ({addTask}) => {

  let [ title, setTitle ] = useState("");
  let [ description, setDescription ] = useState("");
  
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    addTask(title, description);
    navigate("/")
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  };
  console.log(title)
    return (
      <div style={formContainer}>
        <form style={formStyle} onSubmit={onSubmit}>
          <input
            required
            className="input-form"
            name="title"
            type="text"
            placeholder="Write a task"
            onChange={onChangeTitle}
            value={title}
          />
          <textarea
            required
            className="textarea-form"
            name="description"
            placeholder="Write a description"
            onChange={onChangeDescription}
            value={description}
          />
          <button className="btn-form" type="submit">
            Save task
          </button>
        </form>
      </div>
    );
  }


const formStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  background: "#fff",
  width: "500px",
  height: "400px",
  borderRadius: "5px",
  marginTop: "40px"
};
const formContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}
export default TaskForm;
