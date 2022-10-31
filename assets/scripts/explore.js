// explore.js

// run init once DOM loads
window.addEventListener('DOMContentLoaded', init);

function init() {

  // array of voices to be filled later
  var voices = [];

  // load needed elements from HTML
  const synth = window.speechSynthesis;
  const play_button = document.querySelector("button");
  const face_img = document.querySelector('img[alt="Smiling face"]');
  const voice_selection = document.getElementById("voice-select");
  const inputForm = document.getElementById('text-to-speak');

  // keep loading voices until they're all there
  synth.addEventListener('voiceschanged', () => {
    voices = synth.getVoices();

    // add all voices to selection list
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.text = voices[i].name;
      voice_selection.add(option);
    }
  });

  // when button clicked, play audio
  play_button.onclick = function () {

    // if no text is in the form, do nothing
    if (inputForm.value === "") return;

    // create utterThis and get selected option
    const utterThis = new SpeechSynthesisUtterance(inputForm.value);
    const selectedOption = voice_selection.selectedOptions[0].text;

    // if no voice is selected, do nothing
    if (selectedOption === voice_selection[0].text) return;

    // find the selected voice and attach it to utterThis
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    // open mouth and speak
    face_img.src = "assets/images/smiling-open.png";
    synth.speak(utterThis);

    // once speech is finished, close mouth
    utterThis.addEventListener('end', (event) => {
      face_img.src = "assets/images/smiling.png";
    });
  }
}





