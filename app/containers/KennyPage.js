import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import { KeyCodes } from 'constants';
import sprite from 'assets/sprites/stand1.png';
import sprite2 from 'assets/sprites/stand1_reverse.png';
import { CSSTransition } from 'react-transition-group';
import PatternLock from '../../node_modules/pattern-lock-js/dist/patternlock.min.js';
import { keyPressed } from 'actions/indexLoC.js';
import '../css/grid.css';

import { getBattleResult } from 'actions/indexLoC.js'

class KennyPage extends React.Component {
    



    componentDidMount() {
        const props = this.props;
        var lock = new PatternLock("#patternHolder", {
            onPattern: function(pattern) {
              // Context is the pattern lock instance
                props.fight(pattern);    
                console.log(pattern);
            }
        });
    }
    // componentWillMount(){
        
    // }

    render() {
        console.log(this.props.cast);
         return (
            <div>
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
        );
    }
}


const mapStateToProps = (state) => {
    return { 
        cast: state.cast
    };
}


const mapDispatchToProps = (dispatch) => ({
    fight: (codeCommand) => dispatch(getBattleResult(codeCommand)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(KennyPage));
