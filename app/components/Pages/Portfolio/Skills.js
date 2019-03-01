import React from 'react'
import { connect } from 'react-redux'


export class Skills extends React.Component {

    render() {


        return (
          <div className="usedSkillsTable">
          { this.props.skills !== undefined ? (
            this.props.skills.map((item,i) => {
            return <div className="usedTechnologyItem" key={i}>  <span>{'0' + (1 + i) }.</span>{item}</div>
          })) :
          null
        }

          </div>


        );

    }



}


export default connect(null)(Skills);
