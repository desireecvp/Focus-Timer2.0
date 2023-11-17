import * as elements from "./elements.js";
import * as actions from "./actions.js";
import state from "./state.js";
import * as sounds from "./sounds.js";

export function registerControls() {
  elements.controls.addEventListener("click", (event) => {
    const actionClicked = event.target.dataset.action;
    if (typeof actions[actionClicked] != "function") {
      return;
    }
    actions[actionClicked]();
  });
}

export function registerSounds() {
  elements.sounds.addEventListener("click", (event) => {
    const soundClicked = event.target.dataset.action;
    if (typeof sounds[soundClicked] != "function") {
      return;
    }
    sounds[soundClicked]();
  });
}

export function updateDisplay(minutes, seconds) {
  console.log(minutes);
  elements.minutes.textContent = String(minutes ?? state.minutes).padStart(
    2,
    "0"
  );
  elements.seconds.textContent = String(seconds ?? state.seconds).padStart(
    2,
    "0"
  );
}
