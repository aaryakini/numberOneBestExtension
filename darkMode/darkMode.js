const getCurrentTime = function() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    let newformat = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let currentTime = document.getElementById('current-time');
    currentTime.innerText = `Hello, user. It is now ${hours + ':' + minutes + ' ' + newformat}.`
    console.log(hours + ':' + minutes + ' ' + newformat);
}

getCurrentTime();


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