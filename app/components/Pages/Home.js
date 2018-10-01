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

            </div>



        );
    }



}


export default connect(null)(Home);
