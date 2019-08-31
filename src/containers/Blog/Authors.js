import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

class Home extends Component {
	render() {
		const postIDs = ["Author1", "Author2", "Author3", "Author4"];
        const lists = postIDs.map((i, index) => (
            <div key={index} className = "dim w5 ma4">
				<div>
					Author:{i}
				</div>
            </div>
        ));
		return (

			<div>
				{lists}
			</div>

		)
	}
}

export default Home
