import styled from "styled-components/native";

import { colors } from "../../utils/constants";

export const Label = styled.Text`
  font-family: "Montserrat-Black";
  font-size: 16px;
  margin-bottom: 8px;
`;

export const inputContainerStyles = {
  backgroundColor: colors.primary,
  borderRadius: 6,
  marginHorizontal: 6
};

export const inputStyles = {
  color: "white",
  fontFamily: "Montserrat-Black",
  fontSize: 24,
  textAlign: "center"
};
