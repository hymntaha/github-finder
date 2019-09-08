import React, {Component} from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <form  className="from">
          <input type="text" placeholder="Search Users..." name="text"/>
          <input type="sumit" value="Search" className="btn btn-dark btn-block"/>
        </form>
      </div>
    );
  }
}

export default Search;
