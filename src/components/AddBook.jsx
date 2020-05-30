import React from 'react';
import '../assets/styles/components/AddBook.scss';

class AddBook extends React.Component {
  /* constructor(props) {
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
    console.log('form submitted');
  } */
  render() {
    
    return (
      <form id="add-book" action="" onSubmit={this.props.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text"/>
        <label htmlFor="author">Author</label>
        <input id="author" name="author" type="text"/>
        <label htmlFor="cover">Book Cover URL</label>
        <input id="cover" name="cover" type="text"/>
        <div className="error">
          <p>Title and author can't be empty.</p>
        </div>
        <input type="submit" value="Agregar Libro"/>
      </form>
    );
  }
}

export default AddBook;
