import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    this.state({loading: true});

    const res = await axios
      .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.state({user: res.data, loading: false})

  }

  searchUsers = async text =>{
    this.state({loading: true});

    const res = await axios
      .get(`https://api.github.com/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.state({user: res.data, loading: false})
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUser={this.searchUsers}/>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
