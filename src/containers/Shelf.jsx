import React from 'react';
import Book from '../components/Book';
import '../assets/styles/containers/Shelf.scss';
import AddBook from '../components/AddBook';

class Shelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "title": '',
      "author": '',
      "cover": '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    return (
      <div id="shelf">
        {allBooks.map(item =>
          <Book key={item.id} {...item} />
        )}
        <AddBook handleSubmit={this.handleSubmit} />
        {console.log(this)}
      </div>
    );
  }
}

export default Shelf;
