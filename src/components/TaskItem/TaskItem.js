import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Tag, Input, Space, Popconfirm, Select, message } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';

import { taskPriorities } from '../../data';

const { Option } = Select;

const TaskItem = ({ task, order, deleteTask }) => {
  const [isEditing, setEditing] = useState(false);
  const { id, name, priority } = task;

  const onDeleteTask = (taskId) => {
    deleteTask(taskId);
    message.success('Deleted task.');
  };

  const onCancelEditing = () => {
    setEditing(false);
    message.warning('Nothing changed.');
  };

  return (
    <tr>
      <td>{order + 1}</td>
      <td>{isEditing ? <Input defaultValue={name} autoFocus /> : name}</td>
      <td>
        {isEditing ? (
          <Select defaultValue={priority} onChange={() => {}}>
            {taskPriorities.map((priority, index) => (
              <Option key={index} value={index}>
                {priority.level}
              </Option>
            ))}
          </Select>
        ) : (
          <Tag color={taskPriorities[priority].color}>
            {taskPriorities[priority].level}
          </Tag>
        )}
      </td>
      <td>
        <Space>
          {isEditing ? (
            <>
              <Button
                type="text"
                icon={<CheckCircleOutlined />}
                shape="circle"
                onClick={() => setEditing(true)}
              />
              <Button
                type="text"
                icon={<CloseCircleOutlined />}
                shape="circle"
                onClick={onCancelEditing}
              />
            </>
          ) : (
            <>
              <Button
                type="text"
                icon={<EditOutlined />}
                shape="circle"
                onClick={() => setEditing(true)}
              />
              <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={() => onDeleteTask(id)}
                onCancel={() => {}}
                okText="Yes"
                cancelText="No"
              >
                <Button type="text" icon={<DeleteOutlined />} shape="circle" />
              </Popconfirm>
            </>
          )}
        </Space>
      </td>
    </tr>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object,
  order: PropTypes.number,
  deleteTask: PropTypes.func,
};

export default TaskItem;
