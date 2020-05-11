import React from 'react';
import ReactDOM from 'react-dom';
import Shelf from './containers/Shelf';

const initialState = {
  "allBooks": [],
  "nowReading": [
    {
      "id": 1,
      "cover": "../assets/static/img/shoe-dog.jpg",
      "title": "Shoe Dog",
      "author": "Phil Knight",
      "format": "audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "",
      "excerpt": "In this instant and tenacious New York Times bestseller, Nike founder and board chairman Phil Knight offers a rare and revealing look at the notoriously media-shy man behind the swoosh (\"Booklist,\" starred review), opening up about his company's early days as an intrepid start-up and its evolution into one of the world s most iconic, game-changing, and profitable brands. Young, searching, fresh out of business school, Phil Knight borrowed fifty dollars from his father and launched a company with one simple mission: import high-quality, low-cost running shoes from Japan. Selling the shoes from the trunk of his car in 1963, Knight grossed eight thousand dollars that first year. Today, Nike s annual sales top $30 billion. In this age of start-ups, Knight s Nike is the gold standard, and its swoosh is more than a logo. A symbol of grace and greatness, it s one of the few icons instantly recognized in every corner of the world. But Knight, the man behind the swoosh, has always been a mystery. In \"Shoe Dog,\" he tells his story at last. It all begins with a classic crossroads moment at twenty-four, backpacking across the world, and wrestling with life s Great Questions. Rather than work for a big corporation, Knight decides he will create something all his own, something new, dynamic, different. He details the many terrifying risks he encountered, the crushing setbacks, the ruthless competitors, the countless doubters and haters and hostile bankers as well as his many thrilling triumphs and narrow escapes. Above all, he recalls the relationships that formed the heart and soul of Nike, with his former track coach, the irascible and charismatic Bill Bowerman, and with his first employees, a ragtag group of misfits and savants who quickly became a band of swoosh-crazed brothers. Together, harnessing the electrifying power of a bold vision and a shared belief in the redemptive, transformative power of sports, they created a brand and a culture that changed everything.\"",
      "category": "Business",
      "tags": ['nike','entrepreneurship','business'],
      "duration": "13h 21m"
    },
    {
      "id": 1,
      "cover": "../assets/static/img/de-cero-a-uno.jpg",
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "format": "audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Peter Thiel, gran inversionista y emprendedor, narra a partir de su experiencia qué tipo de interrogantes debe hacerse una startup para poder triunfar sobre la competencia. Con el fin de no fracasar, hay que innovar y partir de una clara premisa: faltan varios secretos por ser descubiertos. Por ello, Thiel y Masters desmenuzan las bases fundamentales que nos harán progresar de cero a uno.",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "6h 13m"
    },
    {
      "id": 1,
      "title": "El hombre en busca de sentido",
      "author": "Viktor Frankl",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "",
      "tags": [],
      "duration": "10h 25m"
    },
  ],
  "read": [
    {
      "id": 1,
      "title": "The Hard Thing About Hard Things",
      "author": "Ben Horowitz",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "",
      "tags": [],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "Every Tool's a Hammer",
      "author": "Adam Savage",
      "format": "Audiobook",
      "dateStart": "",
      "dateEnd": "",
      "excerpt": "Lorem Ipsum",
      "category": "",
      "tags": [],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "Exactly",
      "author": "Simon Winchester",
      "format": "Audiobook",
      "dateStart": "",
      "dateEnd": "",
      "excerpt": "Lorem Ipsum",
      "category": "",
      "tags": [],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "Life in Code",
      "author": "Ellen Ullman",
      "format": "Audiobook",
      "dateStart": "",
      "dateEnd": "",
      "excerpt": "Lorem Ipsum",
      "category": "",
      "tags": [],
      "duration": "10h 25m"
    },
  ],
  "wantToRead": [
    {
      "id": 1,
      "title": "Las mil y una noches",
      "author": "Varios",
      "format": "Audiobook",
      "dateStart": "",
      "dateEnd": "",
      "excerpt": "Lorem Ipsum",
      "category": "",
      "tags": [],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "Los bandidos de río frío",
      "author": "Manuel Payno",
      "format": "paper",
      "dateStart": "21/04/2020",
      "dateEnd": "",
      "excerpt": "Lorem Ipsum",
      "category": "",
      "tags": [],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "Hábitos atómicos",
      "author": "James Clear",
      "format": "audiobook",
      "dateStart": "",
      "dateEnd": "",
      "excerpt": "Lorem Ipsum",
      "category": "",
      "tags": [],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "Rey, Dama, Valet",
      "author": "Vladimir Nabokov",
      "format": "paper",
      "dateStart": "",
      "dateEnd": "",
      "excerpt": "Lorem Ipsum",
      "category": "",
      "tags": [],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "Search Inside Yourself",
      "author": "Chade-Meng Tan",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "",
      "tags": [],
      "duration": "10h 25m"
    },
  ]
}

ReactDOM.render(
  <Shelf {...initialState} />, document.getElementById('root')
);
