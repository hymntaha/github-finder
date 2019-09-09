import React, {Component} from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <form  className="form">
          <input type="text" placeholder="Search Users..." name="text"/>
          <input type="submit" value="Search" className="btn btn-dark btn-block"/>
        </form>
      </div>
    );
  }
}

export default Search;
