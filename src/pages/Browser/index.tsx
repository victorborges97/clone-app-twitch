import React from 'react';

import { Wrapper, Heading } from './styles';

const Browser: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Heading>Browser</Heading>
      {children}
    </Wrapper>
  );
};

export default Browser;
