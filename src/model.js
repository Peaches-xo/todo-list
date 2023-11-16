//the model handles all the data and logic 
import { addProjectToDropdown } from './model';
import { newProjectForm } from './newProjectForm';
import { displayProject } from './displayProject';
import { renderProjectCards } from './view.js';


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
    deleteTask(taskid){
        //find task id in this.taskArr that == taskid, remove from taskArr
        //console.log(this.taskArr);
        //how to find index of object with id of taskid 
            let index = this.taskArr.findIndex(taskobj => taskobj.id == taskid);
            if (index > -1){
                this.taskArr.splice(index, 1);
            }

          //Clear project section
          displayProject.clearSection();
          //update # of tasks on proj card
          this.getNoOfTasks();
          //rerender proj cards
          renderProjectCards();
          //rerender proj section
          displayProject.display(this);
          
    }

};

  
   





    export function createNewProjectModel(projName, projID){  //export to controller
         let newprojName = ProjectFactory(projName, projID);
     
         newprojName.addProjToAllProjArr();
         newprojName.getNoOfTasks();

         return newprojName;
     }

     function TaskFactory(taskName, taskDesc, taskDue, taskPriority, projectName, projID, taskID){
        let task = Object.create(taskActions);
        task.name = taskName;
        task.id = taskID;
        task.description = taskDesc;
        task.dueDate = taskDue || new Date().toDateString();
        task.priority = taskPriority;
        //task.isComplete = isComplete;
        task.projName = projectName;
        task.projID = projID;
        return task;
    }

    let taskActions = {
        getTaskName(){
            return this.name;
        },
        getTaskID(){
            return this.id;
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
        getTaskProjectID(){
            return this.projID;
        },
        addTask(){
        //this method finds the projectID and pushes the task to the taskArr within the corresponding Project
        
            //get corresponding project id
            let currentProj = this.getTaskProjectID();
            var result = allProjectsArr.find(project => project.id === currentProj);

            if (result !== undefined) {
                result.taskArr.push(this);
            };
            //re-calculate # of active tasks & rerender display
            result.getNoOfTasks();
        },
    }


    export function createNewTaskModel(taskName, taskDesc, taskDue, taskPriority, projName, projID, taskID){

        //call to task Factory
        let newTask = TaskFactory(taskName, taskDesc, taskDue, taskPriority, projName, projID, taskID);
        
        newTask.addTask();

        return newTask;

    }



