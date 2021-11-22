const persona ={nombre:''};
document.addEventListener('DOMContentLoaded',function() {
    eventListener();
   
    //Guardar nombre del usuario
    persona_nombre();
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

  input_Nombre.addEventListener('input',(e)=>{
   const nombreTexto = e.target.value.trim();
  
   if(nombreTexto.length<4 || nombreTexto===''){
     //Funcion para mostrar mensaje
    MostrarAlerta("Nombre no valido")
     }else{
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

}