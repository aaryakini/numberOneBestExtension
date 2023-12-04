// set current time
const getCurrentTime = function() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    let newformat = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let currentTime = document.getElementById('current-time');
    currentTime.innerText = `${hours + ':' + minutes + ' ' + newformat}`
    console.log(hours + ':' + minutes + ' ' + newformat);
}

getCurrentTime();

// get chumboxes from Are.na API
let chumboxes = document.querySelector('.chumboxes');

const getChum = function() {
    fetch('https://api.are.na/v2/channels/chum-vn3otwya0k8/contents?per=100')
    .then((response) => response.json())
    .then((data) => {
  
    let blocks = data.contents;
    
    for (let i = 0; i < blocks.length; i++) {
    let link = blocks[i].description
    let linkedImage = document.createElement('a')
    linkedImage.setAttribute('id', 'linked-image')

    let image = document.createElement('img');
    image.setAttribute('id', 'image')
    linkedImage.appendChild(image);

    const title = document.createElement('a');
    image.src = blocks[i].image.display.url;
    title.innerHTML = blocks[i].title;

    let chumbox = document.createElement('div')
    chumbox.setAttribute('id', 'chumbox' + i)
    chumbox.className = 'chumbox';
    chumbox.appendChild(linkedImage);
    chumbox.appendChild(title);
    title.href = link;
    linkedImage.href = link;

    chumboxes.appendChild(chumbox);
    }
    });
};

getChum();

//set 8 hour countdown

function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600);
        minutes = parseInt((timer % 3600) / 60);
        seconds = parseInt(timer % 60);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ':' + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let eightHours = 8 * 60 * 60 ,
        display = document.querySelector('#hours-left');
    startTimer(eightHours, display);
};

// get tab count from chrome.api 
let tabCounter = document.getElementById("tab-counter");

chrome.tabs.query({}, function (tabs) {
    tabCounter.innerText = `${tabs.length} tabs`;
});