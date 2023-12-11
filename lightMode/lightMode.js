let time = new Date();
let options = { timeStyle: 'short', hour12: true };
let timeString = time.toLocaleTimeString('en-US', options);

let currentTime = document.getElementById('currentTime');
currentTime.textContent = timeString;

let hoursWorking = document.getElementById('hoursWorking');

// Timer code modified from — https://stackoverflow.com/questions/52912160/start-timer-when-window-load
window.onload = () => {
  chromeQuery();

  let hour = 0;
  let minute = 0;
  let seconds = 0;
  let totalSeconds;

  let getSeconds = localStorage.getItem("totalSeconds");
  if(getSeconds > 0){
    totalSeconds = getSeconds;
  } else{
    totalSeconds = 0;
  }

  let intervalId = null;

  intervalId = setInterval(startTimer, 1000);
  
  function startTimer() {
    ++totalSeconds;
    hour = Math.floor(totalSeconds / 3600);
    minute = Math.floor((totalSeconds - hour * 3600) / 60);

    hoursWorking.textContent = `${hour} hours and ${minute} minutes`;
    localStorage.setItem("totalSeconds", totalSeconds);

  }
}
// end of timer code

let template = document.getElementById("template");
let tabContainer = document.getElementById("tabContainer");
let tabCount = document.getElementById("tabCount");

let queryInterval = null;

queryInterval = setInterval(chromeQuery, 3000);

function chromeQuery(){
  chrome.tabs.query({}, function (tabs) {
    //displaying total number of open tabs
    tabCount.textContent = `${tabs.length} tabs`;
    tabContainer.innerHTML = "";
    for (let i = 0; i < tabs.length; i++) {
  
      //create new div for each tab + remove id attribute
      let templateCopy = template.cloneNode(true);
      tabContainer.appendChild(templateCopy);
      templateCopy.classList.add('tab');
      templateCopy.removeAttribute('id');
      templateCopy.setAttribute('id', tabs[i].id);
  
      //modifying properties of div
      let tabName = tabs[i].title;
      let tabNameSlice = tabName;
      // console.log(tabs[i].title);
      if (tabName.length > 25){
        tabNameSlice = `${tabName.slice(0,25)}...`;
      }
      templateCopy.querySelector(".tabName").append(tabNameSlice);
      templateCopy.querySelector(".tooltipText").append(tabName);
    }
  });

  let tabList = document.getElementsByClassName('tab');
  console.log(tabList);
  console.clear();

  for (let i = 0; i < tabList.length; i++){
    let id = tabList.item(i).getAttribute('id');
    console.log(id);

    tabList.item(i).onclick = function(){
      chrome.tabs.remove(parseInt(id));
      console.log('i tried!');
    };
  }

}


// console.log(tabList);
// // console.clear();

// for (let i = 0; i < tabList.length; i++){
//   let id = tabList.item(i).getAttribute('id');
//   // console.log(id);
//   let el = document.getElementById(id);
//   // el.addEventListener('click', closeTab.bind(null, 'id'));
//   el.addEventListener('click', closeTab().bind('null', id));
//   // console.log(document.getElementById(id));
// }

// function closeTab(id){
//   // let id = this.id;
//   // this.id
//   // closeId = parseInt(closeId);
//   // console.log("closeId = " + closeId);
//   // chrome.tabs.remove(closeId);
//   // console.log("tried to close tab.");
//   console.log("something was done!");
//   // return chrome.tabs.remove(parseInt(id));
// };

// to do:
//periodic refresh with timer — DONE (2 min intervals)
//hover to show full name — DONE
//update tabCounter — DONE
//link to tabs / click to close tabs
//session storage for timer
//update status (active and discarded attributes of Tab object)

