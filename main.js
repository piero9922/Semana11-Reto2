const form =document.getElementById('formulario')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')


form.addEventListener('submit', (event)=>{
    event.preventDefault()

    const contenedorTarea = document.createElement('div')
    contenedorTarea.classList.add('tarea')

    console.log(contenedorTarea)
    
    const tarea = document.createElement('div')
    tarea.classList.add('title')
    const valor1 = input1.value

    tarea.innerHTML = valor1
    

    const tarea2 = document.createElement('div')
    const valor2 = input2.value

    tarea2.innerHTML = valor2;


    contenedorTarea.appendChild(tarea)
    contenedorTarea.appendChild(tarea2)

    const pizarra = document.getElementById('pizarra')
    pizarra.appendChild(contenedorTarea)

})



