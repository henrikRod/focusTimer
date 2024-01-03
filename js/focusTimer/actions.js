import state from "./state.js";
import { countDown, updateDisplay } from "./timer.js";
import * as sounds from "./sounds.js";
import * as el from "./elements.js";

export function play() {
  state.isRunning = document.documentElement.classList.toggle("running");
  if(state.isRunning) {
    countDown();
  };
};

export function reset() {
  if(state.isRunning) {
    state.isRunning = document.documentElement.classList.toggle("running");
  }
  updateDisplay();
};

export function timeUp() {
  if(!state.isRunning) {
    if(state.minutes > 59) {
      state.minutes = 60;
      return;
    } else {
      state.minutes += 5;
      updateDisplay();
    };
  };
};

export function timeDown() {
  if(!state.isRunning) {
    if(state.minutes === 5) {;
      return;
    }else {
      state.minutes -= 5;
      updateDisplay();
    };
  }
};

export function forest() {
  sounds.forest.play();
};

export function rain() {
  sounds.rain.play();
};

export function coffe() {
  sounds.coffe.play();
};

export function fireplace() {
  sounds.fireplace.play();
};
