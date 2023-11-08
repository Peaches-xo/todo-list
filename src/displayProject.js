//displayProject module

export let displayProject = {
    //dom elements
    section: document.querySelector('.project'),
    // heading: document.querySelector('h2.project-heading'),


    clearSection(){
        if (displayProject.section.hasChildNodes){
            while (displayProject.section.firstChild) {
                displayProject.section.removeChild(displayProject.section.firstChild);
              }
        }
    },

    display(projectObj){ //may need to refactor to smaller functions as contains some logic
        //get project name and append 


        //create elements
        let headingh2 = document.createElement('h2');
        headingh2.classList.add('project-heading');
        headingh2.textContent = projectObj.name;
        this.section.appendChild(headingh2);

        let headingh3 = document.createElement('h3');
        headingh3.classList.add('gradient-text');
        headingh3.textContent = 'To do';
        this.section.appendChild(headingh3);


        //if taskArr != empty, create task element for each task 
        if (projectObj.taskArr.length > 0){
            console.log(projectObj.taskArr);
            //create element for each item in task array
            projectObj.taskArr.forEach(createTaskElement);
        }

        function createTaskElement(item, index){
            console.log(item); //task object
            console.log(index); //0
        


        let details = document.createElement('details');
        details.classList.add('project-task-item');
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
                span.classList.add('project-task-priority',`${item.priority}Priority`) //get and dynamically set priority
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
            let pencil = document.createElement('img');
            pencil.classList.add('project-task-editbtn');
            pencil.setAttribute('src', '/src/images/edit24.png');
            details.appendChild(pencil);
            displayProject.section.appendChild(details);
        }
        // <details class="project-task-item">
        // <summary>
        //     <div class="task-checkbox"> 
        //         <input id="task1" type="checkbox" class="checkbox taskcheckbox">
        //         <label for="task1">Walk the dog </label>
        //     </div>
        //     <span class="project-task-priority highPriority">High</span>
        //     <img class="project-task-img" src="/src/images/downgrey16.png">
        // </summary> 

        // <p class="project-task-description">Walk The Dog to talburpin park</p> 
        // <img class="project-task-editbtn" src="/src/images/edit24.png">
        // </details>










    },

   


    
}



