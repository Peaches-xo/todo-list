//the model handles all the data and logic 
import { addProjectToDropdown } from './model';
import { newProjectForm } from './newProjectForm';

//array of all projects, each project is an object
export let allProjectsArr = []; //export to controller and view (try to remove from view)

function ProjectFactory(projName){
    let project = Object.create(projectActions);
    project.name = projName;
    project.taskArr = [];  //set task array to empty array (arr of objects)
    return project;
}

let projectActions = {
    getProjectName(){
        return this.name;
    },
    addProjToAllProjArr(){
        allProjectsArr.push(this);
        // let lengthofArr = allProjectsArr.length;
        // console.log("Number of Projects in allProjectsArr: " + lengthofArr);
        // console.log("allProjectsArr: " + allProjectsArr[lengthofArr-1].name);
    },
    getNoOfTasks(){
        let noOfTasks = this.taskArr.length;
        console.log("No Of Tasks: (from tasksArr.length) " + this.taskArr.length);
        return noOfTasks;
    },
    // addTask(taskObj){
    //     //adds taskObj to this.taskArr
    //     taskArr.push(taskObj);
    //     let lastTask = taskArr.length-1;
    //     console.log(taskArr[lastTask]);
    // }
};

    //set up default project as FACTORY
    let defaultproj = ProjectFactory('default');
    defaultproj.addProjToAllProjArr();




    export function createNewProjectModel(projName){  //export to controller
         let newprojName = ProjectFactory(projName);
         //working
         //console.log("newprojname: " + newprojName.getProjectName());
         newprojName.addProjToAllProjArr();
         //newprojName.getNoOfTasks();
     }

     function TaskFactory(taskName, taskDesc, taskDue, taskPriority, isComplete, projectName){
        let task = Object.create(taskActions);
        task.name = taskName;
        task.description = taskDesc;
        task.dueDate = taskDue;
        task.priority = taskPriority;
        task.isComplete = isComplete;
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
        getTaskIsComplete(){
            return this.isComplete;
        },
        getTaskProjectName(){
            return this.projName;
        },

        addTask(taskObj){
            //adds taskObj to this.taskArr
            taskArr.push(taskObj);
            let lastTask = taskArr.length-1;
            console.log(taskArr[lastTask]);
        }
    }




    export function createNewTaskModel(taskName, taskDesc, taskDue, taskPriority, isComplete, projName){
        //call to task Factory
        let newTask = TaskFactory(taskName, taskDesc, taskDue, taskPriority, isComplete, projName);
    }



