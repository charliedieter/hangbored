import React from 'react';
import { View } from 'react-native';
import { CalendarList } from 'react-native-calendars';

import { colors } from '../../utils/constants';

const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
const workout = { key: 'workout', color: 'green' };

function LogScreen() {
  return (
    <CalendarList
      // Enable horizontal scrolling, default = false
      horizontal={true}
      // Enable paging on horizontal, default = false
      pagingEnabled={true}
    />
  );
}

export default LogScreen;
