import React, { useState } from 'react';
import styled from '@emotion/styled';

import ActionCenter from '../ActionCenter';
import TaskTable from '../TaskTable';
import Modal from '../Modal';

import { taskList } from '../../data';
import { typography } from '../../principles';

const AppTitle = styled.h1`
  ${typography.types.L};
`;

const MainContent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <AppTitle>Todo App</AppTitle>
      <ActionCenter setShowModal={setShowModal} />
      <TaskTable taskList={taskList} />
      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        onOK={() => setShowModal(false)}
        title="Add new task"
        hasFooter
      >
        <p>Task content</p>
      </Modal>
    </>
  );
};

export default MainContent;
