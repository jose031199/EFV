const persona ={nombre:'',
email:'',subject:'',message:'',};
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

function persona_nombre(){
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

function persona_email(){
  const input_email = document.querySelector('#email');

  input_email.addEventListener('input',(e)=>{
    const email_regex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
    const emailTexto = e.target.value.trim();
    if(emailTexto===''||!emailTexto.match(email_regex)){
      MostrarAlerta('Correo no Válido');
    }else{
      const alerta = document.querySelector('.alerta');
    if(alerta){
      alerta.remove();
    }
    persona.email = emailTexto;
    }
    
  });
}

function persona_subject(){
  const input_subject = document.querySelector('#subject');

  input_subject.addEventListener('input',(e)=>{
    const inputTexto = e.target.value.trim();
    if(inputTexto===''||inputTexto.length<5){
      MostrarAlerta('Subject es muy corto')
    }else{
      const alerta = document.querySelector('.alerta');
      if(alerta){
        alerta.remove();
      }
      persona.subject = inputTexto;
    }
  });
}

function persona_message(){
  const input_message = document.querySelector('#message');

  input_message.addEventListener('input',(e)=>{
    const messageTexto = e.target.value.trim();
    if(input_message===''||input_message.length<15){
      MostrarAlerta('Agrega más contenido');
    }else{
      const alerta = document.querySelector('.alerta');
      if(alerta){
        alerta.remove();
      }
      persona.message = messageTexto;
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
  const mensaje = document.createElement('p');
  mensaje.textContent= message;
  alerta.appendChild(mensaje);
  //alerta.textContent = message;
  alerta.classList.add('alerta');

  //Agregarlo en el formulario
  const formulario = document.querySelector('#formulario');
  formulario.appendChild(alerta);

  //Establecer un tiempo del mensaje 

  setTimeout(() => {
    alerta.remove();
  },8000);
}