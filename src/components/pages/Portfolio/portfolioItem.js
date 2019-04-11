import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Gallery from 'react-photo-gallery';
import { projectActions } from '../../../actions'
import Lightbox from 'react-images';
import Skills from './Skills';
import { Redirect} from 'react-router-dom';

import { Header, Footer } from "../../common";
// import {Element, Link} from "react-scroll/modules";
// import Slider from "react-slick/lib";
// import {Projects} from "../HomePage/Components/Projects";



export class PortfolioItem extends Component {
  constructor(props) {

    super(props);

    this.state = {
      currentImage: 0,
      url: props.match.params.projectID,
      project: {},
      pageLoadError: false,
      authors: [],
      gallery: []
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  componentDidMount(){
      window.scrollTo(0, 0);
  }

  openLightbox(event, obj) {
    this.setState({currentImage: obj.index, lightboxIsOpen: true});
  }
  closeLightbox() {
    this.setState({currentImage: 0, lightboxIsOpen: false});
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  isEmpty (obj)  {
    for(var key in this) {
        if(this.hasOwnProperty(key))
            return false;
    }
    return true;
}

  componentWillReceiveProps(nextProps) {



    const { project={}, authors=[] } = nextProps.project;
    const { gallery={} } = project;
    const { images=[] } = gallery;

      this.setState({
        project,
        authors,
        images
      });
    }

  // Fetch project once component did mount
  componentWillMount() {

      this.props.dispatch( projectActions.getProjectWebsite(this.state.url) );

      scroll(0,0);
    }

  render() {

    const { images=[] } = this.state;

    let photosData = [];
    if (images.length) {

      let photos = images.map((item) => {
          let itemData = {
              src: item,
              width: 1,
              height: 1,
              className: 'portfolioItem-gallery-item'
            };
          photosData.push(itemData);
      })
    }


if (!this.state.pageLoadError) {
  return (


      <Fragment>

        <Header {...this.props} />

        <main>
          <div className="mainIn">

            <div className="PortfolioPage">
              <div className="PortfolioItem">
                <div className="PortfolioItemBackgroundImg" style={{
                  backgroundImage: `url(${this.state.project.gallery !== undefined ? this.state.project.gallery.cardImage : []})`
                }}>
                  <h1>{this.state.project.title}</h1>
                </div>
                <div className="projectDetails">
                  <h3 className="front_text">About the project</h3>
                  <h3 className="back_text">About the project</h3>
                  <p className="projectNameDescription"   dangerouslySetInnerHTML={{ __html: this.state.project.text }}   >

                  </p>
                  {/*<button type="button" name="button">Read more</button>*/}

                </div>
                <div className="usedTechnology">
                  <h3 className="back_text">Technology</h3>
                  <h3 className="front_text">Technology</h3>
                  <span>Technologies used in this project</span>
                  <Skills skills={this.state.project.skillsAndTechnologies}/>
                </div>
                <div className="workedOnProject">
                  <span>Worked on the project</span>
                  <div className="Developers">
                    {  this.state.authors.map((author) =>(
                        <div className="developerForThisProject" key={author._id}>
                          <img src={author.photo}></img>
                          <div className="DeveloperName">
                            <span className="DeveloperName">{author.firstName} {author.lastName}</span>
                            <span className="DeveloperRoleInProject">{author.title}</span>

                          </div>
                          {/*<button type="button" name="developerPage">&#8250;</button>*/}
                        </div>
                    ))}
                  </div>
                </div>
                <div className="PortfolioImgGallery">
                  <h3 className="front_text">Gallery</h3>
                  <h3 className="back_text">Gallery</h3>

                </div>

              </div>
              <Gallery photos={photosData != [] ? photosData : {}} onClick={this.openLightbox}/>
              <Lightbox images={photosData != [] ? photosData : {}} onClose={this.closeLightbox} onClickPrev={this.gotoPrevious} onClickNext={this.gotoNext} currentImage={this.state.currentImage} isOpen={this.state.lightboxIsOpen}/>

            </div>

          </div>
        </main>

        <Footer />



      </Fragment>

  )
}
  return <Redirect to="/" />




  }

}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {project: state.projectReducer});
};

export default connect(mapStateToProps)(PortfolioItem);
