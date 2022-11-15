console.log('Main js loaded');

function toUpperCase(names) {
  const rv = [];
  for (let name of names) {
    rv.push(name.toUpperCase());
  }
  return rv;
}

const numbers = [1, 2, 3];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

const names = ['Carlos', 'Julio'];
names.push('edgar', 'lola');

console.log(toUpperCase(names)); 