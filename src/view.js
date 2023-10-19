//the view handles how the UI is displayed. Only talks to controller. 
import { createNewProject } from "./controller.js";
export function thisistheview(){

    let domCachedElements = {
        container: document.querySelector(".container"),
        addbutton: document.querySelector(".btn-add"),
   }

    let modalElements = {
        name: document.querySelector("#name"),
        submitbutton: document.querySelector('button[type="submit"]'),
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




    modalElements.submitbutton.addEventListener('click', function(event){
    //this function may need to be moved to controller
    //get the value from the input, display on screen 

     event.preventDefault();


     let projname = modalElements.name.value;

    //createNewProject(projname);
    //currently wipes all content from container and displays projname, instead needs to:
    //          pass name to controller 
    //          controller received name and passes to model
    //          model receives name and creates new project and adds it to the project array
    //          passes project array back to controller
    //          controller passes project to view to display 
     domCachedElements.container.textContent = projname;
   });




//    


        let createNewProjElements = {
            nameInput: document.querySelector('input#color_mode[type="checkbox"]'),
            toggleModalDisplay: function (){
                console.log("function toggleModalDisplay reached");
             
                if (createNewProjElements.nameInput.checked){
                    console.log("toggle is checked/ Add new TASK");
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

                

                    label.setAttribute("for","name");
                    label.textContent="Task Name:";
                    input.setAttribute("type", "text");
                    input.classList.add("name");
                    input.setAttribute("id", "name");

                    div.appendChild(label);
                    div.appendChild(input);






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
       



        createNewProjElements.nameInput.addEventListener("click", createNewProjElements.toggleModalDisplay);

      
    
}
