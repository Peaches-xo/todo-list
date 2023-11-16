import './style.css';
//Our main file - handles requests. 
//Tells MODEL what to do (logic wise), 
//tells VIEW what do to (display wise)
//Controls and decides how data is displayed
import {  } from './view.js';
import { allProjectsArr } from './model.js';
import { createNewProjectModel } from './model.js';
import { createNewTaskModel } from './model.js';

   //generate ID
   const generateUUID = function b(a){
    return a ? (a^Math.random()*16>>a/4).toString(16) : ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,b)
  };

//function that runs when submit button is clicked
 export function createNewProject(projName){
    //call to a function inside model, passing the projName, model will create the object and return the object to controller to be passed to the view to render the display

    let createdProject = createNewProjectModel(projName, generateUUID()); //in model

    //pass newly created obj to view to add card
}

//call view displayProj or create project card (createdProject)
 
//initialise 'default' project
createNewProject('default');



export function createNewTask(taskName, taskDesc, taskDue, taskPriority, projectName, projID){

  let task = createNewTaskModel(taskName, taskDesc, taskDue, taskPriority, projectName, projID, generateUUID()); //in model
   return task;

}



export const localStorage = {

  //setItem()
    //takes 2 params, a key and a value
    //localStorage.setItem('user', JSON.stringify(userArray));
    //'user' will be a string of projID 
  //getItem()

  //removeItem()

  //clear()

  //key()
}








export const pubSub = {
  events: {},
  subscribe: function(evName, fn){
    console.log(`PUBSUB: someone just subscribed to know about ${evName}`);
    //add an event with a name as new or to existing list
    this.events[evName] = this.events[evName] || [];
    this.events[evName].push(fn);
  },
  unsubscribe: function(evName, fn){
    console.log(`PUBSUB: someone just UNsubscribed from ${evName}`);
    //remove an event function by name
    if (this.events[evName]){
        this.events[evName] = this.events[evName].filter(f => f !== fn);
    }
  },
  publish: function(evName, data){
    console.log(`PUBSUB: Making a broadcast about ${evName} with ${data}`);
    //emit/publish the event to anyone who is subscribed
    if (this.events[evName]){
        this.events[evName].forEach(f => {
            f(data);
        });
    }
  }
};



