import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-brand">
            <ul className="navbar-nav mr-auto">
                <li class="nav-item">
                <Link to="/">Home</Link>
                </li>
                &nbsp;&nbsp;&nbsp;

                <li className="nav-item">
                    <Link to="/create">Create</Link>
                </li>
                &nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>

    </nav>
);


export default Nav;