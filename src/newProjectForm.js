//modal display - create New Project
//contains code to create dom elements and append them inside modal 


let div = document.querySelector("div.create-modal-input-area");

//create elements 
let label = document.createElement("label");
let input = document.createElement("input");

// Set attributes
label.setAttribute("for","projName");
label.textContent="Project Name:";
input.setAttribute("type", "text");
input.classList.add("name");
input.setAttribute("id", "projName");

  
function newProjectForm(){
    //append elements to div
    div.appendChild(label);
    div.appendChild(input);
};

export { newProjectForm } ; //to view