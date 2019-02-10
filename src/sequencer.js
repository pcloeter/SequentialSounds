import Pattern from './pattern';
import Structure from './structure';
import Tone from 'tone';

class Sequencer {
  constructor() {
    this.findRowPattern = pattern.findRowPattern;

    this.sequence = new Tone.Sequence(() => {
  
    });

  }

}