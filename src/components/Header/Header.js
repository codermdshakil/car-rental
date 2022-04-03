import React from 'react';
import './Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <Navbar bg="light" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand   href="#home">
                        <img  className='logo' src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to={'/'}  className="nav-link">Home</Link>
                            <Link to={'/reviews'}  className="nav-link">Review</Link>
                            <Link to={'/deshboard'} className="nav-link" >DeshBoard</Link>
                            <Link to={'/blogs'} className="nav-link" >Blogs</Link>
                            <Link to={'/about'} className="nav-link" >About</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;