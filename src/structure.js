class Structure{
  constructor () {
    this.soundRows = [
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
    let row = document.createElement('div')
    row.setAttribute("class", `row-${sound}`)

    for (let i = 0; i < 16; i++) {
      let note = this.makeNote(sound, i);
      row.appendChild(note);
      notes.push(note);
    }
    document.querySelector('.sequencer').appendChild(row);
    return notes;
  
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
        `);

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


  soundRowsPlayback (soundRows, rowPlayback) {
    let array = [];
    for (let i = 0; i < soundRows.length; i++) {
      array.push(rowPlayback(`${i}`));
    }
    return array;
  }


  rowPlayback (soundNumber) {
    let attacks = [];
    let notes = document.querySelectorAll(`.sound-sound${soundNumber}`);
    notes.forEach(note => {
      if (note.getAttribute("data-selected") === "true") {
        attacks.push(true);
      } else {
        attacks.push(false);
      }
    });
    return {soundNumber, attacks};
  }

  resetSequencer() {
    new Structure();
  }

}

export default Structure;

