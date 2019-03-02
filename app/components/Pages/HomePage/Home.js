import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


import Slider from "react-slick";

import {Projects} from './Components/Projects.js'

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
          activeCategory: "Web Design",
        }

        this.categoryChange =  this.categoryChange.bind(this)

    }

    categoryChange (e){
      let category = e.target.dataset.category;
      if (category !== undefined) {
        this.setState({ activeCategory: category });
      }

    }

    render() {
        const technologyImg  = "https://s3.amazonaws.com/botsculptors/website/technologies.png"

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


        return (

            <div>

                {/* Slider */}
                <div className="slider" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/background.png)` } }>

                    <div className="info">

                        <div className="slogan">Quality<span>.</span> Efficiency<span>.</span> Power<span>.</span></div>
                        <div className="title">Converting ideas into real-life projects.</div><br/>
                        <div className="call_to_action"><a href="#" className="btn-gradient">Services</a> </div>

                    </div>
                    <div className="pagination"></div>

                </div>

                {/* Our Services */}
                <div className="our_services">

                    <div className="title" id='services'>
                        <span className="back_text">Services</span>
                        <span className="front_text">Services</span>
                    </div>

                    <div className="services">

                        <div className="service service-web" style={ { backgroundImage: `url(https://i.ibb.co/RgMq957/Web-Design-min.png)` } }>
                            <div className="title">Web <br/><b>Design</b></div>
                        </div>

                        <div className="service service-website" style={ { backgroundImage: `url(https://i.ibb.co/rdfBdyd/Website-Development-min.png)` } }>
                            <div className="title">Website <br/><b>Development</b></div>
                        </div>

                        <div className="service service-bot" style={ { backgroundImage: `url(https://i.ibb.co/kKgwmwd/Bot-Development-min.png)` } }>
                            <div className="title">Bot <br/><b>Development</b></div>
                        </div>

                        <div className="service service-extensions" style={ { backgroundImage: `url(https://i.ibb.co/bsd3RyX/Chrome-Extensions-min.png)` } }>
                            <div className="title">Chrome <br/><b>Extensions</b></div>
                        </div>

                        <div className="service service-software" style={ { backgroundImage: `url(https://i.ibb.co/r74cdV6/Software-Development-min.png)` } }>
                            <div className="title">Software <br/><b>Development</b></div>
                        </div>

                        <div className="service service-maintenance" style={ { backgroundImage: `url(https://i.ibb.co/HnwFXRB/imgonline-com-ua-Resize-96r4yw-V75-YDw-JQ.png)` } }>
                            <div className="title">Maintenance</div>
                        </div>


                    </div>


                </div>

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
                <div   className="our_portfolio">

                    <div className="title"  id='portfolio'>
                        <span className="back_text">Portfolio</span>
                        <span className="front_text">Portfolio</span>
                    </div>

                    <div className="menu" onClick={this.categoryChange}>
                        <div className={ this.state.activeCategory == "Web Design" ? "active item" : "item"}  data-category ="Web Design">Web Design</div>
                        <div className={this.state.activeCategory == "Website Development" ? "active item" : "item"} data-category="Website Development">Website Development</div>
                        <div className={this.state.activeCategory == "Bot Development" ? "active item" : "item"} data-category="Bot Development">Bot Development</div>
                        <div className={this.state.activeCategory == "Chrome Extensions" ? "active item" : "item"} data-category="Chrome Extensions">Chrome Extensions</div>
                        <div className={this.state.activeCategory == "Software Development" ? "active item" : "item"} data-category="Software Development">Software Development</div>
                        <div className={this.state.activeCategory == "Maintenance" ? "active item" : "item"} data-category="Maintenance">Maintenance</div>
                    </div>


                    <Projects activeCategory={this.state.activeCategory}/>



                </div>

                {/* We're trusted by */}
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

                {/* We're featured by */}
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

                {/* Subscribe */}
                <div className="subscription" style={{backgroundImage: "url(https://s3.amazonaws.com/botsculptors/website/phone.png)"}}>

                    <div className="title">
                        <b>Still have questions?</b>
                        <i>We're ready to support you 24/7!</i>
                    </div>
                    <div className="form">
                        <form action="" method="POST">
                            <input type="text" placeholder="E-mail"/>
                            <button>Send Request</button>
                        </form>
                    </div>

                </div>

            </div>



        );
    }



}


export default connect(null)(Home);
