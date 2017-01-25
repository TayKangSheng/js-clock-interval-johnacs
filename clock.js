


function clock(){
var secondsElement = document.getElementById('second')
var minutesElement = document.getElementById('minute')
var hoursElement = document.getElementById('hour')

var now = new Date()
var timeInSeconds = now.getSeconds()
var timeInMinutes = now.getMinutes()
var timeInHours = now.getHours()

function init () {
  setInterval(displayTime, 1000)
}

function displayTime () {
  now = new Date()
  timeInSeconds = now.getSeconds()
  timeInMinutes = now.getMinutes()
  timeInHours = now.getHours()
  // console.log(now)
  secondsElement.style.transform = 'rotate(' + secondRotation(timeInSeconds) + 'deg)'
  minutesElement.style.transform = 'rotate(' + minuteRotation(timeInMinutes) + 'deg)'
  hoursElement.style.transform = 'rotate(' + hourRotation(timeInHours) + 'deg)'
}

function secondRotation (mySeconds) {
  var angle = mySeconds * 6

  return angle
}

function minuteRotation (myMinute) {
  var angle = myMinute * 6

  return angle
}

function hourRotation (myHour) {
  myHour = myHour % 12
  if (myHour === 0) {
    return 0
  } else {
    var hourPlusFraction = (myHour / 12) * 360 + (timeInMinutes + 0.5) // 60deg for between each hours
    return hourPlusFraction
  }
}

return{
  init: init
  // displayTime: displayTime,
  // secondRotation:secondRotation,
  // minuteRotation: minuteRotation,
  // hourRotation: hourRotation
}

}


document.addEventListener('DOMContentLoaded', function(){
var myClock = clock()
myClock.init()

})
