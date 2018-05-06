function buscar_usuario(){
  var usuarios = ['daniel@hotmail.com', 'manuel@hotmail.com', 'andres@hotmail.com','jason@hotmail.com' ];
  var contraseñas = ['daniel123456', 'manuel123456', 'andres123456'];

  var email,password,i;
  email = document.getElementById("correo").value;
  password = document.getElementById("contraseña").value;
for(i=0; i<=3; i++){
if (usuarios[i]==email && contraseñas[i]==password)
  location.href ="../componente_Usuarios/home.html";
}
if(usuarios[i]=="jason@hotmail.com" && contraseñas[i]==password)
  location.href ="../componente_Administrdor/index_Administrador.html";
}
