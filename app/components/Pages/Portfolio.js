import React from 'react'
import { connect } from 'react-redux'
import project_img from '../../static/images/pages/portfolio/portfolioImgExample.jpg'


export class Portfolio extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {


        return (

            <div className="portfolioSection">
                <div className="portfolioItem" >

                  <p className="itemTitle">Adekvatnoe imya proekta</p>
                  <img className="itemImg" src={project_img}></img>

                </div>
            </div>


        );
    }



}


export default connect(null)(Portfolio);
