import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { colors } from '../utils/constants';

function FloatingUploadButton({ navigation, addWorkout }) {
  return (
    <View style={floatingButtonStyles.container}>
      <TouchableOpacity
        style={floatingButtonStyles.button}
        hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
        onPress={() => navigation.navigate('NewWorkoutModal', { addWorkout })}>
        <Feather name="plus" size={34} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const floatingButtonStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 24,
    bottom: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 4,
  },
  icon: {
    color: colors.white,
    fontSize: 26,
  },
});

export default FloatingUploadButton;
