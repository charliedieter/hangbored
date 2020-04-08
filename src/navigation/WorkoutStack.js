import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import WorkoutListScreen from '../screens/WorkoutListScreen';
import TimerScreen from '../screens/TimerScreen';
import NewWorkoutModal from '../screens/NewWorkoutModal';
import { colors } from '../utils/constants';

const Tab = createMaterialTopTabNavigator();

const Others = () => null;

export default () => {
  return (
    <Tab.Navigator
      swipeEnabled={false}
      screenOptions={{
        style: {
          backgroundColor: 'pink',
        },
      }}
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: colors.primary,
        },
        labelStyle: {
          fontFamily: 'Montserrat-Black',
        },
      }}>
      <Tab.Screen name="Me" component={WorkoutListScreen} />
      <Tab.Screen name="Others" component={Others} />
    </Tab.Navigator>
  );
};
