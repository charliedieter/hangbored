import styled from 'styled-components/native';
import { colors } from '../utils/constants';

export const Page = styled.View`
  flex: 1;
  /* padding: 18px; */
`;

export const H1 = styled.Text`
  background: ${colors.background};
  color: ${colors.primary};
  font-family: 'Montserrat-Black';
  font-size: 46px;
  font-weight: 900;
  width: 100%;
`;

export const UnderlineWrapper = styled.View`
  border-color: ${colors.secondary};
  border-bottom-width: 2px;
  padding-bottom: 12px;
`;

export const H2 = styled.Text`
  color: ${colors.secondary};
  font-family: 'Montserrat-Black';
  font-size: 24px;
  font-weight: 600;
`;

export const ListItem = styled.View`
  background-color: ${colors.background};
  border-radius: 6px;
  margin: 10px;
`;

export const InnerListItem = styled.TouchableOpacity`
  background-color: ${colors.card};
  border-radius: 6px;
  box-shadow: ${colors.primaryShadow};
  padding: 16px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: flex-end;
  padding: 10px 0;
`;

export const RowItem = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const RowItemWrapper = styled.View`
  flex: 1;
`;

export const RowData = styled.Text`
  color: ${colors.text};
  font-family: 'Montserrat-SemiBold';
  font-size: 18px;
  font-weight: 600;
`;

export const RowLabel = styled.Text`
  color: ${colors.accentText};
  font-family: 'Montserrat-Black';
  font-size: 15px;
`;

export const FlexText = styled.Text`
  color: ${colors.text};
  flex: 1;
  font-family: 'Montserrat-Black';
  font-size: 40px;
  font-weight: 900;
  opacity: ${(props) => (props.isActive ? 1 : 0.4)};
  text-align: center;
`;
