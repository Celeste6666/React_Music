import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png';
import './Navbar.scss'


class Navbar extends Component {
  render() {
    return (
        <nav className="d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand">
              <img src={logo} className="logo" alt="logo" />
          </Link>
          <div className="search position-relative w-50">
            <input type="text" className="search-input form-control border-0 border-bottom" placeholder="Search" />
            <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass"
            size="xl"
            className="text-secondary position-absolute top-50 end-0 translate-middle" />
          </div>
          <div className="avatar">
            <img
            src="https://images.unsplash.com/photo-1640622303392-7d2bee0c2438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="" className="rounded-circle" />
            <span className="mx-2">Celeste</span>
            <FontAwesomeIcon icon="fa-solid fa-caret-down" />
          </div>
          <button type="button" className="btn position-relative">
          <FontAwesomeIcon icon="fa-regular fa-bell"  size="xl"/>
            <span
            className="position-absolute p-1 bg-danger badge rounded-circle">
              <span className="visually-hidden">New alerts</span>
            </span>
          </button>         
        </nav>
    );
  }
}

export default Navbar;
