import React from 'react';
import '../assets/styles/components/Search.scss';

class Search extends React.Component {
  render() {
    return (
      <section id="search">
        <form action="">
          <input type="text" onChange={this.props.handleChange}/>
          {/* <select name="status" id="">
            <option value="wantToRead">Want to Read</option>
            <option value="nowReading">Now Reading</option>
            <option value="read">Read</option>
          </select> */}
        </form>
      </section>
    );
  }
}

export default Search;
