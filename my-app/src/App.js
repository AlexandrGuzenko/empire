import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import WelcomPage from './components/WelcomePage';
import SubcategoryPage from './components/SubcategoryPage';
import DoctorRecord from './components/DoctorRecord';
import AuthPage from './components/AuthPage';

class GossUslugiClone extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {

	}
	render() {
		return (
			<Router>
				<div>
					<Route path="/" exact component={AuthPage} />
					<Route path="/welcome" component={WelcomPage} />
					<Route path="/subcategory-page" component={SubcategoryPage} />
					<Route path="/subcategory/doctor-record" component={DoctorRecord} />
				</div>
			</Router>
		)
	}
}

export default GossUslugiClone;
