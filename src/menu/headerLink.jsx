import React from "react";
import { Link } from "react-router-dom";

import Login from "../auth/login"

export default function HeaderNav() {
    // const [auth, setAuth] = useState(false);

    // function setAuthentication(a) {
    //     console.log('HeaderNav.authenticated is invoked! ', a);
    //     setAuth(a);
    // }, { useState }

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/registration">Registration <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                </ul>
                <Login />
            </div>
        </nav>
    )
}