$(document).ready(function () {
  $('#slider').slider({
    min: 0,
    max: 100,
    value: 50,
    animate: true,
    slide: function (event, ui) {
      $('#divSliderValue').html('Waarde: ' + ui.value);
    }
  });
});
