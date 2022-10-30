// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  var voice_selection = document.getElementById("voice-select");

  synth.addEventListener('voiceschanged', () => {
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.text = voices[i].name;

      voice_selection.add(option);
    }
  });


}





