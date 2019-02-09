import Note from './note';

class Sequencer {
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

    document.querySelector('.sequencer').appendChild(row);
    return notes
  }

  makeNote (sound, pos) {
    let noteContainer = document.createElement('div');
      noteContainer.setAttribute('class', "note");
    
    let note = document.createElement('div');
    note.setAttribute("class", `
      note-face-front 
      sound-${sound} 
      pos-${pos} 
      pulse-shrink
      ` 
      );
    note.setAttribute("data-selected", 'false');

    note.addEventListener('click', ()  => {
      this.toggleSelect(note);
    });

    noteContainer.appendChild(note);

    return noteContainer;

  }
    


  toggleSelect (note) {
    let selected = note.getAttribute('data-selected');
    
    if (selected === "true") {
      note.setAttribute("data-selected", 'false');
    } else {
      note.setAttribute("data-selected", 'true');
    }
  };

resetSequencer() {
    new Sequencer();
  }

}

export default Sequencer;

