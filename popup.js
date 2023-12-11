// - toggle between light mode and dark mode
// - time-based toggle parameters to automate switching between light / dark mode
// - based on time of day (9 to 5) set default onboarding page


// FROM TUTORIAL VID
 
// const ele = document.getElementById('darkBtn');
// ele.addEventListener('click', () => {
//     chrome.runtime.sendMessage({time: '1'}, function (reponse) {
//         console.log(response);
//     });
// });




//FROM STACK EXCHANGE

// chrome.alarms.create('testAlarm', {
//     when: Date.now(), periodInMinutes: 0.5
// });

    // let links = [
    //     "https://wikipedia.com",
    //     "https://google.com",
    //     "https://newyork.craigslist.org",
    //   ];
    
    //   function openRandomLink() {
    //     let i = Math.floor(Math.random() * links.length);
    //     let randomLink = links[i];
      
    //     chrome.windows.create({ url: randomLink, type: "normal" });
    //   }
    
    //   chrome.runtime.onInstalled.addListener(function() {
    //     chrome.alarms.create("openLink", { periodInMinutes: 0.15 });
    //   });
      
    //   chrome.alarms.onAlarm.addListener(function(alarm) {
    //     if (alarm.name === "openLink") {
    //       openRandomLink();
    //     }
    //   });