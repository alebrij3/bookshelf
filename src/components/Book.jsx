import React from 'react';
import '../assets/styles/components/Book.scss';

class Book extends React.Component {
  render() {
    const { cover, title, author } = this.props;
    //const { cover, title, author, format, dateStart, dateEnd, excerpt, category, tags, duration } = this.props;
    /* let hasCategory;
    let hasTags;
    if (category == '') {
      hasCategory = false;
    } else {
      hasCategory = true;
    }
    if (tags.length == 0) {
      hasTags = false;
    } else {
      hasTags = true;
    } */
    return (
      <article className="book">
        <img src={cover} />
        <div className="book-details">
          <h3>{title}</h3>
          <p>{author}</p>
          {/*<ul>
            {hasCategory ? <li>Categoría: {category}</li> : null}
            {hasTags ? <li>Etiquetas:
              <ul className="tags">
                {tags.map(tag =>
                  <li>{tag}</li>  
                )}
              </ul>
            </li> : null}
          </ul> */}
        </div>
      </article>
    );
  }
}

export default Book;
