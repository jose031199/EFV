const persona ={nombre:'',
email:'',subject:'',message:''};

document.addEventListener('DOMContentLoaded',function() {
  //Funcion para marcar con la barra roja en que pagina estamos
    menu_underline();

  //Funcion para mostrar el menu en movil
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

function menu_underline(){
  //Variable para saber en que pagina estamos
  const page = window.location.href
  const menu = document.querySelectorAll('.nav-links ul li a');
  
  const pagina = page.substring(page.lastIndexOf('/'));
  //console.log(pagina);

  //Swich para ubicar la pagina en la que estemos
  switch (pagina) {
    case '/index.html':
      //console.log('Estoy en index');
      //console.log(menu[0]);
      menu[0].style.color="#079992";
      menu[0].style.fontWeight="bolder";
      break;
   case '/about.html':
     //console.log('Estoy en about');
      menu[1].style.color="#079992";
      menu[1].style.fontWeight="bolder";
    break;

  case '/courses.html':
    //console.log('Estoy en courses');
      menu[2].style.color="#079992";
      menu[2].style.fontWeight="bolder";
    break;

  case '/blog.html':
   //console.log('Estoy en blog');
    menu[3].style.color="#079992";
    menu[3].style.fontWeight="bolder";
    break;

  case '/contact.html':
    //console.log('Estoy en contact');
    menu[4].style.color="#079992";
    menu[4].style.fontWeight="bolder";
    break;
  }
}

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
    MostrarAlerta('Faltan datos por llenar','error');
    vacio = false;
   }else{
    console.log(Object.values(persona));
    MostrarAlerta('Envio Exitoso','bien');
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
     MostrarAlerta("Nombre no valido",'error')
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
        MostrarAlerta('Correo no Válido','error');
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
        MostrarAlerta('Subject es muy corto','error')
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
        MostrarAlerta('Agrega más contenido','error');
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




function MostrarAlerta(message,tipo){
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

 if(tipo==='error'){
    alerta.style.background="red";
 }else if(tipo==='bien'){
  alerta.style.background="green";
 }

  //Agregarlo en el formulario
  const formulario = document.querySelector('#formulario');
  formulario.appendChild(alerta);

  //Establecer un tiempo del mensaje 

  setTimeout(() => {
    alerta.remove();
  },6000);
}