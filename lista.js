let tareas = JSON.parse(localStorage.getItem(`tareas`)) || []

let counter = document.getElementById(`contador`)

let contenedorTarjetas = document.getElementById(`contenedor`)


//Guardar en local Storage 
//localStorage.setItem(`ArregloDeTareas`,JSON.stringify(tareas))





function handleSubmit(e){
    e.preventDefault()
let tarea = document.getElementById(`text_tarea`);
tareas.push(tarea.value);
localStorage.setItem(`tareas`,JSON.stringify(tareas))
console.log(tareas);
tarea.value = ``;
tarea.select();
counter.innerText = tareas.length
agregarTarjeta()

}

function agregarTarjeta(){
contenedorTarjetas.innerHTML = ``

tareas.forEach(function(tarea, index){
    let tarjeta = document.createElement(`div`)
    tarjeta.classList = `card mb-1`

    let contenidoTarjeta = ` <div id="JM" class="card-body d-flex justify-content-between align-items-center">
                  
    <span>📌${tarea}</span>
    <button class="btn btn-danger btn-sm" onclick="borrarTarea(${index})">X</button>
  </div>`

  tarjeta.innerHTML = contenidoTarjeta

  contenedorTarjetas.appendChild(tarjeta)
})
counter.innerText = tareas.length
}

function borrarTarea(index){
    console.log(index)
    tareas.splice(index, 1)
    localStorage.setItem(`tareas`, JSON.stringify(tareas))

    agregarTarjeta()
}


document.querySelector(`#formulario`).addEventListener(`submit`, handleSubmit)

agregarTarjeta()