import React from 'react';
import ReactDOM from 'react-dom';
import Book from './components/Book';

ReactDOM.render(
  <Book />, document.getElementById('root')
);
const initialState = {
  "nowReading": [],
  "read": [],
  "wantToRead": []
}


const book1 = new Bookk("De cero a uno","Peter Thiel","Audiobook","21/04/2020","24/04/2020","Lorem Ipsum","Business",['startups','entrepreneurship','business','technology'],"6h 13m")

const book2 = new Bookk("Shoe Dog","Phil Knight","Audiobook","21/04/2020","24/04/2020","Lorem Ipsum","Business",['startups','entrepreneurship','business','technology'],"10h 25m")

const book3 = new Bookk("Mariposa","Yusra Mardini","Audiobook","21/04/2020","24/04/2020","Lorem Ipsum","Biography",['immigration','refugee','travel','swimming'],"380p")

console.log(book1);