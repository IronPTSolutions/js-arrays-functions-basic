console.log('Main js loaded');

function toUpperCase(names) {
  const rv = [];
  for (let name of names) {
    rv.push(name.toUpperCase());
  }
  return rv;
}

function isVowel(char) {
  let result = false;
  switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      result = true;
      break;
  }
  return result;
}

function countVowels(text) {
  let count = 0;
  for (let char of text) {
    if (isVowel(char)) {
      count++;
    }
  }
  return count;
}

function reverseNumber(number) {
  number = `${number}`;
  let reversed = '';
  for (let i = number.length - 1; i >= 0; i--) {
    reversed += number[i]
  }
  return +reversed;
}

function findSymbol(text, symbol) {
  let index = -1;
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char === symbol) {
      index = i;
      break;
    }
  }
  return index;
}

function findSymbolWithWhile(text, symbol) {
  let index = -1;
  let i = 0;
  let founded = false;
  while (!founded && i < text.length) { // while (false)
    let char = text[i];
    if (char === symbol) {
      index = i;
      founded = true; // while (false)
    }
    i++;
  }
  return index;
}

const message = "hola mundo"
console.log("o position:", findSymbol(message, "o")); 

const numbers = [1, 2, 3];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);


const names = ['Carlos', 'Julio'];
names.push('edgar', 'lola');
console.log(toUpperCase(names)); 
console.log(countVowels('Aaeiou n a '));


console.log(reverseNumber(1234));
