const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    //ESTO ES PARA QUE LA PAGINA NO SE ESTE REFRESCANDO A CADA RATO
    //ESTO AYUDA A QUE NO SE ENVIEN DATOS A UN LADO
    evento.preventDefault();

    const input = document.querySelector("[data-form-input]")
    console.log(input.value);
}


console.log(btn);

btn.addEventListener("click", createTask);