import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Typography, Result, Button } from 'antd';
import { InfoCircleTwoTone, PlusOutlined } from '@ant-design/icons';

import ActionCenter from '../ActionCenter';
import TaskTable from '../TaskTable';
import AddTaskForm from '../AddTaskForm';
import Modal from '../Modal';

import { taskData } from '../../data';
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
  const [taskList, setTaskList] = useState(taskData);
  const [orderBy, setOrderBy] = useState('created');
  const [orderDir, setOrderDir] = useState('asc');
  const [searchText, setSearchText] = useState('');

  const addTask = (task) => {
    taskList.push(task);
    setTaskList(taskList);
  };

  const deleteTask = (taskId) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  const onSort = (sortValue) => {
    const [sortBy, sortDir] = sortValue.toString().split('-');
    setOrderBy(sortBy);
    setOrderDir(sortDir);
  };

  const onSearch = (searchValue) => {
    setSearchText(searchValue);
  };

  return (
    <Container>
      <Title>Todo App</Title>
      {taskList && taskList.length ? (
        <>
          <ActionCenter {...{ setShowModal, onSort, onSearch }} />
          <TaskTable {...{ taskList, deleteTask }} />
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
        title="Add new task"
      >
        <AddTaskForm {...{ addTask, setShowModal }} />
      </Modal>
    </Container>
  );
};

export default MainContent;
