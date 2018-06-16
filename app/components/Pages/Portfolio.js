import React from 'react'
import { connect } from 'react-redux'


export class Portfolio extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {


        return (

            <div className="titleSection">
                <h1>Our Portfolio</h1>
            </div>


        );
    }



}


export default connect(null)(Portfolio);