//the view handles how the UI is displayed. Only talks to controller. 
import { createNewProject } from './controller.js';
import { createNewTask } from './controller.js';
import { newProjectForm } from './newProjectForm.js';
import { newTaskForm } from './newTaskForm.js';
import { allProjectsArr } from './model.js'; //maybe move


export function thisistheview(){

    let domCachedElements = {
        container: document.querySelector(".container"),
        addbutton: document.querySelector(".btn-add"),
        viewAllProjectsBtn: document.querySelector(".btn-allproj"),
        taskbox: document.querySelector(".taskbox"),
   }

   
   domCachedElements.viewAllProjectsBtn.addEventListener("click", viewAllProjects);

   function viewAllProjects(){
        //1. clears project display area 
        removeChildren(domCachedElements.taskbox);
        //2. loops over all projects array (if arr not empty) & creates project card for each project & append to taskbox
        if (allProjectsArr.length != 0){
            allProjectsArr.forEach(createProjectItemCard);
        }
   }
   //initialises default project
viewAllProjects();


//callback from foreach above
    function createProjectItemCard (item, index){
        //create elements, 
        let projectItem = document.createElement("div");

        projectItem.addEventListener('click', function projClickHandler(e){
            if (e.target == projectItemDelIcon){
                //code to remove project from display
                domCachedElements.taskbox.removeChild(projectItem);
                deleteProject(projectItem);
            } else {
                //code to display project in white section 
                //displayProject();
             
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
            // projectItemDelBtn.addEventListener('click', deleteProject);
            
            projectItemDelBtn.classList.add("project-item-delbtn");

                let projectItemDelIcon = document.createElement("img");
                projectItemDelIcon.setAttribute("src", "/src/images/bin24.png");
                projectItemDelBtn.appendChild(projectItemDelIcon);

            projectItemWrapper.appendChild(projectItemDelBtn);
            //code to add project due date if including?

            //3. append each project cards to  display area (domCachedElements.taskbox)
            domCachedElements.taskbox.appendChild(projectItem);
   }


   function deleteProject(index){
        //code to remove project from array
        allProjectsArr.splice(index,1);
        //rerender display
        viewAllProjects();
;   }

















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
    //(controller wil pass to model, to display on screen )
        event.preventDefault();
        //get latest values
        projNameInput =  document.querySelector("#projName");
        // taskPriority = document.querySelector('.taskPriority_radio');
        
        if (div.classList.contains("showTaskModule")){
            //get task data
            selectedProject = document.querySelector('#projDropdown'); 
            taskNameInput = document.querySelector("#taskName");
            taskDescriptionInput = document.querySelector('#taskDesc');
            taskDueDateInput = document.querySelector('#taskDueDate');
            taskPriorityInput = document.querySelector('.taskPriority_radio'); //how to get selected value


            let selectedProjName = selectedProject.value || 'default';  //needs to get selected project name and save to variable. If none selected, use default. 
            let taskName = taskNameInput.value;
            let taskDescription = taskDescriptionInput.value;
            let taskDueDate = taskDueDateInput.value;

            console.log ("selectedProject: " + selectedProjName);
            console.log ("taskName: " + taskName);
            console.log ("taskDescription: " + taskDescription);
            console.log ("taskDueDate: " + taskDueDate);
            let taskPriority = getRadioValue(); //|| 'low'; //maybe remove low as default 
            console.log("taskPriority: " + taskPriority);

            createNewTask(taskName, taskDescription, taskDueDate, taskPriority, selectedProjName); //in controller

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
}
