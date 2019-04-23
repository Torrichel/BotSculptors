import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Gallery from 'react-photo-gallery';
import { projectActions } from '../../../actions'
import Lightbox from 'react-images';
import Skills from './Skills';
import { Redirect} from 'react-router-dom';

import { Header, Main, Title, Footer } from "../../common";



import styled from "styled-components";

const PortfolioPage = styled.div`
  
   .react-photo-gallery--gallery{
     margin: 10px auto 40px auto;
     width: 80%;
     
     > div {
       flex-wrap: wrap;
       justify-content: center;
     }
   
   }
  
   .portfolioItem-gallery-item {
     min-height: 350px;
     min-width: 350px;
   }
  
`;


const PortfolioItemWrapper = styled.div`
    
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .PortfolioItemBackgroundImg{
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 14%;
    height: 450px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    h1{
      color: #fff;
      text-transform: capitalize;
      font-family: MainFontThin;
    }
  }
  .projectDetails{
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    

      padding: 0 ${props => props.theme.contentPaddingDesktop};
      
      
          ${({theme}) => theme.mobile`
        padding: 50px ${({theme}) => theme.contentPaddingMobile};
    `}
    
    ${({theme}) => theme.tablet`
         padding: 50px ${({theme}) => theme.contentPaddingTablet};
    `}
    
    .projectNameDescription{
      
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
     
      margin-bottom: 20px;
      
      
      text-align: left;
      color: #7d8794;
      font-size: 24px;
      line-height: 1.5;
      
      > * {
        font-family: MainFontThin;
      }
      
    }


  }
  .usedTechnology{
    width: 100%;
    background-color: #eef0f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  
    
    
    span{
      font-size: 16px;
      color: gray;
    }
    div.usedSkillsTable{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 30px;
      margin-top: 30px;
      width: 50%;
      .usedTechnologyItem{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        font-size: 18px;
        font-weight: 600;
        border: 1px solid #d5d9de;
        padding: 20px 10px;
        width: 250px;
      }
      span{
          font-size: 28px;
          color: #2558b5;
          font-weight: 800;
          padding: 0 5px 0 0 ;
      }

      }
  }
  .PortfolioImgGallery{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

  }
  .workedOnProject{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    >span{
      margin-top: 30px;
      margin-bottom: 20px;
      font-size: 20px;
      color: gray;
    }
    .Developers{
      width: 60%;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      .developerForThisProject{
        height: 90px;
        width: 265px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        img{
          height: 55px;
          width: 55px;
          border-radius: 50px;
          margin-right: 12px;
        }
        .DeveloperName{
          height: 40px;
          display: flex;
          flex-direction:column;
          .DeveloperRoleInProject{
            font-style: italic;
            color: #1f4c9d;
          }
        }
        button{
          color: #1f4c9d;
          background-color: inherit;
          border: 1px solid #1f4c9d;
          margin-left: 8px;
          width: 25px;
          height: 25px;
          border-radius: 90px;
          font-size: 16px;
        }

      }

    }

  }
  
`;


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


    }

  render() {

    const { images=[], pageLoadError } = this.state;

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


    return !pageLoadError ? (<Fragment>

      <Header {...this.props} />

      <Main>

        <PortfolioPage>
          <PortfolioItemWrapper>
            <div className="PortfolioItemBackgroundImg" style={{
              backgroundImage: `url(${this.state.project.gallery !== undefined ? this.state.project.gallery.cardImage : []})`
            }}>
              <h1>{this.state.project.title}</h1>
            </div>
            <div className="projectDetails">

              <Title id='aboutProject' marginTop={'30'} marginBottom={'0'} backText='About the project' frontText='About the project' />

              <div className="projectNameDescription" dangerouslySetInnerHTML={{ __html: this.state.project.text }}></div>


            </div>
            <div className="usedTechnology">
              <Title marginTop={'45'} marginBottom={'10'} id='technologies' backText='Technologies' frontText='Technologies' />

              <span>Technologies used in this project</span>
              <Skills skills={this.state.project.skillsAndTechnologies}/>
            </div>
            <div className="workedOnProject">
              <Title marginTop={'45'} marginBottom={'10'} id='team' backText='Team' frontText='Team' />

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

              <Title marginTop={'45'} marginBottom={'10'} id='gallery' backText='Gallery' frontText='Gallery' />

            </div>

          </PortfolioItemWrapper>
          <Gallery photos={photosData !== [] ? photosData : {}} onClick={this.openLightbox}/>
          <Lightbox images={photosData !== [] ? photosData : {}} onClose={this.closeLightbox} onClickPrev={this.gotoPrevious} onClickNext={this.gotoNext} currentImage={this.state.currentImage} isOpen={this.state.lightboxIsOpen}/>

        </PortfolioPage>

      </Main>

      <Footer />



    </Fragment>): (<Redirect to="/" />)

  }



}



const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {project: state.projectReducer});
};

export default connect(mapStateToProps)(PortfolioItem);
