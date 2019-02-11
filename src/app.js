import Structure from './structure.js';
import * as Tone from 'tone';
import Sequencer from './sequencer';

document.addEventListener("DOMContentLoaded", ()  => {
  const structure = new Structure();
  const sequencer = new Sequencer(structure);
  sequencer.startPlayback();

  window.rowPlayback = structure.rowPlayback;
  window.soundRowsPlayback = structure.soundRowsPlayback;
  window.soundRows = structure.soundRows;
});