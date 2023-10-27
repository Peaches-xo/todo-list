//the model handles all the data and logic 
import { addProjectToDropdown } from './model';





    //array of all projects, each project is an object
   export let allProjectsArr = []; //export to view

  const projectFactory = (projName) => {
    
        let tasks = [];

        //potentially getter and setter for project name? 

        const createProject = () => {
            //creates new project and put in projects array - currently uses name of proj but would id# system be better?
            allProjectsArr.push(projName);

        }
        const deleteProject = () => {
            //modal pop up 'are you sure' if yes,
            //find proj in projs array and deletes. proj arrray is updated.
        }
 
        return { projName, createProject };
    }


    //set up default project as FACTORY
    let defaultproj = projectFactory('default');
    defaultproj.createProject();


   export function createNewProjectModel(projName){  //export to controller
         let newprojName = projectFactory(projName);
         newprojName.createProject();
     }




