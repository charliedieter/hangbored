// import { Audio } from "expo-av";

const ding1 = require(`../../assets/sounds/ding1.mp3`);
const ding2 = require(`../../assets/sounds/ding2.mp3`);
const levelup = require(`../../assets/sounds/levelup.mp3`);
const success = require(`../../assets/sounds/success.mp3`);

const SOUNDS = [ding1, ding2, success, levelup];

export async function playSound(idx) {
  // const soundObject = new Audio.Sound();
  // try {
  //   await soundObject.loadAsync(SOUNDS[idx]);
  //   await soundObject.playAsync();
  // } catch (error) {
  //   console.log(error);
  // }
}
