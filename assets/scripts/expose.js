// expose.js

// run init once DOM loads
window.addEventListener('DOMContentLoaded', init);

function init() {
  // variable for the dropdown that selects type of horn
  const horn_selector = document.getElementById('horn-select');

  // variable for the volume slider
  const volume_slider = document.getElementById('volume');

  // variable for the play button
  const play_button = document.querySelector("button");

  // get audio element (NOTE: this returns an array so [0] is used to get the only element)
  var horn_audio = document.getElementsByClassName('hidden')[0];

  // when horn is changed, pass the name to changeImageAndAudio function
  horn_selector.oninput = function () {
    
    // get center image using the alt (theres no id so idk a better way)
    var center_img = document.querySelector('img[alt="No image selected"]');

    // change image/audio source based on passed horn name
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

  volume_slider.oninput = function () {
    horn_audio.volume = volume_slider.value / 100;

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

  play_button.onclick = function () {
    horn_audio.play();
  }

}

