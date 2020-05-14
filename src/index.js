import React from 'react';
import ReactDOM from 'react-dom';
import Shelf from './containers/Shelf';
import AddBook from './components/AddBook';
import Layout from './containers/Layout';

const initialState = {
  "allBooks": [
    {
      "id": 1,
      "cover": "https://i.postimg.cc/wB4RdQtf/shoe-dog.jpg",
      "title": "Shoe Dog",
      "author": "Phil Knight",
      "format": "audiobook",
      "status": "read",
      "rating": "5",
      "dateStart": "28/04/2020",
      "dateEnd": "",
      "description": "In this instant and tenacious New York Times bestseller, Nike founder and board chairman Phil Knight offers a rare and revealing look at the notoriously media-shy man behind the swoosh (\"Booklist,\" starred review), opening up about his company's early days as an intrepid start-up and its evolution into one of the world s most iconic, game-changing, and profitable brands. Young, searching, fresh out of business school, Phil Knight borrowed fifty dollars from his father and launched a company with one simple mission: import high-quality, low-cost running shoes from Japan. Selling the shoes from the trunk of his car in 1963, Knight grossed eight thousand dollars that first year. Today, Nike s annual sales top $30 billion. In this age of start-ups, Knight s Nike is the gold standard, and its swoosh is more than a logo. A symbol of grace and greatness, it s one of the few icons instantly recognized in every corner of the world. But Knight, the man behind the swoosh, has always been a mystery. In \"Shoe Dog,\" he tells his story at last. It all begins with a classic crossroads moment at twenty-four, backpacking across the world, and wrestling with life s Great Questions. Rather than work for a big corporation, Knight decides he will create something all his own, something new, dynamic, different. He details the many terrifying risks he encountered, the crushing setbacks, the ruthless competitors, the countless doubters and haters and hostile bankers as well as his many thrilling triumphs and narrow escapes. Above all, he recalls the relationships that formed the heart and soul of Nike, with his former track coach, the irascible and charismatic Bill Bowerman, and with his first employees, a ragtag group of misfits and savants who quickly became a band of swoosh-crazed brothers. Together, harnessing the electrifying power of a bold vision and a shared belief in the redemptive, transformative power of sports, they created a brand and a culture that changed everything.\"",
      "category": "Business",
      "tags": ['nike','entrepreneurship','business'],
      "duration": "13h 21m"
    },
    {
      "id": 2,
      "cover": "https://i.postimg.cc/G2B83TGc/de-cero-a-uno.jpg",
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "format": "audiobook",
      "status": "read",
      "rating": "5",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "description": "Peter Thiel, gran inversionista y emprendedor, narra a partir de su experiencia qué tipo de interrogantes debe hacerse una startup para poder triunfar sobre la competencia. Con el fin de no fracasar, hay que innovar y partir de una clara premisa: faltan varios secretos por ser descubiertos. Por ello, Thiel y Masters desmenuzan las bases fundamentales que nos harán progresar de cero a uno.",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "6h 13m"
    },
    {
      "id": 3,
      "cover": "https://i.postimg.cc/mZzCBJyQ/el-hombre-en-busca-de-sentido.jpg",
      "title": "El hombre en busca de sentido",
      "author": "Viktor Frankl",
      "format": "ebook",
      "status": "wantToRead",
      "rating": "",
      "dateStart": "",
      "dateEnd": "",
      "description": "",
      "category": "",
      "tags": [],
      "duration": ""
    },
    {
      "id": 4,
      "cover": "https://i.postimg.cc/Pq5vcRqv/the-hard-thing.jpg",
      "title": "The Hard Thing About Hard Things",
      "author": "Ben Horowitz",
      "format": "audiobook",
      "status": "wantToRead",
      "rating": "",
      "dateStart": "",
      "dateEnd": "",
      "description": "",
      "category": "",
      "tags": [],
      "duration": ""
    },
    {
      "id": 5,
      "cover": "https://i.postimg.cc/QMXQkFy1/image.jpg",
      "title": "Every Tool's a Hammer",
      "author": "Adam Savage",
      "format": "audiobook",
      "status": "wantToRead",
      "rating": "",
      "dateStart": "",
      "dateEnd": "",
      "description": "",
      "category": "",
      "tags": [],
      "duration": ""
    },
    {
      "id": 6,
      "cover": "https://i.postimg.cc/YSqFLJvx/image.jpg",
      "title": "Exactly",
      "author": "Simon Winchester",
      "format": "audiobook",
      "status": "wantToRead",
      "rating": "",
      "dateStart": "",
      "dateEnd": "",
      "description": "",
      "category": "",
      "tags": [],
      "duration": ""
    },
    {
      "id": 7,
      "cover": "https://i.postimg.cc/DwcsZ2wZ/image.jpg",
      "title": "Life in Code",
      "author": "Ellen Ullman",
      "format": "audiobook",
      "status": "wantToRead",
      "rating": "",
      "dateStart": "",
      "dateEnd": "",
      "description": "",
      "category": "",
      "tags": [],
      "duration": ""
    },
    {
      "id": 8,
      "cover": "https://i.postimg.cc/TPCrkTzS/l9789700771533.jpg",
      "title": "Las mil y una noches",
      "author": "Varios",
      "format": "paper",
      "status": "wantToRead",
      "rating": "",
      "dateStart": "",
      "dateEnd": "",
      "description": "",
      "category": "",
      "tags": [],
      "duration": ""
    },
    {
      "id": 9,
      "cover": "https://i.postimg.cc/Jn0jv9mh/l9789700766430.jpg",
      "title": "Los bandidos de río frío",
      "author": "Manuel Payno",
      "format": "paper",
      "status": "nowReading",
      "rating": "",
      "dateStart": "03/09/2019",
      "dateEnd": "",
      "description": "",
      "category": "",
      "tags": [],
      "duration": ""
    },
    {
      "id": 10,
      "cover": "https://i.postimg.cc/SsnzDC72/Atomic-Habits-by-James-Clear-Book-Cover.jpg",
      "title": "Atomic Habits",
      "author": "James Clear",
      "format": "ebook",
      "status": "wantToRead",
      "rating": "",
      "dateStart": "",
      "dateEnd": "",
      "description": "",
      "category": "",
      "tags": [],
      "duration": ""
    },
    {
      "id": 11,
      "cover": "https://i.postimg.cc/N0JH6pTv/thumb-13176-portadas-big.jpg",
      "title": "Rey, Dama, Valet",
      "author": "Vladimir Nabokov",
      "format": "paper",
      "status": "wantToRead",
      "rating": "",
      "dateStart": "",
      "dateEnd": "",
      "description": "",
      "category": "",
      "tags": [],
      "duration": ""
    },
    {
      "id": 12,
      "cover": "https://i.postimg.cc/bJ4SMr36/Search-Inside-Yourself.jpg",
      "title": "Search Inside Yourself",
      "author": "Chade-Meng Tan",
      "format": "ebook",
      "status": "wantToRead",
      "rating": "",
      "dateStart": "",
      "dateEnd": "",
      "description": "",
      "category": "",
      "tags": [],
      "duration": ""
    },
    {
      "id": 13,
      "cover": "https://i.postimg.cc/sgZS8JhV/image.jpg",
      "title": "Extreme Ownership",
      "author": "Jocko Willink",
      "format": "ebook",
      "status": "nowReading",
      "rating": "",
      "dateStart": "",
      "dateEnd": "",
      "description": "An updated edition of the blockbuster bestselling leadership book that took America and the world by storm, two U.S. Navy SEAL officers who led the most highly decorated special operations unit of the Iraq War demonstrate how to apply powerful leadership principles from the battlefield to business and life.",
      "category": "",
      "tags": [],
      "duration": ""
    },
    {
      "id": 14,
      "cover": "https://i.postimg.cc/G293J0mz/mariposa.jpg",
      "title": "Mariposa",
      "author": "Yusra Mardini",
      "format": "paper",
      "status": "read",
      "rating": "",
      "dateStart": "",
      "dateEnd": "",
      "description": "",
      "category": "",
      "tags": [],
      "duration": ""
    },
  ],
  "nowReading": [],
  "read": [],
  "wantToRead": []
}

ReactDOM.render(
  <Layout><Shelf {...initialState} /></Layout>, document.getElementById('root')
);
