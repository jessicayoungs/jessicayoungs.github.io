var volume = 50; 
var slider = document.getElementById("volume-slider");
var knob = document.getElementById("slider-knob");
var bar = document.getElementById("volume-bar");
var level = document.getElementById("volume-level");

function updateVolumeUI() {
  var sliderWidth = slider.offsetWidth;
  var knobWidth = knob.offsetWidth;
  var knobPosition = (sliderWidth - knobWidth) * (volume / 100);
  knob.style.left = knobPosition + "px";
  bar.style.width = knobPosition + "px";
  level.innerText = volume;
}

function decreaseVolume(event) {
  if (event.keyCode === 80) { 
    volume -= 10;
    if (volume < 0) {
      volume = 0;
    }
    updateVolumeUI();
  }
}

function increaseVolume(event) {
  if (event.keyCode === 88) { 
    volume += 10;
    if (volume > 100) {
      volume = 100;
    }
    updateVolumeUI();
  }
}

document.addEventListener("keydown", decreaseVolume);
document.addEventListener("keydown", increaseVolume);

updateVolumeUI();
