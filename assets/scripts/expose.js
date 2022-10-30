// expose.js

// run init once DOM loads
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // variable for the dropdown that selects type of horn
  const horn_selector = document.getElementById('horn-select');

  horn_selector.onchange = function() {
    changeImage(horn_selector.value);
  }

}

function changeImage(horn_name) {
  var center_img = document.querySelector('img[alt="No image selected"]');
  
  switch(horn_name) {
    case 'air-horn':
      center_img.src = "assets/images/air-horn.svg";
      break;
    case 'car-horn':
      center_img.src = "assets/images/car-horn.svg";
      break;
    case 'party-horn':
      center_img.src = "assets/images/party-horn.svg";
      break;
  } 
}