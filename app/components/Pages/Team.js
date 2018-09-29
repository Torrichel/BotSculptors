import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


// Importing team photos
import Kuksin from '../../static/images/team/Kuksin.jpg'
import Korolov from '../../static/images/team/Korolov.jpg'
import Bokeria from '../../static/images/team/Bokeria.jpg'
import Ivanova from '../../static/images/team/Ivanova.jpg'
import Pozoyan from '../../static/images/team/Pozoyan.jpg'
import Petrosyan from '../../static/images/team/Petrosyan.jpg'
import Kurkhulishvili from '../../static/images/team/Kurkhulishvili.jpg'


export class Team extends React.Component {

    constructor(props) {
        super(props);
    }




    render() {


        return (

            <div>

                <h1 className="titleSection">Our Team</h1>

                <div className="team">

                    <div className="member">
                        <div className="photo" style={{backgroundImage: "url(" + Kuksin + ")"}}></div>
                        <div className="name">Konstantin Kuksin</div>
                        <div className="title">CEO</div>
                        <Link className="linkedIn" to='https://www.linkedin.com/in/konstantin-kuksin-053782113'>linkedIn</Link>
                        <Link className="upwork" to='https://www.upwork.com/fl/Kuksin'>Upwork</Link>
                        <Link className="github" to='https://github.com/Torrichel'>Github</Link>
                        <Link className="portfolio" to='https://botsculptors.com/portfolio/konstantin-kuksin'>Portfolio</Link>
                    </div>


                    <div className="member">
                        <div className="photo" style={{backgroundImage: "url(" + Bokeria + ")"}}></div>
                        <div className="name">Nikoloz Bokeria</div>
                        <div className="title">Business Manager</div>
                        <div className="linkedIn">...</div>
                        <div className="upwork">...</div>
                        <div className="github">...</div>
                        <Link className="portfolio" to='https://botsculptors.com/portfolio/nikoloz-bokeria'>Portfolio</Link>
                    </div>

                    <div className="member">
                        <div className="photo" style={{backgroundImage: "url(" + Kurkhulishvili + ")"}}></div>
                        <div className="name">Mariam Kurkhulishvili</div>
                        <div className="title">Business Manager Assistant</div>
                        <div className="linkedIn">...</div>
                        <div className="upwork">...</div>
                        <div className="github">...</div>
                        <Link className="portfolio" to='https://botsculptors.com/portfolio/mariam-kurkhulishvili'>Portfolio</Link>
                    </div>



                    <div className="member">
                        <div className="photo" style={{backgroundImage: "url(" + Korolov + ")"}}></div>
                        <div className="name">Yuri Korolov</div>
                        <div className="title">CTO</div>
                        <div className="linkedIn">...</div>
                        <div className="upwork">...</div>
                        <div className="github">...</div>
                        <Link className="portfolio" to='https://botsculptors.com/portfolio/yuri-korolov'>Portfolio</Link>
                    </div>

                    <div className="member">
                        <div className="photo" style={{backgroundImage: "url(" + Pozoyan + ")"}}></div>
                        <div className="name">Surik Pozoyan</div>
                        <div className="title">Software Developer</div>
                        <Link className="linkedIn" to='https://www.linkedin.com/in/surik-pozoyan-947326166/'>LinkedIn</Link>
                        <Link className="upwork" to='https://www.upwork.com/fl/surikpozoyan2'>Upwork</Link>
                        <Link className="github" to='https://github.com/Surik266'>Github</Link>
                        <Link className="portfolio" to='https://botsculptors.com/portfolio/surik-pozoyan'>Portfolio</Link>
                    </div>

                    <div className="member">
                        <div className="photo" style={{backgroundImage: "url(" + Ivanova + ")"}}></div>
                        <div className="name">Irina Ivanova</div>
                        <div className="title">Software Developer</div>
                        <div className="linkedIn">...</div>
                        <div className="upwork">...</div>
                        <div className="github">...</div>
                        <Link className="portfolio" to='https://botsculptors.com/portfolio/irina-ivanova'>Portfolio</Link>
                    </div>

                    <div className="member">
                        <div className="photo" />
                        <div className="name">Roman Pekhov</div>
                        <div className="title">Software Developer</div>
                        <div className="linkedIn">...</div>
                        <div className="upwork">...</div>
                        <div className="github">...</div>
                        <Link className="portfolio" to='https://botsculptors.com/portfolio/roman-pekhov'>Portfolio</Link>
                    </div>

                    <div className="member">
                        <div className="photo" style={{backgroundImage: "url(" + Petrosyan + ")"}}></div>
                        <div className="name">Pailak Petrosyan</div>
                        <div className="title">Graphical Designer</div>
                        <div className="linkedIn">...</div>
                        <div className="upwork">...</div>
                        <div className="github">...</div>
                        <Link className="portfolio" to='https://botsculptors.com/portfolio/pailak-petrosyan'>Portfolio</Link>
                    </div>



                </div>

            </div>


        );
    }



}


export default connect(null)(Team);
