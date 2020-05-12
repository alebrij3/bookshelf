import React from 'react';
import '../assets/styles/components/AddBook.scss';

class AddBook extends React.Component {
  render() {
    return (
      <form action="">
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="submit" value="Agregar Libro" />
      </form>
    );
  }
}

export default AddBook;