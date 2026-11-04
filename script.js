const formulario = document.querySelector("#formulario");
const entrada = document.querySelector("#entrada");
const lista = document.querySelector("#lista");

// create

function crearTarea(texto) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;

  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "✕";
  botonBorrar.classList.add("borrar");

  // UPDATE
  li.addEventListener("click", () => {
    li.classList.toggle("hecha");
  });

  // DELETE
  botonBorrar.addEventListener("click", (event) => {
    event.stopPropagation();
    li.remove();
  });

  li.append(span, botonBorrar);
  lista.append(li);
}


// submit
formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const texto = entrada.value.trim();
    if (texto === "") return;

    crearTarea(texto);
    console.log("Tarea Agregada: ",texto);

    entrada.value = "";
    entrada.focus();
});