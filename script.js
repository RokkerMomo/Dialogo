const abrirdialogo = document.getElementById("abrir");
// const dialogo = document.getElementById("modal");
// const cerrar = document.getElementById("cerrar");
// cabecera = dialogo.querySelector("header")


// abrirdialogo.addEventListener('click', ()=>{

//     dialogo.style.visibility="visible";
// })

// cerrar.addEventListener('click',()=>{
//     dialogo.style.visibility="hidden";
// })

// function mover(ev){
//     // let getStyle = window.getComputedStyle(dialogo);
//     // let izquierda = parseInt(getStyle.left); 
//     // let arriba =  parseInt(getStyle.top);
//     // dialogo.style.left = `${izquierda + movementX}px`;
//     // dialogo.style.top = `${arriba + movementY}px`;
//     dialogo.style.setProperty("left", `${ev.x -225}px`);
//     dialogo.style.setProperty("top", `${ev.y -20}px`);
// }

// cabecera.addEventListener("mousedown", ()=>{
//     cabecera.classList.add("active");
//     cabecera.addEventListener("mousemove", mover);
//     window.addEventListener("mouseup", ()=>{
//         cabecera.classList.remove("active");
//         cabecera.removeEventListener("mousemove", mover);
//       });
//   });
  
  

  function Dialogo(id) {

    console.log(id);
    
    this.Crear =  function crearDialogo(){
      
        const newdialog = document.createElement("div");
        newdialog.innerHTML=`
        <div class="modal" id="modal" style="visibility: hidden;">
        <button class="cerrar" id="cerrar"> <img src="cerrar.png" style="height: 15px; width: 15px;"></button>
        <header class="header">Dialogo</header>
        
        <div class="content" id="contenido-${id}">
        </div>
        
    </div>`

        document.body.appendChild(newdialog);
        // console.log(newdialog.querySelector("header"));
        // console.log(newdialog.querySelector("div"));
        // console.log(newdialog.querySelector("button"));
        
        const cerrar = document.getElementById("cerrar");
        // console.log(cerrar);
        abrirdialogo.addEventListener('click', ()=>{

            newdialog.querySelector("div").style.visibility="visible";
        })

        newdialog.querySelector("button").addEventListener('click',()=>{
            newdialog.querySelector("div").style.visibility="hidden";
})
    
newdialog.querySelector("header").addEventListener("mousedown", ()=>{
    newdialog.querySelector("header").addEventListener("mousemove", mover);
    window.addEventListener("mouseup", ()=>{
        newdialog.querySelector("header").removeEventListener("mousemove", mover);
      });
  });

  function mover(ev){

    newdialog.querySelector("div").style.setProperty("left", `${ev.x -225}px`);
    newdialog.querySelector("div").style.setProperty("top", `${ev.y -20}px`);
    
}

    }

    this.agregarelemento = function agregar(elemento,texto){
        const newelement = document.createElement(elemento);
        const grid = document.getElementById(`contenido-${id}`)
        newelement.innerHTML=texto;
        newelement.classList="grid-item"
        grid.appendChild(newelement);

    }

    
    

  }

  
  var d = new Dialogo("id");
  d.Crear();
  var d2 = new Dialogo("id2");
  d2.Crear();
//   var d3 = new Dialogo("idk");
//   d3.Crear();
  
  d.agregarelemento("header","nombre");
  d.agregarelemento("input","nombre");
  d.agregarelemento("p","cedula");
  d.agregarelemento("input","cedula");
  d.agregarelemento("button","confirmar");

  d2.agregarelemento("input","input");
  d2.agregarelemento("input","input");
  d2.agregarelemento("input","input");
  d2.agregarelemento("input","input");
  d2.agregarelemento("input","input");s

  

  console.log(document.body);
  

