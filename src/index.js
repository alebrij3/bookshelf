import React from 'react';
import ReactDOM from 'react-dom';
import Shelf from './containers/Shelf';

/* const shoeDog = {
  "id": 1,
  "title": "Shoe Dog",
  "author": "Phil Knight",
  "format": "Audiobook",
  "dateStart": "21/04/2020",
  "dateEnd": "24/04/2020",
  "excerpt": "Lorem Ipsum",
  "category": "Business",
  "tags": ['startups','entrepreneurship','business','technology'],
  "duration": "10h 25m"
}; */

const initialState = {
  "nowReading": [
    {
      "id": 1,
      "title": "Shoe Dog",
      "author": "Phil Knight",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
  ],
  "read": [
    {
      "id": 1,
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
  ],
  "wantToRead": [
    {
      "id": 1,
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
  ]
}

ReactDOM.render(
  <Shelf {...initialState} />, document.getElementById('root')
);
