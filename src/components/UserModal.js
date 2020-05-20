import React, { Component } from 'react';
import { Modal, Button, Accordion } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class UserModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        };
    }
    handleClose = () => {
        this.props.closeUserModal();
    }
    onDateChange = (date) => {
        this.setState({
            date: date,
        });
    }
    render() {
        // if(this.props.user.activity_periods[0].start_time.replace(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/, '').length === (this.state.date.toDateString().slice(4, ) + '  ')){
        //     console.log('Hi');
        // }
        console.log(this.props.user.activity_periods[0].start_time.replace(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/, '').replace('  ', ''), (this.state.date.toDateString().slice(4, )).replace(/ 0[1-9] /, ' ' + this.state.date.toDateString().slice(4, )[5] + ' '));
        return (
            <div id="UserModal">
                <Modal show={this.props.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Accordion>       
                            <Modal.Title>{this.props.user.real_name}</Modal.Title>                    
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Change Date
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Calendar onChange={this.onDateChange} value={this.state.date} />
                            </Accordion.Collapse>
                        </Accordion>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.user.activity_periods.map((period) => (
                            this.state.date.toDateString().slice(4, ).replace(/ 0[1-9] /, ' ' + this.state.date.toDateString().slice(4, )[5] + ' ') === period.start_time.replace(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/, '').replace('  ', '') && 
                                <li>{period.start_time} to {period.end_time}</li>
                        ))}
                    </Modal.Body>           
                </Modal>         
            </div>
        )
    }
}

export default UserModal;
