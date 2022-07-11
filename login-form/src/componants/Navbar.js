import React from 'react'
import { useNavigate } from "react-router-dom";

function Navbar() {
    let navigate = useNavigate();

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <h2 className="navbar-brand" href="#">Login Page</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-link active">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <button className="btn btn-outline-success mx-2" type="submit" onClick={() => navigate('/register')}>Register</button>
                            <button className="btn btn-outline-success" type="submit" onClick={() => navigate('/Login')}>Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
