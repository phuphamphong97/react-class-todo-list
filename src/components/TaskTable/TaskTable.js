import React from 'react';
import styled from '@emotion/styled';

import { colors, sizes } from '../../principles';
import TaskItem from '../TaskItem';

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

const TaskTable = ({ taskList }) => {
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
          <TaskItem key={order} {...{ task, order }} />
        ))}
      </tbody>
    </Table>
  );
};

export default TaskTable;
