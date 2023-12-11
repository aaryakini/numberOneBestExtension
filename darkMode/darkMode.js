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

    fetch('https://api.are.na/v2/channels/chum-vn3otwya0k8/contents?per=100')
    .then((response) => response.json())
    .then((data) => {

    let blocks = data.contents;

    function printRandomBlock() {
        const i = Math.floor(Math.random() * blocks.length);
        const randBlock = blocks[i];

        let chumbox = document.createElement('div')
        chumbox.setAttribute('id', 'chumbox' + i)
        chumbox.className = 'chumbox';
    
        let link = blocks[i].description
        let linkedImage = document.createElement('a')
        linkedImage.setAttribute('id', 'linked-image')
    
        let image = document.createElement('img');
        image.setAttribute('id', 'image')
        linkedImage.appendChild(image);
    
        const title = document.createElement('a');
        image.src = blocks[i].image.display.url;
        title.innerHTML = blocks[i].title;
    
        title.href = link;
        linkedImage.href = link;
        linkedImage.setAttribute('target', '_blank');
    
        chumbox.appendChild(linkedImage);
        chumbox.appendChild(title);
     
        let winWidth = chumboxes.clientWidth;
        let winHeight = chumboxes.clientHeight;
        function getRandomNumber(min, max) { 
            return Math.random() * (max - min) + min;   
        }
        
        randomTop = getRandomNumber(7, 70);
        randomLeft = getRandomNumber(2, 80);
        randomRot = getRandomNumber(-7.5, 7.5)
        chumbox.style.top = randomTop + "vh";
        chumbox.style.left = randomLeft + "vw";
        chumbox.style.transform = `rotate(${randomRot}deg)`;

        chumboxes.appendChild(chumbox); 
        // window.open(link, '_blank',`toolbar=yes,scrollbars=yes,resizable=yes,top=${randomTop},left=${randomLeft},width=750,height=500`)

    }  
    setInterval(() => {printRandomBlock();}, 7500);

});


// set 8 hour countdown
let newTime = localStorage.getItem("hoursLeft");
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
        display = document.querySelector('#hoursLeft');
    let newTime = startTimer(eightHours, display);
    localStorage.setItem("hoursLeft", hoursLeft);
};


// get tab count from chrome.api 
let tabCounter = document.getElementById("tab-counter");
let queryInterval = null;
queryInterval = setInterval(chromeQuery, 1000)

function chromeQuery(){
  chrome.tabs.query({}, function (tabs) {
    tabCounter.textContent = `${tabs.length} tabs`;
  });
}



