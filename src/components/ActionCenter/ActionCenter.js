import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Button, Select, Input, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import FlexBox from '../FlexBox';
import { sizes, depth, breakpoints } from '../../principles';

const { Option } = Select;
const { Search } = Input;

const SearchBox = styled(Search)`
  margin-right: ${sizes.xs}px;
`;

const BubbleButton = styled(Button)`
  bottom: ${sizes.xxxl}px;
  box-shadow: ${depth.boxShadows.narrow};
  position: fixed;
  right: ${sizes.lg}px;
  z-index: ${depth.zIndexes.medium};

  @media (min-width: ${breakpoints.md}px) {
    display: none;
  }
`;

const ActionCenter = ({ setShowModal }) => {
  return (
    <>
      <Row>
        <Col xs={24} md={16} lg={12}>
          <FlexBox>
            <SearchBox
              placeholder="Type name or priority to search"
              onSearch={(value) => console.log(value)}
            />
            <Select defaultValue="nameAsc" onChange={() => {}}>
              <Option value="nameAsc">Name ASC</Option>
              <Option value="nameDesc">Name DESC</Option>
              <Option value="priorityAsc">Priority ASC</Option>
              <Option value="priorityDesc">Priority DESC</Option>
            </Select>
          </FlexBox>
        </Col>
        <Col xs={0} md={8} lg={12}>
          <FlexBox justify="flex-end">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setShowModal(true)}
            >
              New task
            </Button>
          </FlexBox>
        </Col>
      </Row>
      <BubbleButton
        type="primary"
        icon={<PlusOutlined />}
        shape="circle"
        size="large"
        onClick={() => setShowModal(true)}
      />
    </>
  );
};

ActionCenter.propTypes = {
  setShowModal: PropTypes.func,
};

export default ActionCenter;
