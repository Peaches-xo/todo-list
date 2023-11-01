//the model handles all the data and logic 
import { addProjectToDropdown } from './model';
import { newProjectForm } from './newProjectForm';


    //array of all projects, each project is an object
  export let allProjectsArr = []; //export to view

  const ProjectFactory = (projName) => {
  //create an object, set the project name to projName, set task array to empty, push projName to allprojarr, return obj
        // let obj = Object.create(projectFactory.proto);
        // obj.name = projName;

        let project = {};
        project.name = projName;

        let proj_tasksArr = [];  //arr of objects

        //potentially getter and setter for project name? 
        // const setProjectName = () => {
        //    const name = projName;
        // };
        // const getProjectName = () => projName;
        

       const createProject = () => {
            //creates new project and put in projects array - currently uses name of proj but would id# system be better?
   
            allProjectsArr.push(project);

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
 
        return { project, projName, createProject, getNoOfTasks };
     
    }

    // projectFactory.proto = {
    //     addtoArray: function(){
    //         console.log("addToArray called");
    //         allProjectsArr.push(this.name);
    //     } 
    // }


    //set up default project as FACTORY
    let defaultproj = ProjectFactory('default');
    defaultproj.createProject();


   export function createNewProjectModel(projName){  //export to controller
         let newprojName = ProjectFactory(projName);
         newprojName.createProject();
         newprojName.getNoOfTasks();

     }




