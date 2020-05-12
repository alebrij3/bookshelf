import React from 'react';
import '../assets/styles/components/Hero.scss';

class Hero extends React.Component {
  render() {
    return(
      <div id="hero">
        <div className="text">
          <p>Hi! This is my Bookshelf</p>
          <p>Here are the books I've read / want to read / I'm reading</p>
        </div>
      </div>
    );
  }
}

export default Hero;
