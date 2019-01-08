import React from 'react'
import { connect } from 'react-redux'


export class Skills extends React.Component {

    render() {


        return (
          <div>

              {
                this.props.skills
                // <ul>
               // this.props.skills.map(function(item, i){
               //   console.log('test');
               //   <li>Test</li>
               // })
// </ul>{this.props.skills}
             }

          </div>


        );

    }



}


export default connect(null)(Skills);
