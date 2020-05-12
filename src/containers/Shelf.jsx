import React from 'react';
import Book from '../components/Book';
import '../assets/styles/containers/Shelf.scss';

class Shelf extends React.Component {
  render() {
    const { nowReading, read, wantToRead } = this.props;
    return (
      <div id="shelf">
        {nowReading.map(item =>
          <Book key={item.id} {...item} />
        )}
      </div>
    );
  }
}

export default Shelf;
