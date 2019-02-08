import Note from './note';

export default class Sequencer {
  constructor () {
    this.sequencer = [
      this.makeRow("soundA"),
      this.makeRow("soundB"),
      this.makeRow("soundC"),
      this.makeRow("soundD"),
      this.makeRow("soundE"),
      this.makeRow("soundF"),
      this.makeRow("soundG"),
      this.makeRow("soundH"),
    ]
    // this.measuresLength = document.getElementById('measures-length');
    
  }



  makeRow(sound) {
    let notes = [];
    let row = document.createElement('div')
    row.setAttribute("class", `row-${sound}`)

    for (let i = 0; i < 16; i++) {
      let note = document.createElement('div');
      note.setAttribute("class", `sound-${sound} pos-${i} selected-false hvr-pulse-shrink` );
      note.innerHTML = i;
      notes.push(note);
      row.appendChild(note);
    }
    let container = document.querySelector('.sequencer');
    container.appendChild(row)
    return notes
  }



  resetSequencer() {

  }

}