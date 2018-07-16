import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Emoji } from 'emoji-mart'



export class About extends React.Component {

    constructor(props) {
        super(props);
    }




    render() {


        return (

            <div>



                <h1>About Us</h1>

                <p><b>BotSculptors</b> was born in spring 2018. We are the <Link to='/team'>team</Link> of professional Software Developers (SD), Designers and UX specialists with huge experience in bot development. Some of us worked in social networks with <b><i>Audience > 1 Million Active Users</i></b>, startups specialized on ChatBots development and Crypto Currency projects. For more details about our projects, please, visit <Link to='/portfolio'>portfolio</Link> section! <Emoji emoji={{ id: 'sunglasses', skin: 3 }} size={16} /></p>

                <p>Our team combined that various set of skills all together. We really believe that synergy of Crypto Currencies and automated systems can change the world and make it the better place to live.</p>

                <p>We are digital nomads and prefer to work remotely from different points of our amazing planet. Mobility allows us to cover a lot of USA and Eastern Europe time zones and makes communication with us much more comfortable. We’re the international team and speak fluently English, Russian, Chinese, German, French, Ukrainian and some other exotic local languages <Emoji emoji={{ id: 'smiley', skin: 3 }} size={16} /> </p>

                <p>We’re focusing mainly on providing our clients with custom bots or crypto currency solutions, but we are always happy to help you with other programming challenges! Just reach us by clicking on Live Chat icon below. We're available 24/7. To get more information about our business, please, visit the page <Link to='/how-it-works'>how it works?</Link></p>





            </div>




        );
    }



}


export default connect(null)(About);
