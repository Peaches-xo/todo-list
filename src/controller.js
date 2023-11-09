import './style.css';
//Our main file - handles requests. 
//Tells MODEL what to do (logic wise), 
//tells VIEW what do to (display wise)
//Controls and decides how data is displayed
import { thisistheview } from './view.js';
import { allProjectsArr } from './model.js';
import { createNewProjectModel } from './model.js';
import { createNewTaskModel } from './model.js';



//inititation function/ loads the view
thisistheview();








//function that runs when submit button is clicked
 export function createNewProject(projName){
    //this should be a call to a function inside model, passing the projName, model will create the object and return the object to controller
    createNewProjectModel(projName); //in model

    //pass newly created obj to view to add card
}
 
//when project is created, pass no of tasks to view to display


export function createNewTask(taskName, taskDesc, taskDue, taskPriority, projectName){
    
    createNewTaskModel(taskName, taskDesc, taskDue, taskPriority, projectName); //in model

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



