import 

class Sequencer {
  constructor () {
    this.sequencer = [
      this.makeRow("sound1"),
      this.makeRow("sound2"),
      this.makeRow("sound3"),
      this.makeRow("sound4"),
      this.makeRow("sound5"),
      this.makeRow("sound8"),
    ]
    // this.measuresLength = document.getElementById('measures-length');
    
  }

  makeRow(sound) {
    let notes = [];
    for (let i = 0; i < 16; i++) {
      notes.push(false)
      
    }
  }

  resetSequencer()

}