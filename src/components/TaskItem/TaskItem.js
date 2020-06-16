import React from 'react';
import { Button, Tag, Space, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

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
          <Tooltip title="Edit task">
            <Button type="text" icon={<EditOutlined />} shape="circle" />
          </Tooltip>
          <Tooltip title="Delete task">
            <Button type="text" icon={<DeleteOutlined />} shape="circle" />
          </Tooltip>
        </Space>
      </td>
    </tr>
  );
};

export default TaskItem;
