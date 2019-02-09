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
      let note = this.makeNote(sound, i);
      notes.push(note);
      row.appendChild(note);
    }

    let container = document.querySelector('.sequencer');
    container.appendChild(row)
    return notes
  }

  makeNote (sound, pos) {
    let note = document.createElement('div');
    note.setAttribute("class", `sound-${sound} pos-${pos} hvr-pulse-shrink` );
    note.innerHTML = pos;
    note.setAttribute("data-selected", 'false');

    note.addEventListener = ('click', ()  => {
      this.toggleSelect();
    });

    return note;

  }
    


  toggleSelect () {
    let selected = this.getAttribute('data-selected');

    if (selected === "true") {
      this.attr('data-selected', 'false')
    } else {
      this.attr('data-selected', 'true')
    }
  };

  resetSequencer() {

  }

}