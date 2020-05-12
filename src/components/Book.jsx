import React from 'react';

class Book extends React.Component {
  render() {
    const { cover, title, author, format, dateStart, dateEnd, excerpt, category, tags, duration } = this.props;
    console.log(title)
    return (
      <article>
        <img src={cover} />
        <h3>{title}</h3>
        <p>{author}</p>
        <ul>
          <li>Categoría: {category}</li>
          <li>Etiquetas:
            <ul>
              {tags.map(tag =>
                <li>{tag}</li>  
              )}
            </ul>
          </li>
        </ul>
      </article>
    );
  }
}

export default Book;
