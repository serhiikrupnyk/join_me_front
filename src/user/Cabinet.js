import React, { Component } from "react";
import { isAuthenticated } from "../auth";

class Cabinet extends Component{
    constructor() {
        super()
        this.state = {
            user: "",
            redirectToSignin: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
         return fetch("http://localhost:4000/user/id", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",

            }
        }
            .then(data => {
                if (data.error) {
                    console.log("ERROR")
                } else {
                    console.log(data)
                }
            }))
    }

    render() {
        return (
            <div className="container">
                <h2 className="mt-5 md-5">Cabinet</h2>
                <p>{isAuthenticated().email}</p>
            </div>
        )
    }
}

export default Cabinet;