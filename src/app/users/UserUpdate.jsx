import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUsers } from "../../redux/action";

const UserUpdate = () => {
  const { index } = useParams();
  const users = useSelector((state) => state.user.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const [updatedUser, setUpdatedUser] = useState({});

  useEffect(() => {
    const foundUser = users.find((u, i) => i === parseInt(index));
    if (foundUser) {
      setUser(foundUser);
      setUpdatedUser({ ...foundUser });
    }
  }, [index, users]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUsers({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        country: user.country,
        city: user.city,
      })
    );
    navigate("/users");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  if (!user) {
    return <p>User Not found</p>;
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update User
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserUpdate;
