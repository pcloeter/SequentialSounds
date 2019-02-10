import Sequencer from './sequencer';

class Pattern {
  constructor() {
    this.sounds = sequencer.voices
  }

  findRowPattern (sound) {
    let attacks = [];
    notes = document.querySelectorAll(`sound-${sound}`);
    notes.forEach(note => {
      if (note.getAttribute("data-selected") === "true") {
        attacks.push(true);
      } else {
        attacks.push(false);
      }
    });
    return attacks;
  }

  

}
export default Pattern;