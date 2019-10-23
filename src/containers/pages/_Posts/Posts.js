import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Posts extends Component {
    render() {
        const postIDs = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const lists = postIDs.map((i, index) => (
            <div key={index} className = "dim w5 ma4">
                <NavLink to={"/posts/" + i} className="link black">
                    <div className=
                        "flex justify-center items-center w5 h4 bg-light-blue ">
                        <div></div>Posts #{i}
                    </div>
                </NavLink>
            </div>
        ));
        return (
            <div className ="">
                {/* <div className = "h1 w-100"></div>
                <div className = "h1 w-100 bg-gray"></div> */}
                <div className = "flex flex-wrap justify-between mh4">                
                    {lists}
                </div>
            </div>
        );
    }
}
