import React from 'react';

import { Wrapper, Heading } from './styles';

const Esports: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Heading>Esports</Heading>
      {children}
    </Wrapper>
  );
};

export default Esports;
