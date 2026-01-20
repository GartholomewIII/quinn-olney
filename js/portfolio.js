const onButton = document.getElementById("on-btn");
const tv = document.getElementById("tv");
const tvDisplay = document.getElementById("tv-display");

const projectImage = document.getElementById("project-img");
const projectTitle = document.getElementById("project-title");

const projects = [
    {
        image: '',
        title: 'Dupify',
        description: '',
    },
    {
        image: '',
        title: 'LetsBuild',
        description: '',
    },
    {
        image: '',
        title: 'First-Kernel',
        description: '',
    },
    {
        image: '',
        title: 'StarSyncStudio',
        description: '',
    },
    {
        image: '',
        title: 'StarSync Companion',
        description: '',
    },


];



onButton.addEventListener('click', () => {
    tv.classList.toggle('on');

    tvDisplay.classList.toggle('show');

});

let projectIndex = 0;




function UpdateProject() {
    const project = projects[projectIndex];
    projectImage.src = project.image;
    projectTitle.innerText = project.title;
    
}

UpdateProject();