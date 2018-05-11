function initMap(){
//pociones inicial del mapa
var options = {
  zoom:15,
  center:{lat:4.6859019,lng:-74.11131820000003}
}
//mapa nuevo
var map= new google.maps.Map(document.getElementById('map'),options);
//agregar restaurante
agregarRestaurante({coordenadas:{lat:4.6901458,lng:-74.10973480000001}});//manuel
agregarRestaurante({coordenadas:{lat:4.6859019,lng:-74.11131820000003}});//jonathan
agregarRestaurante({coordenadas:{lat:4.681549899999999,lng:-74.11190850000003}});//daniel
agregarRestaurante({coordenadas:{lat:4.683487,lng:-74.10450049999997}});//andres

//agregar restaurante function
function agregarRestaurante(props){
var marker = new google.maps.Marker({
position:props.coordenadas,
map:map
});
}
}
function teriyaki(){

  var options = {
    zoom:16,
    center:{lat:4.683487,lng:-74.10450049999997}
  }
  //mapa nuevo
  var map= new google.maps.Map(document.getElementById('map'),options);
  //agregar restaurante
  agregarRestaurante({coordenadas:{lat:4.683487,lng:-74.10450049999997}});//andres
  //agregar restaurante function
  function agregarRestaurante(props){
  var marker = new google.maps.Marker({
  position:props.coordenadas,
  map:map
  });
  }
  }
  function sando(){

    var options = {
      zoom:16,
      center:{lat:4.6901458,lng:-74.10973480000001}
    }
    //mapa nuevo
    var map= new google.maps.Map(document.getElementById('map_sando'),options);
    //agregar restaurante
    agregarRestaurante({coordenadas:{lat:4.6901458,lng:-74.10973480000001}});
    //agregar restaurante function
    function agregarRestaurante(props){
    var marker = new google.maps.Marker({
    position:props.coordenadas,
    map:map
    });
    }
    }
    function apolo(){

      var options = {
        zoom:16,
        center:{lat:4.6859019,lng:-74.11131820000003}
      }
      //mapa nuevo
      var map= new google.maps.Map(document.getElementById('map_apolo'),options);
      //agregar restaurante
      agregarRestaurante({coordenadas:{lat:4.6859019,lng:-74.11131820000003}});//andres
      //agregar restaurante function
      function agregarRestaurante(props){
      var marker = new google.maps.Marker({
      position:props.coordenadas,
      map:map
      });
      }
      }
      function normadia(){

        var options = {
          zoom:16,
          center:{lat:4.681549899999999,lng:-74.11190850000003}
        }
        //mapa nuevo
        var map= new google.maps.Map(document.getElementById('map_normandia'),options);
        //agregar restaurante
        agregarRestaurante({coordenadas:{lat:4.681549899999999,lng:-74.11190850000003}});//andres
        //agregar restaurante function
        function agregarRestaurante(props){
        var marker = new google.maps.Marker({
        position:props.coordenadas,
        map:map
        });
        }
        }
