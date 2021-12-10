
const persona ={nombre:'',
email:'',subject:'',message:''};
var cont = 1;

document.addEventListener('DOMContentLoaded',function() {
  //Funcion para mostrar el menu en movil
  eventListener();

  //Funcion para convertir en dark-mode
  dark_mode();

  //Funcion para marcar con la barra roja en que pagina estamos
  menu_underline();

//Funcion para cambiar imagen del header del index cada instante
  change_Image();

  //Funcion para mostrarImagenes
  show_Image();

  //Mostrar Opiniones
  show_testimonialsNext();

  //Mostrar informacion de Certificados 
  show_certificates();

  //Guardar datos del usuario 
  persona_nombre();

  //Guardar email del usuario
  persona_email();

  //Guardar subject del usuario
  persona_subject();

  //Guardar mensaje del usuario
  persona_message();

  //Comprobar que se guardo toda la informacion del usuario
  send_Form();

});

//Funcion para mostrar el menu ya sea de forma responsiva o en desktop
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

//Funcion para convertir dark_mode

function dark_mode(){
  const dark_mode = document.querySelector('.dark_mode');
  if(dark_mode){
    dark_mode.addEventListener('click',() => {
      const body = document.querySelector('body');
      //console.log(body);
      body.classList.toggle('darkmode_bg');
    });
  }
}

//Funcion para marcar de color la pagina que estamos navegando
function menu_underline(){
  //Variable para saber en que pagina estamos
  const page = window.location.href
  const menu = document.querySelectorAll('.nav-links ul li a');
  
  const pagina = page.substring(page.lastIndexOf('/'));
  if (pagina){
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
}

//Funcion para cambiar imagen cada 8 segundos
function change_Image(){
  const header = document.querySelector('.header-main');
  const pagina = window.location.href;
  const page = pagina.substring(pagina.lastIndexOf('/'))
  //Se verifica que la pagina esta en index
  if(page==='/index.html'){
      setInterval(function(){
        header.style.background = `linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(../img/university_english${cont}.jpg)`;
        header.style.backgroundPosition = 'center';
        header.style.backgroundSize = 'cover';
        //console.log(cont);
        cont++;
      if(cont>3){
        cont=1;
        }
    },8000);
  }
}
//Funcion para mostrarImagenes de la seccion facilities
function show_Image(){
  const gallerySchool = document.querySelectorAll('.facilities-col img');
  //En caso de haya una lista de imagenes
  if(gallerySchool){
    //console.log('Existe');
    gallerySchool.forEach(school_img=>{
      school_img.addEventListener('click',function(){
      const direccionImg = this.src.substring(this.src.lastIndexOf('img/'));
        overlay_Image(direccionImg);
      //console.log(direccionImg);        
      });
    });
  }
}

  //Funcion para mostrar testimonials
function show_testimonialsNext(){
  const div_testimonials = document.querySelectorAll('.testimonials-col');
  const next = document.querySelector('.next');
  //Su=i hay testimonials
  if(div_testimonials && next){
    //console.log(div_testimonials);
      
    next.addEventListener('click',function(){
      for(let i=0;i<div_testimonials.length;i++){
        div_testimonials[i].style.display='none';
        next.style.display = 'none';
        //show_TestimonialsBack();      
      }
      const div_testimonials2 = document.querySelectorAll('#testimonials2');
      for(let i=0;i<div_testimonials2.length;i++){
        const div = document.createElement('DIV');
        const p = document.createElement('P');
        const h3 = document.createElement('H3');

        if(i===0){
          p.innerText = 'As long as I remember english has always been my struggle,' 
        +'but today I feel more confident thanks to EFV.';

        h3.innerText = 'Ramón Morales';

        }else if(i===1){
          p.innerText = 'I used so many apps that to improve my english but none of them worked,'+
          ',but thanks to my course in EFV I can speak fluently.';
          
          h3.innerText = 'Andrea Corrales';
        }
        div.appendChild(p)
        div.appendChild(h3);
        div_testimonials2[i].appendChild(div);
        div_testimonials2[i].classList.add('.testimonials-col');
        div_testimonials2[i].style.display='flex';
      }
      show_TestimonialsBack(div_testimonials2,div_testimonials,next);
    })
  }
}

function show_TestimonialsBack(div_testimonials2,div_testimonials,next){
  const back = document.querySelector('.back');
  if(back){
    back.style.display='flex';
    back.addEventListener('click',function(){
      for(let i=0;i<div_testimonials2.length;i++){
        div_testimonials2[i].style.display='none';
        div_testimonials2[i].querySelector('div').remove();
        div_testimonials[i].style.display='flex';
      }
      next.style.display ='flex';
      back.style.display='none';
    });
  } 
}

function show_certificates(){
  const blog_right = document.querySelector('.blog-right');
  //Si existe blog_right
  if(blog_right){
    //console.log(blog_right)
    try{
      fetch('js/cursos.json')
      .then(response=>response.json())// Indicamos el formato en el que se desea obtener la info
      .then(cursos=>{
        cursos.courses.forEach(course=>{
          //console.log(course);
          const div = document.createElement('DIV');
          const span1 = document.createElement('SPAN');
          const span2 = document.createElement('SPAN');

          span1.innerHTML = course.level;
          span2.innerHTML = course.description;
          
          div.appendChild(span1);
          div.appendChild(span2);
          blog_right.appendChild(div);
        });
      }); //Aqui obtenemos dicha informacion  
    }catch(error){
      console.log(error);
    }
  }
}

//Funcion para mostrar la imagen seleccionada de manera completa de facilities
function overlay_Image(value){
  //Generar imagen y div

  const imagen = document.createElement('IMG');
  const overlay = document.createElement('DIV');
  //Se obtiene direccion de imagen
  imagen.src = `${value}`;
  
  overlay.appendChild(imagen);


  overlay.classList.add('overlay'); 

  //Cuando se da click en el overlay se cierra
  overlay.onclick =function(){
  overlay.remove();
  div_cerrar.remove();
  body.classList.remove('fijar-body');
  }

  //Cuando se da click en after

  //Crear boton X para cerrar imagen
  const btnCerrar = document.createElement('P');
  const div_cerrar = document.createElement('DIV');
  btnCerrar.textContent ='X';
  btnCerrar.classList.add('btn-cerrar');
  div_cerrar.appendChild(btnCerrar);
  div_cerrar.classList.add('div_cerrar');
  //overlay.appendChild(btnCerrar);

  btnCerrar.onclick=function(){
    overlay.remove();
    div_cerrar.remove();
    body.classList.remove('fijar-body');
  }

  //Mostrar en HTML
  const body = document.querySelector('body');
  body.appendChild(overlay);
  body.appendChild(div_cerrar);
  body.classList.add('fijar-body');
}



//Funcion para verificar que el nombre llenado en el form de contacto sea correcto
function persona_nombre(){
  const input_Nombre = document.getElementById('name');

  //Comprobar si la variable tiene algun valor
  if(input_Nombre){
    input_Nombre.addEventListener('input',(e)=>{
    const nombreTexto = e.target.value.trim();
      if(nombreTexto.length<4 || nombreTexto===''){
      //Funcion para mostrar mensaje
      //MostrarAlerta("Nombre no valido",'error')
        input_Nombre.style.background="var(--color_rojo)";
        input_Nombre.style.color="white";
      }else{
        input_Nombre.style.background="rgb(224, 219, 219)";
        input_Nombre.style.color="black";
        persona.nombre = nombreTexto;
        }
    });
  } 
  
}

//Funcion para verificar que el email llenado en el form de contacto sea correcto
function persona_email(){
  const input_email = document.getElementById('email');

    //Comrpobar si la varialbe tiene algun valor
  if(input_email){
    input_email.addEventListener('input',(e)=>{
      const email_regex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
      const emailTexto = e.target.value.trim();
      if(emailTexto===''||!emailTexto.match(email_regex)){
        //MostrarAlerta('Correo no Válido','error');
        input_email.style.background="var(--color_rojo)";
        input_email.style.color="white";
      }else{
        input_email.style.background="rgb(224, 219, 219)";
        input_email.style.color="black";
        persona.email = emailTexto;
      }
      
    });
  }
}

//Funcion para verificar que el subject llenado en el form de contacto sea correcto
function persona_subject(){
  const input_subject = document.getElementById('subject');

  //Comprobar si la variable tiene algun valor
  if(input_subject){
    input_subject.addEventListener('input',(e)=>{
      const inputTexto = e.target.value.trim();
      if(inputTexto===''||inputTexto.length<5){
        //MostrarAlerta('Subject es muy corto','error')
        input_subject.style.background="var(--color_rojo)";
        input_subject.style.color="white";
      }else{
        input_subject.style.background="rgb(224,219,219)"; 
        input_subject.style.color="black";
        persona.subject = inputTexto;
      }
    });
  }
}

//Funcion para verificar que el mensaje llenado en el form de contacto sea correcto
function persona_message(){
  const input_message = document.getElementById('message');

  if(input_message){
    input_message.addEventListener('input',(e)=>{
      const messageTexto = e.target.value.trim();
      if(messageTexto===''||messageTexto.length<15){
        //MostrarAlerta('Agrega más contenido','error');
        input_message.style.background="var(--color_rojo)";
        input_message.style.color="white";
      }else{
        input_message.style.background="rgb(224, 219, 219)";
        input_message.style.color="black";
        persona.message = messageTexto;
      }
    });
  }
}

//Funcion para verificar que el formulario de contacto este correcto
function send_Form() {
  //Crear evento submit para el formulario
  const formulario = document.getElementById('formulario');
  const input_nombre = document.getElementById('name');
  const input_email = document.getElementById('email');
  const input_subject = document.getElementById('subject');
  const input_message = document.getElementById('message');

  let vacio = false;

  //Si la variable tiene algun valor
  if(formulario){
    //console.log(formulario);
    //Evento para enviar formulario
    formulario.addEventListener('submit',function(e){
      e.preventDefault();//Evento para detener el evento de submit
    //Verificar si alguna de los keys del objeto estan vacios
      Object.keys(persona).forEach(function(key){
        if(persona[key]===''){
          vacio=true;
          if(persona['nombre']===''){
            input_nombre.style.background='var(--color_rojo)';
            input_nombre.style.color='white';
          }
          if(persona['email']===''){
            input_email.style.background='var(--color_rojo)';
            input_email.style.color='white';
          }
          if(persona['subject']===''){
            input_subject.style.background='var(--color_rojo)';
            input_subject.style.color='white';
          }
          if(persona['message']===''){
            input_message.style.background='var(--color_rojo)';
            input_message.style.color='white';
          }
        }
    });

    if(vacio===true){//Si alguna de las propiedades esta vacia se manda un mensaje de error
      Swal.fire({
        icon:'error',
        title:'Envio Rechazado',
        text: 'Faltan datos por llenar',
        showConfirmButton:false,
        timer:1500
      });
      vacio = false;
    }else{
      console.log(Object.values(persona));
      Swal.fire({
        icon:"success",
        title:"Envío Exitoso",
        html:'<b>Nombre</b> '+persona.nombre+'<br>'+'  <b>Correo</b> '+persona.email,
        showConfirmButton:false,
        timer:1500
        });
        setTimeout(()=>{
          location.reload();
        },5000)
        
      }
    });
  }
}

