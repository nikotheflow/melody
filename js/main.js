$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".home-image path");
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");

  usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
  $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');

  floorPath.on("mouseover", function () {
    currentFloor = $(this).attr('data-floor');
    floorPath.removeClass("current-floor");
    $(".counter").text(currentFloor);
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
    $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
  });

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
      $(".counter").text(usCurrentFloor);    
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
      $(".counter").text(usCurrentFloor);    
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });
});