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

('#registro').hide();
$('#btn_crear_cuenta').on('click', function(event) {
$('#login').hide();
event.preventDefault();
$('#registro').show();
});
$('#form_restaurante').hide();
  $('#btn_restaurante').on('click', function(event) {
  $('#form_usuario').hide();
  event.preventDefault();
  $('#form_restaurante').show();
});
$('#btn_usuario').on('click', function(event) {
$('#form_restaurante').hide();
event.preventDefault();
$('#form_usuario').show();
});
  });
