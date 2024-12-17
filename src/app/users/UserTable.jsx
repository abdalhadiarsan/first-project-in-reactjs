import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
// import { UserContext } from "../UserContext";
import { Link, Route, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/action";

const UserTable = ({ focusRef }) => {
  const [show, setShow] = useState(false);

  const disPatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (id) => {
    disPatch(removeUser({ id: id }));
    setShow(false);
  };

  return (
    <div>
      <h2>User List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Country</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.gender}</td>
              <td>{user.country}</td>
              <td>{user.city}</td>
              <td>
                {
                  <Link to={`/User-Update/${index}}`}>
                    <button className="btn btn-success">Update User</button>
                  </Link>
                }
              </td>
              <td>
                <Button variant="danger" onClick={handleShow}>
                  Delete User
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
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button className="btn btn-success" onClick={() => focusRef()}>
        Add New User
      </button>
    </div>
  );
};

export default UserTable;
