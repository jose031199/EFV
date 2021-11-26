const persona ={nombre:'',
email:'',subject:'',message:''};

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

    //Comprobar que se guardo toda la informacion del usuario
    enviar_Formulario();


});

function enviar_Formulario() {
  //Crear evennto submit para el formulario
  const formulario = document.getElementById('formulario');
  let vacio = false;

  //Si la variable tiene algun valor
  if(formulario){
    //Evento para enviar formulario
  formulario.addEventListener('submit',function(e){
    e.preventDefault();//Evento para detener el evento de submit

    //Verificar si alguna de los keys del objeto estan vacios
   Object.keys(persona).forEach(function(key){
    if(persona[key]===''){
      vacio=true;
    }
   });


   if(vacio===true){//Si alguna de las propiedades esta vacia se manda un mensaje de error
    MostrarAlerta('Faltan datos por llenar');
    vacio = false;
   }else{
    console.log(Object.values(persona));
   }

  });
  }

  
}

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
  const input_Nombre = document.getElementById('name');

  //Comprobar si la variable tiene algun valor
 if(input_Nombre){
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
  
}

function persona_email(){
  const input_email = document.querySelector('#email');

    //Comrpobar si la varialbe tiene algun valor
  if(input_email){
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
 
}

function persona_subject(){
  const input_subject = document.querySelector('#subject');

  //Comrpobar si la variable tiene algun valor
  if(input_subject){
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
 
}

function persona_message(){
  const input_message = document.querySelector('#message');

  if(input_message){
    input_message.addEventListener('input',(e)=>{
      const messageTexto = e.target.value.trim();
      if(messageTexto===''||messageTexto.length<15){
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
  },6000);
}