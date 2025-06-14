// Project data
const projectsData = [
    {
        title: "Drive Bot – Smart Car Service Booking System",
        date: "Feb 2025 – Mar 2025",
        description: "An Agile-based system that streamlines car service bookings with an intuitive interface. Developed with Scrum methodology, focusing on sprint planning, iterative development, and effective team collaboration.",
        image: "img/6.jpg",
        skills: ["Agile", "Scrum"]
    },
    {
        title: "Ranu Baby – Business Process Re-engineering",
        date: "Jun 2024 – Dec 2024",
        description: "A real-world business process optimization project for Ranu Baby, a Sri Lankan infant apparel brand. Focused on identifying inefficiencies and proposing sustainable improvements.",
        image: "img/3.jpg",
        skills: ["Business Process Re-engineering", "Teamwork", "Presentation Skills"]
    },
    {
        title: "Ravi Industries Limited – Strategic Management Analysis",
        date: "Jun 2023 – Oct 2023",
        description: "Analyzed Sri Lanka's top brush manufacturer using SWOT, PESTLE, and Porter's Five Forces as part of a Management module. Gained insight into real-world market positioning and strategic planning.",
        image: "img/1.jpg",
        skills: ["SWOT", "PESTLE", "Presentation", "Teamwork"]
    },
    {
        title: "Village Scene – Graphics & Visualization",
        date: "Jan 2024 – Apr 2024",
        description: "An interactive 2D village scene developed using OpenGL and C, featuring animations and keyboard interactions. This project explored geometric drawing, object movement, and basic game mechanics.",
        image: "img/2.jpg",
        skills: ["C", "OpenGL", "Animation"]
    },
    {
        title: "e-Guru – Individual Online Tuition Platform",
        date: "May 2024 – Aug 2024",
        description: "A web-based platform connecting secondary school students with individual tutors for personalized academic support. The system facilitates flexible, one-on-one tutoring sessions and integrates key features like payment handling, session scheduling, and a feedback system.",
        image: "img/5.jpg",
        skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Stripe API"]
    }
];

// Function to generate project cards
function generateProjectCards() {
    const projectsContainer = document.querySelector('.projects-container');
    
    projectsData.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.style.transitionDelay = `${0.1 * index}s`;
        
        const skillsHTML = project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p class="duration">${project.date}</p>
                <p class="description">${project.description}</p>
                <div class="project-skills">
                    ${skillsHTML}
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Generate project cards when the DOM is loaded
document.addEventListener('DOMContentLoaded', generateProjectCards);