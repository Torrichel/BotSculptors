import React from 'react'


export class JoinForm extends React.Component{
  constructor(props){
    super(props);
  }


  render(){



    return(
      <div className="form-style-5">
      <form>
      <fieldset>
      <legend><span className="number">1</span> Candidate Info</legend>
      <input type="text" name="field1" placeholder="Your Name *"/>
      <input type="email" name="field2" placeholder="Your Email *"/>
      <textarea name="field3" placeholder="About yourself"></textarea>

      </fieldset>
      <fieldset>
      <legend><span className="number">2</span> Additional Info</legend>
      <textarea name="field3" placeholder="About Your School"></textarea>
      </fieldset>
      <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}
