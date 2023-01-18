import './Projects.css';

var projects = [
    {href: "https://github.com/kwaneleg/my-app", name: "My App", description: "A website that show everything about me and my skills." }
];

function Projects(){

    return (
        <div className="container">
            <h1>My projects</h1>
            { projects.length === 0 ? (
                <p>No projects yet.</p>
            ) : (
                <ul className='projects'>
                    {projects.map(function(el, elKey){
                        return <Project key={elKey} href={el.href}  name={el.name} description={el.description} />
                    })} 
                </ul>
            )}
        </div>
    );
}

function Project(prop){
    return (
        <li className='project-items'>
            <a href={prop.href} target="_blank" rel="noreferrer">
                <div className='project-name'>{prop.name}</div>
                <div className='project-desc'>{prop.description}</div>
            </a>
        </li>
    );
}

export  default Projects;