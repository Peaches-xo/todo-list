//displayProject module (view)
import { allProjectsArr } from "./model";

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
                if (e.target == taskDelIcon){
                    //remove task
                   // console.log(this); //footer element 
                    projectObj.deleteTask(item.id);
                 
                } else if (e.target == taskEditIcon){
                    //if pencil icon
                    if (taskEditIcon.getAttribute('src') == '/src/images/edit24.png'){

                        //add class of edit-mode to task related inputs (if needed)
                        details.classList.add('edit-mode');

                        //set content-editable to true
                        label.setAttribute('contentEditable', 'true');
                        taskdesc.setAttribute('contentEditable', 'true');
                        date.setAttribute('contentEditable', 'true');

                         //this pencil icon needs to change to a save icon
                        taskEditIcon.setAttribute('src', '/src/images/diskette24.png');

                    //if save icon
                    } else if (taskEditIcon.getAttribute('src') == '/src/images/diskette24.png'){

                        //get new values
                        let updatedTaskData = {
                            name: label.textContent,
                            desc: taskdesc.textContent,
                            date: date.textContent,
                        }

                        //if save clicked, call with new values 
                        item.editTask(updatedTaskData);

                        //change save icon back to pencil 
                        taskEditIcon.setAttribute('src', '/src/images/edit24.png');

                        //remove edit-mode class
                         details.classList.remove('edit-mode');

                        //set content-editable to false
                        label.setAttribute('contentEditable', 'false');
                        taskdesc.setAttribute('contentEditable', 'false');
                        date.setAttribute('contentEditable', 'false');

                    }
                
    
                }
                
            }); //taskfooter event listener close


            let date = document.createElement('p');
            date.textContent = `Due Date: \n ${item.dueDate}`;
            date.classList.add('project-task-duedate');
            taskFooter.appendChild(date);

            let taskDelIcon = document.createElement("img");
            taskDelIcon.setAttribute("src", "/src/images/bin24.png");
            taskFooter.appendChild(taskDelIcon);

            let taskEditIcon = document.createElement('img');
            taskEditIcon.classList.add('project-task-editbtn');
            taskEditIcon.setAttribute('src', '/src/images/edit24.png');
            
            taskFooter.appendChild(taskEditIcon);
            displayProject.section.appendChild(details);

            checkbox.addEventListener( "change", () => {
                if ( checkbox.checked ) {
                   console.log( " Check box is checked.");
                   //change task.isCompleted to true;
                   //update active task #s
                } else {
                    console.log(" Check box NOT checked.");
                    //set task.isCompleted to false; 
                }
             });


        } //end of createTaskElement
    }
}



