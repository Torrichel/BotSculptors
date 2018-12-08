import React, { Component } from 'react';
import {Subjects,SubjectList} from './Subjects'
import { connect } from 'react-redux'
import {Presets} from './Presets'


export class Skill_app extends Component {
  constructor(props) {
  super(props);
  this.state = {
    showSubject: false,
    skillsPreset: SubjectList
  };

  this.presetChange = this.presetChange.bind(this);
}


  presetChange(e){
    this.setState({
      showSubject: true,
      skillsPreset: SubjectList[e.target.value]
    })
  }

  onHandleClick(e){
    if (e.target.classList.contains("questionImg")) {
      e.target.parentNode.classList.toggle('selected')
    }else {
      console.log(false);
    }

  }
  render() {
    return (

      <div className="App">
            <Presets onChange={this.presetChange}/>
            {this.state.showSubject !== false ? <Subjects onClick={this.onHandleClick}  preset={this.state.skillsPreset}/> : <div></div> }

      </div>
    );
  }
}

export default connect(null)(Skill_app);
