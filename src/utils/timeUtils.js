export function calculateWorkoutTotal(w) {
  const { hang_time, reps, rep_rest, sets, set_rest } = w;
  const hang_secs = hang_time * reps;
  const rep_rest_secs = rep_rest * (reps - 1);
  const set_rest_secs = set_rest * (sets - 1);

  const total = (hang_secs + rep_rest_secs) * sets + set_rest_secs;
  return formatMMSS(total);
}

export function pad(n) {
  if (n < 10) {
    return `0${n}`;
  }
  return n;
}

export function formatMMSS(secs) {
  const min = Math.floor(secs / 60);
  secs = secs % 60;

  return `${pad(min)}:${pad(secs)}`;
}
