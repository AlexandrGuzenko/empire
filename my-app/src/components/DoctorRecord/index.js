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
			console.log('res ', JSON.parse(res.data));
			const data = JSON.parse(res.data);
			this.setState({ recieptTime: `${this.createDate(new Date(data.date))} 11:45` });
			this.setState({ doctorsName: data.full_name_worker });
			this.setState({ hospital: data.hospital })
		});
		fetch(`http://85.143.222.165:3000/users/get/${userId}`).then((res) => res.json()).then((res) => {
			this.setState({ phone: res.phone });
			this.setState({ email: res.email });
			this.setState({ snils: res.snils });
			this.setState({ hospital: res.hospital });
			this.setState({ birthDate: this.createDate(new Date(JSON.parse(res.birth_license).dateFrom)) });
			this.setState({ name: res.full_name.split(' ')[0] });
			this.setState({ surname: res.full_name.split(' ')[1] });
			this.setState({ givenName: res.full_name.split(' ')[2] });
		});
	}
	createDate(date) {
		return `${("0" + date.getDate()).slice(-2)}.${("0" + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}`
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
										    <input className="form-control" type="text" value={this.state.surname} placeholder="Иванов" disabled />
										  </div>
										  <div className="form-group">
										    <label htmlFor="exampleInputEmail1">Имя</label>
										    <input className="form-control" type="text" value={this.state.name} placeholder="Readonly input here…" disabled />
										  </div>
										  <div className="form-group">
										    <label htmlFor="exampleInputEmail1">Отчество</label>
										    <input className="form-control" type="text" value={this.state.givenName} placeholder="Readonly input here…" disabled />
										  </div>
										  <div className="form-group">
										    <label htmlFor="exampleInputEmail1">Дата рождения</label>
										    <input className="form-control" type="text" value={this.state.birthDate} placeholder="Readonly input here…" disabled />
										  </div>
										  <div className="form-group">
										    <label htmlFor="exampleInputEmail1">СНИЛС</label>
										    <input className="form-control" type="text" value={this.state.snils} placeholder="Readonly input here…" disabled />
										  </div>
										  <div className="form-group">
										    <label htmlFor="exampleInputEmail1">Телефон</label>
										    <input className="form-control" type="text" value={this.state.phone} placeholder="Readonly input here…" disabled />
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
			    <input className="form-control" type="text" value={this.state.hospital} placeholder="Иванов" onChange={this.handleInputChange} disabled />
			  </div>
				<div className="form-group">
				  <label htmlFor="sel1">Выберите врача, к которому хотите записаться</label>
				  <select className="form-control" id="sel1" onChange={this.handleInputChange} >
				    <option>{this.state.doctorsName}</option>
				  </select>
				</div>
				<div className="form-group">
				  <label htmlFor="sel1">Выберите удобную дату и время</label>
				  <select className="form-control" id="sel1" onChange={this.handleInputChange} >
				    <option>{this.state.recieptTime}</option>
				  </select>
				</div>
			</div>
		)
	}
}

export default DoctorRecord;