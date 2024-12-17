import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const TaskForm = ({
    task , 
    handleChange ,
    handleSubmit ,
    

}) => {

  const users = useSelector(state => state.user.users)

  return (
    <div>
        <div className="container mt-5">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Task name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={task.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Task date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={task.date}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={task.description}
              onChange={handleChange}
              name="description"
            />
          </Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Group className='m-3'>
            <Form.Label> select user </Form.Label>
            <Form.Control  
              as="select"
              name="user"
              value={task.user}
              onChange={handleChange}
            >
              <option value="#"> select user</option>
              {users.map((user, index) => (
                <option value={user.name} key={index}>
                  {user.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default TaskForm