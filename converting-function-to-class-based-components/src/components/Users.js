import { Component, useState } from 'react';
import User from './User';

import classes from './Users.module.css';

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

// }

  class Users extends Component {
    constructor(){
      super();
      this.state = { showUsers: true }
    }
    
    toggleUsersHandler(){
      this.setState((curState) => {
        return {showUsers:  !this.state.showUsers}
      });
    }
    render() {
      const usersList = (
        <ul>
          {this.props.users.map((user) => (
            <User key={user.id} name={user.name} />
          ))}
        </ul>
      );
      return (
        <div className={classes.users}>
          <button onClick={this.toggleUsersHandler.bind(this)}>
            {this.state.showUsers ? 'Hide' : 'Show'} Users
          </button>
          {this.state.showUsers && usersList}
        </div>
      );
    }
  }




  // const toggleUsersHandler = () => {
  //   setShowUsers((curState) => !curState);
  // };







export default Users;
