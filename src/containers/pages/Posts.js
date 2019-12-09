import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import "./Home.css"
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from '../../components/ScrollToTop'


import { postlist } from '../../posts/postlist.js'


class Posts extends Component {
	render() {
		const lists = postlist.filter(i => i.previewTag === "Research").map((i, index) => (
			<div key={index} className="">
				<NavLink style={{ textDecoration: 'none' }} to={"/posts/" + index} className="link black">
					<div className="postPreview" style={i.previewStyle}>
						<div className="previewTag" style={i.previewTagStyle}>{i.previewTag}</div>
						<img className="previewImage" src={i.previewImage} style={i.previewImageStyle} />
						<div className="previewTitle" style={i.previewTitleStyle}> {i.previewTitle}</div>
					</div>
				</NavLink>
			</div>
		));
		return (
			<div className="homePageContainer">
				<div className="homePagePosts">
					{lists}
				</div>
			</div>
		)
	}
}

export default Posts
