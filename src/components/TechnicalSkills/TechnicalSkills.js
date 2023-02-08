import React from 'react'
import "./TechnicalSkills.css"
import {BsFillPatchCheckFill} from "react-icons/bs"


const TechnicalSkills = () => {
  return (
    <section id='technicalskills'>
        <h5>What Skills I Have</h5>
        <h2>My Experiences</h2>

        <div className='technicalskills-container'>

            <div className='experience-frontend-subjects'>
                <h3>Front End Development</h3>
                <div className='experience-content'>
                    <article className='experience-details'>
                       <BsFillPatchCheckFill className="experience-react-icon"/> 
                       <div>
                       <h4>HTML</h4>
                       <small className='text-light'>Experienced</small>
                       </div>
                    </article>
                    <article className='experience-details'>
                       <BsFillPatchCheckFill className="experience-react-icon"/>
                       <div>
                       <h4>CSS</h4>
                       <small className='text-light'>Intermediate</small>
                       </div>
                    </article>
                    <article className='experience-details'>
                       <BsFillPatchCheckFill className="experience-react-icon"/>
                       <div>
                       <h4>JavaScript</h4>
                       <small className='text-light'>Intermediate</small>
                       </div>
                    </article>
                    <article className='experience-details'>
                       <BsFillPatchCheckFill className="experience-react-icon"/>
                       <div>
                           <h4>BootStrap</h4>
                           <small className='text-light'>Experienced</small>
                       </div>
                       
                    </article>
                    <article className='experience-details'>
                       <BsFillPatchCheckFill className="experience-react-icon"/>
                       <div>
                           <h4>ReactJS</h4>
                           <small className='text-light'>Intermediate</small>
                       </div>
                    </article>
                </div>
            </div>

            <div className='experience-core-subjects'>
                <h3>Core Subjects</h3>
                <div className='experience-content'>
                    <article className='experience-details'>
                       <BsFillPatchCheckFill className="experience-react-icon"/>
                       <div>
                       <h4>C/C++ Programming</h4>
                           <small className='text-light'>Experienced</small>
                           </div>
                    </article>
                    <article className='experience-details'>
                       <BsFillPatchCheckFill className="experience-react-icon"/>
                       <div>
                       <h4>DSA</h4>
                           <small className='text-light'>Intermediate</small>
                           </div>
                    </article>
                    <article className='experience-details'>
                       <BsFillPatchCheckFill className="experience-react-icon"/>
                       <div>
                           <h4>MySQL</h4>
                           <small className='text-light'>Intermediate</small>
                       </div>
                    </article>
                    <article className='experience-details'>
                       <BsFillPatchCheckFill className="experience-react-icon"/>
                       <div>
                           <h4>Linux</h4>
                           <small className='text-light'>Intermediate</small>
                       </div>
                    </article>
                    <article className='experience-details'>
                       <BsFillPatchCheckFill className="experience-react-icon"/>
                       <div>
                           <h4>Git/GitHub</h4>
                           <small className='text-light'>Intermediate</small>
                       </div>
                    </article>
                </div>

            </div>
        </div>
    </section>
  )
}

export default TechnicalSkills