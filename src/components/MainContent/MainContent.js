import React, { useState } from 'react';
import Modal from '../Modal';

const MainContent = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <h1>Main Content</h1>
      <button onClick={() => setShowModal(true)}>Open modal</button>
      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onOK={() => setShowModal(false)}
        title="This is a title"
      >
        <p>Demo modal</p>
      </Modal>
    </>
  );
};

export default MainContent;
