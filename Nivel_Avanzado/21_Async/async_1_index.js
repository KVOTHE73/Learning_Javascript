const funciones = require("./Funciones_Ejercicio_async_1");

const fs = require('fs');
const turf = require('@turf/turf');


const ayuntamiento = 'vIGo';
  //const latitud = 42.1459800;
  //const longitud = -8.8210400;

//  const latitud = 42.2328200;
//  const longitud = -8.7226400;

  const latitud = 42.1166700;
  const longitud = -8.8500000;

  const bandeiras = fs.readFileSync(`${__dirname}/../../resources/bandeiras_azuis_2019.csv`, 'latin1').toString().split('\n');

  const counterOfBeachs = funciones.getNumberOfFlagsByCouncil(bandeiras, ayuntamiento);
  
  const totalNumberOfBeaches = funciones.getTotalNumberOfBeaches(bandeiras); // TODO
  const councilsWithMoreFlags = funciones.getCouncilsWithMoreFlags(bandeiras, 5);       // TODO
  const closestBeach = funciones.getCloseBeachTo(bandeiras, longitud, latitud);

  console.log(`${ayuntamiento}: ${counterOfBeachs}`);
  console.log(`Número total de playas con bandera azul: ${totalNumberOfBeaches}`);
  console.log(`La playa más cercana es: ${closestBeach}`);
//  console.log(`La playa más cercana a las coordenadas indicadas es: ${closestBeach}`);
  
  console.log(councilsWithMoreFlags);

  // NOTA: para poder ejecutar este código, es necesario que ejecutéis
  // al principio, en la consola, la siguiente instrucción:
  //   npm install @turf/turf
   