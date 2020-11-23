import Structure from './structure.js';
import Sequencer from './sequencer';

document.addEventListener("DOMContentLoaded", ()  => {
  const modal = document.getElementById('modal-container');
  const button = document.getElementById('modal-button');
  const close = document.getElementById('close')
  button.addEventListener('click', () => {
    modal.style.display = "block";
  });

  close.addEventListener('click', () => {
    modal.style.display = "none";
  })

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  const structure = new Structure();
  const sequencer = new Sequencer(structure);
  sequencer.controlPlayback();
  sequencer.resetSequencer();
  sequencer.setDemo();
  sequencer.whichShape();
  sequencer.toggleNoteInputs();
  // sequencer.toggleTimeInputs();
});
