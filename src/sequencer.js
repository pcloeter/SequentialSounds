import Structure from './structure';
import Tone from 'tone';

class Sequencer {
  constructor() {
    this.keys = ['D4', "F4", "A4", "C5", "E5", "G5", "B5", "D6"];
    this.soundRows = structure.soundRows;
    this.findRowPattern = structure.findRowPattern;

    this.sequence = new Tone.Sequence((time, pos) => {
      for (let i = 0; i < array.length; i++) {
        
      }
    });

  }


}

export default Sequencer;