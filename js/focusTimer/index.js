import { controlPanel, soundPanel } from "./events.js";
import { updateDisplay } from "./timer.js";

export function start() {
  soundPanel();
  controlPanel();
  updateDisplay();
};