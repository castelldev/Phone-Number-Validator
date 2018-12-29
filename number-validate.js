function telephoneCheck(str) {
    let formats = [
      /^\d{3}-\d{3}-\d{4}/,
      /^[1(]\d{3}[)]\d{3}-\d{4}/,
      /^[1]\s\d{3}-\d{3}-\d{4}/,
      /^[(]\d{3}[)]\s\d{3}-\d{4}/,
      /^[1]\s[(]\d{3}[)]\s\d{3}-\d{4}/,
      /^[1][(]\d{3}[)]\d{3}-\d{4}/,
      /\d{3}\s\d{3}\s\d{4}/,
      /^\d{10}$/,
    ];
   
    for(let format in formats){
      if (formats[format].test(str)){
         console.log(formats[format].exec(str));
         console.log(formats[format]);
         return true;
      }
    }
    return false;
  }
  
  telephoneCheck("(555-555-5555");