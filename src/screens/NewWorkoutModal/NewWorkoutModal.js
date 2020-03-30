import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import NewWorkoutForm from './NewWorkoutForm';
import { Page, H1 } from '../../components';

function NewWorkoutModal(props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Page>
        <H1>create workout</H1>
        <NewWorkoutForm {...props} />
      </Page>
    </TouchableWithoutFeedback>
  );
}

export default NewWorkoutModal;
