let toggleform = document.querySelector('#toggleform') as HTMLButtonElement;
let createProjectform = document.querySelector('.createEmployeeform') as HTMLFormElement

let projectName = document.querySelector('#projectName') as HTMLInputElement
let owner = document.querySelector('#owner') as HTMLInputElement
let Url = document.querySelector('#Url') as HTMLInputElement
let profile  = document.querySelector('#profile') as HTMLInputElement
let budget = document.querySelector('#budget') as HTMLInputElement
let description = document.querySelector('#description') as HTMLInputElement
let projectState = document.querySelector('#projectState') as HTMLInputElement
let collaborators = document.querySelector('#collaborators') as HTMLInputElement
let deadline = document.querySelector('#deadline') as HTMLInputElement
let taskOverdue = document.querySelector('#overdue') as HTMLInputElement
let finance = document.querySelector("#finance") as HTMLInputElement

let profiles = document.querySelector('.profiles') as HTMLTableElement

// currentproject
let currentProject:number;

toggleform.addEventListener("click", (()=>{
    if(createProjectform.style.display == 'none'){
        createProjectform.style.display = 'flex'
        toggleform.textContent = 'Close Form'
        toggleform.style.backgroundColor = 'red'
    }else{
        createProjectform.style.display = 'none'
        toggleform.textContent = 'Add User'
        toggleform.style.backgroundColor = '#0c63dd'
    }
}))

interface Project{
    id: number;
    projectName:string;
    owner:string;
    profile:string;
    Url:string;
    budget:string;
   description:string; 
   projectState :string;
   collaborators :string;
   deadline  :string;
   taskOverdue :string;
   finance:string;
    
}

let Projects: Project [] = []

createProjectform.addEventListener("submit", (e)=>{
    e.preventDefault()

    let ProJect = projectName.value.trim() != ""  && Url.value.trim() != "" && owner.value.trim() != "" && finance.value.trim() != "" && projectState.value.trim() != "" && collaborators.value.trim() != "" && deadline.value.trim() != "" && taskOverdue.value.trim() != "" && finance.value.trim() != "" && profile.value.trim() != "" && deadline.value.trim() != "" && collaborators.value.trim() != "" && budget.value.trim() != "" 

    if(ProJect){
        let projectDetails = {

            id: Projects.length + 1,
            projectName: projectName.value.trim(),
            owner: owner.value.trim(),
            Url: Url.value.trim(),
            projectState: projectState.value.trim(),
            description: description.value.trim(),
            profile: profile.value.trim(),
            deadline: deadline.value.trim(),
            finance:finance.value.trim(),
            taskOverdue:taskOverdue.value.trim(),
            budget: budget.value.trim(),
            collaborators: collaborators.value.trim(),
           
        }

        if(currentProject){

            Projects.splice(currentProject, 1, projectDetails)


        }else{
            Projects.push(projectDetails)
        }

        instance.displayEmployees()

        projectName.value=""
        owner.value=""
        profile.value=""
        Url.value=""
        budget.value=""
       description.value="" 
      projectState.value=""
      collaborators .value=""
      deadline  .value=""
     taskOverdue.value="" 
     finance.value=""

        createProjectform.style.display = 'none'
        toggleform.textContent = 'Add Project'
        toggleform.style.backgroundColor = '#0c63dd'
        
    }
})

class PROJECT{

    displayEmployees(){

        let allprofiles = document.querySelectorAll('.profiles .profile') as NodeListOf<HTMLDivElement>

        allprofiles.forEach(el=>{
            el.remove()
        })

        Projects.forEach((projo: Project, index:number)=>{

            let profile = <HTMLTableRowElement >document.createElement('tr')
            profile.className = "profile"

            let numbering = document.createElement('td') as HTMLTableCellElement
            numbering.textContent = `${index + 1}`

            let profile_url = document.createElement('img') as HTMLImageElement
            profile_url.setAttribute("src", projo.profile)
            profile_url.className= "profileUrl"

            let projectName = document.createElement('td') as HTMLTableCellElement
            projectName.textContent = projo.projectName

            let owner = document.createElement('td') as HTMLTableCellElement
            owner.textContent = projo.owner

            let Url = document.createElement('td') as HTMLTableCellElement
            Url.textContent = projo.Url

            let budget = document.createElement('td') as HTMLTableCellElement
            budget.textContent = projo.budget

            let description = document.createElement('td') as HTMLTableCellElement
            description.textContent = projo.description

            let projectState = document.createElement('td') as HTMLTableCellElement
            projectState.textContent = projo.projectState

            let collaborators = document.createElement('td') as HTMLTableCellElement
            collaborators.textContent = projo.collaborators

            let deadline = document.createElement('td') as HTMLTableCellElement
           deadline.textContent = projo.deadline

            let taskOverdue = document.createElement('td') as HTMLTableCellElement
            taskOverdue.textContent = projo.taskOverdue

            let finance = document.createElement('td') as HTMLTableCellElement
           finance.textContent = projo.finance

            let deletebtn = document.createElement('button') as HTMLButtonElement
            deletebtn.textContent = "Delete"
            deletebtn.style.backfaceVisibility = 'red'
            deletebtn.addEventListener('click', ()=>{
                this.deleteEmployee(index)
            })

            let updatebtn = document.createElement('button') as HTMLButtonElement
            updatebtn.textContent = "Update"
            updatebtn.style.backfaceVisibility = 'skyblue'
            updatebtn.addEventListener('click', ()=>{
                this.updateEmployee(index)
            })

            profile.appendChild(numbering)
            profile.appendChild(profile_url)
            profile.appendChild(profiles)
            profile.appendChild(Url)
            profile.appendChild(budget)
            profile.appendChild(description)
            profile.appendChild(projectState)
            profile.appendChild(deadline)
            profile.appendChild(taskOverdue)
            profile.appendChild(finance)
           
            profile.appendChild(deletebtn)
            profile.appendChild(updatebtn)

            profiles.appendChild(profile)

        })
    }

    deleteEmployee(index:number){
    Projects.splice(index, 1)

        this.displayEmployees()
    }

    updateEmployee(index:number){
        currentProject= index

        console.log(currentProject);
        
        createProjectform.style.display = 'flex'

        let user = Projects[index]






        projectName.value=user.projectName
        owner.value=user.owner
        profile.value=user.profile
        Url.value=user.Url
        budget.value=user.budget
       description.value=user.description
      projectState.value=user.projectState
      collaborators.value=user.collaborators
      deadline.value=user.deadline
     taskOverdue.value=user.taskOverdue
     finance.value=user.finance

      
    }

}

let instance = new PROJECT()

instance.displayEmployees()
