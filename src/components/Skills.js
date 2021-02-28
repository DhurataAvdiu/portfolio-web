import React from 'react';
import html from '../html.png';
import css from '../css.png';
import js from '../js.png';
import node from '../node.png';
import react from '../react.png';
import postgres from '../postgres.png';

const Skills = () => {

	return (

		 <div  id="skills" className="card-block">
            <h2 className="headerSkill">Skills</h2>
             
                    <div className="container skill-container">
                       <img className="skill-image" src={html} title="HTML5" alt="HTML5"/>
                       <img className="skill-image" src={css} title="CSS" alt="CSS"/>
                       <img className="skill-image" src={js} title="JAVASCRIPT" alt="JAVASCRIPT"/>
                       <img className="skill-image" src={react} title="REACT" alt="REACT"/>
                       <img className="skill-image" src={node} title="NODE.JS" alt="NODE.JS"/>
                       <img className="skill-image" src={postgres} title="POSTGRES" alt="POSTGRES"/>
                      
                            
                    </div>
              
        </div>
    )

}

export default Skills;