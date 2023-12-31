import React, { Component } from "react";
import { Link } from "react-router-dom";
import Model from "react-modal";
import { useState } from "react";
import Signin from "./Signin";

export default function Navbar() {
  const [visible, setvisible] = useState(false);
  const style={
    color:'red'
  }

  const handleButton = () => {
    console.log(visible)
    setvisible(true);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          
          <Link className="navbar-brand" to="/">
            DailyNews
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home{" "}
                </Link>
              </li>
              <li children="navitem">
                <Link className="nav-link" to="/business">
                  {" "}
                  Business{" "}
                </Link>
              </li>
              <li children="navitem">
                <Link className="nav-link" to="/science">
                  Science{" "}
                </Link>
              </li>
              <li children="navitem">
                <Link className="nav-link" to="/health">
                  {" "}
                  Health{" "}
                </Link>
              </li>
              <li children="navitem">
                <Link className="nav-link" to="/sports">
                  {" "}
                  Sports{" "}
                </Link>
              </li>
              <li children="navitem">
                <Link className="nav-link" to="/technology">
                  {" "}
                  Technology{" "}
                </Link>
              </li>
              <li children="navitem">
                {" "}
                <Link className="nav-link" to="/entertainment">
                  {" "}
                  Entertainment{" "}
                </Link>
              </li>
            </ul>

            <button 
              onClick={() => handleButton()}
              type="button"
              className="btn btn-success"
            >
              Signin/SignUP{" "}
            </button>
            <signin/>
             <Model  isOpen={visible}><Signin/></Model>
          </div>
        </div>
      </nav>
    </div>
  );
}
