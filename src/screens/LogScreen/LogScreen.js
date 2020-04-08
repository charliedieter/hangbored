import React from 'react';
import { CalendarList } from 'react-native-calendars';

import { colors } from '../../utils/constants';

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
