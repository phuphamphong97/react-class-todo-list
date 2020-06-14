import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Typography } from 'antd';

import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { colors, depth, sizes } from '../../principles';

const { Title } = Typography;

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${depth.zIndexes.high};
`;

const ContentContainer = styled.div`
  background-color: ${colors.white};
  border-radius: ${sizes.micro}px;
  box-shadow: ${depth.boxShadows.wide};
  display: flex;
  flex-direction: column;
  left: 50%;
  max-height: 75%;
  max-width: 750px;
  padding: ${sizes.lg}px;
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
`;

const Content = styled.div`
  overflow: auto;
  margin: ${sizes.md}px 0;
`;

const StyledTitle = styled(Title)`
  padding-right: ${sizes.xxl}px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin: 0 ${sizes.micro}px;
  }
`;

const CloseButton = styled.button`
  align-items: center;
  background-color: ${colors.lightGray};
  border-radius: 50%;
  border: none;
  color: ${colors.blue};
  cursor: pointer;
  display: flex;
  font-size: ${sizes.md}px;
  height: ${sizes.xxl}px;
  justify-content: center;
  outline: none;
  position: absolute;
  right: ${sizes.micro}px;
  top: ${sizes.micro}px;
  width: ${sizes.xxl}px;
}

  &:hover, &:active, &:focus {
    box-shadow: ${depth.boxShadows.narrow};
  }
`;

const Modal = ({ isVisible, children, onClose, onOK, title, hasFooter }) => {
  useEffect(() => {
    document.addEventListener(
      'keyup',
      (e) => isVisible && e.keyCode === 27 && onClose()
    );

    return () => document.removeEventListener('keyup', () => {});
  }, [isVisible, onClose]);

  return (
    isVisible && (
      <ModalWrapper>
        <ContentContainer>
          {title && <StyledTitle level={3}>{title}</StyledTitle>}
          <CloseButton onClick={onClose}>
            <CloseOutlined />
          </CloseButton>
          <Content>{children}</Content>
          {hasFooter && (
            <Footer>
              <Button onClick={onClose}>Close</Button>
              <Button type="primary" onClick={onOK}>
                OK
              </Button>
            </Footer>
          )}
        </ContentContainer>
      </ModalWrapper>
    )
  );
};

export default Modal;
