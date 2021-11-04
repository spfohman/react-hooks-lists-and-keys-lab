import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const list = projects.map((li)=>{
    return <ProjectItem key={li.id} name={li.name} about={li.about} technologies={li.technologies}></ProjectItem>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{list}</div>
    </div>
  );
}

export default ProjectList;
