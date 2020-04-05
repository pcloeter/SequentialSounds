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
    let rowContainer = document.createElement('div');
    rowContainer.setAttribute("class", "rowContainer");
    let row = document.createElement('div');
    row.setAttribute("class", `row-${sound}`);

    for (let i = 0; i < 16; i++) {
      let note = this.makeNote(sound, i);
      row.appendChild(note);
      rowContainer.appendChild(row);
      notes.push(note);
    }
    document.querySelector('.sequencer').appendChild(rowContainer);
    this.addNoteValueInput(sound, row, rowContainer);
    return notes;
  }


  makeNote (sound, pos) {
    let noteContainer = document.createElement('div');
      noteContainer.setAttribute('class', "note");
    
    let note = document.createElement('div');
    note.setAttribute("class",
      `note-face-front 
      sound-${sound} 
      pos-${pos} 
      pulse-shrink`
    );

    note.setAttribute("data-selected", 'false');
    note.setAttribute("shape", "circle");
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

  addNoteValueInput(sound, row, rowContainer) {
    const options = ['C', `C#/D`,'D', `D#/E`, 'E', 'F', `F#/G`, 'G', `G#/A`, 'A', `A#/B`, 'B', 'C']
    const values = ['C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5'];
    let dropdown = document.createElement('select');
    dropdown.setAttribute("name", sound);
    dropdown.setAttribute("class", "note-input")

    values.forEach((val, i) => { 
      const option = document.createElement('option');
      option.setAttribute("value", val);
      option.innerHTML = options[i];
      dropdown.appendChild(option);
    })
    rowContainer.insertBefore(dropdown, row);
  }
}

export default Structure;

