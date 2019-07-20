import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import WelcomPage from './components/WelcomePage/index.js';

class GossUslugiClone extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log('componentDidMount');
	}
	render() {
		return (
			<Router>
				<div>
					<Route path="/" exact component={WelcomPage} />
				</div>
			</Router>
		)
	}
}

export default GossUslugiClone;
