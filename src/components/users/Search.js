import React, {Component} from 'react';

class Search extends Component {
  state = {
    text:''
  }

  onChange = (e) => {
    this.setState({text: e.target.value})
  }

  render() {
    return (
      <div>
        <form  className="form">
          <input type="text" placeholder="Search Users..." name="text" value={this.state.text} onChange={this.onChange}/>
          <input type="submit" value="Search" className="btn btn-dark btn-block"/>
        </form>
      </div>
    );
  }
}

export default Search;
