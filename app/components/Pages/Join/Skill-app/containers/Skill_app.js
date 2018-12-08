import React, { Component } from 'react';
import {Subjects,SubjectList} from './Subjects'
import { connect } from 'react-redux'
import {Presets} from './Presets'
import {JoinForm} from './JoinForm'


export class Skill_app extends Component {
  constructor(props) {
  super(props);
  this.state = {
    showSubject: false,
    skillsPreset: SubjectList,
    activeSkill: 0
  };

  this.presetChange = this.presetChange.bind(this);
  this.onHandleClick = this.onHandleClick.bind(this);
}


  presetChange(e){
    this.setState({
      showSubject: true,
      skillsPreset: SubjectList[e.target.value]

    })
  }

  onHandleClick(e){

    if (e.target.classList.contains("questionImg") && e.target.parentNode.classList.contains('selected') === false ) {
      let activeSkill = this.state.activeSkill +1;
      e.target.parentNode.classList.add('selected')
      this.setState({
        activeSkill: activeSkill

      })
    }else {
      if (e.target.classList.contains("questionImg")) {
        let activeSkill = this.state.activeSkill -1;
        e.target.parentNode.classList.remove('selected')
        this.setState({
          activeSkill: activeSkill

        })
      }

    }

  }
  render() {
    return (

      <div className="Skill-App">
            <h3 className="back_text">Choose your skills</h3>
            <h3 className="front_text">Choose your skills</h3>
            <Presets onChange={this.presetChange}/>
            {this.state.showSubject !== false ? <Subjects onClick={this.onHandleClick}  preset={this.state.skillsPreset}/> : <div></div> }





            {this.state.activeSkill < 5 ? <span className="NeedMore">Need more skills {5 -this.state.activeSkill} </span> : <JoinForm/>}

      </div>
    );
  }
}

export default connect(null)(Skill_app);
