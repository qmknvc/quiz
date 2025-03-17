import { styleSetPicked, styleReset } from "./formReset.js"
const resetButton       = document.querySelector("#reset-button")
const confirmButton     = document.querySelector("#confirm-button")
const categorySelection = document.querySelector("#category-list")
const categoryList = [
    'sport_and_leisure',
    'music',
    'geography',
    'history',
    'science',
    'film_and_tv'
]
let selectedCategories = new Set()
categorySelection.addEventListener("click", (event) => {
    if (categoryList.includes(event.target.id)) {
        selectedCategories.add(event.target.id)
        styleSetPicked(event.target)
    }
})
resetButton.addEventListener("click", () => {
    selectedCategories.clear()
    categorySelection.querySelectorAll("*").forEach(element => styleReset(element))
})
confirmButton.addEventListener("click", () => {
    if (selectedCategories.size == 0) {
        alert("Add at least 1 category!")
        return
    }
    selectedCategories = [...selectedCategories]
    localStorage.setItem("selectedCategories", JSON.stringify(selectedCategories))
    window.location.href = "difficultySelect.html"
    selectedCategories.clear()
})