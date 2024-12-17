import React, { useState, useEffect, useRef, useCallback } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import UserTable from "./UserTable";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/action";
import { fetchCitiesByCountry, fetchCountries } from "../../helpers/Helpers";

const AddUser = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    gender: "",
    country: "",
    city: "",
  });

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [errors, setErrors] = useState({});
  const disPatch = useDispatch();

  const users = useSelector((state) => state.user.users);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    setCountries(["USA", "Canada", "UK", "Australia"]);
  }, []);

  useEffect(() => {
    setCountries(fetchCountries());
  }, []);

  useEffect(() => {
    if (user.country) {
      const fetchedCities = fetchCitiesByCountry(user.country);
      setCities(fetchedCities);
    } else {
      setCities([]);
    }
  }, [user.country]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = useCallback(() => {
    const newErrors = {};
    if (!user.name) newErrors.name = "Name is required";
    if (!user.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!user.phone) newErrors.phone = "Phone is required";
    if (!user.gender) newErrors.gender = "Gender is required";
    if (!user.country) newErrors.country = "Country is required";
    if (!user.city) newErrors.city = "City is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      disPatch(addUser(user));

      setUser({
        id: "",
        name: "",
        email: "",
        phone: "",
        gender: "",
        country: "",
        city: "",
      });

      console.log(users);
      nameRef.current.focus();
    }
  };
  const focusRef = () => {
    nameRef.current.focus();
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>Create User</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter name"
                isInvalid={!!errors.name}
                ref={nameRef}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter email"
                isInvalid={!!errors.email}
                ref={emailRef}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                placeholder="Enter phone"
                isInvalid={!!errors.phone}
                ref={phoneRef}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={user.gender}
                onChange={handleChange}
                isInvalid={!!errors.gender}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.gender}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                as="select"
                name="country"
                value={user.country}
                onChange={handleChange}
                isInvalid={!!errors.country}
              >
                <option value="">Select country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.country}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                as="select"
                name="city"
                value={user.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
                disabled={!user.country}
              >
                <option value="">Select city</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="success" className="m-2">
              <Link
                to={"/add-task"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Add Task
              </Link>
            </Button>
          </Form>

          {Object.keys(errors).length > 0 && (
            <Alert variant="danger" className="mt-3">
              Please fix the errors above.
            </Alert>
          )}
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-5">
        <Col md={10}>
          <UserTable focusRef={focusRef} />
        </Col>
      </Row>
    </Container>
  );
};

export default AddUser;
