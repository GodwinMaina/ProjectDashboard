"use strict";
let toggleform = document.querySelector('#toggleform');
let createProjectform = document.querySelector('.createEmployeeform');
let projectName = document.querySelector('#projectName');
let owner = document.querySelector('#owner');
let Url = document.querySelector('#Url');
let profile = document.querySelector('#profile');
let budget = document.querySelector('#budget');
let description = document.querySelector('#description');
let projectState = document.querySelector('#projectState');
let collaborators = document.querySelector('#collaborators');
let deadline = document.querySelector('#deadline');
let taskOverdue = document.querySelector('#overdue');
let finance = document.querySelector("#finance");
let profiles = document.querySelector('.profiles');
// currentproject
let currentProject;
toggleform.addEventListener("click", (() => {
    if (createProjectform.style.display == 'none') {
        createProjectform.style.display = 'flex';
        toggleform.textContent = 'Close Form';
        toggleform.style.backgroundColor = 'red';
    }
    else {
        createProjectform.style.display = 'none';
        toggleform.textContent = 'Add User';
        toggleform.style.backgroundColor = '#0c63dd';
    }
}));
let Projects = [];
createProjectform.addEventListener("submit", (e) => {
    e.preventDefault();
    let ProJect = projectName.value.trim() != "" && Url.value.trim() != "" && owner.value.trim() != "" && finance.value.trim() != "" && projectState.value.trim() != "" && collaborators.value.trim() != "" && deadline.value.trim() != "" && taskOverdue.value.trim() != "" && finance.value.trim() != "" && profile.value.trim() != "" && deadline.value.trim() != "" && collaborators.value.trim() != "" && budget.value.trim() != "";
    if (ProJect) {
        let projectDetails = {
            id: Projects.length + 1,
            projectName: projectName.value.trim(),
            owner: owner.value.trim(),
            Url: Url.value.trim(),
            projectState: projectState.value.trim(),
            description: description.value.trim(),
            profile: profile.value.trim(),
            deadline: deadline.value.trim(),
            finance: finance.value.trim(),
            taskOverdue: taskOverdue.value.trim(),
            budget: budget.value.trim(),
            collaborators: collaborators.value.trim(),
        };
        if (currentProject) {
            Projects.splice(currentProject, 1, projectDetails);
        }
        else {
            Projects.push(projectDetails);
        }
        instance.displayEmployees();
        projectName.value = "";
        owner.value = "";
        profile.value = "";
        Url.value = "";
        budget.value = "";
        description.value = "";
        projectState.value = "";
        collaborators.value = "";
        deadline.value = "";
        taskOverdue.value = "";
        finance.value = "";
        createProjectform.style.display = 'none';
        toggleform.textContent = 'Add User';
        toggleform.style.backgroundColor = '#0c63dd';
    }
});
class PROJECT {
    displayEmployees() {
        let allprofiles = document.querySelectorAll('.profiles .profile');
        allprofiles.forEach(el => {
            el.remove();
        });
        Projects.forEach((projo, index) => {
            let profile = document.createElement('tr');
            profile.className = "profile";
            let numbering = document.createElement('td');
            numbering.textContent = `${index + 1}`;
            let profile_url = document.createElement('img');
            profile_url.setAttribute("src", projo.profile);
            profile_url.className = "profileUrl";
            let projectName = document.createElement('td');
            projectName.textContent = projo.projectName;
            let owner = document.createElement('td');
            owner.textContent = projo.owner;
            let Url = document.createElement('td');
            Url.textContent = projo.Url;
            let budget = document.createElement('td');
            budget.textContent = projo.budget;
            let description = document.createElement('td');
            description.textContent = projo.description;
            let projectState = document.createElement('td');
            projectState.textContent = projo.projectState;
            let collaborators = document.createElement('td');
            collaborators.textContent = projo.collaborators;
            let deadline = document.createElement('td');
            deadline.textContent = projo.deadline;
            let taskOverdue = document.createElement('td');
            taskOverdue.textContent = projo.taskOverdue;
            let finance = document.createElement('td');
            finance.textContent = projo.finance;
            let deletebtn = document.createElement('button');
            deletebtn.textContent = "Delete";
            deletebtn.style.backfaceVisibility = 'red';
            deletebtn.addEventListener('click', () => {
                this.deleteEmployee(index);
            });
            let updatebtn = document.createElement('button');
            updatebtn.textContent = "Update";
            updatebtn.style.backfaceVisibility = 'skyblue';
            updatebtn.addEventListener('click', () => {
                this.updateEmployee(index);
            });
            profile.appendChild(numbering);
            profile.appendChild(profile_url);
            profile.appendChild(profiles);
            profile.appendChild(Url);
            profile.appendChild(budget);
            profile.appendChild(description);
            profile.appendChild(projectState);
            profile.appendChild(deadline);
            profile.appendChild(taskOverdue);
            profile.appendChild(finance);
            profile.appendChild(deletebtn);
            profile.appendChild(updatebtn);
            profiles.appendChild(profile);
        });
    }
    deleteEmployee(index) {
        Projects.splice(index, 1);
        this.displayEmployees();
    }
    updateEmployee(index) {
        currentProject = index;
        console.log(currentProject);
        createProjectform.style.display = 'flex';
        let user = Projects[index];
        projectName.value = user.projectName;
        owner.value = user.owner;
        profile.value = user.profile;
        Url.value = user.Url;
        budget.value = user.budget;
        description.value = user.description;
        projectState.value = user.projectState;
        collaborators.value = user.collaborators;
        deadline.value = user.deadline;
        taskOverdue.value = user.taskOverdue;
        finance.value = user.finance;
    }
}
let instance = new PROJECT();
instance.displayEmployees();
