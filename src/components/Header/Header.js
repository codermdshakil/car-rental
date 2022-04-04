import React from 'react';
import './Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../../images/logo.png"
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <Navbar bg="light" className="header" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img  className='logo' src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-links">
                            <NavLink to={'/'}  className="nav-link">Home</NavLink>
                            <NavLink to={'/reviews'}  className="nav-link">Review</NavLink>
                            <NavLink to={'/deshboard'} className="nav-link" >DeshBoard</NavLink>
                            <NavLink to={'/blogs'} className="nav-link" >Blogs</NavLink>
                            <NavLink to={'/about'} className="nav-link" >About</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;