function countWords(paragraph) {
    const words = paragraph.split(/\s+/);
    return words.length;
}

// Example usage:
const paragraph = "This is a sample paragraph with several words.";
const wordCount = countWords(paragraph);
console.log("Word count:", wordCount);
