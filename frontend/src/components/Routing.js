import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
// import{withRouter} from "react-dom"
import Login from "./Login"
import Signup from "./Signup"
import Home from "./Home"
import Post from "./Post"
import Profile from "./Profile"

import Header from "./Header"

class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header/>
              
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route  exact path="/signup" component={Signup}/>
                        <Route  exact path="/profile" component={Profile}/>
                        <Route  exact path="/home" component={Home}/>
                        <Route  exact path="/post" component={Post}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Routing;