function styleReset(element){
    element.style = ''
}
function styleSetPicked(element){
    element.style.color = "white"
    element.style.borderBottomColor = "white"
    element.style.backgroundColor = "rgb(95, 67, 93)"
}
function styleSetCorrect(element){
    element.style.color = "white"
    element.style.borderBottomColor = "white"
    element.style.backgroundColor = "rgb(67, 95, 76)"
}
function styleSetWrong(element){
    element.style.color = "white"
    element.style.borderBottomColor = "white"
    element.style.backgroundColor = "rgb(138, 45, 45)"
}


export { styleSetCorrect, styleSetWrong, styleReset, styleSetPicked }