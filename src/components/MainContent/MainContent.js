import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Typography } from 'antd';

import ActionCenter from '../ActionCenter';
import TaskTable from '../TaskTable';
import Modal from '../Modal';

import { taskList } from '../../data';
import { sizes, breakpoints } from '../../principles';

const { Title } = Typography;

const Container = styled.div`
  margin: 0 auto;
  max-width: ${sizes.container}px;
  padding: ${sizes.xxxl}px 0;
  width: 90%;

  @media (min-width: ${breakpoints.md}px) {
    padding: ${sizes.huge}px 0;
  }
`;

const MainContent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Title>Todo App</Title>
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
    </Container>
  );
};

export default MainContent;
