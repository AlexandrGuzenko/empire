import React from 'react';
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
	}
	componentDidMount() {

	}
	render() {
		return (
			<div className="doctor-record">
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
										  <div class="form-group">
										    <label for="exampleInputEmail1">Фамилия</label>
										    <input class="form-control" type="text" value="Иванов" placeholder="Иванов" disabled />
										  </div>
										  <div class="form-group">
										    <label for="exampleInputEmail1">Имя</label>
										    <input class="form-control" type="text" value="Иван" placeholder="Readonly input here…" disabled />
										  </div>
										  <div class="form-group">
										    <label for="exampleInputEmail1">Отчество</label>
										    <input class="form-control" type="text" value="Ивановач" placeholder="Readonly input here…" disabled />
										  </div>
										  <div class="form-group">
										    <label for="exampleInputEmail1">Дата рождения</label>
										    <input class="form-control" type="text" value="03.09.1966" placeholder="Readonly input here…" disabled />
										  </div>
										  <div class="form-group">
										    <label for="exampleInputEmail1">СНИЛС</label>
										    <input class="form-control" type="text" value="123-342-746 02" placeholder="Readonly input here…" disabled />
										  </div>
										  <div class="form-group">
										    <label for="exampleInputEmail1">Телефон</label>
										    <input class="form-control" type="text" value="8-937-738-95-84" placeholder="Readonly input here…" disabled />
										  </div>
										  <div class="form-group">
											  <div class="form-check">
												  <input class="form-check-input" type="radio" value="" id="defaultCheck1" disabled checked/>
												  <label class="form-check-label" for="defaultCheck1">
												    Мужской
												  </label>
												</div>
												<div class="form-check">
												  <input class="form-check-input" type="radio" value="" id="defaultCheck2" disabled />
												  <label class="form-check-label" for="defaultCheck2">
												    Женский
												  </label>
												</div>
											</div>
										</form>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        <div class="form-group">
			    <label for="exampleInputEmail1">Срия полина ОМС (при наличии)</label>
			    <input class="form-control" type="text" value="" placeholder="серия полина ОМС" disabled />
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1">Номер полина ОМС</label>
			    <input class="form-control" type="text" value="" placeholder="серия полина ОМС" disabled />
			  </div>
        <div class="form-group">
			    <label for="exampleInputEmail1">Отделение</label>
			    <button type="button" class="btn btn-primary">Изменить</button>
			    <input class="form-control" type="text" value="Ул. Ивовая д.20" placeholder="Иванов" disabled />
			  </div>
			  <div class="form-group">
				  <label for="sel1">Выберите медицинскую услугу, которую хотите получить</label>
				  <select class="form-control" id="sel1">
				    <option>1</option>
				    <option>2</option>
				    <option>3</option>
				    <option>4</option>
				  </select>
				</div>
				<div class="form-group">
				  <label for="sel1">Выберите врача, к которому хотите записаться</label>
				  <select class="form-control" id="sel1">
				    <option>1</option>
				    <option>2</option>
				    <option>3</option>
				    <option>4</option>
				  </select>
				</div>
				<div class="form-group">
				  <label for="sel1">Выберите удобную дату и время</label>
				  <select class="form-control" id="sel1">
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