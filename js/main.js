$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".home-image path");
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  var modal = $(".modal");
  var modalClosebutton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");
  var flatPath = $(".flats path")
  var flatString = $(".flat-link")
  
  //выделение нижнего этажа при загрузке страницы
  usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
  $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');

  //выделение этажа при наведении
  floorPath.on("mouseover", function () {
    currentFloor = $(this).attr('data-floor');
    floorPath.removeClass("current-floor");
    $(".counter").text(currentFloor);
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
    $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
  });

  //кнопка увеличения этажа
  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
      $(".counter").text(usCurrentFloor);    
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });

  //кнопка уменьшения этажа
  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
      $(".counter").text(usCurrentFloor);    
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });
  
  //вывод окна с выбором квартиры
  floorPath.on("click", toggleModal);
  modalClosebutton.on("click", toggleModal);
  viewFlatsButton.on("click", toggleModal);

  function toggleModal () {
    modal.toggleClass("is-open");
  }

  //выделение квартиры при наведении курсора на изображение
  flatPath.on("mouseover", function () {
    currentFlat = $(this).attr('data-flat');
    currentFlatText = $(this).attr('data-flat');
    flatPath.removeClass("current-flat");    
    flatString.removeClass("current-flat-string");
    $(`[data-flat=${currentFlat}]`).toggleClass('current-flat');
    $(`[data-flat=${currentFlatText}]`).toggleClass('current-flat-string');  
  });

  //снятие выделения при уходе курсора с изображения
  flatPath.on("mouseout", function () {
    $(`[data-flat=${currentFlat}]`).toggleClass('current-flat');
    $(`[data-flat=${currentFlatText}]`).toggleClass('current-flat-string');  
  });

  //выделение квартиры при наведении курсора на строку
  flatString.on("mouseover", function () {
    currentFlat = $(this).attr('data-flat');
    currentFlatText = $(this).attr('data-flat');  
    flatPath.removeClass("current-flat");  
    flatString.removeClass("current-flat-string");
    $(`[data-flat=${currentFlat}]`).toggleClass('current-flat');
    $(`[data-flat=${currentFlatText}]`).toggleClass('current-flat-string'); 
  });

  //снятие выделения при уходе курсора со строки
  flatString.on("mouseout", function () {
    $(`[data-flat=${currentFlat}]`).toggleClass('current-flat');
    $(`[data-flat=${currentFlatText}]`).toggleClass('current-flat-string');  
  });  
}); 