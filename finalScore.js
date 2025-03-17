const score       = document.querySelector("#score")
const playerName  = document.querySelector("#player-name")
const profile     = JSON.parse(localStorage.getItem("profile")) || {}
console.log(profile)
playerName.textContent = profile.name
score.textContent = profile.points