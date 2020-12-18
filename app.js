
const day = document.querySelector(".days h1")
const hour = document.querySelector(".hours h1")
const minute = document.querySelector(".minutes h1")
const second = document.querySelector(".seconds h1")
const secondsOutline = document.querySelector(".second-outline circle")
const minutesOutline = document.querySelector(".minute-outline circle")
const hoursOutline = document.querySelector(".hour-outline circle")
const daysOutline = document.querySelector(".day-outline circle")

const secondsOutlineLength = secondsOutline.getTotalLength()
secondsOutline.style.strokeDasharray = secondsOutlineLength
secondsOutline.style.strokeDashoffset = secondsOutlineLength

const minutesOutlineLength = minutesOutline.getTotalLength()
minutesOutline.style.strokeDasharray =  minutesOutlineLength
minutesOutline.style.strokeDashoffset = minutesOutlineLength

const hoursOutlineLength = hoursOutline.getTotalLength()
hoursOutline.style.strokeDasharray = hoursOutlineLength
hoursOutline.style.strokeDashoffset = hoursOutlineLength

const daysOutlineLength = daysOutline.getTotalLength()
daysOutline.style.strokeDasharray = daysOutlineLength
daysOutline.style.strokeDashoffset = daysOutlineLength


const countdownDate = new Date("May 31, 2023 00:00:00").getTime()



const countdown = ()=>{

const presentDate = new Date().getTime()

const remainingTime = countdownDate-presentDate

var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

day.textContent = days
hour.textContent=hours
minute.textContent=minutes
second.textContent= seconds


let secondsprogress = secondsOutlineLength-(seconds / 60)*secondsOutlineLength
     secondsOutline.style.strokeDashoffset=secondsprogress

let minutesprogress = minutesOutlineLength-(minutes / 60)*minutesOutlineLength
     minutesOutline.style.strokeDashoffset=minutesprogress

let hoursprogress = hoursOutlineLength-(hours / 24)*hoursOutlineLength
     hoursOutline.style.strokeDashoffset=hoursprogress

let daysprogress = hoursOutlineLength-(days / 905)*hoursOutlineLength
     daysOutline.style.strokeDashoffset=daysprogress

}


setInterval(countdown,1000)




