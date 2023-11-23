//the model handles all the data and logic 
import { addProjectToDropdown } from './model';
import { newProjectForm } from './newProjectForm';
import { displayProject } from './displayProject';
import { renderProjectCards } from './view.js';



export let allProjectsArr = []; //export to controller and view (try to remove from view)


function ProjectFactory(projName, projID){
    let project = Object.create(projectActions);
    project.name = projName || 'default';
    project.id = projID;
    project.taskArr = [];  
    project.isCurrentProj = false;
    return project;
}

export let projectActions = {
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
    getNoOfActiveTasks(){
        //loop through taskArr and make new Arr from all tasks that have 
        //task.isComplete = true
        
        //let noOfActiveTasks = 
    },
     addToLocalStorage(){
       //SAVE ALLPROJARR TO LS
        console.log('add to local storage reached');
        let allProjArrLS = JSON.stringify(allProjectsArr);
        localStorage.setItem("allProjArrLS", allProjArrLS);
    },
    //maybe move this out of project prototype 
    getFromLocalStorage(){
        console.log('get from local storage reached');
        //let projIDstr = JSON.stringify(this.getProjectID());

        //let parsedAllProjArrLS = JSON.parse(localStorage.getItem('allProjArrLS'));
        //console.log('parsedAllProjArrLS: ', parsedAllProjArrLS);
        //console.log(JSON.parse(newObject));
    },
    deleteTask(taskid){
        //find task id in this.taskArr that == taskid, remove from taskArr
            let index = this.taskArr.findIndex(taskobj => taskobj.id == taskid);
            if (index > -1){
                this.taskArr.splice(index, 1);
            }
        
        //get project, call addToLocalStorage() to refresh LS
        this.addToLocalStorage();

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
         //localStorage.clear();
         newprojName.addToLocalStorage();



        

         return newprojName;
     }

     function TaskFactory(taskName, taskDesc, taskDue, taskPriority, projectName, projID, taskID){
        let task = Object.create(taskActions);
        task.name = taskName;
        task.id = taskID;
        task.description = taskDesc;
        task.dueDate = taskDue || new Date().toDateString();
        task.priority = taskPriority;
        task.isComplete = false;
        task.projName = projectName;
        task.projID = projID;
        return task;
    }

   export let taskActions = {
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
        getTaskIsComplete(){
             return this.isComplete;
         },
        getTaskProjectName(){
            return this.projName;
        },
        getTaskProjectID(){
            return this.projID;
        },
        addTask(){
        //this method finds the projectID and pushes the task to the taskArr within the corresponding Project
        //should this be a method on the project? 
        
            //get corresponding project id
            let currentProj = this.getTaskProjectID();
            var result = allProjectsArr.find(project => project.id === currentProj);

            if (result !== undefined) {
                result.taskArr.push(this);

            };
            //re-calculate # of active tasks & rerender display
            result.getNoOfTasks();
            result.addToLocalStorage();
        },
        editTask(updatedTaskData){
            //receive new values
            console.log('updatedTaskData from editTask in model: ', updatedTaskData);

            // update values
            this.name = updatedTaskData.name;
            this.description = updatedTaskData.desc;
            this.priority = updatedTaskData.priority;
            this.dueDate = updatedTaskData.date;
           
            console.log(this); //task obj


            let currentProj = this.getTaskProjectID();

            let result = allProjectsArr.find(project => project.id === currentProj);
        
            console.log(result);

           result.addToLocalStorage();
          
        },
    }


    export function createNewTaskModel(taskName, taskDesc, taskDue, taskPriority, projName, projID, taskID){

        //call to task Factory
        let newTask = TaskFactory(taskName, taskDesc, taskDue, taskPriority, projName, projID, taskID);
        
        newTask.addTask();

        return newTask;

    }

    //was in view. Maybe add as setter for taskPriority?
    export function getRadioValue(){
        let radio = document.getElementsByName('taskPriority');
        for (let i = 0; i < radio.length; i++){
            if (radio[i].checked){
                return radio[i].value;
            }
        }
    }



