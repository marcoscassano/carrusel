function agregar() {
  const imagen =
    prompt(
      "Ingrese el nombre de la imagen que desea agregar(sin extension):",
      ""
    ) + ".jpg";
  const nombre = prompt("Ingrese el nombre de la imagen: ");
  const edad = prompt("ingrese la edad: ");
  const año = prompt("Ingres el año: ");
  const estacion = prompt("ingrese la estacion: ");
  const lugar = prompt("Ingese el lugar: ");

  const nuevaImagen = {
    imagen: imagen,
    nombre: nombre,
    edad: edad,
    año: año,
    estacion: estacion,
    lugar: lugar,
  };
  imagenes.push(nuevaImagen);
  posicionActual = imagenes.length - 1;
  mostrarImagenes();
}
function buscarImagen() {
  let encuentra = false;
  let posicion = 0;
  let nomFoto = prompt("Ingrese el nombre de la foto que busca: ");

  while (posicion < imagenes.length && !encuentra) {
    encuentra = (nomFoto == imagenes[posicion].nombre);
    if (!encuentra) {
      posicion++;
    }
  }

    if (encuentra) {
      posicionActual = posicion;
      console.log(posicionActual);
      mostrarImagenes();
    } else {
      alert("La palabra " + nomFoto + " no se encuentra en nuestra base de datos");

    }
}
function eliminar() {
  buscarImagen();
  mostrarImagenes();
  let confirmar = prompt(
    "Estas seguro que deseas eliminar? " +
      imagenes[posicionActual].nombre +
      "?" +
      "si/no"
  );
  if (confirmar == "si") {
    imagenes.splice(posicionActual, 1);
    alert("La imagen ha sido eliminada");
    posicionActual = 0;
    mostrarImagenes();
  } else {
    alert("La imagen no ha sido eliminada");
    mostrarImagenes();
  }
}
