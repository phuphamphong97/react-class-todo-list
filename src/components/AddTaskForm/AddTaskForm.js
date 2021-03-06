import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, Button, Select, message } from 'antd';

import { taskPriorities } from '../../data';

const { Option } = Select;

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
  const onSuccess = (newTask) => {
    newTask.id = uuidv4();
    newTask.created = JSON.stringify(new Date());

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
      initialValues={{ priority: 0 }}
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
        <Select>
          {taskPriorities.map((priority, index) => (
            <Option key={index} value={index}>
              {priority.level}
            </Option>
          ))}
        </Select>
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
