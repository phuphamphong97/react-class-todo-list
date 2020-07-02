import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const FlexContainer = styled.div`
  display: flex;
  ${({ direction }) => direction && `flex-direction: ${direction}`};
  ${({ align }) => align && `align-items: ${align}`};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ wrap }) => wrap && `flex-wrap: ${wrap}`};
`;

const FlexBox = ({ direction, align, justify, wrap, children }) => {
  return (
    <FlexContainer {...{ direction, align, justify, wrap }}>
      {React.Children.map(children, (child) => child)}
    </FlexContainer>
  );
};

FlexBox.propTypes = {
  direction: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  wrap: PropTypes.string,
};

export default FlexBox;
