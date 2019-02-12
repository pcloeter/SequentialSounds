import Tone from 'tone';

class Sequencer {
  constructor(structure) {
    this.keys = ['D3', "F4", "A4", "C4", "E4", "G4", "B4", "D5"];
    this.instrument = new Tone.PolySynth(8, Tone.Synth).toMaster();
    this.oldSoundRows = structure.soundRows;
    this.newSoundRows = structure.soundRowsPlayback;
    this.rowPlayback = structure.rowPlayback;
    this.playButton = document.getElementById("play-button");
    this.controlPlayback = this.controlPlayback.bind(this);
    
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
        let attack = this.newSoundRows(this.oldSoundRows, this.rowPlayback)[i].attacks[pos];
        
        if (attack) {
          this.instrument.triggerAttackRelease((this.keys[i]), "4n")
        }
      }
    }, this.interval(), "4n");
    debugger
    Tone.Transport.start();
  };
  
  controlPlayback() {
    const that = this;
    this.playButton.addEventListener("click", (e) => {
      if (that.sequence.state === 'stopped') {
        that.sequence.start(); 
      } else {
        that.sequence.stop();
      }
      debugger
    }
  )};
  
  
}

export default Sequencer;