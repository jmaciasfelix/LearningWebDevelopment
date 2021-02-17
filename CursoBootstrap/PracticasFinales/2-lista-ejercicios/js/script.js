$(function () {
  "use strict";
  load();
});

function load() {
  $(".btn").on("click", publica);
}

function publica() {
  /*Obtener los datos de los campos nombre, rutina y textarea*/
  let nombre = $("#nombre").val();
  let rutina = $("#rutina").val();
  let info = $("#info").val();

  if (nombre.length && rutina.length && info.length) {
    //Los campos estan completos
    $("#nombre").val("");
    $("#rutina").val("");
    $("#info").val("");

    console.log("Se obtiene el nombre enviado " + nombre);
    // Se crea h4 y se le asigna el nombre y la clase mt-0
    let name = document.createElement("h4");
    name.classList.add("mt-0");
    name.innerHTML = nombre;
    // Se crea un parrafo de rutina y se le asigna el valor
    let p_rutina = document.createElement("p");
    p_rutina.innerHTML = rutina;
    // Se crea el parrafo de info
    let p_info = document.createElement("p");
    p_info.innerHTML = info;
    //Se crea un div con clasemedia-body
    let divMediaB = document.createElement("div");
    divMediaB.classList.add("media-body");
    //Se enlaza a ese div todo lo demas
    divMediaB.appendChild(name);
    divMediaB.appendChild(p_rutina);
    divMediaB.appendChild(p_info);
    divMediaB.appendChild(document.createElement("hr"));
    //Se crea la img
    let imagen = document.createElement("img");
    imagen.setAttribute("src", "https://picsum.photos/64");
    imagen.classList.add("d-flex", "align-self-start", "mr-3");
    //Se crea el div media
    let divMedia = document.createElement("div");
    divMedia.classList.add("media");
    divMedia.appendChild(imagen);
    divMedia.appendChild(divMediaB);

    //Finalmente se obtiene el elemento padre de todos y se inserta
    let contenedorEj = document.getElementById("contenedor-ejercicios");
    contenedorEj.appendChild(divMedia);

    Swal.fire(
      "La rutina se ha añadido correctamente.",
      "Buen trabajo!",
      "success"
    );
  } else {
    Swal.fire(
      "Es necesario completar todos los campos.",
      "Intentalo de nuevo.",
      "error"
    );
  }

  /*Comprobar que los campos no estan vacios en caso de estarlos dar un mensaje de error con sweert alert*/
  /*Reiniciar valores con .val("")*/
  /*Clonar el elemento que se vaya a crear o crear una estructura con los mismos estilos*/
  /*Dar valor a la estructura*/
  /*Insertar y alertar de que se ha añadido correctamente con sweet alert */
}
