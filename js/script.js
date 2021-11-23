const persona ={nombre:'',
  email: ''};
document.addEventListener('DOMContentLoaded',function() {
    eventListener();
   
    //Guardar datos del usuario 
    persona_nombre();

    //Guardar email del usuario
    persona_email();

    //Guardar subject del usuario
    persona_subject();


    //Guardar mensaje del usuario
    persona_message();

    //Comprobar que se guardo toda la informacion del


});

function eventListener() {
  const barra = document.querySelector('.bars');
  const cerrar = document.querySelector('.close');
  const nav_links = document.querySelector('.nav-links');

  barra.addEventListener('click',() => {
    nav_links.classList.add('mostrar');
  });

  cerrar.addEventListener('click',() => {
    nav_links.classList.remove('mostrar');
  });
}

function persona_datos(){
  const input_Nombre = document.querySelector('#name');
  //const input_email = document.querySelector('#email');
  //const input_subject = document.querySelector('#subject');
  //const input_message = document.querySelector('#message');

  input_Nombre.addEventListener('input',(e)=>{
   const nombreTexto = e.target.value.trim();
   if(nombreTexto.length<4 || nombreTexto===''){
     //Funcion para mostrar mensaje
    MostrarAlerta("Nombre no valido")
     }else{
       const alerta = document.querySelector('.alerta');
       if(alerta){
        alerta.remove();
       }
      persona.nombre = nombreTexto;
     }
  });
}




function MostrarAlerta(message){
  const alertaPrevia = document.querySelector('.alerta');

  //Si existe alerta
  if(alertaPrevia){
    return;
  }

  //Crear alerta
  const alerta = document.createElement('DIV');
  alerta.textContent = message;
  alerta.classList.add('alerta');

  //Agregarlo en el formulario
  const formulario = document.querySelector('#formulario');
  formulario.appendChild(alerta);

  //Establecer un tiempo del mensaje 

  setTimeout(() => {
    alerta.remove();
  },5000);
}