import React from 'react';
import { Button, Select, Input, Row, Col } from 'antd';

const { Option } = Select;
const { Search } = Input;

const ActionCenter = ({ setShowModal }) => {
  return (
    <Row>
      <Col xs={24} md={16}>
        <Select defaultValue="nameAsc" onChange={() => {}}>
          <Option value="nameAsc">Name ASC</Option>
          <Option value="nameDesc">Name DESC</Option>
          <Option value="priorityAsc">Priority ASC</Option>
          <Option value="priorityDesc">Priority DESC</Option>
        </Select>
        <Search
          placeholder="Type name or priority to search"
          onSearch={(value) => console.log(value)}
        />
      </Col>
      <Col xs={24} md={8}>
        <Button type="primary" onClick={() => setShowModal(true)}>
          New task
        </Button>
      </Col>
    </Row>
  );
};

export default ActionCenter;
