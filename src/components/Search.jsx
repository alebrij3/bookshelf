import React from 'react';
import '../assets/styles/components/Search.scss';

class Search extends React.Component {
  render() {
    return (
      <section id="search">
        <form action="">
          <label htmlFor="search-input">Search book title</label>
          <input id="search-input" name="search-query" type="text" onChange={this.props.handleChange}/>
          <label htmlFor="book-status">Filter by status</label>
          <select name="status" id="book-status" onChange={this.props.handleChange}>
            <option value="all">All books</option>
            <option value="want-to-read">Want to Read</option>
            <option value="now-reading">Now Reading</option>
            <option value="read">Read</option>
          </select>
        </form>
      </section>
    );
  }
}

export default Search;
