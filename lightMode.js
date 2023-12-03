let time = new Date();
let options = { timeStyle: 'short', hour12: true };
let timeString = time.toLocaleTimeString('en-US', options);

let currentTime = document.getElementById('currentTime');
currentTime.textContent = timeString;

let hoursWorking = document.getElementById('hoursWorking');

window.onload = () => {
    let hour = 0;
    let minute = 0;
    let seconds = 0;
    let totalSeconds = 0;
  
    let intervalId = null;
  
  intervalId = setInterval(startTimer, 1000);
    function startTimer() {
      ++totalSeconds;
      hour = Math.floor(totalSeconds / 3600);
      minute = Math.floor((totalSeconds - hour * 3600) / 60);
  
      hoursWorking.textContent = `${hour} hours and ${minute} minutes`;
    }
  }