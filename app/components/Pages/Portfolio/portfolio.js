import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'


import project_img from '../../../static/images/pages/portfolio/portfolioImgExample.jpg'


export class Portfolio extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {


        return (

            <div className="portfolioSection">
                    <NavLink to="portfolio/portfolioItem/Adekvatnoe_imya_proekta">
                      <div className="portfolioItem" >
                      <p className="itemTitle">Adekvatnoe imya proekta</p>
                      <img className="itemImg" src={project_img}></img>
                      </div>
                    </NavLink>
            </div>


        );
    }



}


export default connect(null)(Portfolio);
