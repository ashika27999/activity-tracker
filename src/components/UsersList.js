import React, { Component } from 'react'
import Axios from 'axios';
import User from './User';
import UserModal from './UserModal';

class UsersList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            openModal: false,
            modalUserIndex: -1,
        }
    }
    componentDidMount = () => {
        Axios.get('https://act1vity-tracker.herokuapp.com/users/all-users').then(res => {
            let data = res.data['data'];
            this.setState({
                users: data['users'],
            });
        });
    }
    openUserModal = (index) => {
        this.setState({
            openModal: true,
            modalUserIndex: index,
        });
    }
    closeUserModal = () => {
        this.setState({
            openModal: false,
        });
    }
    render() {
        return (
            <div id="UsersList">
                {this.state.users && this.state.users.map((user, index) => (
                    <div className="user-card" style={{cursor: 'pointer'}}>
                        <User user={user} index={index} openUserModal={this.openUserModal}/>             
                    </div>
                ))}
                {this.state.modalUserIndex > -1 && this.state.users.length > 0 &&  <UserModal show={this.state.openModal} user={this.state.users[this.state.modalUserIndex]} closeUserModal={this.closeUserModal} />}
            </div>
        )
    }
}

export default UsersList;