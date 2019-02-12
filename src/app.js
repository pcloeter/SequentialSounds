import Structure from './structure.js';
import * as Tone from 'tone';
import Sequencer from './sequencer';

// const structure = new Structure();
// const sequencer = new Sequencer(structure);
// sequencer.startPlayback();

// window.rowPlayback = structure.rowPlayback;
// window.soundRowsPlayback = structure.soundRowsPlayback;
// window.soundRows = structure.soundRows;
document.addEventListener("DOMContentLoaded", ()  => {
  
  var synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease('E4', '8n')
  
});