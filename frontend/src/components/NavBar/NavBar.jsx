import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import SearchBar from "../SearchBar/SearchBar";
import { Container, Row, Col } from "react-bootstrap";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
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
              <button className="navBar__button" onClick={logoutUser}>
                Sign Out
              </button>
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
    </div>
  );
};

export default Navbar;
