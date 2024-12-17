import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TaskUpdateForm = ({
    task ,
    editTask ,
    handleChange ,
    error ,
}) => {
  return (
    <div>
         <Form
        style={{ backgroundColor: "#ddd", padding: "15px", width: "80vw" }}
        onSubmit={editTask}
      >
        <Form.Group className="mb-3" controlId="formBasicFName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            value={task.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFName">
          <Form.Label>description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter Name"
            value={task.description}
            onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicFName">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            placeholder="Enter Name"
            value={task.date}
            onChange={handleChange}
          />
        </Form.Group>

        <p style={{ color: "red" }}>{error}</p>
        <Link to={"/add-task"}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Link>
      </Form>

    </div>
  )
}

export default TaskUpdateForm