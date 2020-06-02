import React from 'react';
import Hero from '../components/Hero';

class Layout extends React.Component {
  render() {
    return(
      <div className="app">
        <Hero />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
