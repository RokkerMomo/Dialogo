const abrirdialogo = document.getElementById("abrir");

//Funcion para Crear Objeto Dialogo
  function Dialogo(id) {

    //Funcion Crear Dialogo
    this.Crear =  function crearDialogo(){
      
      //Crear Elemento HTML
        const newdialog = document.createElement("div");
        newdialog.innerHTML=`
        <div class="modal" id="modal-${id}" style="visibility: hidden;">
        <button class="cerrar" id="cerrar-${id}"> <img src="cerrar.png" style="height: 15px; width: 15px;"></button>
        <header id="titulo-${id}" class="header">Dialogo</header>
        <div class="content" id="contenido-${id}">
        </div>
    </div>`

    //Se agrega el dialogo al Body
        document.body.appendChild(newdialog);

        //Abrir Dialogos
        abrirdialogo.addEventListener('click', ()=>{
            newdialog.querySelector("div").style.visibility="visible";
        })

        //Funcion Para el boton De Cerrar
        newdialog.querySelector("button").addEventListener('click',()=>{
            newdialog.querySelector("div").style.visibility="hidden";
})
    
//Agregar eventlistener a la cabecera de los dialogos
newdialog.querySelector("header").addEventListener("mousedown", ()=>{
    newdialog.querySelector("header").addEventListener("mousemove", mover);
    window.addEventListener("mouseup", ()=>{
        newdialog.querySelector("header").removeEventListener("mousemove", mover);
      });
  });

  //Funcion Para Mover los Dialogos
  function mover(ev){
    newdialog.querySelector("div").style.setProperty("left", `${ev.x -225}px`);
    newdialog.querySelector("div").style.setProperty("top", `${ev.y -20}px`);
    
}

    }

    //Funcion Para Agregar Elementos al Dialogo
    this.AgregarElemento = function agregar(elemento,texto,src,sizeX,sizeY){
        const newelement = document.createElement(elemento);
        const grid = document.getElementById(`contenido-${id}`)
        newelement.innerHTML=texto;
        newelement.src=src;
        newelement.style.setProperty("height", `${sizeX}`)
        newelement.style.setProperty("width", `${sizeY}`)
        newelement.classList="grid-item"
        grid.appendChild(newelement);

    }

    //Funcion Para Cambiar Propiedades del Dialogo
    this.CambiarPropiedades = function prop(titulo,columnas,color,size){

      const dialogo = document.getElementById(`modal-${id}`)
      const grid = document.getElementById(`contenido-${id}`)
      const header = document.getElementById(`titulo-${id}`)
    
      grid.style.setProperty("background-color", `${color}`)
      dialogo.style.setProperty("max-width", `${size}`)
      header.innerHTML=titulo;



     //Define cuantas columnas tiene el grid del dialogo
      switch (columnas) {
        case 1:
          grid.style.setProperty("grid-template-columns", `100%`);
          break;
          case 2:
            grid.style.setProperty("grid-template-columns", `50% 50%`);
          break;
          case 3:
            grid.style.setProperty("grid-template-columns", `33% 33% 33%`);
          break;
          case 4:
            grid.style.setProperty("grid-template-columns", `25% 25% 25% 25%`);
          break;
      
        default:
          break;
      }

  }
  }

  //crear dialogo D con id = id
  var d = new Dialogo("id");
  d.Crear();
//asignar propiedades
  d.CambiarPropiedades("Formulario",1,"green");
  //agregar elementos
  d.AgregarElemento("p","Nombre");
  d.AgregarElemento("input","nombre");
  d.AgregarElemento("p","Cedula");
  d.AgregarElemento("input","cedula");
  d.AgregarElemento("button","Confirmar");

//crear dialogo d2 con id = id2
  var d2 = new Dialogo("id2");
  d2.Crear();
//asignar propiedades
  d2.CambiarPropiedades("Historia",1,"red");
  //agregar elemento
  d2.AgregarElemento("div", `Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming debt.
  His only companion is his pet, the chainsaw devil Pochita, with whom he slays devils for money that inevitably ends up in the yakuza's pockets.
  All Denji can do is dream of a good, simple life: one with delicious food and a beautiful girlfriend by his side. But an act of greedy betrayal
  by the yakuza leads to Denji's brutal, untimely death, crushing all hope of him ever achieving happiness.

  Remarkably, an old contract allows Pochita to merge with the deceased Denji and bestow devil powers on him, changing him into a hybrid able to transform his body parts into chainsaws.
  Because Denji's new abilities pose a significant risk to society, the Public Safety Bureau's elite devil hunter Makima takes him in, letting him live as long as he obeys her command.
  Guided by the promise of a content life alongside an attractive woman, Denji devotes everything and fights with all his might to make his naive dreams a reality.`)

//Crear dialogo d3 con id =id3
  var d3 = new Dialogo("id3");
  d3.Crear();
//asiganr propiedades
  d3.CambiarPropiedades("Fotos",3,"purple","1000px");
  //agregar elementos
  d3.AgregarElemento("img","","foto1.jpg","300px","300px")
  d3.AgregarElemento("img","","foto2.png","300px","300px")
  d3.AgregarElemento("img","","foto3.jpg","300px","300px")
  d3.AgregarElemento("img","","foto4.png","300px","300px")
  d3.AgregarElemento("img","","foto5.png","300px","300px")
  d3.AgregarElemento("img","","foto6.jpg","300px","300px")
  d3.AgregarElemento("img","","foto7.jpg","300px","300px")
  d3.AgregarElemento("img","","foto8.jpg","300px","300px")
  d3.AgregarElemento("img","","foto9.png","300px","300px")











  document.getElementById('modal-id').addEventListener('click', ()=>{
    focusd();
  })
  document.getElementById('modal-id2').addEventListener('click', ()=>{
    focusd2();
  })
  document.getElementById('modal-id3').addEventListener('click', ()=>{
    focusd3();
  })
  

  
function focusd() {
  document.getElementById('modal-id').style.zIndex = 1
  document.getElementById('modal-id2').style.zIndex = 0
  document.getElementById('modal-id3').style.zIndex = 0
}
function focusd2() {
  document.getElementById('modal-id').style.zIndex = 0
  document.getElementById('modal-id2').style.zIndex = 1
  document.getElementById('modal-id3').style.zIndex = 0
}
function focusd3() {
  document.getElementById('modal-id').style.zIndex = 0
  document.getElementById('modal-id2').style.zIndex = 0
  document.getElementById('modal-id3').style.zIndex = 1
}