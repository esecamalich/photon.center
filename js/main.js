$(document).ready(function(e){

  $('.trigger').mouseenter(function() {
    $('.list-cards').toggleClass('open');
  }).mouseleave(function() {
    $('.list-cards').toggleClass('open');
  });

  $('#deposit').click(function(){
    $("#deposit").addClass('selected');
  });

});
