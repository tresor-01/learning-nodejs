function generateRandomNumber(){
  return Math.floor(Math.random() * 100) + 1;
}



function celciusToFarnheit(celcius){
 return (celcius * 9) /5  + 32;
}

module.exports ={
  generateRandomNumber,
  celciusToFarnheit

}