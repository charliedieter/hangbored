import AsyncStorage from '@react-native-community/async-storage';

import { DEFAULT_WORKOUTS } from './constants';

export async function getWorkouts() {
  const res = await AsyncStorage.getItem('workouts');

  // this should only happen on first render
  if (res === null) {
    return await setDefaults();
  }

  return JSON.parse(res);
}

export async function setDefaults() {
  await setWorkouts(DEFAULT_WORKOUTS);
  return await getWorkouts();
}

export async function setWorkouts(workouts) {
  return await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
}

export async function mergeWorkout(workout) {
  const workouts = await getWorkouts();

  await setWorkouts({
    ...workouts,
    [workout.title]: workout,
  });

  return await getWorkouts();
}

export async function deleteWorkout(title) {
  const workouts = await getWorkouts();
  console.log(workouts);
  delete workouts[title];
  await setWorkouts(workouts);

  return workouts;
}
