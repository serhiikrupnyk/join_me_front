import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { signin, authenticate } from "../auth";

class Signin extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            error: "",
            redirectToRefer: false,
            loading: false
        }
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    clickSubmit = event => {
        event.preventDefault();
        this.setState({loading: true});
        const {email, password} =
            this.state; const user = {
            email,
            password,
        };
        signin(user).then(data => {
            authenticate(data, () => {
                this.setState({redirectToRefer: true})
            })
        })
    };

    signinForm = (email, password) => (
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-md-offset-3 well">
                <h3 className="text-center">SignIn</h3>
                <form className="form">
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
                    <div className="text-center col-xs-12">
                        <input onClick={this.clickSubmit} type="button" className="btn btn-
                                default" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )

    render() {
        const { email, password, redirectToRefer, loading } = this.state;
        if (redirectToRefer) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                {loading ? (
                    <div className="jumbotron text-center">
                        <h2>Loading...</h2>
                    </div>
                ): ("")}
                {this.signinForm(email, password)}
            </div>
        )
    }
    }

    export default Signin