// expose.js

// run init once DOM loads
window.addEventListener('DOMContentLoaded', init);

function init() {

  // initialize confetti
  const jsConfetti = new JSConfetti();

  // variables for adjustment buttons/sliders/selectors
  const horn_selector = document.getElementById('horn-select');
  const volume_slider = document.getElementById('volume');
  const play_button = document.querySelector("button");

  // audio element (NOTE: this returns an array so [0] is used to get the only element)
  var horn_audio = document.getElementsByClassName('hidden')[0];

  // when horn type is changed
  horn_selector.oninput = function () {

    // get center image using the alt (theres no id so idk a better way)
    var center_img = document.querySelector('img[alt="No image selected"]');

    // change image/audio source based on horn name
    switch (horn_selector.value) {
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

  // volume slider is changed
  volume_slider.oninput = function () {

    // volume is the 0-100 value as a decimal
    horn_audio.volume = volume_slider.value / 100;

    // get volume image and change it according to slider value
    var vol_img = document.querySelector('img[alt="Volume level 2"]');
    if (volume_slider.value == 0) {
      vol_img.src = "assets/icons/volume-level-0.svg";
    } else if (volume_slider.value < 33) {
      vol_img.src = "assets/icons/volume-level-1.svg";
    } else if (volume_slider.value < 67) {
      vol_img.src = "assets/icons/volume-level-2.svg";
    } else {
      vol_img.src = "assets/icons/volume-level-3.svg";
    }
  }

  // simple enough, just play audio on click and confetti if its a party
  play_button.onclick = function () {
    horn_audio.play();
    if(horn_selector.value == 'party-horn') {
      jsConfetti.addConfetti({
        emojis: ['🥺', '😨', '🤪', '😐'],
        emojiSize: 45,
        confettiNumber: 125,
      })
    } 
  }
}

