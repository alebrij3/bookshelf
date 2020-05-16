import React from 'react';
import AddBook from '../components/AddBook';
import Hero from '../components/Hero';
import Search from '../components/Search';

class Layout extends React.Component {
  render() {
    return(
      <div className="app">
        <Hero />
        <Search />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
