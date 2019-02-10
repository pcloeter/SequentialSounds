import Structure from './structure';

class Pattern {
  constructor() {
    this.sounds = structure.voices
  }

  findRowPattern (rowSound) {
    let attacks = [];
    notes = document.querySelectorAll(`sound-${rowSound}`);
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