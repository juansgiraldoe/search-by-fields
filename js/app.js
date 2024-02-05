//Variables.
const resultado = document.querySelector('#resultado')

// Eventos.
document.addEventListener('DOMContentLoaded', ()=>{

  mostrarAutos();





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