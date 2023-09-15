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







        let createNewProjElements = {
            nameInput: document.querySelector("#color_mode")
        }

        console.log(createNewProjElements.nameInput.checked);
        if (createNewProjElements.nameInput.checked == true ){
            console.log ("checked");
        }
    
}
