const onButton = document.getElementById("on-btn");
const tv = document.getElementById("tv");
const tvDisplay = document.getElementById("tv-display");

const tvTitle = document.querySelector('#tv .project-title');
const tvImage = document.querySelector('#tv .project-img');

const modalTitle = document.querySelector('#details-modal .project-title');


const playButton = document.getElementById('play');
const skipForward = document.getElementById('forward');
const skipBackward = document.getElementById('prev');

const projectDetails = document.getElementById('details-modal');
const projectDescription = document.getElementById('project-details');

const modalImage = document.getElementById('modal-img');

const projects = [
    {
        image: '../assets/portfolio-assets/dupify.png',
        title: 'Dupify',
        description: 'hello',
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

skipForward.addEventListener('click', () => {

    if (projectIndex < projects.length && (tv.classList.contains('on')))
    {
        projectIndex += 1;
    }

    UpdateProject();

});

skipBackward.addEventListener('click', () => {

    if (projectIndex > 0 && (tv.classList.contains('on')))
    {
        projectIndex -= 1;
    }

    UpdateProject();
});

playButton.addEventListener('click', () => {

    if (tv.classList.contains('on'))
    {
        projectDetails.classList.toggle('show');
    }
});



function UpdateProject() {
    const project = projects[projectIndex];

    tvTitle.innerText = project.title;
    tvImage.src = project.image;

    modalTitle.innerText = project.title;
    modalImage.src = project.image;
    
}

UpdateProject();