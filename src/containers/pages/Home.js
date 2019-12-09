import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import "./Home.css"
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from '../../components/ScrollToTop'

import { Map, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { postlist } from '../../posts/postlist.js'
import Information from "./Information";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Home extends Component {
	render() {
		const lists = postlist.map((i, index) => (
			<NavLink style={{ textDecoration: 'none' }} to={"/posts/" + index} className="link black">
				<div className="postPreview" style={i.previewStyle} >
					<div className="previewTag" style={i.previewTagStyle}>{i.previewTag}</div>
					<img className="previewImage" src={i.previewImage} align="middle" style={i.previewImageStyle} />
					<div className="previewTitle" style={i.previewTitleStyle}> {i.previewTitle}</div>
				</div>
			</NavLink>
		));
		return (
			<div className="homePageContainer">
				<div className="homePagePosts">
					{lists}
				</div>
				<Information/>
			</div>
		)
	}
}

export default Home
