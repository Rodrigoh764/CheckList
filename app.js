const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    //ESTO ES PARA QUE LA PAGINA NO SE ESTE REFRESCANDO A CADA RATO
    //ESTO AYUDA A QUE NO SE ENVIEN DATOS A UN LADO
    evento.preventDefault();

    const input = document.querySelector("[data-form-input]")
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li");
    task.classList.add("card")
    input.value = "";

    //ESTO SE LLAMA BACKTICKS SIRVE PARA PEGAR CODIGO HTML
const content = `
            <div>
              <i class="far fa-check-square icon"></i>
              <span class="task">${value}</span>
            </div>
`   
    task.innerHTML = content;

    list.appendChild(task);

    console.log(content);
}

console.log(btn);


btn.addEventListener("click", createTask);