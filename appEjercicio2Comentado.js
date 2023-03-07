//ESTA ES UNA COPIA DE UN EJERCICIO QUE TAL VEZ SE MODIFICO, SIN EMBARGO LO RESERVO
//YA QUE ESTE ESTA COMENTADO Y SERIA EL PRINCIPIO DE ENTENDER DE LO QUE SE ESTA HACIENDO
//EL SIGUIENTE PASO DE ESTE CODIGO FUE REDUCIR CODIGO IMPLANTANDO FUNCIONES
//ESTE SERVIRA DE GUIA PARA REPLICARLO SIN AYUDA Y LOGRAR LLEGAR A ESTO Y
//POSTERIORMENTE AL PRODUCTO FINAL

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

  //ESTO SE LLAMA BACKTICKS SIRVE PARA PEGAR CODIGO HTML, DE ESA MANERA LOGRAMOS
  //QUE MANTENGA EL FORMATO CON LOS STYLOS, ES COMO SI SE PEGARA EN EL DOCUMENTO HTML
  //Y MANDAMOS EL VALOR DE VALUE
  const content = `
            <div>
              <i class="far fa-check-square icon"></i>
              <span class="task">${value}</span>
            </div>
`;

//INDICAMOS QUE LO QUE TENEMOS EN CONTENIDO SE PONGA EN TASK
  task.innerHTML = content;

  //los appendChild() El método agrega un nodo ( elemento ) 
  //como el último hijo de un elemento.
  //ALGO QUE NOTE ES QUE SIEMPRE CUANDO SE USE EL APPENDCHILD SIEMPRE ESTARA
  //RELACIONADO CON UN CREATEELEMENT Y UN CLASSLIST.ADD
  //YA QUE SON LOS ARGUMENTOS QUE RECIVE, PODEMOS VERLO SE CREA UNA LISTA
  // CON TASK Y SE CREA UN ELEMENTO CON LIST, Y SON LOS ARGUMENTOS QUE RECIVE
  list.appendChild(task);


};



btn.addEventListener("click", createTask);
