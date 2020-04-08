import styled from 'styled-components/native';
import { colors } from '../../utils/constants';

export const TimerWrapper = styled.View`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: ${colors.primaryShadow};
  /* elevation: 8; */
  margin: 10px;
  padding: 20px;
`;

export const TimerText = styled.Text`
  color: ${colors.text};
  font-size: 60px;
  text-align: center;
  font-family: 'Lato-Black';
`;
