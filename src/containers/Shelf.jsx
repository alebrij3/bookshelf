import React from 'react';
import Book from '../components/Book';
import '../assets/styles/containers/Shelf.scss';
import AddBook from '../components/AddBook';
import Search from '../components/Search';

class Shelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      books: this.props.allBooks,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    if (e.target.name === 'search-query') {
      function filterItems(arr, query) {
        return arr.filter(book => book.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
      }
      if (e.target.value !== '') {
        let searchResults = filterItems(this.props.allBooks, e.target.value);
        this.setState({
          isSearching: true,
          books: searchResults,
        })
      } else {
        this.setState({
          isSearching: false,
          books: this.props.allBooks,
        })
      }
    } else if (e.target.name === 'status') {
      if (e.target.value === 'all') {
        this.setState({
          books: this.props.allBooks,
        });
      } else {
        let filterResults = this.props.allBooks.filter(book => book.status === e.target.value);
        this.setState({
          books: filterResults,
        });
      }
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const target = e.target;
    const newBook = {
      id: 200,
      title: target.title.value,
      author: target.author.value,
      cover: target.cover.value
    }
    this.props.allBooks.push(newBook);
    console.log('form submitted');
  }
  render() {
    let books = this.state.books;
    return (
      <>
        <Search handleChange={this.handleChange}/>
        <div id="shelf">
          {books.map(item =>
            <Book key={item.id} {...item} />
          )}
          <AddBook handleSubmit={this.handleSubmit} />
        </div>
      </>
    );
  }
}

export default Shelf;
