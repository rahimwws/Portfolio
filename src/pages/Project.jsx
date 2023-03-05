import { useParams } from "react-router-dom";
import { projectHelper } from "../helpers/ProjectList";

import { GitHubBtn } from "../components/GitHubBtn/GitHubBtn";



export const Project = (props)=>{
    const {id} = useParams()
    const project = projectHelper[id]

    return(
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>

                <img src={project.imgBig} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: HTML, CSS, JS</p>
                </div>
                {project.gitHubLink && <GitHubBtn link = 'https://github.com'></GitHubBtn>}
                
            </div>
        </div>
    </main>
    )
}