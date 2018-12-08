import React from 'react';



export  class Presets extends React.Component{
  render(){
    return(
      <div onChange={this.props.onChange} className="select">
      <select  name="slct" id="slct">
        <option value="false" disabled selected>Choose your skills preset list</option>
        <option value="WebDeveloper">Web developer</option>
        <option value="BackendDeveloper">Backend developer</option>
        <option value="Designer">Designer</option>
      </select>
      
    </div>
    )
  }
}
