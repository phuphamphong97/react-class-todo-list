import React from 'react';
import PropTypes from 'prop-types';
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
    message.success('Added new task.');
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
        <Radio.Group>
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

AddTaskForm.propTypes = {
  addTask: PropTypes.func,
  setShowModal: PropTypes.func,
};

export default AddTaskForm;
