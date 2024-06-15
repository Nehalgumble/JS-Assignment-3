function reverseString(str) {
    return str.split("").reverse().join("");
}

// Example usage:
const originalString = "Hello, lets reverse this string!";
const reversedString = reverseString(originalString);
console.log("Reversed string:", reversedString);
