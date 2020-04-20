/**
 * En los próximos ejercicios veremos cómo hacer peticiones de red,
 * es decir, pedirle a `NodeJS` que descargue de Internet el contenido
 * de una `URL`. Esta descarga no será inmediata, así que estudiaremos
 * un mecanismo para indicarle cuál es el código que tiene que ejecutar una 
 * vez finalizada.
 * 
 * Antes de eso, implementemos una serie de funciones auxiliares que, de paso,
 * nos sirven de repaso de cómo iterar `arrays`, bien con `for` tradicional
 * o con `map/filter`
 * 
 * El ejercicio consiste en implementar dos funciones que realizan estadísticas
 * sobre datos reales: las banderas azules en ayuntamientos gallegos. En esta
 * primera aproximación leeremos los datos de disco. En ejercicios posteriores
 * lo reimplementaremos para descargarlo directamente de la red.
 * 
 * 
 */

const fs = require('fs');


/**
 * 
 * Devuelve la playa más cercana a las coordenadas indicadas
 * 
 */
function getCloseBeachTo(longitude, latitude) {
  
  // calculateDistance(longitude, latitude, longitude2, latitude2);

  // return <nombre de la playa>
}



/**
 * 
 * Devuelve un array con los `count` ayuntamientos
 * con más playas. 
 * 
 * Es decir, el primer elemento del array será el nombre
 * del ayuntamiento con más playas, el segundo elemento 
 * tendrá el nombre del segundo ayuntamiento con más playas, 
 * y así hasta `count`
 */
function getCouncilsWithMoreFlags(flags, count) {
  // objeto para almacenar los contador de playas
  // pasar de clave-valor (como está en el objeto) a solo clave, para quedarse con el nombre del ayuntamiento
  // ordenarlos por número de playas
  
  contador = {}
  // ...

  contador = {
    'Vigo':10,
    'Nigrán': 8,
    'Baiona': 12
  }

  Object.entries(contador) //-> [['Vigo', 10], ['Nigrán', 8], ['Baiona', 12]]

  // ordenar array de arrays por segundo parámetro
  // <array>.sort( function(a,b) { return b[1] - a[1]})

  ['Baiona', 'Vigo']
}


/**
 * Devuelve el número de banderas azules para el 
 * ayuntamiento indicado
 * 
 * @param flags - Array con las líneas del CSV descargado
 * @param council - nombre del ayuntamiento buscado 
 */
  function getNumberOfFlagsByCouncil(lines, council) {
    const COUNCIL_POSITION = 2;
    let contador = 0;

    for (let line of lines) {
      let campos = line.split(';');

      if (campos[COUNCIL_POSITION] != undefined && campos[COUNCIL_POSITION].toUpperCase() == council.toUpperCase()) {
        contador++;
      }
    }

    return contador;
  }
  

  function getNumberOfFlagsByCouncilFunctional_bad(lines, council) {
    const linesThatMatchCouncil = lines
      .map( function(line) { return line.split(';')} )
      .filter( function(campos) { return campos[2] == council} );

    return linesThatMatchCouncil.length;
  }

  function getNumberOfFlagsByCouncilFunctional(lines, council) {
    const divideByField = line => line.split(';');
    const matchCouncil = campos => campos[2].toUpperCase() == council.toUpperCase()
    const hasData = campos => campos[2] != undefined;

    const linesThatMatchCouncil = lines
      .map( divideByField )
      .filter( hasData )
      .filter( matchCouncil );

    return linesThatMatchCouncil.length;
  }

  const ayuntamiento = 'vIGo';


  const bandeiras = fs.readFileSync(`${__dirname}/../../resources/bandeiras_azuis_2019.csv`, 'latin1').toString().split('\n');

  function getTotalNumberOfBeaches(lines, beaches) {
    const divideByField = line => line.split(';');
    //const hasData1 = line => line != line[0];
    const hasData2 = beaches => beaches[3] != undefined && beaches[3] != "";

    const linesThatMatchBeaches = lines
      .map( divideByField )
      //.filter( hasData1 )
      .filter( hasData2 );
      
    return linesThatMatchBeaches;
  }

  function nameOfCouncil(lines, council) {
    const divideByField = line => line.split(';');
    const matchCouncil = council => council[2] = council;
    const hasData3 = council => council[2] != undefined;

    const matchCouncils = lines
      .map( divideByField )
      .filter( hasData3 )
      .filter( matchCouncil );


    return matchCouncils;
  }

  const counterOfBeachs = getNumberOfFlagsByCouncil(bandeiras, ayuntamiento);
  const totalNumberOfBeaches = getTotalNumberOfBeaches(bandeiras); // TODO
  const councilsWithMoreFlags = nameOfCouncil(bandeiras);

  console.log(`${ayuntamiento}: ${counterOfBeachs} / ${totalNumberOfBeaches}`);
  console.log(totalNumberOfBeaches);
  
  
  

