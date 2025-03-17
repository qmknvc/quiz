const getCurrentQuestion = (data) => {
    return data[Math.floor(Math.random() * data.length)];
}
const getCorrectAnswer = (question) => {
    return question.correctAnswer
}
const getOfferedAnswers = (question) => {
    let answersOffered = []
    question.incorrectAnswers.forEach(answer => answersOffered.push(answer)); // Spremi pogresne odgovore
    answersOffered.push(question.correctAnswer)              // Spremi tacan odogovr
    answersOffered.sort(() => 0.5 - Math.random())           // Shuffla ih
    return answersOffered
}

export { getCurrentQuestion, getCorrectAnswer, getOfferedAnswers }