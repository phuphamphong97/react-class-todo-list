import React from 'react';
import styled from '@emotion/styled';

import { colors, zIndexes, boxShadows, sizes } from '../../shared/constants';

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${zIndexes.modal};
`;

const ModalContent = styled.div`
  background-color: ${colors.white};
  border-radius: ${sizes.micro}px;
  box-shadow: ${boxShadows.wide};
  display: flex;
  flex-direction: column;
  left: 50%;
  max-height: 90%;
  max-width: 500px;
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
`;

const Modal = ({ showModal, children }) => {
  return (
    showModal && (
      <ModalWrapper>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    )
  );
};

export default Modal;
