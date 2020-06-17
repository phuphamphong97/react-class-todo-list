import React from 'react';
import { Form, Input, Radio, Button, Tag } from 'antd';

import { taskPriority } from '../../data';

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

const priorities = Object.keys(taskPriority).reduce((acc, curVal) => {
  acc.push(taskPriority[curVal]);
  return acc;
}, []);

const AddTaskForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      initialValues={{ priority: priorities[0] }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Task name"
        name="taskName"
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
