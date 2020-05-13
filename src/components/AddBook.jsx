import React from 'react';
import '../assets/styles/components/AddBook.scss';

class AddBook extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="title">Title</label>
        <input id="title" type="text"/>
        <label htmlFor="author">Author</label>
        <input id="author" type="text"/>
        <input type="submit" value="Agregar Libro" />
      </form>
    );
  }
}

export default AddBook;