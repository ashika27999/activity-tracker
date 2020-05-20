import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            borderColor: 'null',
        };
    }
    handleMouseClick = () => {
        this.props.openUserModal(this.props.index);
    }
    handleMouseOverCard = () => {
        this.setState({
            borderColor: 'primary',
        });
    }
    handleMouseNotOverCard = () => {
        this.setState({
            borderColor: 'null',
        });
    }
    render() {
        return (
            <div id="User" onClick={this.handleMouseClick} onMouseEnter={this.handleMouseOverCard} onMouseLeave={this.handleMouseNotOverCard}>
                <Card border={this.state.borderColor}>
                    <Card.Header style={{paddingBottom: 0, paddingTop: 5}}>
                        {this.props.user.real_name}
                        <Card.Subtitle className="mb-2 text-muted" style={{fontSize: 13, paddingTop: 5}}>{this.props.user.id}</Card.Subtitle>                        
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>{this.props.user.tz}</Card.Text>
                    </Card.Body>
                </Card>               
            </div>
        )
    }
}

export default User;
