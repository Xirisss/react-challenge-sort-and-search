import React, { Component } from 'react';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import axios from 'axios';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: {},
      newUsers: [],
      sortAge: false,
      sortName: false
    };
  }

  componentDidMount() {
    axios.get(`./data.json`)
      .then(res => {
        const users = res.data;
        this.setState({
          users,
          selectedUser: users[0],
          newUsers: users
        });
      });
  }

  findUser(value) {
    const { users } = this.state
    const arr = []
    users.filter((user) => {
      if ( user.name.toLowerCase().indexOf(value) === -1 ) {
        return
      }
      arr.push(user)
    })
    this.setState({
      newUsers: arr,
      selectedUser: arr[0],
      sortAge: false,
      sortName: false
    })
  }

  sortAge(newUsers) {
    if (this.state.sortAge) {
      const arr = this.state.newUsers.slice()
      arr.reverse()
      this.setState({
        newUsers: arr,
        selectedUser: arr[0],
      })
    } else {
      let tsu = this.state.newUsers.slice()
      const arr = tsu.sort(function(a, b) {
        return parseInt(a.age) - parseInt(b.age);
      });

      this.setState({
        newUsers: arr,
        selectedUser: arr[0],
        sortAge: true
      })
    }
  }

  sortName(newUsers) {
    if (this.state.sortName) {
      const arr = this.state.newUsers.slice()
      arr.reverse()
      this.setState({
        newUsers: arr,
        selectedUser: arr[0],
      })
    } else {
      let tsu = this.state.newUsers.slice()
      const arr = tsu.sort((a, b) =>
        (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
      );

      this.setState({
        newUsers: arr,
        selectedUser: arr[0],
        sortName: true
      })
    }
  }


  render() {
    return (
      <div>
        <div className="searchButton">
          <SearchBar findUsers={(value) => this.findUser(value)} />
          <ToolBar
            sortAge={() => this.sortAge()}
            sortName={() => this.sortName()} 
          />
          <h1>Total: {this.state.newUsers.length}</h1>
        </div>
        <div>
          {this.state.newUsers.length > 0 ? (
            <div>
              <ActiveUser user={this.state.selectedUser} />
              <UserList
                users={this.state.newUsers}
                selectedUser={user => this.setState({selectedUser: user})}
              />
            </div>
          ) : (<h1>No Users</h1>)}
        </div>
      </div>
    );
  }
}