import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


export class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
          persons: []
        }
    }


    componentWillMount() {
        axios.get(`https://botsculptors.com/api/v1/projects`)
          .then(res => {
            console.log(res.data.data[0].project.title);
            const persons = res.data.data;
            this.setState({ persons:persons });
            console.log(this.state.persons);
          })


      };



    render() {

      const Projects = this.state.persons.map((person,i) =>
<NavLink to={"/portfolio/"+person.project.url} key={i} >
      <div className="project"  >

          <div className="category"><p>{person.project.title}</p></div>
          <div className="title"><b>{person.project.text}</b><br/>{person.project.meta_description}</div>

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


export default connect(null)(Projects);
