//the model handles all the data and logic 
export { modelfunc };

function modelfunc(){
    console.log('modelfunc called');


    //array of all projects
    let allProjectsArr = [];


    class Project {
        constructor(name, icon){ //remove icon til ready to add
            this.name = name,
            //this.icon = icon
        }
        tasks = [];
        createProj(){
            //creates new project and put in projects array
        }
        deleteProj(){
            //modal pop up 'are you sure' if yes,
            //find proj in projs array and deletes. proj arrray is updated.
        }
    }

    let defaultproj = new Project('default');

    class Task {
        constructor(name, description, project, priority, duedate){
            this.name = name,
            this.icon = icon,
            this.tasks = tasks
        }
    }





















}