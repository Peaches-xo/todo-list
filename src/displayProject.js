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
                    checkbox.setAttribute('id', 'task1'); //might need to dynamically create task#
                    checkbox.setAttribute('type', 'checkbox');
                    checkbox.classList.add('checkbox','taskcheckbox');


               










                    let label = document.createElement('label');
                    label.setAttribute('for', 'task1'); //might need to change
                    label.textContent = item.name;
                    div.appendChild(checkbox);
                    div.appendChild(label);
                    summary.appendChild(div);

                let span = document.createElement('span');
                span.classList.add('project-task-priority',`${item.priority}Priority`) 
                span.textContent = item.priority;
                summary.appendChild(span);

                let arrow = document.createElement('img');
                arrow.classList.add('project-task-img');
                arrow.setAttribute('src', '/src/images/downgrey16.png');
                summary.appendChild(arrow);
                details.appendChild(summary);

            let p = document.createElement('p');
            p.classList.add('project-task-description');
            p.textContent = item.description;
            details.appendChild(p);

        
            let taskFooter = document.createElement('div');
            taskFooter.classList.add('project-task-footer');
            details.appendChild(taskFooter);

            taskFooter.addEventListener('click', function taskClickHandler(e){
                if (e.target == taskDelIcon){
                    //remove task
                   // console.log(this); //footer element 
                    projectObj.deleteTask(item.id);
  
                 
                } else if (e.target == taskEditIcon){
                    //edit task
                    console.log('task edit icon reached');
                    //should the edit todo method be on the task o
                  

                    
                    item.editTask();
                   
                }
            });

            let p2 = document.createElement('p');
            p2.textContent = `Due Date: \n ${item.dueDate}`;
            p2.classList.add('project-task-duedate');
            taskFooter.appendChild(p2);

            let taskDelIcon = document.createElement("img");
            taskDelIcon.setAttribute("src", "/src/images/bin24.png");
            taskFooter.appendChild(taskDelIcon);

            let taskEditIcon = document.createElement('img');
            taskEditIcon.classList.add('project-task-editbtn');
            taskEditIcon.setAttribute('src', '/src/images/edit24.png');
            
            taskFooter.appendChild(taskEditIcon);
            displayProject.section.appendChild(details);
        }
    },
    editToDo(projectObj){
        console.log("editToDo reached");
        console.log('projectObj: ', projectObj);
        

        //get fields
        //find projectname
        //replace divs with inputs
        
        //add click listener to priority
            // change priority on click

        //get values from inputs
        //save new values over old in project & todo
    },
    saveEditedToDo(){
        console.log('saveEditedToDo reached');
        
    },

   

  

    
}



