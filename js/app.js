//Variables.
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 10;

// Eventos.
document.addEventListener('DOMContentLoaded', ()=>{
  //Muestra los autos al cargar el dom.
  mostrarAutos();

  //Llenar las opciones de años en el select.
  llenarSelect();


});

//Funciones.
function mostrarAutos() {
  autos.forEach( auto => {
    const autoHtml = document.createElement('P');
    
    //Destructuring del objeto auto.
    const { marca, modelo, year, precio, puertas, color, transmision} = auto

    autoHtml.textContent = `
      ${marca} ${modelo} ${color} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $${precio}
    `;
    //Insertar el html.
    resultado.appendChild(autoHtml)
  });
};

//Genera los años del select de forma descendente..
function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const option = document.createElement('OPTION');
    option.value = i;
    option.textContent = i;
    year.appendChild(option)
  }
}