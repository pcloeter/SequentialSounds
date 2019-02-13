import Structure from './structure.js';
import Tone from 'tone';
import Sequencer from './sequencer';

document.addEventListener("DOMContentLoaded", ()  => {
  const structure = new Structure();
  const sequencer = new Sequencer(structure);
  sequencer.controlPlayback();
  sequencer.resetSequencer();

  // window.startPlayback = sequencer.startPlayback;
  // window.soundRows = structure.soundRows;
  // window.rowPlayback = structure.rowPlayback;
  // window.soundRowsPlayback = structure.soundRowsPlayback;
  // const demo = [
  //   {soundNumber: 0, attacks: [false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false] },
  //   {soundNumber: 1, attacks: [false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false] },
  //   {soundNumber: 2, attacks: [false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false] },
  //   {soundNumber: 3, attacks: [false, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false] },
  //   {soundNumber: 4, attacks: [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false] },
  //   {soundNumber: 5, attacks: [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false] },
  //   {soundNumber: 6, attacks: [false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false] },
  //   {soundNumber: 7, attacks: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false] }
  // ];
  // const synth = new Tone.PolySynth(8, Tone.Synth).toMaster();
  
  // window.addEventListener("click", () => {
  
  
  // let keys = ['D3', "F4", "A5", "C4", "E4", "G4", "B4", "D5"];
  

  //   let seq = new Tone.Sequence( (time, pos) => {
  //     for (let i = 0; i < soundRows.length; i++) {
  //       let attack = demo[i].attacks[pos];
        
  //       if (attack) {
  //         synth.triggerAttackRelease(keys[i], "4n")
  //       }
  //     }
  //   }, [0,1,2,3,4,5,6,8,9,10,11,12,13,14,15], "4n");
    
  //     Tone.Transport.start();
  //     seq.start();


      
  //   })
    
  });
