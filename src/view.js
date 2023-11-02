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

//callback from foreach above
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
        //call 

        //how to access value of 'name' key from object in array 
   
        console.log("allPRojArr: " + allProjectsArr);
   
   // get the keys from first object in array
const keys = Object.keys(allProjectsArr[0]);
console.log("keys: " + keys);

for (const obj of allProjectsArr) {
  // get values for current object
  const values = Object.values(obj);
  console.log(`Object: ${JSON.stringify(obj)}, Keys: ${keys}, Values: 
${values}`);
}







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




    let taskNameInput = document.querySelector("#taskName");
    let taskDescriptionInput = document.querySelector('#taskDesc');
    let projNameInput =  document.querySelector("#projName");
    let div = document.querySelector("div.create-modal-input-area");







    let createNewProjElements = {
        nameInput: document.querySelector('input#color_mode[type="checkbox"]'),
        
        toggleModalDisplay: function (){
            let div = document.querySelector("div.create-modal-input-area");

            if (createNewProjElements.nameInput.checked){
                console.log("toggle checked/ Add new TASK");
                clearInputValues();
                // //if div has children, remove children
                if (div.hasChildNodes){
                    while (div.firstChild) {
                        div.removeChild(div.firstChild);
                      }
                }
                //load New Task Inputs
                newTaskForm();
              } else {
                console.log("toggle not checked/ Add new PROJECT");
                clearInputValues();
                // //if div has children, remove children
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





    //SUBMIT BUTTON
    modalElements.submitButton.addEventListener('click', function(event){
    //this function may need to be moved to controller
    //get the value from the inputs, pass to controller 
    //(controller wil pass to model, to display on screen )
        event.preventDefault();
        //get latest values
         taskNameInput = document.querySelector("#taskName");
         taskDescriptionInput = document.querySelector('#taskDesc');
         projNameInput =  document.querySelector("#projName");


        if (div.classList.contains("showTaskModule")){

            //get task data
           // let projNameOption =  //get proj name from dropdown option.value
            let taskName = taskNameInput.value;
            let taskDescription = taskDescriptionInput.value;



            //console.log ("project selected: " + projName );
            console.log ("taskName: " + taskName);
            console.log ("taskDescription: " + taskDescription);

        //else if div has class of project
        } else if (div.classList.contains("showProjModule")){


            console.log("projNameInput.value: " + projNameInput.value);
            let projectName = projNameInput.value;

            console.log("projectName: "+ projectName);
            createNewProject(projectName); //in controller
         

            viewAllProjects();

        }
      
   });


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
    //clear input on click of Clear Button
        modalElements.clearButton.addEventListener('click', clearInputValues);
}
