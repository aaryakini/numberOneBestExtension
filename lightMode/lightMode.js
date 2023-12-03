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

  let allTabs = new Array();
  chrome.tabs.query({}, function (tabs) {
    for (let i = 0; i < tabs.length; i++) {
        allTabs[i] = tabs[i];
    }
    // Moved code inside the callback handler
    for (let i = 0; i < allTabs.length; i++) {
        if (allTabs[i] != null)
           window.console.log(allTabs[i].url);
        else {
            window.console.log("??" + i);
        }
        let templateCopy = template.cloneNode(true);
        tabContainer.appendChild(templateCopy);
        templateCopy.removeAttribute('id');
        let tabName = allTabs[i].title;
        let tabNameSlice = tabName.slice(0,30);
        templateCopy.querySelector(".tabName").append(`${tabNameSlice}...`);
    }
});


// to do:
// periodic refresh with timer
//link to tabs / click to close tabs
//hover to show full name
//update tabCounter
//update status (active and discarded attributes of Tab object)