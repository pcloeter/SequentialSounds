import Structure from './structure.js';
import Tone from 'tone';
import Sequencer from './sequencer';

// const structure = new Structure();
// const sequencer = new Sequencer(structure);
// sequencer.startPlayback();

// window.rowPlayback = structure.rowPlayback;
// window.soundRowsPlayback = structure.soundRowsPlayback;
// window.soundRows = structure.soundRows;
document.addEventListener("DOMContentLoaded", ()  => {
  
  const synth = new Tone.Synth().toMaster();

  window.addEventListener("click", () => {
    synth.triggerAttackRelease('E4', '8n')

  })
  
});