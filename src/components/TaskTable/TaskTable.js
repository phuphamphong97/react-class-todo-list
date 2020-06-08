import React from 'react';

import TaskItem from '../TaskItem';

const TaskTable = ({ taskList }) => {
  return (
    <table>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Priority</th>
        <th>Actions</th>
      </tr>
      {taskList.map((task, order) => (
        <TaskItem {...{ task, order }} />
      ))}
    </table>
  );
};

export default TaskTable;
