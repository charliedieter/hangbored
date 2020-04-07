import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import WorkoutListScreen from '../screens/WorkoutListScreen';
import TimerScreen from '../screens/TimerScreen';
import NewWorkoutModal from '../screens/NewWorkoutModal';
import { colors } from '../utils/constants';

const Tab = createMaterialTopTabNavigator();

const Community = () => null;

export default () => {
  return (
    <Tab.Navigator
      swipeEnabled={false}
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.background,
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
      <Tab.Screen name="Community" component={Community} />
    </Tab.Navigator>
  );
};
