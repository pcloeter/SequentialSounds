import Structure from './structure.js';
import Tone from 'tone';
import Sequencer from './sequencer';

document.addEventListener("DOMContentLoaded", ()  => {
  const structure = new Structure();

  const sequencer = new Sequencer(structure);
  sequencer.startPlayback();
});