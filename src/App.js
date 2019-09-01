import React, { Component } from "react";
import { BrowserRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import "./App.css"

import homePageIcon from "./images/homeicon.png";
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import Posts from "./containers/pages/Posts/Posts";
import PostRender from "./containers/pages/Posts/PostRender";
import Home from "./containers/pages/Home";
import Authors from "./containers/pages/Authors";



export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="headerToolbar">
                        <div className="headerToolbarLeft">
                            <NavLink to="/" className="NavLink"><div className="homePageIcon"><img className="homePageIconImg" src={homePageIcon} /></div></NavLink>
                        </div>
                        <div className="headerToolbarCenter">
                            <NavLink to="/" style={{ textDecoration: 'none' }}>
                                <div className="button"><p className="buttonName">HOME</p></div>
                            </NavLink>
                            <NavLink to="/posts" style={{ textDecoration: 'none' }}>
                                <div className="button"><p className="buttonName">POSTS</p></div>
                            </NavLink>
                            <NavLink to="/authors" style={{ textDecoration: 'none' }}>
                                <div className="button"><p className="buttonName">MEMBERS</p></div>
                            </NavLink>
                        </div>
                        <div className="headerToolbarRight">
                            <div className="button loginButton" style={{ textDecoration: 'none' }}><p className="buttonName">Login</p></div>
                        </div>
                    </div>

                    <Switch >
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/posts" component={Posts} />
                        <Route exact path="/authors" component={Authors} />
                        <Route path="/posts/:id?" component={PostRender} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

