//the view handles how the UI is displayed. Only talks to controller. 
import { createNewProject } from './controller.js';
import { createNewTask } from './controller.js';
import { newProjectForm } from './newProjectForm.js';
import { newTaskForm } from './newTaskForm.js';
import { allProjectsArr } from './model.js'; //maybe move
import { displayProject } from './displayProject.js';
import { populateDropdown } from './newTaskForm.js';
import { projectActions }  from './model.js';
import { taskActions } from './model.js';
import { pubSub } from './controller.js';
import { format } from 'date-fns';
import { formatDateValue } from './model.js';
import { getRadioValue } from './model.js';



//export function thisistheview(){
let domCachedElements = {
    container: document.querySelector(".container"),
    nav: document.querySelector('.nav'),
    homeBtn: document.querySelector('.btn-home'),
    addBtn: document.querySelector(".btn-add"),
    viewAllProjectsBtn: document.querySelector(".btn-allproj"),
    taskbox: document.querySelector(".taskbox"),
    activeInfoItem: document.querySelector('.info-item-active'),
    completedInfoItem: document.querySelector('.info-item-completed'),
}

//add event delegation for home, add new, view all and gitub//
domCachedElements.nav.addEventListener('click', function navClickHandler(e){
    if (e.target == domCachedElements.homeBtn){
        displayProject.clearSection();
    } else if (e.target == domCachedElements.addBtn){
       openModal();
    } else if (e.target == domCachedElements.viewAllProjectsBtn){
        renderProjectCards();
    } 
    
})

document.addEventListener("DOMContentLoaded", (event) => {

    //greeting
    let today = document.querySelector('.today');
    today.textContent = ` ` + (format(new Date(),"eeee"));


    //check if LS contains anything
    let allProjArrLS;
        if (localStorage.getItem("allProjArrLS")){
            allProjArrLS = JSON.parse(localStorage.getItem("allProjArrLS"));
        } else {
            allProjArrLS = [];
            createNewProject('default');
        }
     
    //loop over allProjArrLS and push each obj to allProjectsArr, 
    allProjArrLS.forEach((obj) => allProjectsArr.push(obj));

    // loop over allProjectsArr and set prototypes to be able to use methods
    allProjectsArr.forEach((obj) =>  Object.setPrototypeOf(obj, projectActions));

    //set protos on tasks
    //loop through proj arr & do something to each proj obj 
    for (let project of allProjectsArr){
        for (let task of project.taskArr){
            Object.setPrototypeOf(task, taskActions);
        }
    }

    renderProjectCards();
    renderInfoCards(allProjectsArr);
});


export function renderProjectCards(){
    //1. clears project display area 
    removeChildren(domCachedElements.taskbox);
    //2. loops over all projects array (if arr not empty) & creates project card for each project & append to taskbox
    if (allProjectsArr.length > 0){
        allProjectsArr.forEach(createProjectItemCard);
    }
}

//callback from foreach above
//called on page load and also when new project is created
function createProjectItemCard (item, index){
    // console.log('createProjectItemCard item: ', item); //project
    // console.log('createProjectItemCard index: ', index); //index in allprojarr 

    //create elements
    let projectItem = document.createElement("div");

    projectItem.addEventListener('click', function projClickHandler(e){
        if (e.target == projectItemDelIcon){
            // console.log('allProjArr: ', allProjectsArr);
            // console.log('item: ', item);
            // console.log('index: ', index);
            // console.log(this); //the card div that has been clicked on

            //remove proj 
            deleteProject(projectItem,allProjectsArr[index]); //in view. might need to move to proj.prototype

        } else {
            
            //clear section
            displayProject.clearSection();
            //toggle currentProj boolean in project
            allProjectsArr[index].isCurrentProj = true;
      
            //display project in white section 
            displayProject.display(allProjectsArr[index]);
        }
    });

    // projectItem.classList.add("project-item", "hvr-grow-shadow");
    projectItem.classList.add("project-item");

    let projectTitle = document.createElement("h5");
    projectTitle.textContent = allProjectsArr[index].name; 
    projectItem.appendChild(projectTitle);

    let projectTaskNo = document.createElement("p");
    projectTaskNo.classList.add("project-item-taskno");

    let projectActiveTaskNo = document.createElement("p");
    projectActiveTaskNo.classList.add("project-item-taskno");

    let projectCompletedTaskNo = document.createElement("p");
    projectCompletedTaskNo.classList.add("project-item-taskno");


    let noOfTasks = item.getNoOfTasks();

    if (noOfTasks === 1){
        projectTaskNo.textContent = `${noOfTasks} task`;
    } else {
        projectTaskNo.textContent = `${noOfTasks} tasks`;
    }

    let noOfActiveTasks = item.getNoOfActiveTasks();
    if (noOfActiveTasks === 1){
        projectActiveTaskNo.textContent = `${noOfActiveTasks} active task`;
    } else {
        projectActiveTaskNo.textContent = `${noOfActiveTasks} active tasks`;
    }

    let noOfCompletedTasks = item.getNoOfCompletedTasks();
    if (noOfCompletedTasks === 1){
        projectCompletedTaskNo.textContent = `${noOfCompletedTasks} completed task`;
    } else {
        projectCompletedTaskNo.textContent = `${noOfCompletedTasks} completed tasks`;
    }



        
    projectItem.appendChild(projectTaskNo);
    projectItem.appendChild(projectActiveTaskNo);
    projectItem.appendChild(projectCompletedTaskNo);

    let projectItemWrapper = document.createElement("div");
    projectItemWrapper.classList.add("project-item-wrapper");
    projectItem.appendChild(projectItemWrapper);

        let projectItemDelBtn = document.createElement("button");
        projectItemDelBtn.classList.add("project-item-delbtn");

            let projectItemDelIcon = document.createElement("img");
            projectItemDelIcon.setAttribute("src", "/src/images/bin24.png");
            projectItemDelIcon.classList.add('hvr-wobble-top');
            projectItemDelBtn.appendChild(projectItemDelIcon);

        projectItemWrapper.appendChild(projectItemDelBtn);

    //3. append each project cards to  display area 
    domCachedElements.taskbox.appendChild(projectItem);
   }


   function deleteProject(projectItem,projObj){
        //remove project card from All Projects area

        //PROJECTITEM IS THE DIV 
        //PROJECTOBJ IS THE OBJ

        //removes card
        domCachedElements.taskbox.removeChild(projectItem);

        //find index of projObj in arr
        let indexOfProjObj = allProjectsArr.findIndex((object) => object === projObj);
       
        //remove project from allProjectsArr
        allProjectsArr.splice(indexOfProjObj,1);

        //re-send arr to localstorage to be up to date
        projObj.addToLocalStorage();

        //remove project from white section if current proj
         if (projObj.isCurrentProj = true){
             displayProject.clearSection();
             projObj.isCurrentProj = false;
        }

        //remove project name from dropdown in modal
        populateDropdown(allProjectsArr);
        //rerender display
        renderProjectCards();
   }


export function renderInfoCards(allProjArr){
    //this function will display the current number of ACTIVE, COMPLETED and OVERDUE tasks
    //this function will need to be called upon starting & also whenever a new task is created, deleted, date changed or marked complete

    //ACTIVE
    let result = allProjArr.reduce(function (acc, obj) { return acc + obj.getNoOfActiveTasks() }, 0);

    let active = document.createElement('span');
    active.textContent = ` Active`;
    domCachedElements.activeInfoItem.textContent = `${result}`;
    domCachedElements.activeInfoItem.appendChild(active);


    // COMPLETED TASKS
    //loop over all proj arr, for each proj, loop over tasksArr and count how many are isComplete = true, add total number of tasks
    // update card


    let completed = allProjArr.reduce(function (acc, obj) { return acc + obj.getNoOfCompletedTasks() }, 0);

    let completeSpan = document.createElement('span');
    completeSpan.textContent =  ` Complete`;
    domCachedElements.completedInfoItem.textContent = `${completed}`;
    domCachedElements.completedInfoItem.appendChild(completeSpan);

    //OVERDUE TASKS
     //loop over all proj arr, for each proj, loop over tasksArr and count how many have due date in the past(less than current date), add total number of tasks
    // update card
   }















// --------- CREATE NEW - MODAL ----------------
    let modalElements = {
        submitButton: document.querySelector('button[type="submit"]'),
        clearButton: document.querySelector('button.clear-btn'),
        modal: document.querySelector(".modal"),
        overlay: document.querySelector(".overlay"),
        closeModalBtn: document.querySelector(".btn-close")
    }

   //opens modal to create new project/task
   const openModal = function () {
        modalElements.modal.classList.remove("hidden");
        modalElements.overlay.classList.remove("hidden");
        clearInputValues();
    };
    //add event listener to open modal on click
    //domCachedElements.addBtn.addEventListener("click", openModal);

    //closes modal
    const closeModal = function () {
        modalElements.modal.classList.add("hidden");
        modalElements.overlay.classList.add("hidden");
    };
    //add event listener to close modal on click
    modalElements.closeModalBtn.addEventListener("click", closeModal);
    modalElements.overlay.addEventListener("click", closeModal);
    modalElements.submitButton.addEventListener("click", closeModal);

  
// PUBSUB - not working

    // modalElements.submitButton.addEventListener('click', () => {
    //     pubSub.publish('event:name-changed', {name: input.value});
    //   });

    
    //   pubSub.subscribe('event:name-changed', data => {
    //     console.log(`Your name is: ${data.name}`);
    //   });

    let projNameInput =  document.querySelector("#projName");

    let selectedProject = document.querySelector('#projDropdown'); 
    let taskNameInput = document.querySelector("#taskName");
    let taskDescriptionInput = document.querySelector('#taskDesc');
    let taskDueDateInput = document.querySelector('#taskDueDate');
    let taskPriorityInput = document.querySelector('.taskPriority_radio');
  
    let div = document.querySelector("div.create-modal-input-area");


    let createNewElements = {
        toggleInput: document.querySelector('input#toggleInput[type="checkbox"]'),
        
        toggleModalDisplay: function (){
            let div = document.querySelector("div.create-modal-input-area");

            if (createNewElements.toggleInput.checked){ //Add New Task shows (toggle checked)
                clearInputValues();
                removeChildren(div);
                newTaskForm(); //load New Task Inputs
              } else { //Add New Project Shows (toggle not checked)
                clearInputValues();
                removeChildren(div);
                newProjectForm();
              };
        }
    }

    function removeChildren(element){
        if (element.hasChildNodes){
            while (element.firstChild) {
                element.removeChild(element.firstChild);
              }
        }
    }
    //project/task toggle
    createNewElements.toggleInput.addEventListener("click", createNewElements.toggleModalDisplay);



    //SUBMIT BUTTON
    modalElements.submitButton.addEventListener('click', function(event){
    //this function may need to be moved to controller
    //get the value from the inputs, pass to controller 
    //(controller will pass to model, to display on screen )
        event.preventDefault();
        //get latest values
        projNameInput =  document.querySelector("#projName");
  
        if (div.classList.contains("showTaskModule")){
            //get task data
            selectedProject = document.querySelector('#projDropdown'); 
            taskNameInput = document.querySelector("#taskName");
            taskDescriptionInput = document.querySelector('#taskDesc');
            taskDueDateInput = document.querySelector('#taskDueDate');
            taskPriorityInput = document.querySelector('.taskPriority_radio'); 

            //save values
            let selectedProjName = selectedProject.value || 'default';  
            let projID = selectedProject.options[selectedProject.selectedIndex].dataset.projectid; 
            let taskName = taskNameInput.value;
            let taskDescription = taskDescriptionInput.value;
            // let taskDueDate = taskDueDateInput.value; 

            let taskDueDate = formatDateValue(taskDueDateInput.value);
            
            let taskPriority = getRadioValue(); 
   
            //create task
            let createdTask = createNewTask(taskName, taskDescription, taskDueDate, taskPriority, selectedProjName, projID); //in controller
         
            //find project in AllProjArr 
            let foundProj = allProjectsArr.find((project) => project.id === projID);
           // console.log('foundProj: ', foundProj);

            //Clear project section
            displayProject.clearSection();

            //rerender project section with current project
            displayProject.display(foundProj);

          

        //else if div has class of project
        } else if (div.classList.contains("showProjModule")){
            let projectName = projNameInput.value;
            createNewProject(projectName); //in controller
            renderProjectCards();
        }

        renderProjectCards();
    });
 
    //CLEAR BUTTON
    modalElements.clearButton.addEventListener('click', clearInputValues);

    function clearInputValues(){
        //get latest values
        console.log('clearInputValues called');
        taskNameInput = document.querySelector("#taskName");
        taskDescriptionInput = document.querySelector('#taskDesc');
        projNameInput =  document.querySelector("#projName");

        if (taskNameInput !== null && taskDescriptionInput !==null){
            taskNameInput.value = "";
            taskDescriptionInput.value = "";
        } else if (projNameInput.value !== null){
            projNameInput.value = "";
        }
    }


