import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Link, Element, scroller } from 'react-scroll';


import Slider from 'react-slick';

import { Projects } from './Components/Projects.js';

import { Header, Main, Title, Footer } from "../../common";

import { projectActions } from '../../../actions';

import ReactPaginate from "react-paginate";





import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import styled from 'styled-components';




export const SliderBlock = styled.div`

      display: flex;
      align-items: center;
      
      height: 656px;
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

        .title {
          font-size: 36px;
          font-family: MainFontUltralight;

        }

        .slogan {
          font-size: 32px;
          font-family: MainFontThin;
          
            ${({theme}) => theme.mobile`
                display: none;
            `}

          span {
            color: ${props => props.theme.sloganColor2};
            font-size: 1.5em;
            line-height: 24px;
          }
        }
        .call_to_action:hover{
          background-color: #0C3376;
        }
        .call_to_action {
          margin-top: 25px;
          display: flex;
          text-align: center;
          align-items: center;
          justify-content: center;
          width: 180px;
          height: 45px;
          background-color: #265ab5;
          border-radius: 50px;

          a {
            text-decoration: none;
            font-size: 22px;
            color: #fff;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
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
            font-size: 20px;
            font-family: MainFontThin;


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

      .slick-slider{
        margin-top: 50px;

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

            .devicon:last-child{
              border-right: 0.5px solid #d5d9de;
            }

          }

          > div:last-child{
            .devicon {
              border-bottom: 0.5px solid #d5d9de;
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
      
      
          ${({theme}) => theme.mobile`
        padding: 50px ${({theme}) => theme.contentPaddingMobile};
    `}
    
    ${({theme}) => theme.tablet`
         padding: 50px ${({theme}) => theme.contentPaddingTablet};
    `}



    .menu {
      font-size: 16px;
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


      .active {
        color: #1f4c9d;
      }
      .item {
        cursor: pointer;
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


    a{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      outline: none;
      cursor: pointer;
      font-family: MainFontThin;
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
                'gulp-plain colored',
                'babel-plain colored',

                // Page 1 Row 2
                'php-plain colored',
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

    componentDidMount() {
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


    render() {

        const { technologies } = this.state;

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

                            <Title id='services' backText='Services' frontText='Services' />

                            <div className="services">

                                <div
                                    className="service service-web"
                                    style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/WebDesign.png)` } }
                                    onClick={() => {this.setCategory('Web Design', true)}}>

                                    <div className="title">Web <br/>Design</div>
                                </div>

                                <div
                                    className="service service-website"
                                    style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/WebsiteDevelopment.png)` } }
                                    onClick={() => {this.setCategory('Website Development', true)}}>

                                    <div className="title">Website <br/>Development</div>
                                </div>

                                <div
                                    className="service service-bot"
                                    style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/BotDevelopment.png)` } }
                                    onClick={() => {this.setCategory('Bot Development', true)}}>

                                    <div className="title">Bot <br/>Development</div>
                                </div>

                                <div
                                    className="service service-extensions"
                                    style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/ChromeExtensions.png)` } }
                                    onClick={() => {this.setCategory('Chrome Extensions', true)}}>

                                    <div className="title">Chrome <br/>Extensions</div>
                                </div>

                                <div
                                    className="service service-software"
                                    style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/SoftwareDevelopment.png)` } }
                                    onClick={() => {this.setCategory('Software Development', true)}}>

                                    <div className="title">Software <br/>Development</div>
                                </div>

                                <div
                                    className="service service-maintenance"
                                    style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/Maintenance.png)` } }
                                    onClick={() => {this.setCategory('Maintenance', true)}}>

                                    <div className="title">Maintenance</div>
                                </div>


                            </div>


                        </Services>

                        <Technologies className="techs">

                            <Title id='technologies' backText='Technologies' frontText='Technologies' />

                            <Slider {...settings}>

                                {technologies.map((technology, t) =>

                                    <div key={t} className={`devicon devicon-${technology}`}></div>

                                )}


                            </Slider>


                        </Technologies>


                        <Portfolio className="our_portfolio">

                            <Title id='portfolio' backText='Portfolio' frontText='Portfolio' />

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

                                <div
                                    className={`item ${activeCategory === 'Maintenance' ? 'active' : ''}`}
                                    onClick={() => {this.setCategory('Maintenance')}}>Maintenance</div>

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
                */}

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

                        {/*<div className="subscription" style={{backgroundImage: "url(https://s3.amazonaws.com/botsculptors/website/phone.png)"}}>*/}

                        {/*<div className="title">*/}
                        {/*<b>Still have questions?</b>*/}
                        {/*<i>We're ready to support you 24/7!</i>*/}
                        {/*</div>*/}
                        {/*<div className="form">*/}
                        {/*<form action="" method="POST">*/}
                        {/*<input type="text" placeholder="E-mail"/>*/}
                        {/*<button>Send Request</button>*/}
                        {/*</form>*/}
                        {/*</div>*/}

                        {/*</div>*/}


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