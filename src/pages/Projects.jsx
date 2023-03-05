import { projectHelper } from "./../helpers/ProjectList";
import { Project } from "./../components/Project/Project";

export const Projects = ()=>{
    return(
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                {projectHelper.map((project,index)=>{
                    return(
                        <Project 
                        title = {project.title} 
                        img = {project.img}
                        id = {index}
                        />
                    )
                })}
                
            </ul>
        </div>
    </main>
    )
}