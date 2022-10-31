// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const play_button = document.querySelector("button");
  var voices = [];

  var voice_selection = document.getElementById("voice-select");

  synth.addEventListener('voiceschanged', () => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.text = voices[i].name;

      voice_selection.add(option);
    }
  });

  var inputForm = document.getElementById('text-to-speak');

  play_button.onclick = function () {
    
    const utterThis = new SpeechSynthesisUtterance(inputForm.value);
    const selectedOption = voice_selection.selectedOptions[0].text;
    
    if (selectedOption === voice_selection[0].text) return;
    
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);

  }




}





