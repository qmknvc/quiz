import { styleSetCorrect, styleSetWrong, styleSetPicked, styleReset } from "./formReset.js"
import { interval, questionTimer, timeRanOut } from "./timer.js"
import { getQuestions } from "./fetchData.js"
import { getCorrectAnswer, getCurrentQuestion, getOfferedAnswers } from "./dataMine.js"

const question      = document.querySelector("#question")
const answerSection = document.querySelector("#answers")
const countdown     = document.querySelector("#countdown")
const buttons       = document.querySelectorAll(".answerButton")
const selectedCategories = JSON.parse(localStorage.getItem("selectedCategories")) || new Set()
const difficultySelected = JSON.parse(localStorage.getItem("difficultySelected")) || []
const profile            = JSON.parse(localStorage.getItem("profile")) || {}

let quizCategories = ([...selectedCategories].join(','))
const currentTrivia = await getQuestions(quizCategories, difficultySelected) // Fetching questions

let correctAnswer = ''
let correctAnswerButton = ''
const usedQuestions = []
const askQuestion = (data) => {
    let currentQuestion = getCurrentQuestion(data)
    let answersOffered  = getOfferedAnswers(currentQuestion)
    correctAnswer       = getCorrectAnswer(currentQuestion)
    
    if (usedQuestions.length === data.length){
        window.location.href = "finalScore.html"
        return
    }
    if (usedQuestions.includes(currentQuestion)){
        askQuestion(data);
        return
    }
    usedQuestions.push(currentQuestion)
    
    answerSection.querySelectorAll(".answerButton").forEach((element, index) => element.textContent = answersOffered[index])
    correctAnswerButton = [...answerSection.querySelectorAll(".answerButton")].find(element => element.textContent == correctAnswer) 
    question.textContent = currentQuestion.question.text
    question.style.fontSize = "2em"
}

/**/
questionTimer().then(() => {    // Start first timer
    if (timeRanOut){
        nextQuestion()
    }
}) 
askQuestion(currentTrivia)      // Start questions
console.log("-- Secret cheat sheet --")
console.log("Correct answer:", correctAnswer)

let selectedAnswer = ''
answerSection.addEventListener("click", (event) => {
    if(event.target.classList.value !== 'answerButton'){
        return
    }
    if (selectedAnswer) {
        let previous = selectedAnswer;
        styleReset(previous)
    }
    selectedAnswer = event.target
    styleSetPicked(event.target)
    
    clearInterval(interval)
    if (selectedAnswer.textContent !== correctAnswer){
        countdown.textContent = "X"
        styleSetWrong(event.target)
        nextQuestion(event)
        return
    }
    countdown.textContent = "✓"
    profile.points += 10
    localStorage.setItem("profile", JSON.stringify(profile));
    nextQuestion(event)
})


const nextQuestion = (event) => {
    buttons.forEach(element => element.disabled = true)
    styleSetCorrect(correctAnswerButton)
    questionTimer().then(() => {
        if (timeRanOut){
            nextQuestion()
        }
    }) 
    setTimeout(() => {
        if(event){
            styleReset(event.target)
        }
        buttons.forEach(element => element.disabled = false)
        styleReset(correctAnswerButton)
        askQuestion(currentTrivia)
        console.log("Correct answer:", correctAnswer)
    }, 1000);
}
