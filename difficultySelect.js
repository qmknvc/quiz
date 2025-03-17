import { validateName, validateSelection } from "./validation.js";
import { styleSetPicked, styleReset }            from "./formReset.js";
const difficultySection = document.querySelector("#difficulty-section")
const goButton          = document.querySelector("#go-button")
const difficulties = [
    'easy',
    'medium',
    'hard'
]
let difficultySelected = ''
difficultySection.addEventListener("click", (event) => {
    if (difficulties.includes(event.target.id)) {
        if (difficultySelected) {
            let previous = difficultySelected;
            styleReset(previous)
        }
        difficultySelected = event.target
        styleSetPicked(event.target)
    }
});
goButton.addEventListener("click", () => {
    const profileName = document.querySelector("#name-insert").value.split(' ').filter(e => e != '').join(' ')
    validateName(profileName)
    validateSelection(difficultySelected)
    const profile = {
        name: profileName,
        points: 0
    }
    difficultySelected = difficultySelected.id
    localStorage.setItem("difficultySelected", JSON.stringify(difficultySelected))
    localStorage.setItem("profile", JSON.stringify(profile))
    window.location.href = "theQuiz.html"
})