const button = document.querySelector("button")
const category = document.querySelector("#category")
const question = document.querySelector("#question")
const answersOffered = document.querySelector("#answers")

button.addEventListener("click", () => {
    const getData = async () => {
        let isFetching = false
        try {
            if (isFetching) return

            isFetching = true
            const response = await fetch('https://the-trivia-api.com/v2/questions')
            const data = await response.json()
            console.log(data)

            let currentTrivia = data[Math.floor(Math.random() * data.length)]
            category.textContent = currentTrivia.category
            question.textContent = currentTrivia.question.text
            let answers = []
            currentTrivia.incorrectAnswers.forEach(element => answers.push(element, "  "));
            answers.push(currentTrivia.correctAnswer)
            answers.sort(() => 0.5 - Math.random())
            answersOffered.textContent = answers


            isFetching = false
        } catch(err) {
            console.log(err)
        } finally {
            isFetching = false
        }

    }
    getData()

})