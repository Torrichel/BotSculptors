import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



export class Home extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {



        return (

            <div>

                {/* Slider */}
                <div className="slider" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Slide1.png)` } }>

                    <div className="info">
                        <div className="slogan">Современно<span>.</span> Четко<span>.</span> Эффективно<span>.</span></div>
                        <div className="title">Создаем Ваше Будущее</div>
                        <div className="call_to_action">Наши Услуги</div>
                        <div className="pagination"></div>
                    </div>

                </div>

                {/* Our Services */}
                <div className="our_services">

                    <div className="title">
                        <span className="back_text">НАШИ УСЛУГИ</span>
                        <span className="front_text">НАШИ УСЛУГИ</span>
                    </div>

                    <div className="services">

                        <div className="service" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }>
                            <div className="title">Веб <br/><b>Дизайн</b></div>
                        </div>

                        <div className="service" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebsiteDevelopment.png)` } }>
                            <div className="title">Разработка <br/><b>Сайтов</b></div>
                        </div>

                        <div className="service" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/BotDevelopment.png)` } }>
                            <div className="title">Разработка <br/><b>Ботов</b></div>
                        </div>

                        <div className="service" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/ChromeExtensions.png)` } }>
                            <div className="title">Chrome <br/><b>Extensions</b></div>
                        </div>

                        <div className="service" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/Software.png)` } }>
                            <div className="title">Программное <br/><b>Обеспечение</b></div>
                        </div>

                        <div className="service" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/Maintenance.png)` } }>
                            <div className="title">Техническое <br/><b>Обслуживание</b></div>
                        </div>




                    </div>


                </div>

                {/* Technologies */}
                <div className="techs">

                    <div className="title">
                        <span className="back_text">ТЕХНОЛОГИИ</span>
                        <span className="front_text">ТЕХНОЛОГИИ</span>
                    </div>

                    <div className="slogan">
                        Мы используем только самые последние технологии современного рынка
                    </div>

                    <div className="technologies">

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="technology" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>



                    </div>


                </div>

                {/* Our Portfolio */}
                <div className="our_portfolio">

                    <div className="title">
                        <span className="back_text">НАШЕ ПОРТФОЛИО</span>
                        <span className="front_text">НАШЕ ПОРТФОЛИО</span>
                    </div>

                    <div className="menu">
                        <div className="item">Веб-Дизайн</div>
                        <div className="item">Разработка Сайтов</div>
                        <div className="item">Разработка Ботов</div>
                        <div className="item">Chrome Extensions</div>
                        <div className="item">Программное Обеспечение</div>
                        <div className="item">Техническое Обслуживание</div>
                    </div>

                    <div className="projects">

                        <div className="project" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }>

                            <div className="category">РАЗРАБОТКА САЙТОВ</div>
                            <div className="title"><b>Разработка портала</b><br/>в сфере кансалтинга</div>

                        </div>

                        <div className="project" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }>

                            <div className="category">РАЗРАБОТКА САЙТОВ</div>
                            <div className="title"><b>Разработка портала</b><br/>в сфере кансалтинга</div>

                        </div>

                        <div className="project" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }>

                            <div className="category">РАЗРАБОТКА САЙТОВ</div>
                            <div className="title"><b>Разработка портала</b><br/>в сфере кансалтинга</div>

                        </div>


                        <div className="project" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }>

                            <div className="category">РАЗРАБОТКА САЙТОВ</div>
                            <div className="title"><b>Разработка портала</b><br/>в сфере кансалтинга</div>

                        </div>



                        <div className="more_projects">Больше проектов</div>


                    </div>


                </div>

                {/* We're trusted by */}
                <div className="we_are_trusted_by">

                    <div className="title">
                        <span className="back_text">НАМ ДОВЕРЯЮТ</span>
                        <span className="front_text">НАМ ДОВЕРЯЮТ</span>
                    </div>


                    <div className="companies">

                        <div className="company" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="company" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="company" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="company" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>


                    </div>


                </div>

                {/* We're featured by */}
                <div className="we_are_featured_by">

                    <div className="title">
                        <span className="back_text">НАМ ДОВЕРЯЮТ</span>
                        <span className="front_text">НАМ ДОВЕРЯЮТ</span>
                    </div>


                    <div className="persons">

                        <div className="person" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>

                        <div className="person" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Our+Services/WebDesign.png)` } }></div>


                    </div>


                </div>

                {/* Subscribe */}
                <div className="subscription">

                    <div className="title">
                        Появились вопросы? <br/>
                        С удовольствием ответим на них!
                    </div>
                    <div className="form">
                        <form className="form" action="" method="POST">
                            <input type="text" placeholder="Ваш E-mail"/>
                            <button>Свяжитесь со мной</button>
                        </form>
                    </div>

                </div>

            </div>



        );
    }



}


export default connect(null)(Home);
