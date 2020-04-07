import Sound from 'react-native-sound';

const TITLES = ['count', 'start', 'end', 'success'];
export const PRELOADED_SOUNDS = {};

/**
 * 'To minimize playback delay, you may want to preload a sound file during app initialization.' --https://github.com/zmxv/react-native-sound
 */
function loadSound(name) {}

export async function loadSounds() {
  TITLES.forEach((t) => {
    const sound = new Sound(`${t}.mp3`, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log(`failed to load the sound ${t}`, error);
        return;
      }

      PRELOADED_SOUNDS[t] = sound;
    });
  });
}

export async function playSound(name) {
  PRELOADED_SOUNDS[name].play();
}
