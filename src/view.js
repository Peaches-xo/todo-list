//the view handles how the UI is displayed. Only talks to controller. 
import { createNewProject } from './controller.js';
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
             //if div has children, remove children
             if (domCachedElements.taskbox.hasChildNodes){
                while (domCachedElements.taskbox.firstChild) {
                    domCachedElements.taskbox.removeChild(domCachedElements.taskbox.firstChild);
                  }
            }
        //2. loops over all projects array (if arr not empty) & creates project card for each project & append to taskbox
        if (allProjectsArr.length != 0){
            allProjectsArr.forEach(createProjectItemCard);
        }
   }


   function createProjectItemCard (item, index){
        //create elements, 
        let projectItem = document.createElement("div");
        projectItem.classList.add("project-item");

        let projectTitle = document.createElement("h5");
        projectTitle.textContent = allProjectsArr[index]; 
        projectItem.appendChild(projectTitle);

        let projectTaskNo = document.createElement("p");
        projectTaskNo.classList.add("project-item-taskno");
        projectTaskNo.textContent = "7 active tasks"; /*This will be updated to fetch number */
        projectItem.appendChild(projectTaskNo);

        let projectItemWrapper = document.createElement("div");
        projectItemWrapper.classList.add("project-item-wrapper");
        projectItem.appendChild(projectItemWrapper);

            let projectItemEditBtn = document.createElement("button");
            projectItemEditBtn.classList.add("project-item-editbtn");

                let projectItemEditIcon = document.createElement("img");
                projectItemEditIcon.setAttribute("src", "/src/images/edit.png");
                projectItemEditBtn.appendChild(projectItemEditIcon);

            projectItemWrapper.appendChild(projectItemEditBtn);
            //code to add project due date if including?

            //3. append each project cards to  display area (domCachedElements.taskbox)
            domCachedElements.taskbox.appendChild(projectItem);
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




    let taskNameInput = document.querySelector("#name");
    let projNameInput =  document.querySelector("#projName");

    //call functions on click of Submit button
    modalElements.submitButton.addEventListener('click', function(event){
    //this function may need to be moved to controller
    //get the value from the input, pass to controller to pass to model, display on screen 
        event.preventDefault();

        //NOT WORKING 
        if (taskNameInput !== null){ //if element exists
            console.log("taskNameInput.value: " + taskNameInput.value);
            let taskName = taskNameInput.value;
            console.log ("taskName: " + taskName);
        }

        if (projNameInput !== null){
            console.log("project name: " + projNameInput.value);
            //let projectName = projNameInput.value;

            createNewProject(projNameInput.value); //in controller
            console.log("allProjArr: " + allProjectsArr);
            //add function to clear values 


            viewAllProjects();
        }
   });

   //clear input on click of Clear Button
    modalElements.clearButton.addEventListener('click', function(event){
      
            //find way to clear corresponding input value 
            // ONLY WORKS ONCE
            if (taskNameInput){
                taskNameInput.value = "";
            }

            if (projNameInput){
                projNameInput.value = "";
            }
           
        
    });

        let createNewProjElements = {
            nameInput: document.querySelector('input#color_mode[type="checkbox"]'),
    
            toggleModalDisplay: function (){
                let div = document.querySelector("div.create-modal-input-area");
                if (createNewProjElements.nameInput.checked){
                    console.log("toggle is checked/ Add new TASK");
                    //if div has children, remove children
                    if (div.hasChildNodes){
                        while (div.firstChild) {
                            div.removeChild(div.firstChild);
                          }
                    }
                    //load New Task Inputs
                    newTaskForm();
                  } else {
                    console.log("toggle not checked/ Add new PROJECT");
                    //if div has children, remove children
                    if (div.hasChildNodes){
                        while (div.firstChild) {
                            div.removeChild(div.firstChild);
                          }
                    }
                    newProjectForm();
                  };
            }
        }

        //project/task toggle
        createNewProjElements.nameInput.addEventListener("click", createNewProjElements.toggleModalDisplay);
      
    }
