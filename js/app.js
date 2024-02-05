//Variables.

//Acceso a selectores de parametros.
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
//Contenedor de resultados.
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;

//Crear un objeto con la busqueda.
const datosBusqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: '',
}

// Eventos.
document.addEventListener('DOMContentLoaded', ()=>{
  //Muestra los autos al cargar el dom.
  mostrarAutos(autos);

  //Llenar las opciones de años en el select.
  llenarSelect();


});

//Event listeners para los select de busqueda.
marca.addEventListener('change', e => {
  datosBusqueda.marca = e.target.value
  filtrarAuto();
});
year.addEventListener('change', e => {
  datosBusqueda.year = e.target.value
  filtrarAuto();
});
minimo.addEventListener('change', e => {
  datosBusqueda.minimo = e.target.value
});
maximo.addEventListener('change', e => {
  datosBusqueda.maximo = e.target.value
});
puertas.addEventListener('change', e => {
  datosBusqueda.puertas = e.target.value
});
transmision.addEventListener('change', e => {
  datosBusqueda.transmision = e.target.value
});
color.addEventListener('change', e => {
  datosBusqueda.color = e.target.value
});



//Funciones.
function mostrarAutos(autos) {
  
  limpiarHtml();//Elimina el html previo.
  
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

//Limpiar html.
function limpiarHtml() {
  while ( resultado.firstChild ) {
    resultado.removeChild(resultado.firstChild)
  }
}

//Genera los años del select de forma descendente..
function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const option = document.createElement('OPTION');
    option.value = i;
    option.textContent = i;
    year.appendChild(option)
  }
}

//Filtrar en base a la busqueda.
function filtrarAuto() {
  
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear)
  // console.log(resultado);
  mostrarAutos(resultado)
}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda;
  if ( marca ) {
    return auto.marca === marca;
  }
  return auto;
}

function filtrarYear(auto) {
  const { year } = datosBusqueda;
  if ( year ) {
    return auto.year === parseInt(year);
  }
  return auto;
}
