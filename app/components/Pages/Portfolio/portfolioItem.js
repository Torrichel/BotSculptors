import React from 'react'
import {connect} from 'react-redux'
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4.85, height: 3 }

];

export class PortfolioItem extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (

      <div className="PortfolioPage">
        <div className="PortfolioItem">
          <div className="PortfolioItemBackgroundImg" style={ { backgroundImage: `url(https://www.rosphoto.com/images/u/articles/1608/5_16.jpg)` } }>
            <h1>The name of the project, consisting of  maximum <br/>of ten diverse and beautiful<br/> verbal words.</h1>
          </div>
          <div className="projectDetails">
            <h3 className="front_text">About the project</h3>
            <h3 className="back_text">About the project</h3>
            <p className="projectNameDescription">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
            <button type="button" name="button">Read more</button>

          </div>
          <div className="usedTechnology">
            <h3 className="back_text">Technology</h3>
            <h3 className="front_text">Technology</h3>
            <span>Technologies used in this project</span>
            <table className="usedSkillsTable">
              <tbody>
                <tr>
                  <td><span>01.</span>Apache Software Foundation</td>
                  <td><span>04.</span>JavaScript</td>
                </tr>
                <tr>
                  <td><span>02.</span>Android</td>
                  <td><span>05.</span>Jira</td>
                </tr>
                <tr>
                  <td><span>03.</span>Chai</td>
                  <td><span>06.</span>Mocha</td>
                </tr>


              </tbody>
            </table>

          </div>
          <div className="workedOnProject">
            <span>worked on the project:</span>
            <div className="Developers">
            <div className="developerForThisProject">
                <img src="https://s3.amazonaws.com/botsculptors/website/person.png"></img>
                <div className="DeveloperName">
                  <span className="DeveloperName">Семён Семёныч</span>
                  <span className="DeveloperRoleInProject">Front-end developer</span>

                </div>
                <button type="button" name="developerPage">&#8250;</button>
            </div>
            <div className="developerForThisProject">
                <img src="https://s3.amazonaws.com/botsculptors/website/person1.png"></img>
                <div className="DeveloperName">
                  <span className="DeveloperName">Махмед Взрыватель</span>
                  <span className="DeveloperRoleInProject">Инженер-ядершик</span>

                </div>
                <button type="button" name="developerPage">&#8250;</button>
            </div>
            <div className="developerForThisProject">
                <img src="https://s3.amazonaws.com/botsculptors/website/person.png"></img>
                <div className="DeveloperName">
                  <span className="DeveloperName">Семён Семёныч</span>
                  <span className="DeveloperRoleInProject">Front-end developer</span>

                </div>
                <button type="button" name="developerPage">&#8250;</button>
            </div>


          </div>
          </div>
            <div className="PortfolioImgGallery">
              <h3 className="front_text">Gallery</h3>
              <h3 className="back_text">Gallery</h3>

            </div>








        </div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }

}

export default connect(null)(PortfolioItem);
