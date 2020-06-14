import React from 'react';
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

export default FlexBox;
