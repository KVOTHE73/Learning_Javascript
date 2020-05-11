/**
 * El objetivo del ejercicio es crear un nuevo array que contenga
 * todos los hashtags del array `tweets`, pero sin repetir
 * 
 * Nota: como mucho hay 2 hashtag en cada tweet
 */




"use strict";


let tweets = [
    'aprendiendo #javascript en  Vigo', 
    'empezando el segundo módulo del bootcamp!',
    'hack a boss bootcamp vigo #javascript #codinglive']


const hastag_length = 10;
let output = [];
let hastag = [];

for (tweets of tweets){
    let primerHastag = tweets.indexOf('#');
    let segundoHastag = tweets.indexOf('#', primerHastag+1);
    if (primerHastag !== -1){
        hastag = tweets.slice(primerHastag, primerHastag + hastag_length+1);
      }
    if (segundoHastag !== -1){
        hastag = tweets.slice(segundoHastag, segundoHastag + hastag_length+1);
      }
    if (output.indexOf(hastag) == -1){
        output.push(hastag);
    }
  }
console.log(output);
