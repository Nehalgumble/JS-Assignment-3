let string = "INDIA";

let charArray = string.split("");

let index = 3;

charArray.splice(index, 0, "ONES");

let newString = charArray.join("");