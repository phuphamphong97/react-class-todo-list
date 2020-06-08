import React from 'react';
import { Button } from 'antd';

const TaskItem = ({ task, order }) => {
  return (
    <tr>
      <td>{order + 1}</td>
      <td>{task.name}</td>
      <td>{task.priority}</td>
      <td>
        <Button type="primary">Edit</Button>
        <Button type="primary" danger>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default TaskItem;
