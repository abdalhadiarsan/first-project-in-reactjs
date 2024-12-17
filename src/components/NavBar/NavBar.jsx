import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to={"/"} style={{ textDecoration: 'none' }}>
          <Navbar.Brand >Home</Navbar.Brand>
        </Link>
        <Link to={"/users"} style={{ textDecoration: 'none' }}>
          <Navbar.Brand >Register</Navbar.Brand>
        </Link>
        <Link to={"/add-task"} style={{ textDecoration: 'none' }}>
          <Navbar.Brand >add task</Navbar.Brand>
          <Link to={"/post"} style={{ textDecoration: 'none' }}>
            <Navbar.Brand >add Post</Navbar.Brand>
          </Link>
        </Link>
        <Link to={"/post-list"} style={{ textDecoration: 'none' }}>
          <Navbar.Brand >post-list</Navbar.Brand>
        </Link>
        <Link to={"/products"} style={{ textDecoration: 'none' }}>
          <Navbar.Brand >Products </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
