import Sound from 'react-native-sound';

const SOUNDS = ['count', 'start', 'end', 'success', 'final_success'];

function loadSound(name) {}

/**
 * 'To minimize playback delay, you may want to preload a sound file during app initialization.' --https://github.com/zmxv/react-native-sound
 */
export async function loadSounds() {
  var whoosh = new Sound('whoosh.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        whoosh.getDuration() +
        'number of channels: ' +
        whoosh.getNumberOfChannels(),
    );
  });
}

export async function playSound(name) {
  // const soundObject = new Audio.Sound();
  // try {
  //   await soundObject.loadAsync(SOUNDS[name]);
  //   await soundObject.playAsync();
  // } catch (error) {
  //   console.log(error);
  // }
}
