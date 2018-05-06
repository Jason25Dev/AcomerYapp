$(document).ready(function(){
    $('.dropdown-menu').show();
      $('.nav-link').on('click', function(event) {
      event.preventDefault();
      $('.dropdown-menu').show();
});
$('.close').on('click', function(event) {
event.preventDefault();
$('.dropdown-menu').show();
});
  });
