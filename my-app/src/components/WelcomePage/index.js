import React from 'react';
import { Link } from "react-router-dom";

class WelcomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	componentDidMount() {

	}
	render() {
		return (
			<div className="welcom-page--wrapper">
				<section className="welcom-page__avatar">
					<img src={require("../../media/scale_1200.webp")} />
				</section>
				<div className="welcom-page__main">
					<section className="welcome-text--wrapper">
						<p className="welcome-text">
							Добро пожаловать, мы поможем Вам получить государственные услуги на основе шаблонов, которые созданы именно для Вас.
							<br />
						 	<b>Выберите категорию:</b>
						 </p>
					</section>
					<section className="category-choose"> 
						<Link to="/subcategory-page">
							<article className="category">
								<h2>Медицина</h2>
							</article>
						</Link>
						<article className="category">
							<h2>ЖКХ</h2>
						</article>
						<article className="category">
							<h2>Заказать документы ормор лоилоилои лио </h2>
						</article>
						<article className="category">
							<h2>Другое</h2>
						</article>
					</section>
				</div>
			</div>
		)
	}
}

export default WelcomePage;