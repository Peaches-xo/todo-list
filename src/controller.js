import './style.css';
//Our main file - handles requests. Tells model what to do (logic wise), 
//tells view what do to.
//Controls and decides how data is displayed
import { thisistheview } from './view.js';
import { modelfunc } from './model.js';
console.log('testing from controller.js');





//inititation function 
thisistheview();




//function that runs when submit button is clicked
export function createNewProject(projname){
    console.log('createNewProject firing');
    console.log(projname);

    // event.preventDefault();
    // let projname = domCachedElements.name.value;
     //domCachedElements.container.textContent = projname;
};
