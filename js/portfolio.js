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
const projectLink = document.getElementById('project-link');

const projects = [
    {
        image: '../assets/portfolio-assets/dupify.png',
        title: 'Dupify',
        description: 'Using the PySide6 module from the QT framework I created native windows desktop application that mimics the function of Spotify Wrapped using the Spotify API.',
        link: 'https://github.com/GartholomewIII/Dupify-Wrapped',
    },
    {
        image: '../assets/portfolio-assets/LetsBuild.png',
        title: 'LetsBuild',
        description: 'Using the Django framework I created a web based, AI powered project assistant. First you create an account and sign in. Then you take a personality quiz, and then you get reccomended cool and unique projects based off of your interests. Then a roadmap is constructed for you to hold you accountable.',
        link: 'https://github.com/GartholomewIII/lets-build/tree/main',
    },
    {
        image: '../assets/portfolio-assets/OS.png',
        title: 'First-Kernel',
        description: 'Very simple OS made with raw C and assembly. Simple powershell and commands',
        link: 'https://github.com/GartholomewIII/babys-first-os',
    },
    {
        image: '../assets/portfolio-assets/star-sync-daw.png',
        title: 'StarSyncStudio',
        description: 'Digital Audio Workstation built with the JUCE library for the startup I cofounded in 2024. It provides a real time collaborative workflow with a NestJS backend hosted via fly.io ',
        link: 'https://www.starsyncstudio.com/',
    },
    {
        image: '../assets/portfolio-assets/star-sync-go.png',
        title: 'StarSync Companion',
        description: 'Social media companion app for the DAW built in flutter',
        link: 'https://github.com/GartholomewIII/starsync-go',
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
    
    projectDescription.innerText = project.description;

    projectLink.href = project.link;
}

UpdateProject();