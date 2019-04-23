import React, { Component } from 'react';

import { Redirect, Switch, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';


import { ConnectedRouter } from 'react-router-redux';

import Home from "./pages/HomePage/Home";
import About from "./pages/About";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import PortfolioItem from "./pages/Portfolio/portfolioItem";
import Join from "./pages/Join/Join";



export class App extends Component{


    render(){

        let { store, history } = this.props;

        return (
            <Provider store={store}>

                <ConnectedRouter history={history}>

                    <Switch>
                        <Route exact path='/' render={() => <Home />} />
                        <Route exact path='/about' render={() => <About />} />
                        <Route exact path='/privacy-policy' render={() => <PrivacyPolicy />} />
                        <Route exact path='/projects/:projectID' render={(props) => <PortfolioItem  match={props.match}/>} />
                        <Route exact path='/join' render={() => <Join />} />

                        <Redirect to="/" />
                    </Switch>

                </ConnectedRouter>

            </Provider>
        )

    }
}

const mapStateToProps = (state, ownProps) => {



    return state;



};

export default connect(mapStateToProps)(App);