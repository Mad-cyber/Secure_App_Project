import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getUser, logout } from './helpers';

const Nav = ({ history }) => (
    <nav>
        <ul className="nav nav-tabs">
            <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/">Home</Link>
            </li>
            &nbsp;&nbsp;&nbsp;
            <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/create">Create</Link>
            </li>
            &nbsp;&nbsp;&nbsp;
            {!getUser() && (
                <li className="nav-item ml-auto pr-3 pt-3 pb-3">
                    <Link to="/login">Login</Link>
                </li>
            )}
            &nbsp;&nbsp;&nbsp;
            {getUser() && (
                <li
                    onClick={() => logout(() => history.push('/'))}
                    className="nav-item ml-auto pr-3 pt-3 pb-3"
                    style={{ cursor: 'pointer' }}
                >
                    Logout
                </li>
            )}
        </ul>
    </nav>
);

export default withRouter(Nav);




