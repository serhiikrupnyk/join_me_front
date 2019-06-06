import React from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";

const isActive = (history, path) => {
    if (history.location.pathname === path) return {color: "#ff9900"};
    else return {color: "#000000"}
}

const Menu =({ history }) => (
    <div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/")} to="/">Home</Link>
            </li>

            {!isAuthenticated() && (
                <div className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, "/signin")} to="/signin">Sign In</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, "/signup")} to="/signup">Sign Up</Link>
                    </li>
                </div>
            )}
            {isAuthenticated() && (
                <div className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link" style={isActive(history, "/signup")} to="/signup"
                           onClick={() => signout(() => history.push('/'))}>Sign Out</a>
                    </li>
                    <li className="nav-item">
                            <Link className="nav-item" to={`/user/${isAuthenticated()._id}`}>
                                Cabinet
                            </Link>
                    </li>
                </div>
            )}
        </ul>
    </div>
)
export default withRouter(Menu);