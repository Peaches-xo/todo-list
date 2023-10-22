//the view handles how the UI is displayed. Only talks to controller. 
import { createNewProject } from "./controller.js";
import { allProjectsArr } from "./controller.js";


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




function addProjectToDropdown(projname){
    //function that gets called when proj is created
    //receives project name
    //checks if already in dropdown
        //if not, create item & append to dropdown 
        console.log("addProjectToDropdown accessed" + projname); 
}
















    let modalElements = {
        submitbutton: document.querySelector('button[type="submit"]'),
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
    modalElements.submitbutton.addEventListener("click", closeModal);

    //call functions on click of Submit button
    modalElements.submitbutton.addEventListener('click', function(event){
    //this function may need to be moved to controller
    //get the value from the input, pass to controller to pass to model, display on screen 

     event.preventDefault();

     const taskName = document.querySelector("#name");
     const projName =  document.querySelector("#projName");

    if (taskName !== null){
        console.log("task name: " + taskName.value);
       
    }

    if (projName !== null){
        console.log("project name: " + projName.value);
        createNewProject(projName.value);
        viewAllProjects();
    }
     

   });


        let createNewProjElements = {
            nameInput: document.querySelector('input#color_mode[type="checkbox"]'),
    
            toggleModalDisplay: function (){
             
                if (createNewProjElements.nameInput.checked){
                    console.log("toggle is checked/ Add new TASK");
                    //function that returns element - will be its own module?
                    //append returned element to div

                    let projDropdown = document.createElement("select");
                    let projDropdownLabel = document.createElement("label");

                    let taskLabel = document.createElement("label");
                    let taskInput = document.createElement("input");
                    let div = document.querySelector("div.create-modal-input-area");


                    //if div has children, remove children
                    if (div.hasChildNodes){
                        while (div.firstChild) {
                            div.removeChild(div.firstChild);
                          }
                    }

                    // Set attributes
                    projDropdownLabel.setAttribute("for", "projDropdown");
                    projDropdownLabel.textContent = "Project: ";

                    projDropdown.setAttribute("id", "projDropdown");
                    projDropdown.setAttribute("name", "projDropdown");

                    //get values from proj array and create option tag for each
                    if (allProjectsArr.length != 0){
                    //    allProjectsArr.forEach(createDropdownOptions);
                       for (let i = 0; i <= allProjectsArr.length; i++){
                        
                        projDropdown.appendChild(createDropdownOptions(allProjectsArr)); 
                       }
                    }
                  

                    taskLabel.setAttribute("for","name");//change name to something descriptive
                    taskLabel.textContent="Task Name:";
                    taskInput.setAttribute("type", "text");
                    taskInput.classList.add("name"); //change name to something descriptive
                    taskInput.setAttribute("id", "name");//change name to something descriptive


                    div.appendChild(projDropdownLabel);
                    div.appendChild(projDropdown);
                    div.appendChild(taskLabel);
                    div.appendChild(taskInput);


                  } else {
                    console.log("toggle not checked/ Add new PROJECT");
                    //function that returns element - will be its own module?
                    //append returned element to div

                    let label = document.createElement("label");
                    let input = document.createElement("input");
                    let div = document.querySelector("div.create-modal-input-area");

                    //if div has children, remove children
                    if (div.hasChildNodes){
                        while (div.firstChild) {
                            div.removeChild(div.firstChild);
                          }
                    }

                     // Set attributes
                    label.setAttribute("for","projName");
                    label.textContent="Project Name:";
                    input.setAttribute("type", "text");
                    input.classList.add("name");
                    input.setAttribute("id", "projName");

                    div.appendChild(label);
                    div.appendChild(input);

                  };
        
            }
        }
       


        //project/task toggle
        createNewProjElements.nameInput.addEventListener("click", createNewProjElements.toggleModalDisplay);


        function createDropdownOptions(index,item){

            let option = document.createElement("option");
            option.setAttribute("value", item); //undefined - how to get project name 
            option.textContent= item; //undefined 
            return option;
          
        };
      
    
        //clear inputs on click of clearn btn
        modalElements.clearButton.addEventListener("click", clearInputs);


        function clearInputs(){
            //if on task page, clear task inputs

            //else clear all project inputs
        }
}
