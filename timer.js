

let interval = ''
let countdownTimer = ''
async function questionTimer() {
    countdownTimer = 10
    return new Promise((res, rej) => {
        clearInterval(interval)
        interval = setInterval(() => {
        countdown.textContent = countdownTimer--
        if (countdownTimer < 0){ // out of time
            clearInterval(interval)
            res();
        }
        }, 1000);
    })
};
 
const timeRanOut = (countdown) => {
    if (countdownTimer == 0){
        return true
    }
    return false
}

export { interval, questionTimer, timeRanOut}