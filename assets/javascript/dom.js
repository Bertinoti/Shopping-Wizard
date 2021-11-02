const pruebadecogerelementos=document.querySelector("#carruselprueba")
const contenedorfinal=document.querySelector("#contenedordetodo tbody ")
let carritofinal=[];

//prueba.de.todo.en.proceso, no me ralles la cabeza
prueba()
function prueba(){
    carruselprueba.addEventListener('click', informacion)}
// function cargarEventListeners() {
//      carruselprueba.addEventListener('click', informacion);
//     }

function informacion(e){
    // e.preventDefault();
    const Marcador =e.target.parentElement.parentElement;
    leerlosdatos(Marcador)
}
function leerlosdatos(trying){
    var iMarcador= {
        imagen: trying.querySelector('img').src,
        Color: trying.querySelector('h4').textContent,
        precio: trying.querySelector('.precio').textContent
        
    }
    // console.log(iMarcador)
    carritofinal=[iMarcador];
    console.log(iMarcador)
    Pruebadedatos();
}

function Pruebadedatos(){
    norepeathesame()
    carritofinal.forEach(trying => {
        const lista=document.createElement("tr");
        lista.innerHTML =` 
        <td><img src="${trying.imagen}"></td>
        <td>${trying.Color}</td>
        <td>${trying.precio}</td>
        <td></td>`;
        contenedorfinal.appendChild(lista);
        // console.log(carritofinal)
    });
}

function norepeathesame(){
    contenedorfinal.innerHTML="";
}