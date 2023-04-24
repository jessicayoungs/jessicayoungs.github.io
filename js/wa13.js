var volume = 50; // initial volume level
var slider = document.getElementById("volume-slider");
var knob = document.getElementById("slider-knob");
var bar = document.getElementById("volume-bar");
var level = document.getElementById("volume-level");

// update the knob position, volume bar, and volume level based on the current volume
function updateVolumeUI() {
  var sliderWidth = slider.offsetWidth;
  var knobWidth = knob.offsetWidth;
  var knobPosition = (sliderWidth - knobWidth) * (volume / 100);
  knob.style.left = knobPosition + "px";
  bar.style.width = knobPosition + "px";
  level.innerText = volume;
}

// decrease the volume level when the "P" key is pressed
function decreaseVolume(event) {
  if (event.keyCode === 80) { // "P" key
    volume -= 10;
    if (volume < 0) {
      volume = 0;
    }
    updateVolumeUI();
  }
}

// increase the volume level when the "X" key is pressed
function increaseVolume(event) {
  if (event.keyCode === 88) { // "X" key
    volume += 10;
    if (volume > 100) {
      volume = 100;
    }
    updateVolumeUI();
  }
}

// add event listeners for key presses
document.addEventListener("keydown", decreaseVolume);
document.addEventListener("keydown", increaseVolume);

// initialize the knob position, volume bar, and volume level
updateVolumeUI();
