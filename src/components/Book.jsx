import React from 'react';

class Book extends React.Component {
  render() {
    return <h1>Hello! I'm the Book component.</h1>
  }
}

class Bookk {
  constructor(title, author, format, startDate, finishDate, excerpt, category, tags, duration) {
    this.title = title;
    this.author = author;
    this.format = format;
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.excerpt = excerpt;
    this.category = category;
    this.tags = tags;
    this.duration = duration;
  }
}

export default Book;
