const turf = require('@turf/turf');



function calculateDistance(longitude, latitude, longitude2, latitude2) {
    const point1 = turf.point([longitude, latitude]);
    const point2 = turf.point([longitude2, latitude2]);
  
    return turf.distance(point1, point2);
}


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

  function getCouncilsWithMoreFlags(lines, count) {
   
    const COUNCIL_POSITION = 2;
  
    
    let counters = {}
  
    for (let line of lines) {
      const fields = line.split(';');
      const currentCouncil = fields[COUNCIL_POSITION];
  
       if (counters[currentCouncil] != undefined) {
       
        counters[currentCouncil]++;
      } else {
        
        counters[currentCouncil] = 1;
      }
    }
  
     const listOfBeachesPerCouncil = Object.entries(counters);  
  
     const listOfBeachesSorted = listOfBeachesPerCouncil.sort( (a,b) => b[1] - a[1]);
  
     const firstCountCouncils = listOfBeachesSorted.slice(0, count);
  
     return firstCountCouncils.map( council => council[0]);
  
  }

  
  function getTotalNumberOfBeaches(lines) {
    let counter = 0;
  
    for (let lineIndex = 1; lineIndex < lines.length; lineIndex++) {
      let fields = lines[lineIndex].split(';');
  
      if (fields.length <= 1) {
      continue; 
      }
      if (fields[0].trim().length == 0) {
        continue;
      }
  
      counter++;
    }
  
    return counter;
  }

  function getTotalNumberOfBeaches(lines) {
    let counter = 0;
  
    for (let lineIndex = 1; lineIndex < lines.length; lineIndex++) {
      let fields = lines[lineIndex].split(';');
  
      if (fields.length <= 1) {
        continue; 
      }
  
      if (fields[0].trim().length == 0) {
        continue;
      }
  
      counter++;
    }
  
    return counter;
  }

  function getCloseBeachTo(lines, longitude, latitude) {
    // recorro todas las playas. En cada uno comparo si la distancia
    // es mayor o menor que la que hasta ese momento sé que es la más corta
    
    const COORDINATES_POSITION = 9;
    const BEACH_NAME_POSITION = 4;
    
    // Voy a guardar el índice de la playa más cercana. Cada vez
    // que encuentre alguna otra más cercana, la actualizo.
    // Este índice lo inicializo a 1, porque es donde está la primera playa
    // (el 0 es la cabecera)
    let shortestBeachIndex = 1;
    let minDistance = 100000000000;
    
    for (let lineIndex = 2; lineIndex < lines.length; lineIndex++) {
        const fields = lines[lineIndex].split(';');
    
        if (fields.length < 2) {
        // línea con separadores pero sin datos
        continue;
        }
    
        const coordinates = fields[COORDINATES_POSITION].split(',');
    
        if (coordinates.length < 2) {
        // línea sin coordenadas
        continue
        }
        const lineLongitude = coordinates[1];
        const lineLatitude = coordinates[0];
    
        const distance = calculateDistance(longitude, latitude, lineLongitude, lineLatitude)
    
        if (distance < minDistance) {
        minDistance = distance;
        shortestBeachIndex = lineIndex;
        }
    
    }
    
    return lines[shortestBeachIndex].split(';')[BEACH_NAME_POSITION];
    }
  
  module.exports = {
    calculateDistance,
    getNumberOfFlagsByCouncil, 
    getCouncilsWithMoreFlags,
    getTotalNumberOfBeaches,
    getCloseBeachTo

}