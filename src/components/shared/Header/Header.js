import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
const Header = () => {
  return (
    <nav className="navbar  navbar-expand-lg navbar-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
              <i class="bi bi-house-fill"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro">
              <i class="bi bi-list-task"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header