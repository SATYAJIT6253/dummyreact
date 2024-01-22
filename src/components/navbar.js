import React from "react";
 

export default function Navbar() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}    

      <div className="nav-menu">  

      <nav className="navbar navbar-expand-lg shadow  bg-white rounded">

      <a className="navbar-brand" href="#">
          Thelewala
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse p-2 mb-2" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Log In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
  );
}
