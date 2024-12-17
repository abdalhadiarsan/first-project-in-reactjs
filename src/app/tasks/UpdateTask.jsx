import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
export default function UpdateTask() {
  const { index } = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const route = useNavigate();
  const [task, setTask] = useState({
    name: "",
    username: "",
    date: "",
    description: ''
  });
  useEffect(() => {
    setTask(tasks.find((t, i) => i === parseInt(index)));
  }, [tasks]);
  function handleChange(e) {
    const { name, value } = e.target;
    setTask((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }
  const VeiwResult = (e) => {
    e.preventDefault();

    dispatch({
      type: "UPDATE_TASK",
      payload: {
        id: parseInt(index),
        name: task.name,
        date: task.date,
        userId: task.userId,
      },
    });
    route("/add-task");
  };
  return (
    <div className="container">
      <h1 className="header">Add Task</h1>
      <Form onSubmit={VeiwResult}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="label">Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name..."
            name="name"
            value={task.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Label className="label">Users Name</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="username"
          value={task.username}
          onChange={handleChange}
        >
          <option value={task.username}>{task.username}</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="label">Start Date</Form.Label>
          <Form.Control
            type="date"
            value={task.date}
            name="date"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
