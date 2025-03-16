const difficultySection = document.querySelector("#difficulty-section")
const goButton          = document.querySelector("#go-button")
const difficulties = [
    "easy",
    "medium",
    "hard"
]
let difficultySelected = ''
difficultySection.addEventListener("click", (event) => {
    if (difficulties.includes(event.target.id)) {
        if (difficultySelected) {
            let previous = difficultySelected;
            previous.style.color = ""
            previous.style.borderBottomColor = ""
            previous.style.backgroundColor = ""
        }
        difficultySelected = event.target
        event.target.style.color = "white"
        event.target.style.borderBottomColor = "white"
        event.target.style.backgroundColor = "rgb(95, 67, 93)"
    }
});
goButton.addEventListener("click", () => {
    const nameInsert = document.querySelector("#name-insert").value.split(' ').filter(e => e != '').join(' ')
    if (!nameInsert){
        alert("Please insert a profile name!")
        location.reload()
    }
    else if (nameInsert.length <= 2){
        alert("Profile name must have at least 3 characters!")
        location.reload()
    }
    else if (nameInsert.length > 12){
        alert("Profile name can't have more than 12 characters!")
        location.reload()
    }
    difficultySelected = difficultySelected.id
    console.log(nameInsert)
    console.log(difficultySelected)
})