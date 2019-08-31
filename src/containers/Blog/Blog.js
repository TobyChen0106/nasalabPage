import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import Posts from "./Posts/Posts";
import PostRender from "./Posts/PostRender";
import Home from "./Home";
import Authors from "./Authors";

export default class Blog extends Component {
    render() {
        return (
            <div className = "">
                <div className = "Helvetica f3 flex justify-between w-100 h3 ph4">
                    <div className = "w-30 h3 grow">
                        <NavLink to="/" className="link black"><div className = "flex justify-center items-center w-100 h-100 bg-light-green">Home</div></NavLink>
                    </div>
                    <div className = "w-30 h3 grow">
                        <NavLink to="/posts" className="link black"><div className = "flex justify-center items-center w-100 h-100 bg-light-green">Posts</div></NavLink>
                    </div>
                    <div className = "w-30 h3 grow">
                        <NavLink to="/autors" className="link black"><div className = "flex justify-center items-center w-100 h-100 bg-light-green">Authors</div></NavLink>  
                    </div>
                </div>
                <Switch >
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/posts" component={Posts} />
                    <Route exact path="/autors" component={Authors} />
                    <Route path="/posts/:id?" component={PostRender} />
                </Switch>
            </div>
        );
    }
}
