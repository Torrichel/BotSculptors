import React,{Component} from 'react';
import {WebDeveloperSubjectList,BackendDeveloperSubjectList,DesignerSubjectList} from '../components/SubjectList'


const WebDeveloper = WebDeveloperSubjectList.map((subject,i) =>

<div className='question'   key={i}>
 <span className="SubjectText">{subject.SubjectName}</span>
 </div>
);


const BackendDeveloper = BackendDeveloperSubjectList.map((subject,i) =>
<div className='question'   key={i}>
 <span className="SubjectText">{subject.SubjectName}</span>
 </div>

);



const Designer = DesignerSubjectList.map((subject,i) =>
<div className='question'   key={i}>
 <span className="SubjectText">{subject.SubjectName}</span>
 </div>
);


export const SubjectList  = {
 WebDeveloper: WebDeveloper,
 BackendDeveloper: BackendDeveloper,
 Designer: Designer

}

export class Subjects extends Component{


  render(){





    return(
      <div className="SubjectsItems" onClick={this.props.onClick}>{this.props.preset}</div>
    )
  }


}
