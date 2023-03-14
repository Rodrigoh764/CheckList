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
  */
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
  
   
}