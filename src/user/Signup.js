import React, { Component } from "react";
import { signup } from "../auth";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            error: ""
        }
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    clickSubmit = event => {
        event.preventDefault();
        const {firstName, lastName, email, password, passwordConfirmation} =
            this.state; const user = {
            firstName,
            lastName,
            email,
            password,
            passwordConfirmation
        };
        //console.log(user);
        signup(user)
        
    };

    render() {
        const {firstName, lastName, email, password, passwordConfirmation} =
            this.state; return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 well">
                        <h3 className="text-center">SignUp</h3>
                        <form className="form">
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <input
                                        onChange={this.handleChange("firstName")}
                                        type="text" className="form-control" placeholder="First Name"
                                    value={firstName}
                                />
                            </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="form-group">
                            <input
                                onChange={this.handleChange("lastName")}
                                type="text" className="form-control" placeholder="Last Name"
                                value={lastName}
                            />
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="form-group">
                            <input
                                onChange={this.handleChange("email")}
                                type="email" className="form-control" placeholder="E-mail"
                                value={email}
                            />
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="form-group">
                            <input
                                onChange={this.handleChange("password")}
                                type="password" className="form-control" value="samplepass"
                                placeholder="Password"
                                value={password}
                            />
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="form-group">
                            <input
                                onChange={this.handleChange("passwordConfirmation")}
                                type="password" className="form-control" value="samplepass"
                                placeholder="Confirm password"
                                value={passwordConfirmation}
                            />
                        </div>
                    </div>
                    <div className="text-center col-xs-12">
                        <input onClick={this.clickSubmit} type="button" className="btn btn-
                                default" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
    }
}
export default Signup