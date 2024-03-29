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
  filtrarAuto();
});
maximo.addEventListener('change', e => {
  datosBusqueda.maximo = e.target.value
  filtrarAuto();
});
puertas.addEventListener('change', e => {
  datosBusqueda.puertas = e.target.value
  filtrarAuto();
});
transmision.addEventListener('change', e => {
  datosBusqueda.transmision = e.target.value
  filtrarAuto();
});
color.addEventListener('change', e => {
  datosBusqueda.color = e.target.value
  filtrarAuto();
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
  
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
  // console.log(resultado);
  
  if ( resultado.length) {
    mostrarAutos(resultado);
  } else {
    sinResultado();
  }
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

function filtrarMinimo(auto) {
  const { minimo } = datosBusqueda;
  if ( minimo ) {
    return auto.precio >= parseInt(minimo);
  }
  return auto; 
}

function filtrarMaximo(auto) {
  const { maximo } = datosBusqueda;
  if ( maximo ) {
    return auto.precio <= parseInt(maximo);
  }
  return auto; 
}

function filtrarPuertas(auto) {
  const { puertas } = datosBusqueda;
  if ( puertas ) {
    return auto.puertas === parseInt(puertas);
  }
  return auto;
}

function filtrarTransmision(auto) {
  const { transmision } = datosBusqueda;
  if ( transmision ) {
    return auto.transmision === transmision;
  }
  return auto;
}

function filtrarColor(auto) {
  const { color } = datosBusqueda;
  if ( color ) {
    return auto.color === color;
  }
  return auto;
}

function sinResultado() {
  limpiarHtml();
  const noresultado = document.createElement('DIV');
  noresultado.classList.add('alerta', 'error');
  noresultado.textContent = `No hay resultados para tu busqueda, intentalo de neuvo.`;
  resultado.appendChild(noresultado)
}