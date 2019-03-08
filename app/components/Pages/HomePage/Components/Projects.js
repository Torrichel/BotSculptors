import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import axios from 'axios'


export class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
          projects: [],
          showProjectCount: 2
        }

    }






    componentWillMount() {
        axios.get(`https://botsculptors.com/api/v1/projects`)
          .then(res => {
            const projects = res.data.data;
            this.setState({ projects:projects });
          })

          this.showMore = this.showMore.bind(this);
      };

      // IDEA: meta_description 3
      // title 2


      //text


      showMore (){
          this.setState({ showProjectCount: this.state.showProjectCount + 2 });
      }


    render() {
      const projects = this.state.projects || [];
      const Projects = projects.map((projects,i) =>
      (this.state.showProjectCount > i && projects.project.services.includes(this.props.activeCategory))?
        (<NavLink to={"/projects/"+projects.project.url} key={projects._id} >
          <div className="project"  style={{  backgroundImage: `url(${projects.project.gallery.cardImage})`}} >

            <div className="category">{projects.project.services.map((service,i) => <p key={i}> {service} </p>)}</div>
            <div className="title"><b>{projects.project.title}</b><br/>
            {projects.project.meta_description}</div>

          </div>
        </NavLink>)
        : null

    );




        return (

          <div className="projects">

              {Projects}



              <div className="more_projects_btn">
                <div className="more_projects"><button className="btn-gradient" onClick={this.showMore} >More</button></div>
              </div>


          </div>



        );
    }



}




const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps)(Projects);
