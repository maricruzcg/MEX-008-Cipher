window.cipher = {
  encode : (offset , str) =>{ //Crear una función con dos parametros texto y desplazamiento
  //Necesito conocer el valor ASCII de cada letra text = text.charCodeAt(4);
    let encryptNumberAscci = '';
    let encryptStr = '';
    for(let i = 0; i < str.length; i++) { //Utilizo for para saber la posicion de cada una de las letras de la palabra
      let numberAscii = str.charCodeAt(i); //definir variable para saber saber la posicion de cada letra
      if(numberAscii >= 65 && numberAscii <= 90){ //Si la letra es mayuscula
        encryptNumberAscci = (numberAscii - 65 + offset) % 26 + 65;
      }else if (numberAscii >= 97 && numberAscii <= 122){ // si la letra es minuscula
        encryptNumberAscci = (numberAscii - 97 + offset) % 26 + 97;
      }else {
        encryptNumberAscci = numberAscii; // Si la letra es un simbolo o numero
      }
      encryptStr += String.fromCharCode(encryptNumberAscci);
    }
    return encryptStr;
  },

  decode : (offset, str) => {
  str = str.toUpperCase();
  let decryptedNumberAscci = '';
  let decryptedStr = '';

  for(let i = 0; i < str.length; i++) {
    let backAscii = str.charCodeAt(i);
    if(backAscii >= 65 && backAscii <= 90){
      decryptedNumberAscci = (backAscii + 65 - offset) % 26 + 65;
    }else if (backAscii >= 97 && backAscii <= 120){
      decryptedNumberAscci = (backAscii + 97 - offset) % 26 + 97;
    }else {
      decryptedNumberAscci = backAscii;
    }
    decryptedStr += String.fromCharCode(decryptedNumberAscci);

  }
  return decryptedStr;
  }
};
