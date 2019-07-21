import React from 'react';
import { Link } from "react-router-dom";

class SubcategoryPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			subcategories: [],
		}
	}
	componentDidMount() {
		this.loadSubcategories("http://85.143.222.165:3000/templates/all/1").then((res) => {
			this.setState({ subcategories: JSON.parse(res)});
		})
	}
	loadSubcategories(url) {
	  return new Promise(function(resolve, reject) {
	    var request = new XMLHttpRequest();
	    request.open('GET', url);
	    request.onload = function() {
	      if (request.status === 200) {
	        resolve(request.response);
	      } else {
	        reject(Error(
	          'Произошла ошибка. Код ошибки:' + request.statusText
	        ));
	      }
	    };
	    request.send();
	  });
	}
	render() {
		return (
			<div className="subcategory-page">
				<Link className="on-main-page" to="/welcome">На главную</Link>
				<h1 className="main-headline">Мои шаблоны</h1>
				<div className="subcategory--wrapper">{
					this.state.subcategories.map((subcategory) => {
						return (
							<article key={subcategory.templates_id} className="subcategory">
								<h2><Link to={{ pathname: '/subcategory/doctor-record', state: { templateId: subcategory.templates_id, userId: subcategory.user_id } }}>{subcategory.title}</Link></h2>
							</article>
						)
					})
				}</div>
			</div>
		)
	}
}

export default SubcategoryPage;