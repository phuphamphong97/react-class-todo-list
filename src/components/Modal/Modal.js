import React from 'react';
import styled from '@emotion/styled';

import { colors, depth, sizes, typography } from '../../principles';

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${depth.zIndexes.modal};
`;

const ContentContainer = styled.div`
  background-color: ${colors.white};
  border-radius: ${sizes.micro}px;
  box-shadow: ${depth.boxShadows.wide};
  display: flex;
  flex-direction: column;
  left: 50%;
  max-height: 90%;
  max-width: 500px;
  padding: ${sizes.lg}px;
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
`;

const Header = styled.h3`
  ${typography.types.MSemi}
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Modal = ({
  showModal,
  children,
  onClose,
  onOK,
  title,
  hasHeader,
  hasFooter,
}) => {
  return (
    showModal && (
      <ModalWrapper>
        <ContentContainer>
          {hasHeader && <Header>{title}</Header>}
          {children}
          {hasFooter && (
            <Footer>
              <button onClick={onClose}>Close</button>
              <button onClick={onOK}>OK</button>
            </Footer>
          )}
        </ContentContainer>
      </ModalWrapper>
    )
  );
};

Modal.defaultProps = {
  showModal: false,
  title: '',
  hasHeader: true,
  hasFooter: true,
};

export default Modal;
