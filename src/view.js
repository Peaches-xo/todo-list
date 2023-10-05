//the view handles how the UI is displayed. Only talks to controller. 
import { createNewProject } from "./controller.js";


export function thisistheview(){

    let domCachedElements = {
        container: document.querySelector(".container"),
        addbutton: document.querySelector(".btn-add"),
   }

    let modalElements = {
        projName: document.querySelector("#projName"),
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



    //this function may need to be moved to controller
    modalElements.submitbutton.addEventListener('click', function(event){

        //get the value from the input 
        console.log("modalElements.projName.value: " + modalElements.projName.value);
        let projName = modalElements.projName.value;

        //passes value to controller
        createNewProject(projName);


        // use value to create new Project by passing the value to the controller


    // needs to:
    //          pass name to controller 
    //          controller received name and passes to model
    //          model receives name and creates new project and adds it to the project array
    //          passes project array back to controller
    //          controller passes project to view to display 

   });




//    Checkbox toggle - come back to this later - not working as at 5 Oct
        let createNewProjElements = {
            nameInput: document.querySelector('input#color_mode[type="checkbox"]'),
            ischecked: document.querySelector('input#color_mode[type="checkbox"]:checked'),
            toggleModalDisplay: function (){
                console.log("function toggleModalDisplay reached");
                //add code here to display either Create New Project or Create New Task from modules
            }
        }
        createNewProjElements.nameInput.addEventListener("change", createNewProjElements.toggleModalDisplay);

}
