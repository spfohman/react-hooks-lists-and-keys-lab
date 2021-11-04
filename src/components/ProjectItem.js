import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  const sp = technologies.map((li, index)=>{
    return <span key={index}>{li}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {sp}
      </div>
    </div>
  );
}

export default ProjectItem;
