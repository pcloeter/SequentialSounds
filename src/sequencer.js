import Note from './note';

class Sequencer {
  constructor () {
    this.sequencer = [
      this.makeRow("sound0"),
      this.makeRow("sound1"),
      this.makeRow("sound2"),
      this.makeRow("sound3"),
      this.makeRow("sound4"),
      this.makeRow("sound5"),
      this.makeRow("sound6"),
      this.makeRow("sound7"),
    ]
    // this.measuresLength = document.getElementById('measures-length');
    
  }

  makeRow(sound) {
    let notes = [];
    for (let i = 0; i < 16; i++) {
      notes.push(new Note(false, i, sound))
    }
    return notes
  }

  
  resetSequencer()

}