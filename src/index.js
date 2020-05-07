const initialState = {
  "nowReading": [],
  "read": [],
  "wantToRead": []
}
/* const book = {
  "title": "De cero a uno",
  "author": "Peter Thiel",
  "format": "Audiobook",
  "startDate": "21/04/2020",
  "finishDate": "24/04/2020",
  "excerpt": "Lorem Ipsum",
  "category": "Business",
  "tags": ['startups','entrepreneurship','business','technology'],
  "duration": "6h 13m",
} */
class Book {
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

const book1 = new Book("De cero a uno","Peter Thiel","Audiobook","21/04/2020","24/04/2020","Lorem Ipsum","Business",['startups','entrepreneurship','business','technology'],"6h 13m")

const book2 = new Book("Shoe Dog","Phil Knight","Audiobook","21/04/2020","24/04/2020","Lorem Ipsum","Business",['startups','entrepreneurship','business','technology'],"10h 25m")

const book3 = new Book("Mariposa","Yusra Mardini","Audiobook","21/04/2020","24/04/2020","Lorem Ipsum","Biography",['immigration','refugee','travel','swimming'],"380p")

console.log(book1);