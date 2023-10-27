//the model handles all the data and logic 
// potentially import something from CONTROLLER? 


export function model(){

    //array of all projects, each project is an object
   let allProjectsArr = [];

    const projectFactory = (projName) => {
        let tasks = [];

        const createProject = () => {
            //creates new project and put in projects array - currently uses name of proj but would id# system be better?
            allProjectsArr.push(projName);
            //add project to list in 'create new task' modal 
            addProjectToDropdown(projName);
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


     function createNewProjectModel(projName){ 
         let newprojName = projectFactory(projName);
         newprojName.createProject();
     }

    //function that runs when proj is created
    function addProjectToDropdown(projname){
    //receives project name
    //checks if already in dropdown
        //if not, create item & append to dropdown & pass to view to rerender dropdown
        console.log("addProjectToDropdown accessed" + projname); 
  }

return allProjectsArr, createNewProjectModel;
}