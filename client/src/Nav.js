import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <ul className="nav nav-tabs">
                <li class="nav-item pr-3 pt-3 pb-3">
                <Link to="/">Home</Link>
                </li>
                <br/>

                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link to="/create">Create</Link>
                </li>
            </ul>
        </div>

    </nav>
);



export default Nav;