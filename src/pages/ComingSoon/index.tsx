import React from 'react';

import { Wrapper, Heading } from './styles';

const ComingSoon: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Heading>ComingSoon</Heading>
      {children}
    </Wrapper>
  );
};

export default ComingSoon;
