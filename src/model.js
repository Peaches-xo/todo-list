//the model handles all the data and logic 
// import { addProjectToDropdown } from './model';
import { newProjectForm } from './newProjectForm';
import { displayProject } from './displayProject';
import { renderProjectCards } from './view.js';
import { compareAsc, format } from 'date-fns';



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
        console.log('getNoOfActiveTasks() reached');
      
        let noOfActiveTasks = this.taskArr.filter((task) => task.isComplete == false);
        

        return noOfActiveTasks.length;
    },
    getNoOfCompletedTasks(){
        console.log('getNoOfCompletedTasks reached');
        let noOfCompletedTasks = this.taskArr.filter((task) => task.isComplete == true);
        return noOfCompletedTasks.length;
    },
     addToLocalStorage(){
       //SAVE ALLPROJARR TO LS
        console.log('add to local storage reached');
        let allProjArrLS = JSON.stringify(allProjectsArr);
        localStorage.setItem("allProjArrLS", allProjArrLS);
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
            result.getNoOfActiveTasks();
            result.getNoOfCompletedTasks();
            result.addToLocalStorage();
        },
        editTask(updatedTaskData){
            //receive new values


            // update values
            this.name = updatedTaskData.name;
            this.description = updatedTaskData.desc;
            this.priority = updatedTaskData.priority;
            this.dueDate = updatedTaskData.date;
            this.isComplete = updatedTaskData.isComplete;



            let currentProj = this.getTaskProjectID();

            let result = allProjectsArr.find(project => project.id === currentProj);
        
           
          

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

    export function formatDateValue(date){
       //date rec as string
       date = date.split("-");
       console.log(date); //['2023', '10','03']
       let formattedDate = format(new Date(date[0],date[1]-1,date[2]),'eee, do MMM, yyyy');
    
       return formattedDate;
    }





