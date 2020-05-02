/** 
 * Lee el fihero nacional_covid19.csv y crea funciones para lo siguiente
 * (Fuente: https://github.com/datadista/datasets/blob/master/COVID%2019/nacional_covid19.csv)
 * 
 * 1) buscar el día en el que hubo mayor incremento en el número de contagios
 * 
 * 2) generar un nuevo array con el porcentaje de nuevos contagios respecto al total de contagios del 
 * día anterior. Ejemplo. Si el día 1 hay 1000 contagios, y el día 2 hay 1200, el incremento ha sido del
 * 20% ((1200 - 1000) / 1000)*100
 * 
 * 3) escribir en pantalla un resumen para el día indicado en los parámetros de la función:
 *         printSummary(day, month, year)
 * 
 * debe pintar en pantalla
 *       ******************************
 *       * Contagios totales: xx      *
 *       * Altas totales: xx          *  
 *       * Incremento contagios: 20%  *
 *       * Fallecidos: xx             *
 *       * UCI: xx                    *
 *       * Hospitalizados: xx         * 
 *       ******************************
 * 
 * Si no existe algunos de los datos, no debe aparecer la línea correspondiente
 * 
 * 
 * 4) calcular cuántos nuevos contagios hay en cada día de la semana. La salida de la función 
 * será un objeto con las claves 'lunes', 'martes',etc. y los valores serán el número
 * de nuevos contagios que ha habido en dichos días
 * 
 * 5) El número de nuevos contagios puede variar mucho de un día a otro por diversos motivos. Para
 * que la interpretación de las gráficas sea más sencilla se suelen suavizar los datos. ¿Cómo? Una de
 * las técnicas es hacer una media de los últimos días. El objetivo de este apartado es crear un array
 * con los nuevos contagios "suavizados" con la media de los últimos tres días. Es decir, el día 3 contendrá
 * la suma de los contagios de los días 1, 2 y 3 dividida por 3.
 * 
 */

 const fs = require('fs');

 function cleanData_legacy(rawCSVData) {
    let dataCleaned = [];

    for (let i=1; i<rawCSVData.length; i++) {
        const fields = rawCSVData[i].split(',');

        if (fields.length >= 2) {
            dataCleaned.push(fields);
        }
    }

    return dataCleaned;
 }

 function cleanData(rawCSVData) {
     const dataCleaned = rawCSVData
        .slice(1)
        .map ( row => row.split(',') )
        .filter( splittedRow => splittedRow.length >= 2 )

    return dataCleaned;
 }


 function getHigherIncrement(data) {
    const POSITION_ACCUMULATED_DATA = 1;
    const POSITION_DATE = 0;

    let higherIncrement = 0;
    let higherIncrementDate = '';

    for (let i=1; i<data.length; i++) {
        const today = data[i][POSITION_ACCUMULATED_DATA];
        const yesterday = data[i - 1][POSITION_ACCUMULATED_DATA];

        const diff = today - yesterday;

        if (diff > higherIncrement) {
            higherIncrement = diff;
            higherIncrementDate = data[i][POSITION_DATE];
        }
    }

    return higherIncrementDate;
 }

 const datosCovid = fs.readFileSync(`${__dirname}/../resources/nacional_covid19.csv`, 'latin1').toString().split('\n');
 const dataCleaned = cleanData(datosCovid);

 console.log(getHigherIncrement(dataCleaned));