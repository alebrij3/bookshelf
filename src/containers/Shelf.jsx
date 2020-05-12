import React from 'react';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

class Shelf extends React.Component {
  render() {
    const { nowReading, read, wantToRead } = this.props;
    return (
      <div>
        <h2>Now Reading:</h2>
        {nowReading.map(item =>
          <Book key={item.id} {...item} />
        )}
      <AddBook />
      </div>
    );
  }
}

export default Shelf;
