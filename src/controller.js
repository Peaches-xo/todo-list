import './style.css';
//Our main file - handles requests. Tells model what to do (logic wise), 
//tells view what do to.
//Controls and decides how data is displayed
import { thisistheview } from './view.js';
import { model } from './model.js';



//inititation function 
thisistheview();


  // //array of all projects
  // let allProjectsArr = [];

  // class Project {
  //   constructor(name){ 
  //       this.name = name;
  //   }
  //   tasks = [];
  //   createProj(){
  //       //creates new project and put in projects array - currently uses name of proj but would id# system be better?
  //       allProjectsArr.push(this.name);
  //       console.log(allProjectsArr);
  //       //add project to list in 'create new task' modal 
  //       addProjectToDropdown(this.name);
  //   }
  //   deleteProj(){
  //       //modal pop up 'are you sure' if yes,
  //       //find proj in projs array and deletes. proj arrray is updated.
  //   }
  // };

  //set up default project
  let defaultproj = new Project('Default Project');
  defaultproj.createProj();

  //this function to move to model
 function createNewProjFactory(projName){
     let newprojName = new Project (projName);
     newprojName.createProj();
 };

//function that runs when submit button is clicked
 export function createNewProject(projName){
    console.log('createNewProject firing');
    console.log(projName);    //pass projname to model to create new project

    //this should be a call to a function inside model, passing the projName
    createNewProjFactory(projName); 
  
}

//function that runs when proj is created - should be in view
function addProjectToDropdown(projname){
  //receives project name
  //checks if already in dropdown
      //if not, create item & append to dropdown 
      console.log("addProjectToDropdown accessed" + projname); 
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



export { allProjectsArr };