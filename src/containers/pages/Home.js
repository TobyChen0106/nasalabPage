import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import "./Home.css"
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from '../../components/ScrollToTop'

// import posts from '../posts/posts'
var post = require('../../posts/posts.json');

class Home extends Component {
	render() {
		const postIDs = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
		const lists = postIDs.map((i, index) => (
			<div key={index} className="dim w5 ma4">
				<NavLink to={"/posts/" + i} className="link black">
					<div className="postPreview">
						<div></div>Posts #{i}
					</div>
				</NavLink>
			</div>
		));
		return (
			<div className="homePageContainer">
				<div className="homePagePosts">
					{lists}
				</div>
				<div className="information">
					<div className="professor">
						陳政維
					</div>
				</div>
				<div className="footerBar">
					<div className="copyright">
						©2019 by Next-generation Automated Surgical Apparatus Lab.
					</div>
				</div>
			</div>
		)
	}
}

export default Home
