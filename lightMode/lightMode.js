let time = new Date();
let options = { timeStyle: 'short', hour12: true };
let timeString = time.toLocaleTimeString('en-US', options);

let currentTime = document.getElementById('currentTime');
currentTime.textContent = timeString;

let hoursWorking = document.getElementById('hoursWorking');


// Timer code modified from — https://stackoverflow.com/questions/52912160/start-timer-when-window-load

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

  const tabs = await chrome.tabs.query({
    url: [
      "https://developer.chrome.com/docs/webstore/*",
      "https://developer.chrome.com/docs/extensions/*",
    ],
  });