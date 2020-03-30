import React from 'react';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

import { colors } from '../../utils/constants';

function DeleteButton({ onPress }) {
  return (
    <Wrapper>
      <Trash onPress={onPress}>
        <Feather name="trash-2" size={32} color={colors.red} />
      </Trash>
    </Wrapper>
  );
}

export default DeleteButton;

const Wrapper = styled.View`
  align-items: center;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 15px;
`;

const Trash = styled.TouchableOpacity`
  align-items: center;
  width: 75px;
`;
