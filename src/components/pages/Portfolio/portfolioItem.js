import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
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


const Gallery = styled.div`
  
  
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    
    
    padding: 0 ${({theme}) => theme.contentPaddingDesktop};
    padding-bottom: 30px;
    
    
    ${({theme}) => theme.mobile`
    
          grid-template-columns: 1fr;
          padding: 0 ${props => props.theme.contentPaddingMobile};
          padding-bottom: 30px;
    `}
    
  
    ${({theme}) => theme.tablet`
          grid-template-columns: 1fr;
          padding: 0 ${props => props.theme.contentPaddingMobile};
          padding-bottom: 30px;
    `}

  
  div{
    filter: grayscale(100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    cursor: pointer;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.09), 0px 1px 1px 0px rgba(0,0,0,0.09), 0px 2px 1px -1px rgba(0,0,0,0.09);
 
    &::before {
        content: "";
        padding-bottom: 100%;
        display: inline-block;
      }
      
   &:hover{
      filter: grayscale(20%);
   }
   
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
      font-size: 36px;
      font-family: MainFontUltralight;
      font-weight: normal;
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
    
     padding: 0 ${({theme}) => theme.contentPaddingDesktop};
    
    
    ${({theme}) => theme.mobile`

          padding: 0 ${props => props.theme.contentPaddingMobile};
    `}
    
  
    ${({theme}) => theme.tablet`

          padding: 0 ${props => props.theme.contentPaddingMobile};
    `}
    
    
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
      width: 100%;
      
      
      

   
      
      .usedTechnologyItem{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        font-size: 18px;

        border: 1px solid #d5d9de;
        padding: 0 20px;
  
        height: 70px;
        margin-left: -1px;
        margin-bottom: -1px;
        flex-grow: 1;
        font-family: MainFontUltralight;
      }
      span{
          font-size: 28px;
          color: #2558b5;
       
          padding: 0 5px 0 0 ;
          font-family: MainFontText;
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
      
      
          ${({theme}) => theme.mobile`

         justify-content: space-between;
    `}
      
      
      
      flex-direction: row;
      flex-wrap: wrap;
      .developerForThisProject{
        height: 90px;
        
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

  openLightbox({currentTarget}) {

    this.setState({currentImage: parseInt( currentTarget.dataset.index ), lightboxIsOpen: true});

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

    const { images=[], pageLoadError, lightboxIsOpen, currentImage } = this.state;

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

              <Title id='aboutProject' marginTop={'30'} marginBottom={'0'} backText='About' frontText='About' />

              <div className="projectNameDescription" dangerouslySetInnerHTML={{ __html: this.state.project.text }}></div>


            </div>
            <div className="usedTechnology">
              <Title marginTop={'45'} marginBottom={'15'} id='technologies' backText='Technologies' frontText='Technologies' />


              <Skills skills={this.state.project.skillsAndTechnologies}/>
            </div>


            {/*<div className="workedOnProject">*/}
            {/*  <Title marginTop={'45'} marginBottom={'30'} id='team' backText='Team' frontText='Team' />*/}

            {/*  <div className="Developers">*/}
            {/*    {  this.state.authors.map((author) =>(*/}
            {/*        <div className="developerForThisProject" key={author._id}>*/}
            {/*          <img src={author.photo}></img>*/}
            {/*          <div className="DeveloperName">*/}
            {/*            <span className="DeveloperName">{author.firstName} {author.lastName}</span>*/}
            {/*            <span className="DeveloperRoleInProject">{author.title}</span>*/}

            {/*          </div>*/}
            {/*          /!*<button type="button" name="developerPage">&#8250;</button>*!/*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*</div>*/}


          </PortfolioItemWrapper>


          <div className="PortfolioImgGallery">

            <Title marginTop={'30'} marginBottom={'35'} id='gallery' backText='Gallery' frontText='Gallery' />

            <Gallery>

              {images.map((image, i) =>

                  <div key={i} data-index={i} onClick={this.openLightbox} style={{backgroundImage: `url(${image})`}}/>

              )}

            </Gallery>

          </div>



          <Lightbox images={photosData !== [] ? photosData : {}} onClose={this.closeLightbox} onClickPrev={this.gotoPrevious} onClickNext={this.gotoNext} currentImage={currentImage} isOpen={lightboxIsOpen} />


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
