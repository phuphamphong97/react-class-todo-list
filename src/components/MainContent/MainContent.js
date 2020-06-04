import React, { useState } from 'react';
import { Button } from 'antd';
import Modal from '../Modal';

const MainContent = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <h1>Main Content</h1>
      <Button type="primary" onClick={() => setShowModal(true)}>
        Open modal
      </Button>
      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        onOK={() => setShowModal(false)}
        title="This is a title"
        hasFooter
      >
        <p>Demo modal</p>
      </Modal>
    </>
  );
};

export default MainContent;
