import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header position-sticky top-0 ">
      <div className="container  ">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">

            <a className="navbar-brand fs-2 fw-bold " id="logo" href="#"><img src="./Images/fevicon.png" alt="" /> Timely</a>
            <button className="navbar-toggler " id="menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon " />
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-75 d-flex justify-content-end" id="menu">
                <li className="nav-item">
                  <a className="nav-link nav-home fs-5 text-light" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle  fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Product
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#product">Top Sale Watches</a></li>
                    <li><a className="dropdown-item" href="#feature">Feature Watches</a></li>
                    <li><a className="dropdown-item" href="#new_arrival">New Arrivals</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link  fs-5" href="/#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  fs-5" href="/Contact">Contact </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  fs-5" href="#"><i className="fas fa-shopping-cart" /></a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>


  )
}

export default Navbar
