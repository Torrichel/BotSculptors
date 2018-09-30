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

                <div className="slider" style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-571535901675/Slide1.png)` } }>

                    <div className="info">
                        <div className="slogan">Современно<span>.</span> Четко<span>.</span> Эффективно<span>.</span></div>
                        <div className="title">Создаем Ваше Будущее</div>
                        <div className="call_to_action">Наши Услуги</div>
                        <div className="pagination"></div>
                    </div>

                </div>

            </div>



        );
    }



}


export default connect(null)(Home);
