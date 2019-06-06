import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./core/Home";
import Menu from "./core/Menu";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Cabinet from "./user/Cabinet";

const MainRouter = () => (
    <div>
        <Menu/>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/user/:id" component={Cabinet}></Route>
        </Switch>
    </div>
)

export default MainRouter;