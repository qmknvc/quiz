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
        event.target.style.color = "white"
        event.target.style.borderBottomColor = "white"
        event.target.style.backgroundColor = "rgb(95, 67, 93)"
    }
})
resetButton.addEventListener("click", () => {
    selectedCategories.clear()
    location.reload()
})
confirmButton.addEventListener("click", () => {
    if (selectedCategories.size == 0) {
        alert("Add at least 1 category!")
        location.reload()
    }
    //localStorage.setItem("selectedCategories", JSON.stringify(selectedCategories))
    console.log(selectedCategories)
    selectedCategories.clear()
})