import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import "./Information.css"
import CWChen from "../../images/CWChen.jpg"
import ExampleComponent from "react-rounded-image";

class Information extends Component {
	render() {
		return (
			<div className="information">
				<div className="information-content">

				</div>
				<div className="people">
					<div className="professor">
						<a href="https://scholar.google.com/citations?user=spTwAGcAAAAJ&hl=zh-TW">
							<div className="professor-image-holder">
								<ExampleComponent
									className="professor-image"
									image={CWChen}
									roundedColor="#321124"
									imageWidth="400"
									imageHeight="400"
									roundedSize="0"
								/>
							</div>
						</a>
						<div className="professor-name">
							<div className="professor-name-english">
								Prof. Cheng-Wei Chen
							</div>
							<div className="professor-name-chineese">
								陳政維
							</div>
						</div>

					</div>
					<div className="CurrentStudents">
						information
						</div>
					<div className="PreviousStudents">

					</div>
				</div>
			</div>
		)
	}
}

export default Information
