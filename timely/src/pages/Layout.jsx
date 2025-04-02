import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="admin-navbar"></div>
      <div className="admin-sidebar">
        <div
          className="d-flex flex-column  flex-shrink-0 p-3 text-white bg-transparent"
          style={{ width: 280 }}
        >
          <a
            href="/admin"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <svg className="bi me-2" width={40} height={32}>
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-4">Sidebar</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link to="/admin" className="nav-link active" aria-current="page">
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#home" />
                </svg>
                Dashboard
              </Link>
            </li>

            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#table" />
                </svg>
                Register
              </a>
            </li>
            <li>
              <Link to="/createproduct" className="nav-link text-white">
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#grid" />
                </svg>
                Add Products
              </Link>
            </li>
            <li>
              <Link to="/createorder" className="nav-link text-white">
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#people-circle" />
                </svg>
                Create Orders
              </Link>
            </li>
          </ul>
          <hr />
          <div className="dropdown logout">
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt
                width={32}
                height={32}
                className="rounded-circle me-2"
              />
              <strong>mdo</strong>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="admin-main">{children}</div>
    </div>
  );
};

export default Layout;
