

document.addEventListener("DOMContentLoaded", ()  => {
  document.getElementById('main');
  var note = new Tone.Event(function(time, pitch){
    synth.triggerAttackRelease(pitch, "16n", time);
  }, "C2");
  
  //set the note to loop every half measure
  note.set({
    "loop" : true,
    "loopEnd" : "2n"
  });
})