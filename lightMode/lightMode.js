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
  // end of timer code

  let template = document.getElementById("template");
  let tabContainer = document.getElementById("tabContainer");
  let tabCount = document.getElementById("tabCount");

  chrome.tabs.query({}, function (tabs) {
    //displaying total number of open tabs
    tabCount.textContent = `${tabs.length} tabs`;

    for (let i = 0; i < tabs.length; i++) {

      //create new div for each tab + remove id attribute
      let templateCopy = template.cloneNode(true);
      tabContainer.appendChild(templateCopy);
      templateCopy.removeAttribute('id');

      //modifying properties of div
      let tabName = tabs[i].title;
      let tabNameSlice = tabName;
      console.log(tabs[i].title);
      if (tabName.length > 25){
        tabNameSlice = `${tabName.slice(0,25)}...`;
      }
      templateCopy.querySelector(".tabName").append(tabNameSlice);
      templateCopy.querySelector(".tooltipText").append(tabName);
    }

    // //logging all tabs array items in console for cross-checking
    // for (let i = 0; i < allTabs.length; i++) {
    //     if (allTabs[i] != null)
    //        window.console.log(allTabs[i].url);
    //     else {
    //         window.console.log("??" + i);
    //     }
    // }
});


// to do:
//periodic refresh with timer
//link to tabs / click to close tabs
//hover to show full name — DONE
//update tabCounter — DONE
//update status (active and discarded attributes of Tab object)