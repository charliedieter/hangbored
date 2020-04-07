import React from 'react';
import styled from 'styled-components/native';

import { colors } from '../utils/constants';

const Container = styled.View`
  align-items: center;
  flex-direction: row;
`;

const LogoTitle = styled.Text`
  color: ${colors.primary};
  width: 100%;
  text-align: left;
  font-family: 'Montserrat-Black';
  font-size: 20px;
`;

export default () => (
  <Container>
    <LogoTitle>Hangbored</LogoTitle>
  </Container>
);
