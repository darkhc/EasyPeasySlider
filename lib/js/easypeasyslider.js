/*
  Library: EasyPeasySlider
  Author: Cristian Ocaña Soler
  License: Creative Commons -> Attribution (BY)
*/
function EasyPeasySlider(images, debug = false) {
  var currentSlider = -1;
  var images = images;
  this.debug = debug;
  this.elementSlider = "#slider";
  this.maxImages = images.length;
  this.init = function(selectorSlider) {
    this.elementSlider = $(selectorSlider);
    currentSlider = 0;
    $(this.elementSlider).css("background-image", "url('"+images[currentSlider]+"')");
    if (this.debug) {
      console.log("CurrentSlider Index init to:" + currentSlider);
    }
  }
  this.next = function() {
    var slider = this.elementSlider;
    $(this.elementSlider).animate({opacity: 0.0}, 700, function() {
      if (debug) {
        console.log("Changing image Slider to: '" + images[currentSlider] + "'");
      }
      $(slider).css("background-image", "url('"+images[currentSlider]+"')"); $(slider).css("opacity", "1.0");
    });
    currentSlider++;
    if (currentSlider >= this.maxImages) {
      currentSlider = 0;
    }
    if (this.debug) {
      console.log("CurrentSlider Index Changed to:" + currentSlider);
    }
  }
}