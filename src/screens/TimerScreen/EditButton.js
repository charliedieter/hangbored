import React from 'react';
import styled from 'styled-components/native';

import RBSheet from 'react-native-raw-bottom-sheet';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import { colors } from '../../utils/constants';

function EditButton() {
  const ref = React.useRef(null);

  return (
    <>
      <Button onPress={() => ref.current.open()}>
        <Material name="dots-vertical" size={34} />
      </Button>
      <RBSheet
        ref={ref}
        height={160}
        duration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          },
        }}>
        <LI>
          <Text>edit</Text>
          <Feather name="edit-2" color={colors.secondary} size={34} />
        </LI>
        <LI>
          <Text>delete</Text>
          <Feather name="trash-2" color={colors.red} size={34} />
        </LI>
      </RBSheet>
    </>
  );
}

export default EditButton;

const Button = styled.TouchableOpacity``;

const LI = styled.TouchableOpacity`
  flex: 1;
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 40px;
`;

const Text = styled.Text`
  font-size: 18px;
  font-family: 'Montserrat-SemiBold';
  margin-right: 16px;
`;
