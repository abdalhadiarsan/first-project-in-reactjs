import React from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TasksList = ({
    show , 
    handleShow , 
    handleClose ,
    handleDelete ,
}) => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div>
        <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id </th>
              <th>task Name</th>
              <th>Description</th>
              <th>user</th>
              <th>date</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>{task.userId}</td>
                <td>{task.date}</td>
                <td>
                  <div className="d-flex gap-4">
                    <Link to={`/Task-Update/${i}`}>
                      <Button variant="success">Update</Button>
                    </Link>

                    <Button variant="danger" onClick={handleShow}>
                      Delete task
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>متأكد من كلامك ؟؟</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(i)}
                        >
                          Delete
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

    </div>
  )
}

export default TasksList ;