let posicionActual = 0;
mostrarImagenes();

function avanzar() {
  if (posicionActual >= imagenes.length - 1) {
    posicionActual = 0;
  } else {
    posicionActual++;
  }
  mostrarImagenes();
}

function atrasar() {
  if (posicionActual <= 0) {
    posicionActual = imagenes.length - 1;
  } else {
    posicionActual--;
  }
  mostrarImagenes();
}

function mostrarImagenes() {
  let imagen = RUTA + imagenes[posicionActual].imagen;
  let nombre = imagenes[posicionActual].nombre;
  let edad = imagenes[posicionActual].edad;
  let año = imagenes[posicionActual].año;
  let estacion = imagenes[posicionActual].estacion;
  let lugar = imagenes[posicionActual].lugar;

  document.getElementById("imagen").src = imagen;  
  document.getElementById("imagen").alt = lugar;
  /*document.getElementById("imagen").nombre = imagenes[posicionActual].nombre;
  document.getElementById("imagen").edad = imagenes[posicionActual].edad;
  document.getElementById("imagen").año = imagenes[posicionActual].año;
  document.getElementById("imagen").estacion = imagenes[posicionActual].estacion;
  document.getElementById("imagen").lugar = imagenes[posicionActual].lugar;*/


  document.getElementById("nombreImagen").innerHTML = nombre;
  document.getElementById("edad").innerHTML = edad;
  document.getElementById("año").innerHTML = año;
  document.getElementById("estacion").innerHTML = estacion;
  document.getElementById("lugar").innerHTML = lugar;
    
}
