const form = document.querySelector("#formulario");
const input = document.querySelector("#tarea");
const lista = document.querySelector("#lista");
const mensaje = document.querySelector("#mensaje");

form.addEventListener("submit", (e) => {
    e.preventDefault(); //Previene la actualizacion de la pagina cada que hago un submit

    const text = input.value.trim(); //Nos ayuda a quitar espacios al inicio y final de nuestro texto

    if(text === "" || text.length < 3){
        mensaje.innerHTML = "Ingresa una tarea valida (mínimo 3 caracteres)";
        return;
    };

  const li = document.createElement("li");
/*
    li.innerHTML = `${text} <button class=\"eliminar\">Eliminar</button>`;
    lista.appendChild(li);

    input.value = ""; */
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.className = "completado"

const textNode = document.createTextNode(text);

li.appendChild(checkbox);
li.appendChild(textNode);

lista.appendChild(li);

input.value = "";
checkbox.addEventListener("change", function() {
    if (this.checked) {
        li.remove(); // Or add a class to style it as completed
    }
})
});
