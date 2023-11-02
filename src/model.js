//the model handles all the data and logic 
import { addProjectToDropdown } from './model';
import { newProjectForm } from './newProjectForm';


//array of all projects, each project is an object
export let allProjectsArr = []; //export to controller and view (try to remove from view)

const ProjectFactory = (projName) => {
  //create an object, set the project name to projName, set task array to empty, push projName to allprojarr, return obj

    //set project name to projName from input rec from controller
    let name = projName;

    //set task array to empty array (arr of objects)
    let proj_tasksArr = [];  

    //potentially getter and setter functions for project name? 

        
    //push project to array of all projects    
    const addProjToAllProjArr = () => { //change name of this
        //creates new project and put in projects array - currently uses name of proj but would id# system be better? Should this be outside of the Project Factory as returned object needs to be added to array
   
           // allProjectsArr.push(project.name); //adds string to arr
            // allProjectsArr.push({project}); // adds obj to arr
            allProjectsArr.push(projName);

        };


    const deleteProject = () => {
        //modal pop up 'are you sure' if yes,
        //find proj in projs array and deletes. proj arrray is updated.
    };

    const addTaskToProject = () => {}
    const removeTaskFromProject = () => {
        
    }

    const getNoOfTasks = () => {
        let noOfTasks = proj_tasksArr.length;
        console.log("No Of Tasks: (from proj_tasksArr.length) " + proj_tasksArr.length);
        return noOfTasks;
    }
 
    return { projName, addProjToAllProjArr, getNoOfTasks };
     
}


    //set up default project as FACTORY
    let defaultproj = ProjectFactory('default');
    defaultproj.addProjToAllProjArr();


   export function createNewProjectModel(projName){  //export to controller
         let newprojName = ProjectFactory(projName);
         console.log("newprojname: " + newprojName);
         newprojName.addProjToAllProjArr();
         newprojName.getNoOfTasks();

     }




