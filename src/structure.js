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
    ];
    // this.measuresLength = document.getElementById('measures-length');
    // this.addNoteTimeInputs = this.addNoteTimeInputs();
  }


  makeRow(sound) {
    let notes = [];
    let rowContainer = document.createElement('div');
    rowContainer.setAttribute("class", "row-container");
    let row = document.createElement('div');
    row.setAttribute("class", `row-${sound}`);

    for (let i = 0; i < 16; i++) {
      let note = this.makeNote(sound, i);
      row.appendChild(note);
      rowContainer.appendChild(row);
      notes.push(note);
    }
    document.querySelector('#sequencer').appendChild(rowContainer);
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
    note.setAttribute("data-selected", `${selected === 'true' ? 'false' : 'true'}`)
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
      note.getAttribute("data-selected") === "true" ? attacks.push(true) : attacks.push(false);
    })
    return {soundNumber, attacks};
  }

  addNoteValueInput(sound, row, rowContainer) {
    const options = ['C', `C#/Db`,'D', `D#/Eb`, 'E', 'F', `F#/Gb`, 'G', `G#/Ab`, 'A', `A#/Bb`, 'B', 'C']
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

  // addNoteTimeInputs() {
  //   const row = document.querySelector(".row-container");
  //   const seq = document.getElementById("sequencer");
  //   const timeInputsContainer = document.createElement("div");
  //   timeInputsContainer.setAttribute("id", "time-container");
  //   timeInputsContainer.setAttribute("class", "time-container");
  //   const options = {"whole": "1n", "half": "2n", "quarter": "4n", "eighth": "8n"};

  //   for(let i = 0; i < 16; i++) {
  //     const dropdown = document.createElement("select");
  //     dropdown.setAttribute("class", `time-input${i}`);
      
  //     Object.keys(options).forEach(noteTime => {
  //       const option = document.createElement("option");
  //       option.setAttribute("value", options[noteTime]);
  //       option.innerHTML = noteTime;
  //       dropdown.appendChild(option);
  //     })
  //     timeInputsContainer.appendChild(dropdown);
  //   }
  //  seq.insertBefore(timeInputsContainer, row);
  // }
}

export default Structure;
