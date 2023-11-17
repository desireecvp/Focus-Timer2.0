import { minutes, playButton, seconds } from "./elements.js";
import { updateDisplay } from "./events.js";
import state from "./state.js" 

export function toggleRunning() {
state.isRunning = !state.isRunning
  startCountdown();

  playButton.classList.toggle('running')
  pauseButton.classList.toggle('running')

}

export function reset() {

    state.isRunning= false
    updateDisplay() 

    if (playButton.classList.contains('running')){
        playButton.classList.toggle('running')

    }

    if(!pauseButton.classList.contains('running')){
        pauseButton.classList.toggle('running')
    }
}

export function plus() {
  const newValue = Number(minutes.textContent) + 5;
  updateDisplay(newValue);
}

export function minus() {
  const newValue = Number(minutes.textContent) - 5;

  if (Number(minutes.textContent) > 25) {
    updateDisplay(newValue);
  }
}

export function startCountdown() {
    clearTimeout()
    if(state.isRunning == false){
        return
    }
    let currentMinute = Number(minutes.textContent);
    let currentSecond = +seconds.textContent;

  
    if (currentSecond == 0) {
    currentMinute--;
    currentSecond = 60;
  }
  currentSecond--;
  if (currentMinute >= 0 && currentSecond >= 0){
    updateDisplay(currentMinute, currentSecond)
    setTimeout(() => {
      startCountdown()
    }, 1000);
  } else {
    updateDisplay()
  }
  }


  export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if (state.isMute) {
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()
} 