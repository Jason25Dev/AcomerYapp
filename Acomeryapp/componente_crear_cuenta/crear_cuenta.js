$(document).ready(function(){
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
