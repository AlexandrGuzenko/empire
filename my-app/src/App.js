import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import WelcomPage from './components/WelcomePage';
import SubcategoryPage from './components/SubcategoryPage';
import DoctorRecord from './components/DoctorRecord';

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
					<Route path="/subcategory" exact component={SubcategoryPage} />
					<Route path="/subcategory/doctor-record" exact component={DoctorRecord} />
				</div>
			</Router>
		)
	}
}

export default GossUslugiClone;
