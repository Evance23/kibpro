import "./WorkCardStyles.css"


import React from 'react';
import pro1 from "../assets/clasrm.jpg"


const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="solutions-heading">Solutions</h1>
        <div className="project-container">
            <div className="project-card">
                <img alt="img" src={pro1}/>

            </div>
        </div>
      
    </div>
  )
}

export default WorkCard
