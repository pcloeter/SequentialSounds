import Tone from 'tone';

class Sequencer {
  constructor(structure) {
    this.instrument = new Tone.PolySynth(8, Tone.Synth).toMaster();
    this.oldSoundRows = structure.soundRows;
    this.newSoundRows = structure.soundRowsPlayback;
    this.rowPlayback = structure.rowPlayback;
    this.resetButton = document.getElementById("reset-button");
    this.playButton = document.getElementById("play-button");
    this.controlPlayback = this.controlPlayback.bind(this);
    this.resetSequencer = this.resetSequencer.bind(this);
    this.whichScale = this.whichScale.bind(this);
    this.whichShape = this.whichShape.bind(this);
    this.demoButton = document.getElementById("demo");
    
    
    this.interval = () => {
      let array = [];
      for (let i = 0; i < this.oldSoundRows[0].length; i++) {
        array.push(i);
      }
      return array;
    };
    
    this.sequence = new Tone.Sequence((time, pos) => {
      for (let i = 0; i < this.oldSoundRows.length; i++) {
        let row = this.newSoundRows(this.oldSoundRows, this.rowPlayback)[i];
        let attack = row.attacks[pos];
        
        if (attack) {
          document.querySelectorAll(`.pos-${pos}`).forEach(note => {
            note.setAttribute("data-playing", "true");
          });
          this.instrument.triggerAttackRelease((this.whichScale()[i]), "4n");
          setTimeout( () => {
            document.querySelectorAll(`.pos-${pos}`).forEach(note => {
              note.removeAttribute("data-playing");
            });
          }, 300);
        }
      }
    }, this.interval(), "4n");
    Tone.Transport.start();
  };
  
  resetSequencer () {
    this.resetButton.addEventListener("click", () => {
      document.querySelectorAll('[data-selected="true"]').forEach( note => {
        note.setAttribute("data-selected", 'false');
      })
    })
  };
  
  controlPlayback() {
    const that = this;
    this.playButton.addEventListener("click", (e) => {
      if (Tone.context.state !== "running") {
        Tone.context.resume();
      } 
      if (that.sequence.state === 'stopped') {
        that.sequence.start('+.01'); 
      } else {
        that.sequence.stop();
      }
    }
    )};
    
  whichScale () {
    const scale = document.querySelector('input[name="scale"]:checked').value;
    if (scale === 'major') return ['C4', "D4", "E4", "F4", "G4", "A4", "B4", "C5"].reverse();
    else if (scale === 'whole-tone') return  ['C4', "D4", "E4", "Gb4", "Ab4", "Bb4", "C5", "D5"].reverse();
    else return ['C4', "D4", "Eb4", "F4", "G4", "Ab4", "Bb4", "C5"].reverse();
  }

  whichShape () {
    const shapes = document.querySelectorAll('input[name="shape"]');
    shapes.forEach(shape => {
      shape.addEventListener("click", () => {
        const notes = document.querySelectorAll('.note-face-front');
        const design = document.querySelector('input[name="shape"]:checked').value;
        notes.forEach( note => {
          note.setAttribute("shape", design);
        })
      })
    })
  }

  setDemo () {
    this.demoButton.addEventListener("click", () => {
      this.resetSequencer();
      const array = [
        {soundNumber: 0, attacks: [true, false, false, false, true, true, true, false, false, false, false, false, true, true, true, false] },
        {soundNumber: 1, attacks: [false, true, false, true, false, false, false, false, true, true, true, false, false, false, false, false] },
        {soundNumber: 2, attacks: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false] },
        {soundNumber: 3, attacks: [true, false, true, true, true, true, true, false, false, false, false, false, true, true, true, false] },
        {soundNumber: 4, attacks: [false, false, false, false, false, false, false, false, true, true, true, false, false, false, false, false] },
        {soundNumber: 5, attacks: [true, false, false, false, true, true, true, false, false, false, false, false, true, false, false, false] },
        {soundNumber: 6, attacks: [false, true, false, true, false, false, false, false, true, true, true, false, false, false, false, false] },
        {soundNumber: 7, attacks: [false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false] }
      ];
      for (let i = 0; i < array.length; i++) {
        const notes = document.querySelectorAll(`.sound-sound${i}`);
          for (let j = 0; j < 16; j++) {
            if (array[i].attacks[j] === true) {
              notes[j].setAttribute("data-selected", 'true')
            }
          }
      }
    })
  }
}
      
export default Sequencer;