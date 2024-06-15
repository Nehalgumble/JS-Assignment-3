function correctSentence(sentence, wrong, correct) {
    
    const regex = new RegExp('\\b' + wrong + '\\b', 'gi');
  
    const correctedSentence = sentence.replace(regex, correct);
    return correctedSentence;
}

const originalSentence = "This is an exampl of a sentance with speling errors.";
const correctedSentence = correctSentence(originalSentence, "exampl", "example");
console.log(correctedSentence); 
