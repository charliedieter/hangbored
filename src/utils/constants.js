// https://www.trainingbeta.com/mark-and-mike-anderson-guide-to-hangboard-training/
// https://www.metoliusclimbing.com/training_guide_10_min.html
export const DEFAULT_WORKOUTS = {
  beginner: {
    title: 'beginner',
    hang_time: 10,
    rep_rest: 5,
    set_rest: 0,
    reps: 6,
    sets: 1,
  },
  repeaters: {
    title: 'repeaters',
    hang_time: 7,
    rep_rest: 3,
    set_rest: 180,
    reps: 6,
    sets: 5,
  },
};

const base = {
  white: '#fff',
  green: 'rgb(43, 177, 96)',
  blue: '#2d2ce5',
  navy: '#1d144f',
  purple: '#7363F1',
  grey: '#f6f8fa',
};

export const colors = {
  primary: base.blue,
  secondary: base.navy,
  // tertiary: base.white,
  background: base.white,
  accent: base.white,
  card: base.white,
  text: 'rgba(0,0,0,.87)',
  // text: "#1d144f",
  accentText: '#9b97b3',
  border: 'rgb(199, 199, 204)',
  red: 'rgb(223, 72, 87)',
  // rgba(26, 83, 240, 0.25)
  primaryShadow: `3px 4px 8px rgba(26, 83, 240, 0.25)`,
};
