import React from 'react';
import bookCover from '../assets/static/img/de-cero-a-uno.jpg';

class Book extends React.Component {
  render() {
    const { title, author, format } = this.props;
    console.log(title)
    return (
      <article>
        <img src={bookCover} />
        <h3>{title}</h3>
        <p>{author}</p>
        <ul>
          <li>Formato: {format}</li>
          <li>Fecha Inicio:</li>
          <li>Fecha Fin:</li>
          <li>Resumen:</li>
          <li>Categoría</li>
          <li>Etiquetas:
            <ul>
              <li>etiqueta 1</li>
              <li>etiqueta 2</li>
              <li>etiqueta 3</li>
            </ul>
          </li>
          <li>Duración:</li>
        </ul>
      </article>
    );
  }
}

export default Book;
