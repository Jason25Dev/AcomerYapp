function buscar_usuario(){
  var usuarios = ['daniel@hotmail.com', 'manuel@hotmail.com', 'andres@hotmail.com'];
  var contraseñas = ['daniel123456', 'manuel123456', 'andres123456'];
  
  var email,password,i;
  email = document.getElementById("correo").value;
  password = document.getElementById("contraseña").value;
for(i=0; i<=3; i++){
if (usuarios[i]==email && contraseñas[i]==password)
  location.href ="../index.html";
}
}
