// expose.js

// run init once DOM loads
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // variable for the dropdown that selects type of horn
  const horn_selector = document.getElementById('horn-select');

  // variable for the volume slider
  const volume_slider = document.getElementById('volume');

  // when horn is changed, pass the name to changeImageAndAudio function
  horn_selector.onchange = function () {
    changeImageAndAudio(horn_selector.value);
  }

  volume_slider.onchange = function() {
    changeVolume(volume_slider.value);
  }

}

function changeImageAndAudio(horn_name) {
  // get center image using the alt (theres no id so idk a better way)
  var center_img = document.querySelector('img[alt="No image selected"]');

  // get audio element (NOTE: this returns an array so [0] is used to get the only element)
  var horn_audio = document.getElementsByClassName('hidden')[0];
  
  // change image/audio source based on passed horn name
  switch (horn_name) {
    case 'air-horn':
      center_img.src = "assets/images/air-horn.svg";
      horn_audio.src = "assets/audio/air-horn.mp3"
      break;
    case 'car-horn':
      center_img.src = "assets/images/car-horn.svg";
      horn_audio.src = "assets/audio/car-horn.mp3"
      break;
    case 'party-horn':
      center_img.src = "assets/images/party-horn.svg";
      horn_audio.src = "assets/audio/party-horn.mp3"
      break;
  }
}

function changeVolume(slider_value){

  // get audio element (NOTE: this returns an array so [0] is used to get the only element)
  var horn_audio = document.getElementsByClassName('hidden')[0];

  horn_audio.volume = slider_value/100;

}