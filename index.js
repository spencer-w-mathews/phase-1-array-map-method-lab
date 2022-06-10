const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = ()=>{
  const map1 = tutorials.map(capitalize)
  return map1
};
 
//const map1 = tutorials.map(capitalize);

/*function capitalize(input) {  
  let CapitalizeWords = input[0].toUpperCase();  
  for (let i = 1; i <= input.length - 1; i++) {  
      let currentCharacter,  
          previousCharacter = input[i - 1];  
      if (previousCharacter && previousCharacter == ' ') {  
          currentCharacter = input[i].toUpperCase();  
      } else {  
          currentCharacter = input[i];  
      }  
      CapitalizeWords = CapitalizeWords + currentCharacter;  
  }  
  return CapitalizeWords;  
}  */

function capitalize(input) {  
  let words = input.split(' ');  
  let CapitalizedWords = [];  
  words.forEach(element => {  
      CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
  });  
  return CapitalizedWords.join(' ');  
}  