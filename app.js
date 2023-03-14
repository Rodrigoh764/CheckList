(() => {
const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
  //ESTO ES PARA QUE LA PAGINA NO SE ESTE REFRESCANDO A CADA RATO
  //ESTO AYUDA A QUE NO SE ENVIEN DATOS A UN LADO
  evento.preventDefault();

  //OBTENEMOS ACESO AL CAMPO
  const input = document.querySelector("[data-form-input]");

  //OBTENEMOS EL VALOR DEL CAMPO
  const value = input.value;

  //OBTENEMOS EL ACESO AL CAMPO
  const list = document.querySelector("[data-list]");

  //INDICAMOS QUE NOS CREE ELEMETOS DE TIPO IL
  const task = document.createElement("li");

  //INDICAMOS QUE SE HARA UNA LISTA SUMANDO LOS ELEMENTOS
  task.classList.add("card");

  //CON ESTA ACCION SE LOGRA BORRAR LO QUE SE INGRESO EN AGREGAR TAREA
  input.value = "";


  const taskContent = document.createElement("div");



  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);



  
  const content = `
          
            <i class="fas fa-trash-alt trashIcon icon"></i>
           
`;



  task.appendChild(taskContent);


  list.appendChild(task);
};

btn.addEventListener("click", createTask);

const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", completeTask);
  return i;
};

const completeTask = (event) => {
  /*
  const element = event.target;
  element.classList.add("fas");
  element.classList.add("completeIcon");
  element.classList.remove("far");
  
  EL TOGGLE LO QUE HACE ES QUE SI EXISTE LA CLASE LO QUITO Y SI NO EXISTE LA PONGO
  ES UN COMODIN YA QUE ARRIBA LO QUE TENEMOS ES ADD QUE ES SUMAR O REMOVE QUE ES ELIMINAR

  con el elemento event.target podemos capturar el elemento que dio click, en este caso lo guardamos en element

------------------------------------------------------
Alternativa Correcta. ¡Exacto! A través de la variable botaoConclui capturamos en cual elemento fue hecho click, 
después utilizamos la propiedad parentElement para subir un nodo en el árbol, y por fin, 
pusimos el método toggle que adicionará la clase done cuando hagamos click en el botón

const botaoConclui = evento.target

const tarefaCompleta = botaoConclui.parentElement

tarefaCompleta.classList.toggle('done')
--------------------------------------------------
  */
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");//ESTA CLASE ES DE CSS, PODEMOS HACER USO DE LAS CLASES DE CSS
  element.classList.toggle("far");
  
   
}

}) //ESTOS PARENTESIS QUE ACABAMOS DE COLOCAR ES ALGO QUE SE LLAMA EN JAVASCRIP IIFE, QUE HACE QUE LAS FUNCIONES
//QUE ESTAN DENTRO DEL ARCHIVO NO PUEDAN SER INVOCADAS A TRAVES DE LA CONSOLA DEL NAVEGADOR