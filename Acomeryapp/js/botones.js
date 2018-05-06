$(document).ready(function(){
    $('#menu').hide();
      $('#domicilios').on('click', function(event) {
      event.preventDefault();
      $('#menu').show();
});
$('.dropdown-menu').hide();
  $('.nav-link').on('click', function(event) {
  event.preventDefault();
  $('.dropdown-menu').show();
});
$('.close').on('click', function(event) {
event.preventDefault();
$('.dropdown-menu').hide();
});
  });
