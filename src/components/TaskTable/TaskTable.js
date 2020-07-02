import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import TaskItem from '../TaskItem';
import { colors, sizes } from '../../principles';

const Table = styled.table`
  margin-top: ${sizes.xl}px;
  width: 100%;

  tr {
    border-bottom: 1px solid ${colors.lightGray};
  }

  th,
  td {
    padding: ${sizes.xs}px;
  }
`;

const TaskTable = ({ taskList, deleteTask }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {taskList.map((task, order) => (
          <TaskItem key={order} {...{ task, order, deleteTask }} />
        ))}
      </tbody>
    </Table>
  );
};

TaskTable.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.object),
  deleteTask: PropTypes.func,
};

export default TaskTable;
