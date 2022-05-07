import React from "react";
import { useContext } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import SearchBar from "../SearchBar/SearchBar";
import { Container, Row, Col } from "react-bootstrap";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav>
      <Container>
        <Row className="d-flex align-items-center">
          <Col className="brand">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <b>YewTewb</b>
            </Link>
          </Col>
          <Col sm={6} className="d-flex align-items-center">
            <SearchBar />
          </Col>
          <Col className="d-flex justify-content-end">
            {user ? (
              // <button className="navBar__button" onClick={logoutUser}>
              //   Sign Out
              // </button>

              <DropdownButton
                id="profile-btn"
                title={user.first_name.charAt(0).toUpperCase()}
                bsPrefix="custom-btn"
              >
                <Dropdown.Item>Your Channel</Dropdown.Item>
                <Dropdown.Item>SETTINGS</Dropdown.Item>
                <Dropdown.Item onClick={logoutUser}>LOG OUT</Dropdown.Item>
              </DropdownButton>
            ) : (
              <button
                className="navBar__button"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Navbar;
