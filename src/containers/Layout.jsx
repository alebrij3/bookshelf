import React from 'react';
import AddBook from '../components/AddBook';
import Hero from '../components/Hero';

class Layout extends React.Component {
  render() {
    return(
      <div className="app">
        <Hero />
        {this.props.children}
        <AddBook />
      </div>
    );
  }
}

export default Layout;
