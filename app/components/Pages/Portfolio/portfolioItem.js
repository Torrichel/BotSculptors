import React from 'react'
import {connect} from 'react-redux'
import Gallery from 'react-photo-gallery';
import {getProject} from '../../../actions/actions'
import Lightbox from 'react-images';
import Skills from './Skills';
import { Redirect} from 'react-router-dom'



export class PortfolioItem extends React.Component {
  constructor(props) {

    super(props);
    console.log(props.match.params.projectID);
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
      this.setState({
        project: Object.keys(nextProps.project).length
          ? nextProps.project.project
          : this.state.project.project,
        authors: Object.keys(nextProps.project).length
          ? nextProps.project.authors
          : this.state.project.authors,
        images: Object.keys(nextProps.project).length
          ? nextProps.project.project.gallery.images
          : this.state.project.project.gallery.images
      });
    }
  // Fetch project once component did mount
  componentWillMount() {

      this.props.dispatch(getProject(this.state.url))
      .then()
      .catch((err) => {
        // this.setState({
        //   pageLoadError: true
        // })
      });

      scroll(0,0);
    }

  render() {

    let photosData = [];
    if (this.state.images != [] && this.state.images != undefined) {
      let photos = this.state.images.map((item) => {
          let itemData = {
              src: item,
              width: 1,
              height: 1,
              className: 'portfolioItem-gallery-item'
            }
          photosData.push(itemData);
      })
    }


if (!this.state.pageLoadError) {
  return (<div className="PortfolioPage">
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
        <span>worked on the project:</span>
        <div className="Developers">
          {  this.state.authors.map((author) =>(
                <div className="developerForThisProject" key={author._id}>
                    <img src={author.photo}></img>
                    <div className="DeveloperName">
                      <span className="DeveloperName">{author.firstName} {author.lastName}</span>
                      <span className="DeveloperRoleInProject">Front-end developer</span>

                    </div>
                    <button type="button" name="developerPage">&#8250;</button>
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
  </div>)
}
  return <Redirect to="/" />




  }

}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {project: state.projectReducer});
};

export default connect(mapStateToProps)(PortfolioItem);
