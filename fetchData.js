const getQuestions = async (quizCategories, difficultySelected) => {
    let isFetching = false
    try {
        if (isFetching) return
        isFetching = true
        const response = await fetch(`https://the-trivia-api.com/v2/questions?categories=${quizCategories}&difficulties=${difficultySelected}`)
        const data = await response.json()
        isFetching = false
        return data
    } catch(err) {
        console.log(err)
    } finally {
        isFetching = false
    }
}

export { getQuestions }