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


import { startGame, startProgress, getBattleResult } from 'actions/gameActions.js';


import PatternLock from '../../node_modules/pattern-lock-js/dist/patternlock.min.js';


class jeffpage extends React.Component {
   
    componentDidMount = () => {        
        this.props.start();
        
        const props = this.props;
        var lock = new PatternLock("#patternHolder", {
            onPattern: function(pattern) {
              // Context is the pattern lock instance
                props.fight(pattern);    
            }
        });
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
                <div className="row">
                    <svg className="patternlock" id="patternHolder" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g className="lock-actives"></g>
                        <g className="lock-lines"></g>
                        <g className="lock-dots">
                            <circle cx="20" cy="20" r="2"/>
                            <circle cx="50" cy="20" r="2"/>
                            <circle cx="80" cy="20" r="2"/>
                    
                            <circle cx="20" cy="50" r="2"/>
                            <circle cx="50" cy="50" r="2"/>
                            <circle cx="80" cy="50" r="2"/>
                    
                            <circle cx="20" cy="80" r="2"/>
                            <circle cx="50" cy="80" r="2"/>
                            <circle cx="80" cy="80" r="2"/>
                        </g>
                    </svg>             
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        game: state.game,
        cast: state.cast
    };
}

const mapDispatchToProps = (dispatch) => ({
    start: () => dispatch(startGame()),
    progress: () => dispatch(startProgress()),
    fight: (codeCommand) => dispatch(getBattleResult(codeCommand))
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(jeffpage));
