//modal display - create New Task
//contains code to create dom elements and append them inside modal 

import { allProjectsArr } from './model';

let div = document.querySelector("div.create-modal-input-area");

//create elements
let projDropdown = document.createElement("select");
let projDropdownLabel = document.createElement("label");

let taskLabel = document.createElement("label");
let taskInput = document.createElement("input");

// Set attributes
projDropdownLabel.setAttribute("for", "projDropdown");
projDropdownLabel.textContent = "Project: ";
projDropdown.setAttribute("id", "projDropdown");
projDropdown.setAttribute("name", "projDropdown");

taskLabel.setAttribute("for","name");//change name to something descriptive
taskLabel.textContent="Task Name:";
taskInput.setAttribute("type", "text");
taskInput.classList.add("name"); //change name to something descriptive
taskInput.setAttribute("id", "name");//change name to something descriptive


function populateDropdown(allProjectsArr){
    //remove all values and rerender
    clearDropdownOptions();

    //get values from proj array and create option tag for each
    if (allProjectsArr.length > 0){
        for (let i = 0; i <= allProjectsArr.length-1; i++){
            projDropdown.appendChild(createDropdownOptions(allProjectsArr[i])); 
        }
    }
};

function clearDropdownOptions(){
 //if div has children, remove children
 console.log("called from clearDropDownOptions");
    if (projDropdown.hasChildNodes){
        while (projDropdown.firstChild) {
            projDropdown.removeChild(projDropdown.firstChild);
        }
    }
};

function createDropdownOptions(item){
    let option = document.createElement("option");
        option.setAttribute("value", item); 
        option.textContent= item;  
    return option;
};

function newTaskForm(){



    div.classList.add("showTaskModule");
div.classList.remove("showProjModule");



        //clear elements 
        taskInput.value = "";

    populateDropdown(allProjectsArr);
    div.appendChild(projDropdownLabel);
    div.appendChild(projDropdown);
    div.appendChild(taskLabel);
    div.appendChild(taskInput);
}

export { newTaskForm };