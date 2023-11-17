import state from './state.js'
import * as events from './events.js'


export function start(minutes, seconds) {
    state.minutes = minutes ?? state.minutes
    state.seconds = seconds ?? state.seconds

    events.registerSounds()
    events.registerControls()
    events.updateDisplay()
    
}


