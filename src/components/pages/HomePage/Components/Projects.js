import React from 'react';
import { NavLink } from 'react-router-dom';

export const Projects = props => {


    const { projects } = props;

    return (

        <div className="projects">

            {projects.length ? projects.map(project =>


                    <div className="project" key={project._id}>

                        <NavLink target='_blank' to={"/projects/" + project.project.url}>

                            <div className="bg" style={{backgroundImage: `url(${project.project.gallery.cardImage})`}}></div>

                            <div className="category">{project.project.services.map((service, i) => <p
                                key={i}> {service} </p>)}</div>
                            <div className="title"><b>{project.project.title}</b><br/>
                                <span>{project.project.meta_description}</span></div>

                        </NavLink>

                    </div>) : <div className='notFound'>No projects in this category yet :(</div>}


        </div>



    );


};