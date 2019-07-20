import React from 'react';

class WelcomePage extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log('componentDidMount');
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
							Добро пожаловать, здесь мы поможем вам соориентироваться на сайте <b>"Госуслуги"</b>. Тут еще текст, который позже поправим. И на всякий случай третье предложение.
							<br />
						 	<b>Выберите категорию:</b>
						 </p>
					</section>
					<section className="category-choose"> 
						<article className="category">
							<h2>Медицина</h2>
						</article>
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