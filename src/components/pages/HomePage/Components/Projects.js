import React from 'react';
import { NavLink } from 'react-router-dom';



import styled from 'styled-components';



const Wrapper = styled.div`
      display: flex;
      flex-flow: column;
      justify-content: space-between;


      .notFound{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: MainFontUltralight;
        font-size: 23px;
      }



      .project{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        text-decoration: none;
        color: inherit;

        a {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          flex-shrink: 0;
          flex-grow: 1;
          height: 265px;
          margin-bottom: 10px;
          color: #ffffff;
          border-radius: 5px;
          background-image: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
          position: relative;

          .category {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            color: #ffffff;
            padding: 0 0 0 40px;
            margin-bottom: 10px;

            p{
              padding: 1px 5px 1px 5px;
              margin-left: 4px;
              font-size: 12px;
              border: 1px solid #ffffff;;
              max-width: 160px;
              border-radius: 3px;
              white-space: nowrap;
            }

          ${({theme}) => theme.mobile`
        display: none;
    `}
    
        ${({theme}) => theme.tablet`
             display: none;
        `}

          }

          .title {
            padding: 0 40px 10px 42px;


            span{
              font-size: 24px;
              color: #fff;
              font-family: MainFontUltralight;
              
              
          ${({theme}) => theme.mobile`
        display: none;
    `}
    
        ${({theme}) => theme.tablet`
             display: none;
        `}

       
            }


            b{
              font-size: 24px;
              font-family: MainFontThin;
              font-weight: normal;
              margin-top: 10px;
              display: inline-block;
              margin-bottom: 8px;
            }
          }


        }



        a .bg{
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background-size: cover;
          background-position: top right;
          z-index: -1;

        }


      }

`;




export const Projects = props => {


    const { projects } = props;

    return (

        <Wrapper className="projects">

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


        </Wrapper>



    );


};


