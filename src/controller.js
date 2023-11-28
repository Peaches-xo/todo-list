import './style.css';

//Our main file - handles requests.
//Tells MODEL what to do (logic wise),
//tells VIEW what do to (display wise)
//Controls and decides how data is displayed
import {} from './view.js';
import { allProjectsArr } from './model.js';
import { createNewProjectModel } from './model.js';
import { createNewTaskModel } from './model.js';


import { bin24 } from 'src/images/bin24.png';
import crystals from '/images/crystals.png ';
import squares24 from '/images/squares24.png';
import wand24 from '/images/wand24.png';
import viewallprojects from 'images/viewallprojects.png';
import github24 from 'src/images/github24.png';
import wavinghand from 'src/images/wavinghand.png';
import stars from '/images/stars.png';
import cross32 from '/images/cross32.png';
import eraser24 from '/images/eraser24.png';
import diskette24 from '/images/diskette24.png';

import diskette24 from '../images/diskette24.png';
import edit24 from '/images/edit24.png';
import bin24 from '/images/bin24.png';
import downgrey16 from './src/images/downgrey16.png';



//generate ID
const generateUUID = function b(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
};

//function that runs when submit button is clicked
export function createNewProject(projName) {
  //call to a function inside model, passing the projName, model will create the object and return the object to controller to be passed to the view to render the display

  let createdProject = createNewProjectModel(projName, generateUUID()); //in model
}

export function createNewTask(
  taskName,
  taskDesc,
  taskDue,
  taskPriority,
  projectName,
  projID,
) {
  let task = createNewTaskModel(
    taskName,
    taskDesc,
    taskDue,
    taskPriority,
    projectName,
    projID,
    generateUUID(),
  ); //in model
  return task;
}





// export const pubSub = {
//   events: {},
//   subscribe: function (evName, fn) {
//     console.log(`PUBSUB: someone just subscribed to know about ${evName}`);
//     //add an event with a name as new or to existing list
//     this.events[evName] = this.events[evName] || [];
//     this.events[evName].push(fn);
//   },
//   unsubscribe: function (evName, fn) {
//     console.log(`PUBSUB: someone just UNsubscribed from ${evName}`);
//     //remove an event function by name
//     if (this.events[evName]) {
//       this.events[evName] = this.events[evName].filter((f) => f !== fn);
//     }
//   },
//   publish: function (evName, data) {
//     console.log(`PUBSUB: Making a broadcast about ${evName} with ${data}`);
//     //emit/publish the event to anyone who is subscribed
//     if (this.events[evName]) {
//       this.events[evName].forEach((f) => {
//         f(data);
//       });
//     }
//   },
// };
