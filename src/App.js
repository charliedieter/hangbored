import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const ModalStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import WorkoutStack from './navigation/WorkoutStack';
import LogScreen from './screens/LogScreen';
import TimerScreen from './screens/TimerScreen';
import NewWorkoutModal from './screens/NewWorkoutModal';

import { loadSounds } from './utils/soundUtils';
import { colors } from './utils/constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => null;

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'white', fontSize: 40 }}
      activeColor={colors.primary}
      inactiveColor="#3e2465">
      <Tab.Screen
        name="Workouts"
        component={WorkoutStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="timer" color={color} size={20} />
          ),
          tabBarLabel: (
            <Text style={{ fontFamily: 'Montserrat-Black' }}>Workouts</Text>
          ),
        }}
      />
      <Tab.Screen
        name="LogScreen"
        component={LogScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-clock"
              color={color}
              size={20}
            />
          ),
          tabBarLabel: (
            <Text style={{ fontFamily: 'Montserrat-Black' }}>Log</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="chart-line-variant"
              color={color}
              size={20}
            />
          ),
          tabBarLabel: (
            <Text style={{ fontFamily: 'Montserrat-Black' }}>Benchmarks</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

class App extends React.Component {
  componentDidMount() {
    loadSounds();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <SafeAreaView flex={1}>
          <NavigationContainer>
            <ModalStack.Navigator
              mode="modal"
              screenOptions={{
                cardStyle: {
                  backgroundColor: colors.background,
                },
                headerShown: false,
              }}>
              <ModalStack.Screen name="Main" component={BottomTabNavigator} />
              <ModalStack.Screen
                name="NewWorkoutModal"
                component={NewWorkoutModal}
              />
              <ModalStack.Screen name="Timer" component={TimerScreen} />
            </ModalStack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </View>
    );
  }
}

export default App;
