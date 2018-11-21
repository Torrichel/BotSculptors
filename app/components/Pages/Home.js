import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


import Slider from "react-slick";


export class Home extends React.Component {

    constructor(props) {
        super(props);

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

                    <div className="title">
                        <span className="back_text">Services</span>
                        <span className="front_text">Services</span>
                    </div>

                    <div className="services">

                        <div className="service" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/WebDesign.png)` } }>
                            <div className="title">Web <br/><b>Design</b></div>
                        </div>

                        <div className="service" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/WebsiteDevelopment.png)` } }>
                            <div className="title">Website <br/><b>Development</b></div>
                        </div>

                        <div className="service" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/BotDevelopment.png)` } }>
                            <div className="title">Bot <br/><b>Development</b></div>
                        </div>

                        <div className="service" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/ChromeExtensions.png)` } }>
                            <div className="title">Chrome <br/><b>Extensions</b></div>
                        </div>

                        <div className="service" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/SoftwareDevelopment.png)` } }>
                            <div className="title">Software <br/><b>Development</b></div>
                        </div>

                        <div className="service" style={ { backgroundImage: `url(https://s3.amazonaws.com/botsculptors/website/tech.png)` } }>
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
                            <img src={technologyImg} alt="company"></img>
                          </div>
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                      </div>

                      <div className="technologies">
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                      </div>
                      <div className="technologies">
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                      </div>
                      <div className="technologies">
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                      </div>
                      <div className="technologies">
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                      </div>
                      <div className="technologies">
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                      </div>
                      <div className="technologies">
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                      </div>
                      <div className="technologies">
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                      </div>
                      <div className="technologies">
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                          <div className="technology">
                            <img src={technologyImg} alt="company"></img>
                          </div>
                      </div>


                      </Slider>


                </div>

                {/* Our Portfolio */}
                <div className="our_portfolio">

                    <div className="title">
                        <span className="back_text">Portfolio</span>
                        <span className="front_text">Portfolio</span>
                    </div>

                    <div className="menu">
                        <div className="item">Web Design</div>
                        <div style={ { color: `#1F4C9D` } } className="item">Website Development</div>
                        <div className="item">Bot Development</div>
                        <div className="item">Chrome Extensions</div>
                        <div className="item">Software Development</div>
                        <div className="item">Maintenance</div>
                    </div>

                    <div className="projects">

                        <div className="project">
                            <div className="category"><p>Website Development</p></div>
                            <div className="title"><b>Consulting</b><br/>portal development</div>

                        </div>

                        <div className="project" >

                            <div className="category"><p>Website Development</p></div>
                            <div className="title"><b>Consulting</b><br/>portal development</div>

                        </div>

                        <div className="project" >

                            <div className="category"><p>Website Development</p></div>
                            <div className="title"><b>Consulting</b><br/>portal development</div>

                        </div>


                        <div className="project" >

                            <div className="category"><p>Website Development</p></div>
                            <div className="title"><b>Consulting</b><br/>portal development</div>

                        </div>

                        <div className="more_projects_btn">
                          <div className="more_projects"><a href="#" className="btn-gradient">More</a> </div>
                        </div>


                    </div>


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
                        <span className="back_text">Featured</span>
                        <span className="front_text">Featured</span>
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
