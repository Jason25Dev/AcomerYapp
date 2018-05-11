$('.dropdown-menu').hide();
  $('.dropdown-toggle').on('click', function(event) {
  event.preventDefault();
  $('.dropdown-menu').show();
});
$('.close').on('click', function(event) {
event.preventDefault();
$('.dropdown-menu').hide();
});
$(function () {
  $('[data-toggle="popover"]').popover()
})