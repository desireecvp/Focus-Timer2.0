import {
  coffeeButton,
  forestButton,
  rainButton,
  fireButton,
} from "./elements.js";
import state from "./state.js";

export const coffeshop = new Audio("./assets/coffeeshop.wav");
export const fireplace = new Audio("./assets/fireplace.wav");
export const forest = new Audio("./assets/forest.wav");
export const rain = new Audio("./assets/rain.wav");

coffeshop.loop = true;
fireplace.loop = true;
forest.loop = true;
rain.loop = true;

let nameOfPlayingAudio = undefined;

export function toggleCoffee() {
  if (state.isPlaying) {
    coffeshop.pause();
    nameOfPlayingAudio = undefined;
  } else {
    coffeshop.play();
    nameOfPlayingAudio = "coffeeshop";
  }
  state.isPlaying = !state.isPlaying;

  coffeeButton.classList.toggle("sounds-playing");
}

export function toggleFire() {
  if (state.isPlaying) {
    fireplace.pause();
  } else {
    fireplace.play();
  }
  state.isPlaying = !state.isPlaying;

  fireButton.classList.toggle("sounds-playing");
}

export function toggleForest() {
  if (state.isPlaying) {
    forest.pause();
  } else {
    forest.play();
  }
  state.isPlaying = !state.isPlaying;

  forestButton.classList.toggle("sounds-playing");
}

export function toggleRain() {
  if (state.isPlaying) {
    rain.pause();
  } else {
    rain.play();
  }
  state.isPlaying = !state.isPlaying;

  rainButton.classList.toggle("sounds-playing");
}
