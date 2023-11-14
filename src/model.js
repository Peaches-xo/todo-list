//the model handles all the data and logic 
import { addProjectToDropdown } from './model';
import { newProjectForm } from './newProjectForm';
import { displayProject } from './displayProject';


//array of all projects, each project is an object
export let allProjectsArr = []; //export to controller and view (try to remove from view)

function ProjectFactory(projName, projID){
    let project = Object.create(projectActions);
    project.name = projName;
    project.id = projID;
    project.taskArr = [];  //set task array to empty array (arr of objects)
    project.isCurrentProj = false;
    return project;
}

let projectActions = {
    getProjectName(){
        return this.name;
    },
    getProjectID(){
        return this.id;
    },
    addProjToAllProjArr(){
        allProjectsArr.push(this);
        return allProjectsArr;
    },
    getNoOfTasks(){
        let noOfTasks = this.taskArr.length;
        return noOfTasks;
    },
    updateProject(){

    },
    removeProject(){

    },
};

  
   





    export function createNewProjectModel(projName, projID){  //export to controller
         let newprojName = ProjectFactory(projName, projID);
     
         newprojName.addProjToAllProjArr();
         newprojName.getNoOfTasks();
         

         return newprojName;
     }

     function TaskFactory(taskName, taskDesc, taskDue, taskPriority, projectName){
        let task = Object.create(taskActions);
        task.name = taskName;
        task.description = taskDesc;
        task.dueDate = taskDue || new Date().toDateString();
        task.priority = taskPriority;
        //task.isComplete = isComplete;
        task.projName = projectName;
        return task;
    }

    let taskActions = {
        getTaskName(){
            return this.name;
        },
        getTaskDescription(){
            return this.description;
        },
        getTaskDueDate(){
            return this.dueDate;
        },
        getTaskPriority(){
            return this.priority;
        },
        // getTaskIsComplete(){
        //     return this.isComplete;
        // },
        getTaskProjectName(){
            return this.projName;
        },

        addTask(){
        //this method finds the projectName and pushes the task to the taskArr within the corresponding Project
            
        //get corresponding project name
        let currentProj =  this.getTaskProjectName(); 
         //let currentProj =  this.getTaskProjectID(); 
         var result = allProjectsArr.find(item => item.name === currentProj);
         console.log(result); 
         if (result !== undefined) {
            result.taskArr.push(this);
         } 
         //re-calculate # of active tasks & rerender display
        result.getNoOfTasks();

        if (result.isCurrentProj === true){
            //code to call clear section, display section
            //which is in View, need to change view to object, not fn 
            console.log('result.isCurrentProj === true');
        }
           
        }
    }




    export function createNewTaskModel(taskName, taskDesc, taskDue, taskPriority, projName){

        //call to task Factory
        let newTask = TaskFactory(taskName, taskDesc, taskDue, taskPriority, projName);
        
        newTask.addTask();

        return newTask;

    }



