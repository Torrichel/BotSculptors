import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { Header } from '../components/Common/Header'
import { ConnectedRouter } from 'react-router-redux'

import App from '../components/App'

import createBrowserHistory from 'history/createBrowserHistory';
export const history = createBrowserHistory();



export class AppRouter extends React.Component{

    constructor(props){
        super(props);
    }



    render(){

        return (
            <Provider store={this.props.store}>

                <ConnectedRouter history={history}>
                    <div id="main">
                        <Header />

                        <Switch>
                            <Route exact path='/' render={() => <App />} />

                            <Redirect to='/' />
                        </Switch>

                    </div>
                </ConnectedRouter>

            </Provider>
        )

    }
}

const mapStateToProps = (state, ownProps) => {



    return Object.assign({}, ownProps);



};

export default connect(mapStateToProps)(AppRouter);