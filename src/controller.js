import './style.css';

//Our main file - handles requests.
//Tells MODEL what to do (logic wise),
//tells VIEW what do to (display wise)
//Controls and decides how data is displayed
import {} from './view.js';
import { allProjectsArr } from './model.js';
import { createNewProjectModel } from './model.js';
import { createNewTaskModel } from './model.js';

import squares24 from './/images/squares24.png';
import wand24 from './/images/wand24.png';
import viewallprojects from './images/viewallprojects.png';
import github24 from './/images/github24.png';
import wavinghand from './/images/wavinghand.png';
import stars from './/images/stars.png';
import cross32 from './/images/cross32.png';
import eraser24 from './/images/eraser24.png';
import downgrey16 from './/images/downgrey16.png';

//working! 
import crystals from './/images/crystals.png'; 
import diskette24 from './/images/diskette24.png';

export let domCachedImages = {
  crystalImg: document.querySelector('.logo'),
  homeImg: document.querySelector('.btn-home>img'),
  addImg: document.querySelector('.btn-add>img'),
  viewImg: document.querySelector('.btn-allproj>img'),
  githubImg: document.querySelector('.btn-github>img'),
  handImg: document.querySelector('.img-hand'),
  starsImg: document.querySelector('.create-modal-icon'),
  crossImg: document.querySelector('.btn-close>img'),
  eraserImg: document.querySelector('.clear-btn>img'),
  disketteImg: document.querySelector('.submit-btn>img'),
}
function setImgSrc(){
domCachedImages.crystalImg.src = crystals;
domCachedImages.homeImg.src = squares24;
domCachedImages.addImg.src = wand24;
domCachedImages.viewImg.src = viewallprojects;
domCachedImages.githubImg.src = github24;
domCachedImages.handImg.src = wavinghand;
domCachedImages.starsImg.src = stars;
domCachedImages.crystalImg.src = crystals;
domCachedImages.crossImg.src = cross32;
domCachedImages.eraserImg.src = eraser24;
domCachedImages.disketteImg.src = diskette24;

};
setImgSrc();


//generate ID
const generateUUID = function b(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
};

//function that runs when submit button is clicked
export function createNewProject(projName) {
  //call to a function inside model, passing the projName, model will create the object and return the object to controller to be passed to the view to render the display

  let createdProject = createNewProjectModel(projName, generateUUID()); //in model
}

export function createNewTask(
  taskName,
  taskDesc,
  taskDue,
  taskPriority,
  projectName,
  projID,
) {
  let task = createNewTaskModel(
    taskName,
    taskDesc,
    taskDue,
    taskPriority,
    projectName,
    projID,
    generateUUID(),
  ); //in model
  return task;
}




