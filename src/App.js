import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WorkoutListScreen from './screens/WorkoutListScreen';
import TimerScreen from './screens/TimerScreen';
import NewWorkoutModal from './screens/NewWorkoutModal';
import Header from './components/Header';
import { colors } from './utils/constants';

const Stack = createStackNavigator();
const ModalStack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen
        name="Workouts"
        component={WorkoutListScreen}
        options={{
          headerTitle: props => <Header {...props} />,
          headerStyle: {
            backgroundColor: colors.background,
          },
        }}
      />
      <Stack.Screen
        name="Timer"
        component={TimerScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <StatusBar
          backgroundColor={colors.background}
          barStyle="dark-content"
        />
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
              <ModalStack.Screen name="Main" component={MainStack} />
              <ModalStack.Screen
                name="NewWorkoutModal"
                component={NewWorkoutModal}
              />
            </ModalStack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </View>
    );
  }
}

export default App;
