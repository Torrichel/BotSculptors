import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import axios from 'axios'


export class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
          projects: []
        }
    }






    componentWillMount() {
        axios.get(`https://botsculptors.com/api/v1/projects`)
          .then(res => {
            const projects = res.data.data;
            this.setState({ projects:projects });
          })


      };



    render() {


      const Projects = this.state.projects.map((projects,i) =>
<NavLink to={"/projects/"+projects.project.url} key={i} >
      <div className="project"  >

          <div className="category"><p>{projects.project.title}</p></div>
          <div className="title"><b>{projects.project.text}</b><br/>{projects.project.meta_description}</div>

      </div>
      </NavLink>

    );

        return (

          <div className="projects">

              {Projects}



              <div className="more_projects_btn">
                <div className="more_projects"><a href="#" className="btn-gradient">More</a> </div>
              </div>


          </div>



        );
    }



}




const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps)(Projects);
