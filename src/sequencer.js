import Tone from 'tone';

class Sequencer {
  constructor(structure) {
    this.keys = ['D3', "F3", "A3", "C4", "E4", "G4", "B4", "D5"];
    this.instrument = new Tone.PolySynth(8, Tone.Synth).toMaster();
    this.oldSoundRows = structure.soundRows;
    this.newSoundRows = structure.soundRowsPlayback;
    this.rowPlayback = structure.rowPlayback;
    this.resetButton = document.getElementById("reset-button");
    this.playButton = document.getElementById("play-button");
    this.controlPlayback = this.controlPlayback.bind(this);
    this.resetSequencer = this.resetSequencer.bind(this);

    
    this.demo = [
      {soundNumber: 0, attacks: [false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false] },
      {soundNumber: 1, attacks: [false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false] },
      {soundNumber: 2, attacks: [false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false] },
      {soundNumber: 3, attacks: [false, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false] },
      {soundNumber: 4, attacks: [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false] },
      {soundNumber: 5, attacks: [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false] },
      {soundNumber: 6, attacks: [false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false] },
      {soundNumber: 7, attacks: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false] }
    ];
    
    
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
          this.instrument.triggerAttackRelease((this.keys[i]), "4n")
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
  
  
}

export default Sequencer;