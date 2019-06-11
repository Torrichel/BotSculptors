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
        font-family: 'Open Sans';
        color: #7d8794;
        font-weight: 300;
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
          background-image: linear-gradient( rgba(0, 0, 0, .3), rgba(0, 0, 0, .3));
          position: relative;

          .category {
            display: flex;
            justify-content: flex-start;
            align-items: center;
           
            padding: 0 0 0 40px;
            

            p{
                padding: 0 10px 0 10px;
                margin-left: 4px;
                font-size: 12px;
                border: 1px solid rgba(256, 256, 256, .3);
                border-radius: 3px;
                white-space: nowrap;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-transform: uppercase;
                font-family: "Open Sans";
                font-weight: 300;
                line-height: 39px;
                letter-spacing: 0.3px;

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
            
            font-weight: 300;
            font-family: "Open Sans";
            color: #fff; 
            font-size: 26px;
            line-height: 39px;
            
            b{
              font-weight: 400;
              line-height: inherit;
              font-family: inherit;
              font-size: inherit;
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


const halfSplit = text => {


    let middle = Math.floor(text.length / 2);
    const before = text.lastIndexOf(' ', middle);
    const after = text.indexOf(' ', middle + 1);

    if (middle - before < after - middle) {
        middle = before;
    } else {
        middle = after;
    }

    const s1 = text.substr(0, middle);
    const s2 = text.substr(middle + 1);

    return `<b>${s1}</b><br/>${s2}`;



};

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
                            <div className="title" dangerouslySetInnerHTML={{ __html: halfSplit(project.project.title) }}></div>


                        </NavLink>

                    </div>) : <div className='notFound'>No projects in this category yet :(</div>}


        </Wrapper>



    );


};


