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

                <div className="titleSection">
                    <h1>Home Page:</h1>
                </div>



            </div>



        );
    }



}


export default connect(null)(Home);
