//displayProject module (view)
import { allProjectsArr } from "./model";
import { getRadioValue } from "./model";
import { renderProjectCards } from "./view";


export let displayProject = {
    //dom elements
    section: document.querySelector('.project'),

    clearSection(){
        //loop through allProjArr and change isCurrentProj to false
        allProjectsArr.forEach((project) => project.isCurrentProj = false);

        if (displayProject.section.hasChildNodes){
            while (displayProject.section.firstChild) {
                displayProject.section.removeChild(displayProject.section.firstChild);
              }
        }
    },

    display(projectObj){ 
        //takes in project and creates dom element for each task 
        //may need to refactor to smaller functions as contains some logic

        //toggle currentProj boolean in projects

        //create elements
        let headingh2 = document.createElement('h2');
        headingh2.classList.add('project-heading');
        headingh2.textContent = projectObj.name;
        this.section.appendChild(headingh2);

        let headingh3 = document.createElement('h3');
        headingh3.classList.add('gradient-text');
        headingh3.textContent = 'To do';
        this.section.appendChild(headingh3);

        //if taskArr not empty
        if (projectObj.taskArr.length > 0){
            //create element for each item in task array
            projectObj.taskArr.forEach(createTaskElement);
        }

        //could this fn be moved up a level?
        function createTaskElement(item, index){
           // console.log(item); //task object
            //console.log(index); //0
        
        let details = document.createElement('details');
        details.classList.add('project-task-item');
        details.setAttribute('data-taskID', item.id);
            let summary = document.createElement('summary');

                let div = document.createElement('div');
                div.classList.add('task-checkbox');

                    let checkbox = document.createElement('input');
                    checkbox.setAttribute('id', `task${index}`); 
                    checkbox.setAttribute('type', 'checkbox');
                    checkbox.classList.add('checkbox','taskcheckbox');

                    let label = document.createElement('label');
                    label.setAttribute('for', `task${index}`);
                    label.textContent = item.name;
                    div.appendChild(checkbox);
                    div.appendChild(label);
                    summary.appendChild(div);

                let priorityspan = document.createElement('span');
                priorityspan.classList.add('project-task-priority',`${item.priority}Priority`) 
                priorityspan.textContent = item.priority;
                summary.appendChild(priorityspan);

                let arrow = document.createElement('img');
                arrow.classList.add('project-task-img');
                arrow.setAttribute('src', '/src/images/downgrey16.png');
                summary.appendChild(arrow);
                details.appendChild(summary);

            let taskdesc = document.createElement('p');
            taskdesc.classList.add('project-task-description');
            taskdesc.textContent = item.description;
            details.appendChild(taskdesc);

        
            let taskFooter = document.createElement('div');
            taskFooter.classList.add('project-task-footer');
            details.appendChild(taskFooter);

            taskFooter.addEventListener('click', function taskClickHandler(e){
                //DELETE BTN CLICKED
                if (e.target == taskDelIcon){
                    //remove task
                   // console.log(this); //footer element 
                    projectObj.deleteTask(item.id);
                 
                //EDIT BTN CLICKED
                } else if (e.target == taskEditIcon){
                    //if pencil icon showing
                    if (taskEditIcon.getAttribute('src') == '/src/images/edit24.png'){


                    //move priority to inside desc
                    summary.removeChild(priorityspan);
                   
                    //put this in a function to be exported btween newTaskForm.js and here

                    function createPriorityPicker(currentPriority){
                        console.log('current priority: ', currentPriority); //high
                        let taskPriorityWrapper = document.createElement('div');
                        let taskPriorityInput_low = document.createElement('input');
                        let taskPriorityInput_med = document.createElement('input');
                        let taskPriorityInput_high = document.createElement('input');

                        taskPriorityWrapper.classList.add('taskPriority_radio', 'taskEditPriority'); 
                        taskPriorityInput_low.setAttribute('label','Low');
                        taskPriorityInput_low.setAttribute('type','radio');
                        taskPriorityInput_low.setAttribute('id','taskPriority_low');
                        taskPriorityInput_low.setAttribute('name','taskPriority');
                        taskPriorityInput_low.setAttribute('value','low');
                        
                        taskPriorityInput_med.setAttribute('label','Medium');
                        taskPriorityInput_med.setAttribute('type','radio');
                        taskPriorityInput_med.setAttribute('id','taskPriority_med');
                        taskPriorityInput_med.setAttribute('name','taskPriority');
                        taskPriorityInput_med.setAttribute('value','med');
                        
                        taskPriorityInput_high.setAttribute('label','High');
                        taskPriorityInput_high.setAttribute('type','radio');
                        taskPriorityInput_high.setAttribute('id','taskPriority_high');
                        taskPriorityInput_high.setAttribute('name','taskPriority');
                        taskPriorityInput_high.setAttribute('value','high');


                        
                            if (currentPriority == 'high'){                           
                              taskPriorityInput_high.setAttribute('checked', 'true');                            
                            } else if (currentPriority == 'med'){                           
                              taskPriorityInput_med.setAttribute('checked', 'true');                        
                            } else if (currentPriority == 'low'){
                              taskPriorityInput_low.setAttribute('checked', 'true');
                            };
                          
                        
                        taskPriorityWrapper.appendChild(taskPriorityInput_low);
                        taskPriorityWrapper.appendChild(taskPriorityInput_med);
                        taskPriorityWrapper.appendChild(taskPriorityInput_high);

                    return taskPriorityWrapper;
                    }

                    details.insertBefore(createPriorityPicker(item.priority), taskdesc);

                   

                    //add padding class to date
                    date.classList.add('date-padding');



                        //add class of edit-mode to task related inputs (if needed)
                        details.classList.add('edit-mode');

                        //set content-editable to true
                        label.setAttribute('contentEditable', 'true');
                        taskdesc.setAttribute('contentEditable', 'true');
                        date.setAttribute('contentEditable', 'true');

                         //this pencil icon needs to change to a save icon
                        taskEditIcon.setAttribute('src', '/src/images/diskette24.png');

                    //if SAVE  icon
                    } else if (taskEditIcon.getAttribute('src') == '/src/images/diskette24.png'){

                        //get new values
                        let updatedTaskData = {
                            name: label.textContent,
                            desc: taskdesc.textContent,
                            date: date.textContent,
                            priority: getRadioValue(),
                            isComplete: item.isComplete,
                        }


                        //MOVE TO model
                        function getRadioValue(){
                            let radio = document.getElementsByName('taskPriority');
                            for (let i = 0; i < radio.length; i++){
                                if (radio[i].checked){
                                    return radio[i].value;
                                }
                            }
                        }

                        //change save icon back to pencil 
                        taskEditIcon.setAttribute('src', '/src/images/edit24.png');

                        //remove edit-mode class
                        details.classList.remove('edit-mode');

                        //remove padding class to date
                        date.classList.remove('date-padding');

                        //set content-editable to false
                        label.setAttribute('contentEditable', 'false');
                        taskdesc.setAttribute('contentEditable', 'false');
                        date.setAttribute('contentEditable', 'false');


                        //move selected priority bubble back to summary
                        let taskPriorityWrapper = document.querySelector('div.taskEditPriority');

                        //remove old class & add updated class
                        priorityspan.classList.remove(`${item.priority}Priority`);
                        priorityspan.classList.add(`${updatedTaskData.priority}Priority`);
                        priorityspan.textContent = updatedTaskData.priority;

                        // add priority span back to summary
                        summary.insertBefore(priorityspan, arrow);

                        //remove priority selector
                        taskPriorityWrapper.remove();







                        //if save clicked, call with new values 
                        item.editTask(updatedTaskData);
                    }

                    
                
    
                }
                
            }); //taskfooter event listener close


            let dateWrapper = document.createElement('p');
            dateWrapper.textContent = ` Due Date:`;
            dateWrapper.classList.add('project-task-duedate');

                let date = document.createElement('span');
       
                date.textContent = item.dueDate;
                dateWrapper.appendChild(date);


            taskFooter.appendChild(dateWrapper);

            let taskDelIcon = document.createElement("img");
            taskDelIcon.setAttribute("src", "/src/images/bin24.png");
            taskFooter.appendChild(taskDelIcon);

            let taskEditIcon = document.createElement('img');
            taskEditIcon.classList.add('project-task-editbtn');
            taskEditIcon.setAttribute('src', '/src/images/edit24.png');
            
            taskFooter.appendChild(taskEditIcon);
            displayProject.section.appendChild(details);

          
            checkbox.addEventListener( "change", (updatedTaskData) => {
                if ( checkbox.checked ) {
                    updatedTaskData.isComplete = true;
                    item.isComplete = true;
                //update active task #s

                } else {
                    updatedTaskData.isComplete = false;
                    item.isComplete = false;
                
                }
                // projectObj.getNoOfActiveTasks();
                // projectObj.getNoOfCompletedTasks();
                item.editTask(updatedTaskData);
                renderProjectCards();
            });

            

           
            
        } //end of createTaskElement
    }
}


