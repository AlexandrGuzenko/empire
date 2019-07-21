import React from 'react';
import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

class DoctorRecord extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	componentDidMount() {
		const { userId, templateId } = this.props.location.state;
		fetch(`http://85.143.222.165:3000/templates/get/${userId}/${templateId}`).then((res) => res.json()).then((res) => {
			console.log('res ', res)
		});
		fetch(`http://85.143.222.165:3000/users/get/${userId}`).then((res) => res.json()).then((res) => {
			console.log('ressdFSD ', res)
		});
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
	handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'radio' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
	render() {
		return (
			<div className="doctor-record">
				<Link className="on-main-page" to="/welcome">На главную</Link>
				<h1 className="main-headline">Запись к врачу</h1>
				<Accordion allowZeroExpanded ={true}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Автозаполненные данные
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <form>
										  <div className="form-group">
										    <label htmlFor="exampleInputEmail1">Фамилия</label>
										    <input className="form-control" type="text" value="Иванов" placeholder="Иванов" disabled />
										  </div>
										  <div className="form-group">
										    <label htmlFor="exampleInputEmail1">Имя</label>
										    <input className="form-control" type="text" value="Иван" placeholder="Readonly input here…" disabled />
										  </div>
										  <div className="form-group">
										    <label htmlFor="exampleInputEmail1">Отчество</label>
										    <input className="form-control" type="text" value="Ивановач" placeholder="Readonly input here…" disabled />
										  </div>
										  <div className="form-group">
										    <label htmlFor="exampleInputEmail1">Дата рождения</label>
										    <input className="form-control" type="text" value="03.09.1966" placeholder="Readonly input here…" disabled />
										  </div>
										  <div className="form-group">
										    <label htmlFor="exampleInputEmail1">СНИЛС</label>
										    <input className="form-control" type="text" value="123-342-746 02" placeholder="Readonly input here…" disabled />
										  </div>
										  <div className="form-group">
										    <label htmlFor="exampleInputEmail1">Телефон</label>
										    <input className="form-control" type="text" value="8-937-738-95-84" placeholder="Readonly input here…" disabled />
										  </div>
										  <div className="form-group">
											  <div className="form-check">
												  <input className="form-check-input" type="radio" value="" id="defaultCheck1" disabled checked/>
												  <label className="form-check-label" htmlFor="defaultCheck1">
												    Мужской
												  </label>
												</div>
												<div className="form-check">
												  <input className="form-check-input" type="radio" value="" id="defaultCheck2" disabled />
												  <label className="form-check-label" htmlFor="defaultCheck2">
												    Женский
												  </label>
												</div>
											</div>
										</form>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        <div className="form-group">
			    <label htmlFor="exampleInputEmail1">Срия полина ОМС (при наличии)</label>
			    <input className="form-control" type="text" value="" placeholder="серия полина ОМС" onChange={this.handleInputChange} />
			  </div>
			  <div className="form-group">
			    <label htmlFor="exampleInputEmail1">Номер полина ОМС</label>
			    <input className="form-control" type="text" value="" placeholder="серия полина ОМС" onChange={this.handleInputChange} />
			  </div>
        <div className="form-group">
			    <label htmlFor="exampleInputEmail1">Отделение</label>
			    <button type="button" className="btn btn-primary">Изменить</button>
			    <input className="form-control" type="text" value="Ул. Ивовая д.20" placeholder="Иванов" onChange={this.handleInputChange} disabled />
			  </div>
			  <div className="form-group">
				  <label htmlFor="sel1">Выберите медицинскую услугу, которую хотите получить</label>
				  <select className="form-control" id="sel1" onChange={this.handleInputChange} >
				    <option>1</option>
				    <option>2</option>
				    <option>3</option>
				    <option>4</option>
				  </select>
				</div>
				<div className="form-group">
				  <label htmlFor="sel1">Выберите врача, к которому хотите записаться</label>
				  <select className="form-control" id="sel1" onChange={this.handleInputChange} >
				    <option>1</option>
				    <option>2</option>
				    <option>3</option>
				    <option>4</option>
				  </select>
				</div>
				<div className="form-group">
				  <label htmlFor="sel1">Выберите удобную дату и время</label>
				  <select className="form-control" id="sel1" onChange={this.handleInputChange} >
				    <option>1</option>
				    <option>2</option>
				    <option>3</option>
				    <option>4</option>
				  </select>
				</div>
			</div>
		)
	}
}

export default DoctorRecord;