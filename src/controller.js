import './style.css';
//Our main file - handles requests. 
//Tells MODEL what to do (logic wise), 
//tells VIEW what do to (display wise)
//Controls and decides how data is displayed
import { thisistheview } from './view.js';
import { model } from './model.js';


//inititation function 
thisistheview();
model();







//function that runs when submit button is clicked

 
 
 export function createNewProject(projName){
    console.log('createNewProject in controller firing');

    //this should be a call to a function inside model, passing the projName
    createNewProjectModel(projName); //needs to call model but isnt

}
 

























// export const pubSub = {
//   events: {},
//   subscribe: function(evName, fn){
//     console.log(`PUBSUB: someone just subscribed to know about ${evName}`);
//     //add an event with a name as new or to existing list
//     this.events[evName] = this.events[evName] || [];
//     this.events[evName].push(fn);
//   },
//   unsubscribe: function(evName, fn){
//     console.log(`PUBSUB: someone just UNsubscribed from ${evName}`);
//     //remove an event function by name
//     if (this.events[evName]){
//         this.events[evName] = this.events[evName].filter(f => f !== fn);
//     }
//   },
//   publish: function(evName, data){
//     console.log(`PUBSUB: Making a broadcast about ${evName} with ${data}`);
//     //emit/publish the event to anyone who is subscribed
//     if (this.events[evName]){
//         this.events[evName].forEach(f => {
//             f(data);
//         });
//     }
//   }
// };



