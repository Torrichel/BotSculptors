import React from 'react'
import { connect } from 'react-redux'
import { findBotUsers } from '../actions/actions'


export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: [],
            value: '',
            previousPageUrlParam: 1,
            nextPageUrlParam: 1
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.getPrevious = this.getPrevious.bind(this);
        this.getNext = this.getNext.bind(this);


        props.dispatch( findBotUsers( '', 1 ) );
    }


    componentWillReceiveProps(nextProps) {

        this.setState({
            result: !nextProps.result ? [] : nextProps.result,
            previousPageUrlParam: !nextProps.previousPageUrlParam ? 1 : nextProps.previousPageUrlParam,
            nextPageUrlParam: !nextProps.nextPageUrlParam ? 1 : nextProps.nextPageUrlParam
        });


    }

    handleChange(event) {

        this.setState({value: event.target.value.length > 0 ? event.target.value : '' }, () => {
            this.props.dispatch( findBotUsers( this.state.value, 1 ) );
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        //console.log(this.state.value);

    }

    getPrevious() {
        //console.log( this.state.previousPageUrlParam )
        this.props.dispatch( findBotUsers( this.state.value, this.state.previousPageUrlParam ) );
    }


    getNext() {
        //console.log( this.state.nextPageUrlParam )
        this.props.dispatch( findBotUsers( this.state.value, this.state.nextPageUrlParam ) );
    }



    render() {


        return (
            <div className="mainContainer">




                <form onSubmit={this.handleSubmit}>

                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Find user..."
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </div>


                </form>

                <div className="botUsersList">
                    {
                        this.state.result.map((user, i) => (

                            <div key={i} className="media">
                                <div className="media-left media-middle">
                                    <a href="#">
                                        <img
                                            className="media-object"
                                            src={user.avatarUrl}
                                            alt={user.name} />
                                    </a>
                                </div>
                                <div className="media-body">
                                <h4 className="media-heading">{user.name}</h4>

                                </div>
                            </div>



                        ))
                    }

                    {this.state.result.length > 0 ? null: "nothing found"}
                </div>





                <nav className='previousNext'>
                    <ul className="pager">
                        <li><a onClick={this.getPrevious} href="#">Previous</a></li>
                        <li><a onClick={this.getNext} href="#">Next</a></li>
                    </ul>
                </nav>




            </div>

        );
    }



}

const mapStateToProps = (state, ownProps) => {

    // Fetch search info from headers
    let previousPageUrlParam, nextPageUrlParam;
    if(state.botUsersReducer.payload){

        let previousPageUrl = 1,
            nextPageUrl = 1;

        if( state.botUsersReducer.payload.headers && state.botUsersReducer.payload.headers.link){

            let link = state.botUsersReducer.payload.headers.link;


            let previousPageUrl_matches_array = link.match(/=\d+\S+ rel="prev"/gi),
                nextPageUrl_matches_array = link.match(/=\d+\S+ rel="next"/gi);

            if(previousPageUrl_matches_array){
                previousPageUrlParam = previousPageUrl_matches_array[0].match(/\d/g).join('');
            }

            if(nextPageUrl_matches_array){
                nextPageUrlParam = nextPageUrl_matches_array[0].match(/\d/g).join('');
            }

        }



    }


    return Object.assign({}, ownProps, {
        result: state.botUsersReducer.payload ? state.botUsersReducer.payload.data : [],
        previousPageUrlParam: previousPageUrlParam,
        nextPageUrlParam: nextPageUrlParam
    });


};

export default connect(mapStateToProps)(App);
