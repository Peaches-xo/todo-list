//the view handles how the UI is displayed. Only talks to controller. 
import { createNewProject } from './controller.js';
import { createNewTask } from './controller.js';
import { newProjectForm } from './newProjectForm.js';
import { newTaskForm } from './newTaskForm.js';
import { allProjectsArr } from './model.js'; //maybe move
import { displayProject } from './displayProject.js';
import { populateDropdown } from './newTaskForm.js';
import { pubSub } from './controller.js';


//export function thisistheview(){

let domCachedElements = {
    container: document.querySelector(".container"),
    addbutton: document.querySelector(".btn-add"),
    viewAllProjectsBtn: document.querySelector(".btn-allproj"),
    taskbox: document.querySelector(".taskbox"),
}
domCachedElements.viewAllProjectsBtn.addEventListener("click", viewAllProjects);

document.addEventListener("DOMContentLoaded", (event) => {
    viewAllProjects();
});

//TODO - change name of function to renderProjectCards()
function viewAllProjects(){
    //1. clears project display area 
    removeChildren(domCachedElements.taskbox);
    //2. loops over all projects array (if arr not empty) & creates project card for each project & append to taskbox
    if (allProjectsArr.length > 0){
        allProjectsArr.forEach(createProjectItemCard);
    }
}
 //initialises default project by creating default proj card
viewAllProjects();

//callback from foreach above
//called on page load and also when new project is created
function createProjectItemCard (item, index){
    //create elements
    let projectItem = document.createElement("div");

    projectItem.addEventListener('click', function projClickHandler(e){
        if (e.target == projectItemDelIcon){
            //remove proj 
            deleteProject(projectItem,allProjectsArr[index]);
        } else {
            
            //clear section
            displayProject.clearSection();
            //toggle currentProj boolean in project
            allProjectsArr[index].isCurrentProj = true;
            //display project in white section 
            displayProject.display(allProjectsArr[index]);
        }
    });

    projectItem.classList.add("project-item");

    let projectTitle = document.createElement("h5");
    projectTitle.textContent = allProjectsArr[index].name; 
    projectItem.appendChild(projectTitle);

    let projectTaskNo = document.createElement("p");
    projectTaskNo.classList.add("project-item-taskno");
    
        
    if ( (allProjectsArr[index].getNoOfTasks()) === 1 ){
        projectTaskNo.textContent = `${allProjectsArr[index].getNoOfTasks()} active task`; 
    } else {
        projectTaskNo.textContent = `${allProjectsArr[index].getNoOfTasks()} active tasks`; 
    };
        
    projectItem.appendChild(projectTaskNo);

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
        //code to add project due date if including?

    //3. append each project cards to  display area (domCachedElements.taskbox)
    domCachedElements.taskbox.appendChild(projectItem);
   }


   function deleteProject(projectItem,projObj){
        //remove project card from All Projects area
        domCachedElements.taskbox.removeChild(projectItem);

        //remove project from allProjectsArr
        //allProjectsArr.splice(projectItem,1);
        allProjectsArr.splice(projObj,1);

        //remove project from white section if current proj
        if (projObj.isCurrentProj = true){
            displayProject.clearSection();
            projObj.isCurrentProj = false;
        }

        //code to remove project name from dropdown in modal
        populateDropdown(allProjectsArr);
        //rerender display
        viewAllProjects();
   }




   //task item cached elements
   let taskItems = {
       taskWrappersList : document.querySelectorAll('.project-task-item')
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
    domCachedElements.addbutton.addEventListener("click", openModal);

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
            //find selcted options data-id to pass to createNewTask
            let projID = selectedProjName.dataset.id;
            console.log(projID);
            let taskName = taskNameInput.value;
            let taskDescription = taskDescriptionInput.value;
            let taskDueDate = taskDueDateInput.value;
            let taskPriority = getRadioValue(); 
   
            //create task
            let createdTask = createNewTask(taskName, taskDescription, taskDueDate, taskPriority, selectedProjName); //in controller
         
            //find project in AllProjArr with name: selectedProjName, 
            //change to use projID instead of name
            let foundProj = allProjectsArr.find((element) => element.name == selectedProjName);
            console.log('foundProj: ', foundProj);



            //Clear project section
            displayProject.clearSection();
            //rerender project section
            displayProject.display(foundProj);

          


           
           
            


        //else if div has class of project
        } else if (div.classList.contains("showProjModule")){
            let projectName = projNameInput.value;
            createNewProject(projectName); //in controller
            viewAllProjects();
        }

        viewAllProjects();
    });
 
    //CLEAR BUTTON
    modalElements.clearButton.addEventListener('click', clearInputValues);

    function clearInputValues(){
        //get latest values
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

    function getRadioValue(){
        let radio = document.getElementsByName('taskPriority');
        for (let i = 0; i < radio.length; i++){
            if (radio[i].checked){
                return radio[i].value;
            }
        }
    }
//}
