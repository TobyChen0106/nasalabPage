import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import "./Home.css"
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from '../../components/ScrollToTop'


import { postlist } from '../../posts/postlist.js'


class Home extends Component {
	render() {
		const lists = postlist.map((i, index) => (
				<NavLink style={{ textDecoration: 'none' }} to={"/posts/" + i} className="link black">
					<div className="postPreview" style= {i.previewStyle}>
							<img className="previewImage" src={i.previewImage} align="middle" style={i.previewImageStyle}/>
							<div className="previewTitle"  style={i.previewTitleStyle}> {i.previewTitle}</div>
					</div>
				</NavLink>
		));
		return (
			<div className="homePageContainer">
				<div className="homePagePosts">
					{lists}
				</div>
				<div className="information">
					<div className="professor">
						information
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
