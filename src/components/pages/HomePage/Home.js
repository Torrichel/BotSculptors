import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Link, Element, scroller } from 'react-scroll';


import Slider from 'react-slick';

import { Projects } from './Components/Projects.js';

import { Header, Main, Title, Footer } from "../../common";

import { projectActions } from '../../../actions';
import { ReviewService } from '../../../services';

import ReactPaginate from "react-paginate";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import styled from 'styled-components';




export const SliderBlock = styled.div`

      display: flex;
      align-items: center;
      
      height: 654px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      
      padding: 0 ${({theme}) => theme.contentPaddingDesktop};
      
      
      ${({theme}) => theme.mobile`
            height: 300px;
            padding: 0 ${props => props.theme.contentPaddingMobile};
      `}
      
    
      ${({theme}) => theme.tablet`
            height: 350px;
            padding: 0 ${props => props.theme.contentPaddingTablet};
      `}


      .info {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        color: #fff;
        font-size: 36px;
        font-family: "Open Sans";

        .title {
            font-family: inherit;
            font-weight: 400;
            font-size: inherit;
        }

        .slogan {
          
       
            color: #ffffff;
            font-size: inherit;
            font-family: inherit;
            font-weight: 300;
            line-height: 60px;
          
            ${({theme}) => theme.mobile`
                display: none;
            `}

          span {
            color: ${props => props.theme.titleColor};
            font-size: 1.5em;
            line-height: 24px;
          }
        }
        .call_to_action:hover{
          background-color: #0C3376;
        }
        .call_to_action {
 
            display: flex;
            align-items: center;
            justify-content: center;
            width: 167px;
            height: 45px;
            border-radius: 23px;
            background-image: linear-gradient(-259deg, #486cae 0%, #2458b6 100%);

          a {
            text-decoration: none;
            color: #fff;
            font-family: "Open Sans";
            font-size: 14px;
            font-weight: 400;
            letter-spacing: -0.35px;
            cursor: pointer;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            
          }
        }
      }


`;

export const Services = styled(Element)`
  
   padding: 70px ${({theme}) => theme.contentPaddingDesktop};


    ${({theme}) => theme.mobile`
        padding: 50px ${({theme}) => theme.contentPaddingMobile};
    `}
    
    ${({theme}) => theme.tablet`
         padding: 50px ${({theme}) => theme.contentPaddingTablet};
    `}
   
      .services {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 15px;


        ${({theme}) => theme.mobile`
            grid-template-columns: 1fr;
        `}
            
        ${({theme}) => theme.tablet`
            grid-template-columns: 1fr;
        `}
            


        .service{
          height: 265px;
          background: ${props => props.theme.serviceCardBg};
          border-radius: 5px;
          user-select: none;

          .title {
            margin-top: 45px;
            margin-left: 45px;

            
            color: #050505;
            font-family: "Open Sans";
            font-size: 26px;
            font-weight: 300;
            line-height: 39px;
            
            b{
              font-family: inherit;
              font-weight: 400;
            }

          }
        }
        .service:hover{
          cursor: pointer;
          opacity: .9;
        }
        .service-web {
          background-repeat: no-repeat;
          background-size: 260px;
          background-position: calc(100% + 54px) 128px;
        }
        .service-website{
          background-repeat: no-repeat;
          background-size: 320px;
          background-position: calc(100% + 120px) 116px;
        }
        .service-bot{
          background-repeat: no-repeat;
          background-size: 120px;
          background-position: calc(100% + 13px) 100px;
        }
        .service-extensions{
          background-repeat: no-repeat;
          background-size: 210px;
          background-position: calc(100% + 86px) 132px;
        }
        .service-software{
          background-repeat: no-repeat;
          background-size: 140px;
          background-position: calc(100% + 19px) 120px;
        }
        .service-maintenance{
          background-repeat: no-repeat;
          background-size: 215px;
          background-position: calc(100% + 59px) 113px;
        }
      }

`;

export const Technologies = styled.div`

      background: #eef0f2;
      padding: 70px ${props => props.theme.contentPaddingDesktop};
      
      


    ${({theme}) => theme.mobile`
        padding: 50px ${({theme}) => theme.contentPaddingMobile};
    `}
    
    ${({theme}) => theme.tablet`
         padding: 50px ${({theme}) => theme.contentPaddingTablet};
    `}
    
   
    .sub_title{
        opacity: 0.6;
        color: #6a717c;
        font-family: "Open Sans";
        font-size: 15px;
        font-style: italic;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 34px;
        text-align: center;
    }

      .slick-slider{
       

        .slick-slide{

          > div{

            .devicon:focus{
              outline: none;
            }

            .devicon{
              border-top: 0.5px solid #d5d9de;
              border-left: 0.5px solid #d5d9de;
              font-size: 50px;
              text-align: center;
              padding: 10px 0;
              
              
            ${({theme}) => theme.mobile`
                font-size: 40px;
            `}
            
            ${({theme}) => theme.tablet`
                 font-size: 45px;
            `}



            }
            
            .devicon:not(.colored){
              color: #7d8793;
            }
           

            .devicon:last-child{
              border-right: 0.5px solid #d5d9de;
              
            }

          }
          
          > div:first-child{
          
            .devicon:first-child{
              border-radius: 6px 0 0 0;
            }
            .devicon:last-child{
              border-radius: 0 6px 0 0;
            }
          
          
          }

          > div:last-child{
            .devicon {
              border-bottom: 0.5px solid #d5d9de;
             
            }
            .devicon:first-child{
              border-radius: 0 0 0 6px;
            }
            .devicon:last-child{
              border-radius: 0 0 6px 0;
            }
          }


        }


        .slick-slide > div{
          padding: 0 1px;
        }

      }
      

      .technologies {
        display: grid;
        grid-template-rows: 1fr 1fr;

        .technology {
          border: 0.5px solid #d5d9de;
          display: grid;
          align-content: center;
          justify-content: center;
          height: 120px;

    
          
          ${({theme}) => theme.mobile`
                 height: auto;
            `}

          span {
            color: #000;
            font-size: 5em;
            
            
             ${({theme}) => theme.tablet`
                 font-size: 60px;
            `}


          }

          .title {
            margin-top: 45px;
            margin-left: 45px;
            font-size: 20px;
          }
        }
      }
  

`;

export const Portfolio = styled.div`

      padding: 70px ${props => props.theme.contentPaddingDesktop};
      padding-bottom: 0;
      
      
          ${({theme}) => theme.mobile`
        padding: 50px ${({theme}) => theme.contentPaddingMobile};
        padding-bottom: 0;
    `}
    
    ${({theme}) => theme.tablet`
         padding: 50px ${({theme}) => theme.contentPaddingTablet};
         padding-bottom: 0;
    `}



    .menu {
     
      display: flex;
      align-items:flex-start;
      text-align: left;
      justify-content: space-between;
      margin-bottom: 15px;
      
      
      
    ${({theme}) => theme.mobile`
                flex-flow: column;
        justify-content: center;
        align-items: center;
    `}
    
    ${({theme}) => theme.tablet`
                 flex-flow: column;
        justify-content: center;
        align-items: center;
    `}


      .item.active {
        
        color: #1f4c9d;
        font-family: "Open Sans";
        font-weight: 400;

        
      }
      .item {
      
        cursor: pointer;
        padding: 5px 0;
        
 
        color: #7d8794;
        font-family: "Open Sans";
        font-size: 14px;
        font-weight: 300;
        line-height: 39px;


        
      }
    }



`;

export const PeopleAboutUs = styled.div`


 
    
      padding: 50px ${props => props.theme.contentPaddingDesktop};
      
      
        ${({theme}) => theme.mobile`
            padding: 50px ${({theme}) => theme.contentPaddingMobile};
        `}
        
        ${({theme}) => theme.tablet`
             padding: 50px ${({theme}) => theme.contentPaddingTablet};
        `}

      .slick-active:first-child{
      
          display: flex!important;
          //justify-content: ;
      
        > div{
          
        }
        
      }
      
                .slick-track{
    display: flex;

    .slick-slide{
        display: flex;
        height: auto;
        align-items: center; //optional
        justify-content: center; //optional
        
        >div{
          height: 100%;
          width: 100%;
        }
    }
}
   
    .persons{
      display: grid!important;
      grid-template-columns: 1fr 1fr;
      grid-gap: 19px;
      outline: none;
    }
    
    
     

      .person {

          display: block!important;
          height: 100%;
          border: 0 solid red;
          outline: none;
          background-color: #f2f4f5;
          //background-color: red;
          border-radius: 5px;
          background-repeat: no-repeat;
          background-size: 200px;
          background-position-x: right;
          background-position-y: bottom;
          width: calc(100% - 10px)!important;
          padding: 39px 37px;
          margin: 5px;
          
          .personInfo {
              display: flex;
              align-items: flex-start;
              text-align: right;
              justify-content: space-between;
              flex-direction: row;
              width: 100%;
            
            .client_photo, .client_meta{
              height: 100%;
             }
          
          .client_photo{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-size: cover;
            background-position: center;
          }

    
          div {
          
          position: relative;
          
            .personName {
              font-weight: 600;
              font-size: 15px;
              letter-spacing: 0.15px;
              line-height: 24px;
              font-family: "Open Sans";
              
                
              
            }
    
            .personPosition {
              font-family: "Open Sans";
              line-height: 24px;
              font-size: 15px;
              color: #1F4C9D;
              font-style: italic;
              
            }
    
            .personCompany {
              font-weight: 600;
              font-family: "Open Sans";
              font-size: 20px;
            }
          }
          
          .client_meta:before{
               content: "\\201D";
                opacity: 0.1;
                color: #7d8794;
                font-size: 230px;
                font-weight: 400;
                position: absolute;
                top: -55px;
                right: -10px;
            }
            
          }
    }
          .personReview {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 34px;
            color: #7d8794;
            font-family: "Open Sans";
            font-size: 15px;
            font-style: italic;
            line-height: 24px;
            letter-spacing: 0.15px;
    
          p{
          font-family: "Open Sans";
          }
          
          }

          .title {
            margin-top: 45px;
            margin-left: 45px;
            font-size: 20px;
          }
          
          


        }`;

export const SupportForm = styled.div`


    
      padding: 50px ${props => props.theme.contentPaddingDesktop};
      
      
        ${({theme}) => theme.mobile`
            padding: 50px ${({theme}) => theme.contentPaddingMobile};
        `}
        
        ${({theme}) => theme.tablet`
             padding: 50px ${({theme}) => theme.contentPaddingTablet};
        `}


    .subscription {
      padding: 40px 55px;
      border: 7px solid #f2f4f5;
     
      border-radius: 10px;
      background-repeat: no-repeat;
      background-position: bottom right;
      background-size: 300px;

      > .title {
        color: #000000;
        font-family: "Open Sans";
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        font-weight: 400;
        margin-bottom: 45px;
        font-size: 26px;
        line-height: 39px;

        b {
            font-family: inherit;
            font-weight: 600;
        
        }

        i {
        font-family: inherit;
          font-style: normal;
          font-weight: 300;
        }
      }

      > .form form {
        display: flex;

        input {
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          outline: none;
          height: 45px;
          border: 1px solid #d5d9de;
          border-right: 0;
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
          padding-left: 25px;
          padding-right: 25px;
          width: 240px;
          

            opacity: 0.6;
            color: #000000;
            font-family: "Open Sans";
            
            font-weight: 400;
            
            letter-spacing: -0.35px;
          
        }

        button {
          height: 45px;
          background-image: -moz-linear-gradient(-11deg, rgb(72,108,174) 0%, rgb(36,88,182) 100%);
          background-image: -webkit-linear-gradient(-11deg, rgb(72,108,174) 0%, rgb(36,88,182) 100%);
          background-image: -ms-linear-gradient(-11deg, rgb(72,108,174) 0%, rgb(36,88,182) 100%);
          color: #fff;
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          outline: none;
          padding: 0 25px;
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
          border: none;
          

            font-family: "Open Sans";
            
            font-weight: 400;
            
            letter-spacing: -0.35px;
          
          
        }
      }
    }


  
`;

export const Pagination = styled.div`


  ul{
  padding: 0;
    display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  user-select: none;
  }


  li:first-child{
      a{
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
      }
  }
  
  li:last-child{
      a{
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
      }
  }
  
  .disabled{
  a{
  cursor: not-allowed;
  }
  }

  li{
    display: flex;
    height: 40px;
    font-family: 'Open Sans';

    a{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      outline: none;
      cursor: pointer;
      font-family: inherit;
      border: 1px solid #ddd;
      background-color: #fff;
      margin-left: -1px;
      
    }

  }

  li.active{
    a{
      color: #fff;
      background: #265ab5;
      border-color: #265ab5;
      cursor: inherit;
      font-family: inherit;
      font-weight: 600;
    }
    a:hover{
      background: #0C3376;
      border-color: #0C3376;
    }
  }

  
`;




export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeCategory: "Bot Development",
            projects: [],
            offset: 0,
            perPage: 2,
            pageCount: 0,
            forcePage: 0,
            reviews: [],
            technologies: [

                // Page 1 Row 1
                'angularjs-plain colored',
                'react-original colored',
                'vuejs-plain colored',

                'html5-plain colored',
                'css3-plain colored',
                'd3js-plain colored',

                'webpack-plain colored',
                'grunt-plain colored',
                'gulp-plain colored colored',
                'babel-plain',

                // Page 1 Row 2
                'php-plain',
                'laravel-plain colored',
                'wordpress-plain colored',
                'mocha-plain colored',
                'mongodb-plain colored',
                'postgresql-plain colored',
                'nodejs-plain colored',
                'express-original colored',
                'docker-plain colored',
                'jasmine-plain colored',

                // Page 2 Row 1
                'meteor-plain colored',
                'django-plain colored',
                'python-plain-wordmark colored',
                'backbonejs-plain-wordmark colored',
                'bower-plain colored',
                'redis-plain-wordmark',
                'sequelize-plain colored',
                'krakenjs-plain colored',
                'sass-original colored',
                'less-plain-wordmark colored',

                // Page 2 Row 2
                'nginx-original colored',
                'yii-plain-wordmark colored',
                'jquery-plain-wordmark colored',
                'apache-plain-wordmark colored',
                'zend-plain-wordmark colored',
                'oracle-original colored',
                'mysql-plain colored',
                'ssh-plain-wordmark',
                'foundation-plain-wordmark colored',
                'bootstrap-plain colored',



                // Page 3 Row 1
                'photoshop-plain colored',
                'illustrator-plain colored',
                'gimp-plain colored',

                'phpstorm-plain colored',
                'pycharm-plain colored',
                'webstorm-plain colored',
                'jetbrains-plain colored',

                'atom-original colored',
                'sourcetree-plain colored',
                'bitbucket-plain colored',
                'confluence-plain colored',

                // Page 3 Row 2
                'amazonwebservices-original colored',
                'heroku-original colored',

                'git-plain colored',
                'gitlab-plain colored',
                'github-plain',

                'trello-plain colored',
                'slack-plain colored',

                'ubuntu-plain colored',
                'vim-plain colored',



            ]
        };

    }

    async componentDidMount() {

        const reviews = await ReviewService.list();
        this.setState({ reviews });

        this.props.dispatch( projectActions.listAllProjectsWebsite() );
    }

    setCategory = (category, scroll) => {

        const { projects=[] } = this.props;


        this.setState({ activeCategory: category, forcePage: 0 }, () => {

            if(scroll){
                scroller.scrollTo('our_portfolio', {
                    duration: 1000,
                    delay: 100,
                    smooth: true,
                    offset: 50

                });
            }

            this.filter(category, projects, 0);

        });

    };

    componentWillReceiveProps(nextProps) {

        const { projects=[] } = nextProps;
        const { activeCategory } = this.state;

       this.filter(activeCategory, projects, 0);



    }

    handlePageClick = data => {

        const { perPage, activeCategory } = this.state;
        const { projects } = this.props;

        let selected = data.selected;
        let offset = Math.ceil(selected * perPage);

        this.setState({ forcePage: selected }, () => {
            this.filter(activeCategory, projects, offset);
        });


    };

    filter = (activeCategory, projects, offset) => {
        const { perPage } = this.state;
        const appliedCategory = projects.filter(({project}) => {
            return project.services.includes(activeCategory);
        });


        this.setState({
            pageCount: appliedCategory.length / perPage,
            projects: appliedCategory.slice(offset).slice(0, perPage)
        });


    };

    generateReviewView(review){
        const photo = _.get(review, "client.photo") || "https://botsculptors.s3.amazonaws.com/website/avatar_128x128.png";
        const name = _.get(review, "client.name");
        const title = _.get(review, "client.title");
        const company = _.get(review, "client.company");
        const reviewText = _.get(review, "review");

        return (
            <div key={_.get(review, "id")} className="person">
                <div className="personInfo">
                    <div className="client_photo" style={ { backgroundImage: `url("${photo}")`} }/>
                    <div className="client_meta">
                        <span className="personName">{name}<br/></span>
                        <span className="personPosition">{title}<br/></span>
                        <span className="personCompany">{company}</span>
                    </div>
                </div>
                <div className="personReview" dangerouslySetInnerHTML={ { __html: reviewText }} />
            </div>
        );
    }

    render() {

        const { technologies, reviews } = this.state;

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            speed: 500,
            rows: 2,
            slidesPerRow: 10,
            arrows: false,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesPerRow: 8
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesPerRow: 5
                    }
                }
            ]


        };

        const settingsForReviewsSlider = {
            infinite: true,
            adaptiveHeight: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        };

        const { activeCategory, projects, pageCount=0, forcePage } = this.state;



        return (

            <Fragment>

                <Header {...this.props} />

                <Main>

                        <SliderBlock style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/background.jpg)` } }>

                            <div className="info">

                                <div className="slogan">Quality<span>.</span> Efficiency<span>.</span> Power<span>.</span></div>
                                <div className="title">Converting ideas into real-life projects.</div><br/>
                                <div className="call_to_action">
                                    <Link
                                        offset={-60}
                                        to="services"
                                        smooth={true}
                                        duration={1000}
                                        delay={100}
                                        className="btn-gradient">Our services</Link> </div>

                            </div>
                            <div className="pagination"></div>

                        </SliderBlock>


                        <Services>

                            <Title id='services' marginBottom={'30'} backText='Services' frontText='Services' />

                            <div className="services">

                                <div
                                    className="service service-web"
                                    style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/WebDesign.png)` } }
                                    onClick={() => {this.setCategory('Web Design', true)}}>

                                    <div className="title">Web <br/><b>Design</b></div>
                                </div>

                                <div
                                    className="service service-website"
                                    style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/WebsiteDevelopment.png)` } }
                                    onClick={() => {this.setCategory('Website Development', true)}}>

                                    <div className="title">Website <br/><b>Development</b></div>
                                </div>

                                <div
                                    className="service service-bot"
                                    style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/BotDevelopment.png)` } }
                                    onClick={() => {this.setCategory('Bot Development', true)}}>

                                    <div className="title">Bot <br/><b>Development</b></div>
                                </div>

                                <div
                                    className="service service-extensions"
                                    style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/ChromeExtensions.png)` } }
                                    onClick={() => {this.setCategory('Chrome Extensions', true)}}>

                                    <div className="title">Chrome <br/><b>Extensions</b></div>
                                </div>

                                <div
                                    className="service service-software"
                                    style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/SoftwareDevelopment.png)` } }
                                    onClick={() => {this.setCategory('Software Development', true)}}>

                                    <div className="title">Software <br/><b>Development</b></div>
                                </div>

                                <div
                                    className="service service-maintenance"
                                    style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/Maintenance.png)` } }
                                    onClick={() => {this.setCategory('Maintenance', true)}}>

                                    <div className="title">Product<br/><b>Maintenance</b></div>
                                </div>


                            </div>


                        </Services>

                        <Technologies className="techs">

                            <Title id='technologies' marginBottom={'30'} backText='Technologies' frontText='Technologies' />

                            <div className='sub_title'>We drive most popular technologies<br/> and frameworks</div>

                            <Slider {...settings}>

                                {technologies.map((technology, t) =>

                                    <div key={t} className={`devicon devicon-${technology}`}></div>

                                )}


                            </Slider>


                        </Technologies>

                    {/*
                        <Portfolio className="our_portfolio">

                            <Title id='portfolio' marginTop={0} marginBottom={'30'} backText='Portfolio' frontText='Portfolio' />

                            <div className="menu">

                                <div
                                    className={`item ${activeCategory === 'Web Design' ? 'active' : ''}`}
                                    onClick={() => {this.setCategory('Web Design')}}>Web Design</div>
                                <div
                                    className={`item ${activeCategory === 'Website Development' ? 'active' : ''}`}
                                    onClick={() => {this.setCategory('Website Development')}}>Website Development</div>

                                <div
                                    className={`item ${activeCategory === 'Bot Development' ? 'active' : ''}`}
                                    onClick={() => {this.setCategory('Bot Development')}}>Bot Development</div>

                                <div
                                    className={`item ${activeCategory === 'Chrome Extensions' ? 'active' : ''}`}
                                    onClick={() => {this.setCategory('Chrome Extensions')}}>Chrome Extensions</div>

                                <div
                                    className={`item ${activeCategory === 'Software Development' ? 'active' : ''}`}
                                    onClick={() => {this.setCategory('Software Development')}}>Software Development</div>


                            </div>


                            <Projects projects={projects} activeCategory={activeCategory}/>

                            {pageCount > 0 ? <Pagination><ReactPaginate
                                nextLabel={<i className="material-icons">keyboard_arrow_right</i>}
                                previousLabel={<i className="material-icons">keyboard_arrow_left</i>}
                                forcePage={forcePage}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                subContainerClassName={'pages pagination'}
                                activeClassName={'active'}
                            /></Pagination> : ''}

                        </Portfolio>
                    */}

                        <PeopleAboutUs>
                            <Title id='portfolio' marginTop={0} marginBottom={'30'} backText='People about us' frontText='People about us' />

                            <Slider {...settingsForReviewsSlider}>
                                {reviews.map(review => this.generateReviewView(review))}
                            </Slider>

                        </PeopleAboutUs>


                        {/* We're trusted by
                <div className="we_are_trusted_by">

                    <div className="title">
                        <span className="back_text">Trusted</span>
                        <span className="front_text">Trusted</span>
                    </div>

                    <Slider {...settingsForTrustSlider} >
                      <div className="companies">

                        <div className="company" >
                          <img src="https://s3.amazonaws.com/botsculptors/website/CompanyLogopng.png" alt="company"></img>
                          <span>Ebay</span>
                        </div>

                      </div>
                      <div className="companies">

                        <div className="company" >
                          <img src="https://s3.amazonaws.com/botsculptors/website/CompanyLogopng.png" alt="company"></img>
                          <span>Ebay</span>
                        </div>

                      </div>
                      <div className="companies">

                        <div className="company">
                          <img src="https://s3.amazonaws.com/botsculptors/website/CompanyLogopng.png" alt="company"></img>
                          <span>Ebay</span>
                        </div>

                      </div>
                      <div className="companies">

                        <div className="company">
                          <img src="https://s3.amazonaws.com/botsculptors/website/CompanyLogopng.png" alt="company"></img>
                          <span>Ebay</span>
                        </div>

                      </div>
                      <div className="companies">

                        <div className="company" >
                          <img src="https://s3.amazonaws.com/botsculptors/website/CompanyLogopng.png" alt="company"></img>
                          <span>Ebay</span>
                        </div>

                      </div>
                      <div className="companies">

                        <div className="company" >
                          <img src="https://s3.amazonaws.com/botsculptors/website/CompanyLogopng.png" alt="company"></img>
                          <span>Ebay</span>
                        </div>

                      </div>
                      <div className="companies">

                        <div className="company" >
                          <img src="https://s3.amazonaws.com/botsculptors/website/CompanyLogopng.png" alt="company"></img>
                          <span>Ebay</span>
                        </div>

                      </div>
                      <div className="companies">

                        <div className="company" >
                          <img src="https://s3.amazonaws.com/botsculptors/website/CompanyLogopng.png" alt="company"></img>
                          <span>Ebay</span>
                        </div>

                      </div>


                    </Slider>



                </div>


                        {/* We're featured by
                <div className="we_are_featured_by">

                    <div className="title">
                        <span className="back_text">People About Us</span>
                        <span className="front_text"></span>
                    </div>

                    <Slider {...settingsForReviewsSlider} >
                        <div className="persons">

                          <div className="person">
                                <div className="personInfo">
                                  <img src="https://s3.amazonaws.com/botsculptors/website/person.png"alt="person" ></img>
                                  <div>
                                    <span className="personName">Литвинов Евгений<br/></span>
                                    <span className="personPosition">Арт-директор компании<br/></span>
                                    <span className="personCompany">P&B</span>
                                  </div>
                                </div>
                                <div className="personReview">
                                  <p>Идейные соображения высшего порядка, а также рамки и место обучения кадров играет важную роль в формировании направлений прогрессивного развития. Разнообразный и богатый опыт начало повседневной работы по формированию позиции способствует подготовки и реализации систем массового участия.</p>
                                </div>
                              </div>
                        </div>
                        <div className="persons">

                          <div className="person">
                                <div className="personInfo">
                                  <img src="https://s3.amazonaws.com/botsculptors/website/person.png" alt="person" ></img>
                                  <div>
                                    <span className="personName">Литвинов Евгений<br/></span>
                                    <span className="personPosition">Арт-директор компании<br/></span>
                                    <span className="personCompany">P&B</span>
                                  </div>
                                </div>
                                <div className="personReview">
                                  <p>Идейные соображения высшего порядка, а также рамки и место обучения кадров играет важную роль в формировании направлений прогрессивного развития. Разнообразный и богатый опыт начало повседневной работы по формированию позиции способствует подготовки и реализации систем массового участия.</p>
                                </div>
                              </div>
                        </div>
                        <div className="persons">

                          <div className="person">
                                <div className="personInfo">
                                  <img src="https://s3.amazonaws.com/botsculptors/website/person1.png" alt="person" ></img>
                                  <div>
                                    <span className="personName">Абдурахман Абдурахманович<br/></span>
                                    <span className="personPosition">Арт-директор компании<br/></span>
                                    <span className="personCompany">P&B</span>
                                  </div>
                                </div>
                                <div className="personReview">
                                  <p>Идейные соображения высшего порядка, а также рамки и место обучения кадров играет важную роль в формировании направлений прогрессивного развития. Разнообразный и богатый опыт начало повседневной работы по формированию позиции способствует подготовки и реализации систем массового участия.</p>
                                </div>
                              </div>
                        </div>
                        <div className="persons">

                          <div className="person">
                                <div className="personInfo">
                                  <img src="https://s3.amazonaws.com/botsculptors/website/person.png" alt="person" ></img>
                                  <div>
                                    <span className="personName">Литвинов Евгений<br/></span>
                                    <span className="personPosition">Арт-директор компании<br/></span>
                                    <span className="personCompany">P&B</span>
                                  </div>
                                </div>
                                <div className="personReview">
                                  <p>Идейные соображения высшего порядка, а также рамки и место обучения кадров играет важную роль в формировании направлений прогрессивного развития. Разнообразный и богатый опыт начало повседневной работы по формированию позиции способствует подготовки и реализации систем массового участия.</p>
                                </div>
                              </div>
                        </div>

                    </Slider>


                </div>
*/}


                        {/* Subscribe */}

                    {/*<SupportForm>*/}

                    {/*    <div className="subscription"  style={{backgroundImage: "url(https://s3.amazonaws.com/botsculptors/website/phone.png)"}}>*/}

                    {/*        <div className="title">*/}
                    {/*            <b>Still have questions?</b>*/}
                    {/*            <i>We're ready to support you 24/7!</i>*/}
                    {/*        </div>*/}

                    {/*        <div className="form" >*/}
                    {/*            <form action="" method="POST">*/}
                    {/*                <input type="text" placeholder="E-mail"/>*/}
                    {/*                <button>Send Request</button>*/}
                    {/*            </form>*/}
                    {/*        </div>*/}

                    {/*    </div>*/}

                    {/*</SupportForm>*/}




                </Main>

                <Footer />

            </Fragment>

        );
    }


}

const mapStateToProps = (state, ownProps) => {

    return Object.assign({}, ownProps, {
        projects: state.projectReducer.websiteProjects,
    });


};

export default connect(mapStateToProps)(Home);