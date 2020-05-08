import React from 'react';

class Shelf extends React.Component {
  render() {
    const { nowReading, read, wantToRead } = this.props;
    console.log(nowReading)
    return (
      <h2>Hi</h2>
    );
  }
}

export default Shelf;
