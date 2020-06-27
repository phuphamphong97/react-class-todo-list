import React from 'react';
import { Form, Input, Radio, Button, Tag, message } from 'antd';

import { taskPriority } from '../../data';
import { objectToArray } from '../../utils';

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const tailLayout = {
  wrapperCol: {
    span: 24,
  },
};

const AddTaskForm = ({ addTask, setShowModal }) => {
  const priorities = objectToArray(taskPriority);

  const onSuccess = (newTask) => {
    addTask(newTask);
    setShowModal(false);
    message.success('New task added successfully.');
  };

  const onFailure = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Something went wrong, please try again.');
  };

  return (
    <Form
      {...layout}
      initialValues={{ priority: priorities[0] }}
      onFinish={onSuccess}
      onFinishFailed={onFailure}
    >
      <Form.Item
        label="Task name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input the task name!',
          },
        ]}
      >
        <Input placeholder="Type the task name" />
      </Form.Item>

      <Form.Item label="Priority" name="priority">
        <Radio.Group buttonStyle="solid">
          {priorities.map((priority, index) => (
            <Radio key={index} value={priority}>
              <Tag color={priority.color}>{priority.level}</Tag>
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Add task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddTaskForm;
