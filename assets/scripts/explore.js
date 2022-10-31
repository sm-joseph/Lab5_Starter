// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const play_button = document.querySelector("button");

  var voice_selection = document.getElementById("voice-select");

  synth.addEventListener('voiceschanged', () => {
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.text = voices[i].name;

      voice_selection.add(option);
    }
  });

  var inputForm = document.getElementById('text-to-speak');

  play_button.onclick = function () {
    alert(inputForm.value);
  }




}





