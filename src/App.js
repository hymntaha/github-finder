import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/USers';
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
      .get('https://api.github.com/users')

    this.state({user: res.data, loading: false})

  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
