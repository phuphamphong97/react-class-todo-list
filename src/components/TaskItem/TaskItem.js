import React from 'react';
import { Button, Tag, Space, Popconfirm, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const TaskItem = ({ task, order, deleteTask }) => {
  const onDeleteTask = (taskId) => {
    deleteTask(taskId);
    message.success('Deleted task.');
  };

  return (
    <tr>
      <td>{order + 1}</td>
      <td>{task.name}</td>
      <td>
        <Tag color={task.priority.color}>{task.priority.level}</Tag>
      </td>
      <td>
        <Space>
          <Button type="text" icon={<EditOutlined />} shape="circle" />
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => onDeleteTask(task.id)}
            onCancel={() => {}}
            okText="Yes"
            cancelText="No"
          >
            <Button type="text" icon={<DeleteOutlined />} shape="circle" />
          </Popconfirm>
        </Space>
      </td>
    </tr>
  );
};

export default TaskItem;
