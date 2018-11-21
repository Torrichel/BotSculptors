import React from 'react'
import {connect} from 'react-redux'

export class PortfolioItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (<div className="PortfolioItem">
      <div className="PortfolioItemBackgroundImg">
        <h1>The name of the project, consisting of a maximum of ten diverse and beautiful verbal words.</h1>
      </div>
      <div className="projectName">
        <h3 className="back_text">About the project</h3>
        <h3 className="front_text">About the project</h3>
        <p className="projectNameDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <button type="button" name="button">Read more</button>

      </div>
      <div className="usedTechnology">
        <h3 className="back_text">Technology</h3>
        <h3 className="front_text">Technology</h3>
        <span>Technologies used in this project</span>
        <table class="usedSkillsTable">
          <tbody>
            <tr>
              <td>cell1_1</td>
              <td>cell2_1</td>
              <td>cell3_1</td>
              <td>cell4_1</td>
            </tr>
            <tr>
              <td>cell1_2</td>
              <td>cell2_2</td>
              <td>cell3_2</td>
              <td>cell4_2</td>
            </tr>

          </tbody>
        </table>

      </div>
      <div className="workedOnProject">
        <span>worked on the project:</span>
        <div className="developerForThisProject">
            <img></img>
            <div>
              <span className="DeveloperName">Семён Семёныч</span>
              <span className="DeveloperRoleInProject">Front-end developer</span>
              <button type="button" name="developerPage">Developer page</button>
            </div>
        </div>
        <div className="developerForThisProject">
            <img></img>
            <div>
              <span className="DeveloperName">Семён Семёныч</span>
              <span className="DeveloperRoleInProject">Front-end developer</span>
              <button type="button" name="developerPage">Developer page</button>
            </div>
        </div>
        <div className="developerForThisProject">
            <img></img>
            <div>
              <span className="DeveloperName">Семён Семёныч</span>
              <span className="DeveloperRoleInProject">Front-end developer</span>
              <button type="button" name="developerPage">Developer page</button>
            </div>
        </div>
        <div class="PortfolioImgGallery"></div>
      </div>







    </div>);
  }

}

export default connect(null)(PortfolioItem);
