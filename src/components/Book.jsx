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
          <li>Formato: {format}</li>
          <li>Fecha Inicio: {dateStart}</li>
          <li>Fecha Fin: {dateEnd}</li>
          <li>Resumen: {excerpt}</li>
          <li>Categoría: {category}</li>
          <li>Etiquetas:
            <ul>
              {tags.map(tag =>
                <li>{tag}</li>  
              )}
            </ul>
          </li>
          <li>{duration}</li>
        </ul>
      </article>
    );
  }
}

export default Book;
