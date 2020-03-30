import React from "react";
import styled from "styled-components/native";
import { colors } from "../utils/constants";

function Button({ title, ...rest }) {
  return (
    <Container>
      <Wrapper {...rest}>
        <Text>{title}</Text>
      </Wrapper>
    </Container>
  );
}

export default Button;

const Container = styled.View`
  padding: 10px;
`;

const Wrapper = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 6px;
  box-shadow: ${colors.primaryShadow};
  color: ${colors.text};
  font-size: 16px;
  justify-content: center;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  padding: 16px;
`;

const Text = styled.Text`
  color: white;
  font-family: "Montserrat-Black";
  font-size: 24px;
  font-weight: 900;
`;
