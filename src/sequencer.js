import Structure from './structure';
import Tone from 'tone';

class Sequencer {
  constructor(structure) {
    this.keys = ['D4', "F4", "A4", "C5", "E5", "G5", "B5", "D6"];
    this.instrument = new Tone.PluckSynth().toMaster();
    this.oldSoundRows = structure.soundRows;
    this.newSoundRows = structure.soundRowsPlayback;
    this.interval = () => {
      let array = [];
      for (let i = 0; i < this.newSoundRows.length; i++) {
        array.push(i);
      }
      return array;
    }

    this.sequence = new Tone.Sequence((pos) => {
  
      for (let i = 0; i < this.newSoundRows.length; i++) {
        let attack = this.newSoundRows[i].attacks[pos];
    
        if (attack === true) {
          this.instrument.triggerAttackRelease(keys[i], "4n")
        }
      }
    }, this.interval, "4n");
    Tone.Transport.start();
    this.playButton = document.getElementById("play-button");
  }

  startPlayback () {
    debugger
    this.playButton.addEventListener("click", (e) => {
      this.sequence.start();
    })
  }


}

export default Sequencer;