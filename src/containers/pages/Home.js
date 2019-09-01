import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import "./Home.css"
import { BrowserRouter } from 'react-router-dom'

class Home extends Component {
	render() {
		const postIDs = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
		const lists = postIDs.map((i, index) => (
			<div key={index} className="dim w5 ma4">
				<NavLink to={"/posts/" + i} className="link black">
					<div className=
						"flex justify-center items-center w5 h4 bg-light-blue ">
						<div></div>Posts #{i}
					</div>
				</NavLink>
			</div>
		));
		return (
			<div className="homePageContainer">
				<div className="homePage">
					{lists}
				</div>
			</div>
		)
	}
}

export default Home
