import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Typography, Result, Button } from 'antd';
import { InfoCircleTwoTone, PlusOutlined } from '@ant-design/icons';

import ActionCenter from '../ActionCenter';
import TaskTable from '../TaskTable';
import AddTaskForm from '../AddTaskForm';
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
      {taskList && taskList.length ? (
        <>
          <ActionCenter setShowModal={setShowModal} />
          <TaskTable taskList={taskList} />
        </>
      ) : (
        <Result
          icon={<InfoCircleTwoTone />}
          title="Your task list is empty now, add a new one?"
          extra={
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setShowModal(true)}
            >
              New task
            </Button>
          }
        />
      )}

      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        onOK={() => setShowModal(false)}
        title="Add new task"
      >
        <AddTaskForm />
      </Modal>
    </Container>
  );
};

export default MainContent;
