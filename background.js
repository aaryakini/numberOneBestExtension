// chrome.runtime.onInstalled.addListener(function() {
//     chrome.alarms.create("openLink", { periodInMinutes: 0.5 });
//   });
  
//   chrome.alarms.onAlarm.addListener(function(alarm) {
//     if (alarm.name === "openLink") {
//       // Open a new window with the specified URL
//       chrome.windows.create({ url: "https://wikipedia.com", type: "normal" });
//     }
//   });



// FROM TUTORIAL VID

// chrome.alarms.onAlarm.addListener (
//     () => {
//         chrome.notifications.create(
//             {
//             type: 'basic',
//             iconUrl: 'img/icon-128.png',
//             title: 'Test Message',
//             message: 'You are awesome!',
//             silent: false  
//             },        
//         () => { }
//         )
//     },
// )

// chrome.runtime.onMessage.addListener (
//     function (request, sender, sendResponse) {
//         if (request.time) {
//             createAlarm();
//         }
//     }
// );



//FROM STACK EXCHANGE

// chrome.alarms.onAlarm.addListener((alarm) => {
//     // if (alarm.name === "testAlarm") {
//     //     chrome.notifications.create('test', {
//     //         type: 'basic',
//     //         iconUrl: 'img/icon-128.png',
//     //         title: 'Test Message',
//     //         message: 'You are awesome!',
//     //         priority: 2
//     //     });    }
//     // window.open("https://www.w3schools.com");    
//     console.log('Beep');
// });