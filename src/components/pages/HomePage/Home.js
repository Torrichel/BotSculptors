import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Link, Element, scroller } from 'react-scroll';


import Slider from 'react-slick';

import { Projects } from './Components/Projects.js';

import { Header, Footer } from "../../common";

import { projectActions } from '../../../actions';

import ReactPaginate from "react-paginate";





export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeCategory: "Bot Development",
            projects: [],
            offset: 0,
            perPage: 2,
            pageCount: 0,
            forcePage: 0
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

        const settingsForReviewsSlider = {
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        };
        const settingsForTrustSlider = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };
        const settingsForTechnologiesSlider = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 6
        };

        const { activeCategory, projects=[], pageCount=0, forcePage } = this.state;


        return (

            <Fragment>

                <Header {...this.props} />

                <main>
                    <div className="mainIn">

                        {/* Slider */}
                        <div className="slider" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/background.jpg)` } }>

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
                                        className="btn-gradient">Services</Link> </div>

                            </div>
                            <div className="pagination"></div>

                        </div>

                        {/* Our Services */}
                        <Element className="our_services" name="our_services">

                            <div className="title" id='services'>
                                <span className="back_text">Services</span>
                                <span className="front_text">Services</span>
                            </div>

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

                                    <div className="title">Maintenance</div>
                                </div>


                            </div>


                        </Element>

                        {/* Technologies */}
                        <div className="techs">

                            <div className="title">
                                <span className="back_text">Technologies</span>
                                <span className="front_text">Technologies</span>
                            </div>

                            <div className="slogan">
                                We drive most popular technologies<br/> and frameworks
                            </div>
                            <Slider {...settingsForTechnologiesSlider} >
                                <div className="technologies">
                                    <div className="technology">
                                        <span className="devicons devicons-python" alt="technology"></span>
                                    </div>
                                    <div className="technology">
                                        <span className="devicons devicons-github_badge" alt="technology"></span>
                                    </div>
                                </div>

                                <div className="technologies">
                                    <div className="technology">
                                        <span className="devicons devicons-javascript" alt="technology"></span>
                                    </div>
                                    <div className="technology">
                                        <span className="devicons devicons-angular" alt="technology"></span>
                                    </div>
                                </div>
                                <div className="technologies">
                                    <div className="technology">
                                        <span className="devicons devicons-backbone" alt="technology"></span>
                                    </div>
                                    <div className="technology">
                                        <span className="devicons devicons-react" alt="technology"></span>
                                    </div>
                                </div>
                                <div className="technologies">
                                    <div className="technology">
                                        <span className="devicons devicons-github_badge" alt="technology"></span>
                                    </div>
                                    <div className="technology">
                                        <span className="devicons devicons-php" alt="technology"></span>
                                    </div>
                                </div>
                                <div className="technologies">
                                    <div className="technology">
                                        <span className="devicons devicons-html5_connectivity" alt="technology"></span>
                                    </div>
                                    <div className="technology">
                                        <span className="devicons devicons-html5" alt="technology"></span>
                                    </div>
                                </div>
                                <div className="technologies">
                                    <div className="technology">
                                        <span className="devicons devicons-css3" alt="technology"></span>
                                    </div>
                                    <div className="technology">
                                        <span className="devicons devicons-linux" alt="technology"></span>
                                    </div>
                                </div>
                                <div className="technologies">
                                    <div className="technology">
                                        <span className="devicons devicons-gulp" alt="technology"></span>
                                    </div>
                                    <div className="technology">
                                        <span className="devicons devicons-dropbox" alt="technology"></span>
                                    </div>
                                </div>
                                <div className="technologies">
                                    <div className="technology">
                                        <span className="devicons devicons-visualstudio" alt="technology"></span>
                                    </div>
                                    <div className="technology">
                                        <span className="devicons devicons-swift" alt="technology"></span>
                                    </div>
                                </div>
                                <div className="technologies">
                                    <div className="technology">
                                        <span className="devicons devicons-unity_small" alt="technology"></span>
                                    </div>
                                    <div className="technology">
                                        <span className="devicons devicons-bootstrap" alt="technology"></span>
                                    </div>
                                </div>


                            </Slider>


                        </div>

                        {/* Our Portfolio */}
                        <div className="our_portfolio">

                            <div className="title"  id='portfolio'>
                                <span className="back_text">Portfolio</span>
                                <span className="front_text">Portfolio</span>
                            </div>

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

                            {pageCount > 0 ? <ReactPaginate
                                nextLabel={<i className="material-icons">keyboard_arrow_right</i>}
                                previousLabel={<i className="material-icons">keyboard_arrow_left</i>}
                                forcePage={forcePage}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={'pagination'}
                                subContainerClassName={'pages pagination'}
                                activeClassName={'active'}
                            /> : ''}

                        </div>

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

                    </div>
                </main>

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
