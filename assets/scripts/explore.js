// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();

  var voice_selection = document.getElementById("voice-select");
  var option = document.createElement("option");
  option.text = voices[0].name;
  voice_selection.add(option);

}