import React from 'react';
import { Link } from "react-router-dom";

class AuthPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			subcategories: [],
		}
	}
	componentDidMount() {
		this.loadSubcategories("http://172.16.9.174:3000/templates/all/1").then((res) => {
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
		const styleYesBtn = {
			fontSize: 'large',
			textDecoration: 'none',
			background: '#0065b1',
			color: 'white',
		};
		const styleNoBtn = {
			fontSize: 'large',
			textDecoration: 'none',
			background: '#ee3f58',
			color: 'white',
			width: '100px'
		};
		return (
			<div>
				<table> 
					<tr> 
						<td style={{width: '33%'}}> </td> 
						<td style={{width: '33%'}}> 
						<h1>Добрый день!</h1> 
						<h4>Приветствуем вас на сервисе получения гос услуг.</h4> 
						<br /> 
						<div> Сервис призван сократить рутинные операции на портале государственных услуг </div> 
						<br /> 
						<h4> Вы уже имеете учетную запись на портале гос услуг? </h4> 
						<br /><br /><br /> 
						<Link to="/welcome" style={ styleYesBtn } class="button"> Да </Link> 
						<a style={ styleNoBtn } class="button" href="">Нет</a> 
						</td> 
						<td style={{width: '33%'}}><img src={require('../../media/vpgs961o3So.jpg')} /></td> 
					</tr>
				</table> 
			</div>
		)
	}
}

export default AuthPage;