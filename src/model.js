//the model handles all the data and logic 
 export { model };
import { createNewProject } from './controller.js';

 function model(){

    // //array of all projects
   //let allProjectsArr = [];


    // class Project {
    //     constructor(name){ 
    //         this.name = name;
    //     }
    //     tasks = [];
    //     createProj(){
    //         //creates new project and put in projects array - currently uses name of proj but would id# system be better?
    //         allProjectsArr.push(this.name);
    //         //console.log(allProjectsArr);
    //     }
    //     deleteProj(){
    //         //modal pop up 'are you sure' if yes,
    //         //find proj in projs array and deletes. proj arrray is updated.
    //     }
    // }
    //set up default project
    // let defaultproj = new Project('default');
    // defaultproj.createProj();

    // function createNewProjFactory(projName){
    //     let newprojName = new Project (projName);
    //     newprojName.createProj();
    // }

    // class Task { //add id as well
    //     constructor(name, description, project, priority, duedate){
    //         this.name = name,
    //         this.project = project,
    //         this.tasks = tasks
    //     }
    // }

    createNewProject("testname");

}