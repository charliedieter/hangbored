import React from 'react';
import { Alert } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import WorkoutListItem from './WorkoutListItem';
import FloatingButton from '../../components/FloatingButton';
import Button from '../../components/Button';
import { Page, Row } from '../../components';
import {
  deleteWorkout,
  getWorkouts,
  mergeWorkout,
  setDefaults,
} from '../../utils/storageUtils';
import DeleteButton from './DeleteButton';

class WorkoutScreen extends React.Component {
  state = { workouts: {} };

  componentDidMount() {
    this.syncWorkoutsAsync();
  }

  syncWorkoutsAsync = async () => {
    let workouts;
    try {
      workouts = await getWorkouts();
    } catch (error) {
      console.log(error);
    }
    this.setState({
      workouts: workouts,
    });
  };

  addWorkout = async workout => {
    const workouts = await mergeWorkout(workout);
    this.setState({ workouts });
    this.props.navigation.navigate('Timer', { workout });
  };

  handleDelete = async title => {
    const workouts = await deleteWorkout(title);
    this.setState({
      workouts,
    });
  };

  handleDuplicate = async (workout, titleInput) => {
    return new Promise(() => {
      Alert.alert(
        `😲`,
        `A workout by the name '${workout.title}' already exists. You can overwrite it, or choose a unique name.`,
        [
          {
            text: 'rename',
            onPress: () => {
              titleInput.focus();
            },
          },
          {
            text: 'save and overwrite',
            onPress: () => this.addWorkout(workout),
          },
        ],
        { cancelable: false },
      );
    });
  };

  validateForm = async (workout, titleInput) => {
    if (Object.keys(this.state.workouts).includes(workout.title)) {
      await this.handleDuplicate(workout, titleInput);
      return;
    }
    this.addWorkout(workout);
  };

  restoreDefaults = async () => {
    const workouts = await setDefaults();
    this.setState({ workouts });
  };

  renderEmptyContainer = () => {
    return (
      <Button title="restore default workouts" onPress={this.restoreDefaults} />
    );
  };

  render() {
    return (
      <Page>
        <SwipeListView
          leftOpenValue={0}
          rightOpenValue={-75}
          data={Object.values(this.state.workouts)}
          keyExtractor={i => i.title}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <WorkoutListItem
              {...item}
              onPress={() =>
                this.props.navigation.navigate('Timer', { workout: item })
              }
            />
          )}
          style={{ overflow: 'visible', zIndex: -1 }}
          renderHiddenItem={data => {
            return (
              <DeleteButton
                onPress={() => this.handleDelete(data.item.title)}
              />
            );
          }}
          ListEmptyComponent={this.renderEmptyContainer}
        />
        <FloatingButton {...this.props} addWorkout={this.validateForm} />
      </Page>
    );
  }
}

export default WorkoutScreen;
