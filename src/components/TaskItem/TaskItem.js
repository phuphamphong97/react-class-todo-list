import React from 'react';
import { Button, Tag, Space } from 'antd';

const TaskItem = ({ task, order }) => {
  return (
    <tr>
      <td>{order + 1}</td>
      <td>{task.name}</td>
      <td>
        <Tag color={task.priority.color}>{task.priority.level}</Tag>
      </td>
      <td>
        <Space>
          <Button type="primary" size="small" ghost>
            Edit
          </Button>
          <Button type="primary" size="small" ghost danger>
            Delete
          </Button>
        </Space>
      </td>
    </tr>
  );
};

export default TaskItem;
