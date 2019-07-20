import React from 'react';
import { Link } from "react-router-dom";

class SubcategoryPage extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {

	}
	render() {
		return (
			<div className="subcategory-page">
				<article className="subcategory">
					<h2><Link to="/subcategory/doctor-record">Запись к врачу</Link></h2>
				</article>
				<article className="subcategory">
					<h2>Медицинская услуга 2</h2>
				</article>
				<article className="subcategory">
					<h2>Медицинская услуга 3</h2>
				</article>
				<article className="subcategory">
					<h2>Медицинская услуга 4</h2>
				</article>
				<article className="subcategory">
					<h2>Медицинская услуга 5</h2>
				</article>
				<article className="subcategory">
					<h2>Медицинская услуга 6</h2>
				</article>
				<article className="subcategory">
					<h2>Медицинская услуга 7</h2>
				</article>
				<article className="subcategory">
					<h2>Медицинская услуга 8</h2>
				</article>
				<article className="subcategory">
					<h2>Другие</h2>
				</article>
			</div>
		)
	}
}

export default SubcategoryPage;