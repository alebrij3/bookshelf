import React from 'react';
import Book from '../components/Book';
import '../assets/styles/containers/Shelf.scss';
import AddBook from '../components/AddBook';
import Search from '../components/Search';

class Shelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "title": '',
      "author": '',
      "cover": '',
      isSearching: false,
      books: this.props.allBooks,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
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
  }
  handleSubmit(e) {
    e.preventDefault();
    const target = e.target;
    this.setState({
      title: target.title.value,
      author: target.author.value,
      cover: target.cover.value
    });
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
    const { allBooks, nowReading, read, wantToRead } = this.props;
    //let books = this.state.isSearching ? this.state.searchResults : allBooks;
    let books = this.state.books;
    return (
      <>
        <Search handleChange={this.handleChange}/>
        <div id="shelf">
          {books.map(item =>
            <Book key={item.id} {...item} />
          )}
          <AddBook handleSubmit={this.handleSubmit} />
          {console.log(this.state)}
        </div>
      </>
    );
  }
}

export default Shelf;
