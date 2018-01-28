import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { KeyCodes } from 'constants';
import sprite from 'assets/sprites/stand1.png';
import sprite2 from 'assets/sprites/stand1_reverse.png';

import { CSSTransition } from 'react-transition-group';

import Attack from 'components/attack.js';
import Defend from 'components/defend.js';

import { startGame, startProgress } from 'actions/gameActions.js';



class jeffpage extends React.Component {
   
    componentDidMount = () => {        
        this.props.start();
    }

    render() {
        //console.log(this.props.game.stance)
         return (
            <div>
                <div className ="row">
                    <div className={this.props.game.stanceType == 0 ? "col s12 fire": this.props.game.stanceType == 1 ? "col s12 water": "col s12 wind" }>
                        {this.props.game.stance==0 ? <Attack /> : <Defend />}
                        

                    </div>
                    
                </div>
                <div className="row">
                <div id="col s12 myProgress">
                        <div id="myBar"></div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        game: state.game,
    };
}

const mapDispatchToProps = (dispatch) => ({
    start: () => dispatch(startGame()),
    progress: () => dispatch(startProgress()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(jeffpage));
