let string = "This is our given string with more than 20 characters in it";

string = string.toLowerCase();

const vowels = ["a", "e", "i", "o", "u"];
const consonants = "bcdfghjklmnpqrstvwxyz".split("");

let consonantCount = 0;
let vowelCount=0;

for (let char of string) {
  if (vowels.includes(char)) {
    vowelCount++;
  } else if (consonants.includes(char)) {
    consonantCount++;
  }
}

console.log("Number of vowels:", vowelCount);
console.log("Number of consonants:", consonantCount);
