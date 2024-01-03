import * as el from "./elements.js";
import * as actions from "./actions.js";
import * as sounds from "./sounds.js";
import state from "./state.js";

export function controlPanel() {
  el.controls.addEventListener("click", (event) => {
    const element = event.target.dataset.action;
    
    if(typeof actions[element] != "function") { 
      return;
    };
    
    actions[element]();
  });
};

export function soundPanel() {
  el.sounds.forEach((event) => {
    event.addEventListener("click", (event) => {
      const element = event.currentTarget.dataset.sound;

      el.sounds.forEach((el) => {
        el.classList.remove("selected");
      });
      
      
      if(typeof actions[element] != "function") { 
        return;
      };
      

      if(state.soundActive) {
        sounds.forest.pause();
        sounds.rain.pause();
        sounds.coffe.pause();
        sounds.fireplace.pause();
        state.soundActive = false;
        console.log(state.soundActive);
      }else {
        sounds[element].play();
        event.currentTarget.classList.add("selected");
        state.soundActive = true;
        console.log(state.soundActive);
      };
      
    });
  });
};