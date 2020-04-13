import React, { Component } from 'react';
import Modal from '../Modal';

class MainContent extends Component {
  constructor(props) {
    super(props);
    console.log('Hello', this);
  }
  render() {
    return (
      <>
        <h1>Main Content</h1>
        <Modal />
      </>
    );
  }
}

export default MainContent;
