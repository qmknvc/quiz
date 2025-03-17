function validateName(input){
    if (!input){
        alert("Please insert a profile name!")
        throw new Error("Profile name not inserted.")
    }
    else if (input.length <= 2){
        alert("Profile name must have at least 3 characters!")
        throw new Error("Profile name is less than 3 characters.")
    }
    else if (input.length > 12){
        alert("Profile name can't have more than 12 characters!")
        throw new Error("Profile name is longer than 12 characters..")
    }
}
function validateSelection(input){
    if (!input){
        alert("Please select difficulty!")
        throw new Error("Difficulty not selected.")
    }
}

export { validateName, validateSelection }